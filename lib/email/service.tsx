import "server-only";

import { getResourceBySlug } from "@/data/resources";
import { ConfirmSubscriptionEmail } from "@/emails/ConfirmSubscriptionEmail";
import { WelcomeToMaorTradesEmail } from "@/emails/WelcomeToMaorTradesEmail";
import { getConfigurationErrorMessage } from "@/lib/email/config";
import { getResendClient } from "@/lib/email/resend";
import {
  createConfirmationToken,
  verifyConfirmationToken,
} from "@/lib/email/tokens";
import type {
  ConfirmResultStatus,
  ConfirmationTokenPayload,
  NewsletterSource,
} from "@/lib/email/types";
import {
  normalizeEmail,
  parseNewsletterSource,
  validateKnownResourceSlug,
} from "@/lib/email/validation";
import { isResourceEmailDeliverable } from "@/lib/resources/access";

export async function sendConfirmationRequest({
  email,
  source,
  resourceSlug,
}: {
  email: string;
  source: NewsletterSource;
  resourceSlug?: string;
}) {
  const client = getResendClient();

  if (!client.ok) {
    return {
      status: "configuration-error" as const,
      message: getConfigurationErrorMessage(client.missing),
    };
  }

  const token = createConfirmationToken({
    email,
    source,
    resourceSlug,
    secret: client.config.signingSecret,
  });
  const confirmUrl = `${client.config.siteUrl}/api/newsletter/confirm?token=${encodeURIComponent(token)}`;
  const resource = resourceSlug ? getResourceBySlug(resourceSlug) : undefined;
  const subject = resource
    ? `Confirm your email to receive ${resource.title}`
    : "Confirm your MaorTrades subscription";
  const text = resource
    ? `Confirm your email address to complete your subscription and receive access to ${resource.title}: ${confirmUrl}`
    : `Confirm your email address to join the MaorTrades Letter: ${confirmUrl}`;

  const { error } = await client.resend.emails.send({
    from: client.config.fromEmail,
    to: email,
    replyTo: client.config.replyToEmail,
    subject,
    react: (
      <ConfirmSubscriptionEmail
        confirmUrl={confirmUrl}
        resourceTitle={resource?.title}
      />
    ),
    text: `${text}\n\nIf you did not request this, you can ignore this email.\n\nMaorTrades`,
    tags: [
      { name: "kind", value: "confirmation" },
      { name: "source", value: source },
    ],
  });

  if (error) {
    logProviderError("confirmation_email", error);
    return {
      status: "provider-error" as const,
      message: "We could not send the confirmation email right now.",
    };
  }

  return { status: "confirmation-required" as const };
}

export async function confirmSubscription(token: string): Promise<{
  status: ConfirmResultStatus;
  resourceSlug?: string;
}> {
  const client = getResendClient();

  if (!client.ok) {
    return { status: "configuration-error" };
  }

  const verified = verifyConfirmationToken(token, client.config.signingSecret);

  if (!verified.ok) {
    return { status: verified.reason };
  }

  const payloadValidation = validateConfirmationPayload(verified.payload);

  if (!payloadValidation.ok) {
    return { status: "invalid" };
  }

  if (verified.payload.resourceSlug) {
    const resource = getResourceBySlug(verified.payload.resourceSlug);

    if (!resource || !isResourceEmailDeliverable(resource)) {
      return {
        status: "unavailable",
        resourceSlug: verified.payload.resourceSlug,
      };
    }
  }

  const contactResult = await resolveContact(verified.payload);

  if (contactResult.status === "provider-error") {
    return { status: "provider-error" };
  }

  const alreadyInSegment = await isContactInNewsletterSegment(
    verified.payload.email,
  );

  if (alreadyInSegment === "provider-error") {
    return { status: "provider-error" };
  }

  if (alreadyInSegment) {
    return {
      status: "already-confirmed",
      resourceSlug: verified.payload.resourceSlug,
    };
  }

  const addResult = await addContactToNewsletterSegment(verified.payload.email);

  if (addResult === "provider-error") {
    return { status: "provider-error" };
  }

  if (verified.payload.resourceSlug) {
    return {
      status: "unavailable",
      resourceSlug: verified.payload.resourceSlug,
    };
  }

  const welcomeResult = await sendWelcomeEmail(verified.payload.email);

  if (welcomeResult === "provider-error") {
    return { status: "provider-error" };
  }

  return { status: "confirmed" };
}

async function resolveContact(payload: ConfirmationTokenPayload) {
  const client = getResendClient();

  if (!client.ok) {
    return { status: "configuration-error" as const };
  }

  const existing = await client.resend.contacts.get({ email: payload.email });

  if (existing.data) {
    if (existing.data.unsubscribed) {
      const updated = await client.resend.contacts.update({
        email: payload.email,
        unsubscribed: false,
        properties: contactProperties(payload),
      });

      if (updated.error) {
        logProviderError("contact_update", updated.error);
        return { status: "provider-error" as const };
      }
    }

    return { status: "resolved" as const };
  }

  if (existing.error && existing.error.statusCode !== 404) {
    logProviderError("contact_get", existing.error);
    return { status: "provider-error" as const };
  }

  const created = await client.resend.contacts.create({
    email: payload.email,
    unsubscribed: false,
    properties: contactProperties(payload),
  });

  if (created.error) {
    if (isDuplicateError(created.error)) {
      return { status: "resolved" as const };
    }

    logProviderError("contact_create", created.error);
    return { status: "provider-error" as const };
  }

  return { status: "created" as const };
}

async function isContactInNewsletterSegment(email: string) {
  const client = getResendClient();

  if (!client.ok) {
    return "provider-error";
  }

  const segments = await client.resend.contacts.segments.list({ email });

  if (segments.error) {
    if (segments.error.statusCode === 404) {
      return false;
    }

    logProviderError("contact_segments_list", segments.error);
    return "provider-error";
  }

  return segments.data.data.some(
    (segment) => segment.id === client.config.newsletterSegmentId,
  );
}

async function addContactToNewsletterSegment(email: string) {
  const client = getResendClient();

  if (!client.ok) {
    return "provider-error";
  }

  const added = await client.resend.contacts.segments.add({
    email,
    segmentId: client.config.newsletterSegmentId,
  });

  if (added.error && !isDuplicateError(added.error)) {
    logProviderError("contact_segment_add", added.error);
    return "provider-error";
  }

  return "ok";
}

async function sendWelcomeEmail(email: string) {
  const client = getResendClient();

  if (!client.ok) {
    return "provider-error";
  }

  const { siteUrl } = client.config;
  const sent = await client.resend.emails.send({
    from: client.config.fromEmail,
    to: email,
    replyTo: client.config.replyToEmail,
    subject: "Welcome to MaorTrades",
    react: (
      <WelcomeToMaorTradesEmail
        startHereUrl={`${siteUrl}/start-here`}
        booksUrl={`${siteUrl}/books`}
        collectionsUrl={`${siteUrl}/collections`}
        articlesUrl={`${siteUrl}/articles`}
        resourcesUrl={`${siteUrl}/resources`}
      />
    ),
    text: [
      "Welcome to MaorTrades.",
      "",
      "Thanks for joining the MaorTrades Letter.",
      "",
      "Trading information is everywhere. Structure is rare.",
      "",
      "Start Here: " + `${siteUrl}/start-here`,
      "Explore Books: " + `${siteUrl}/books`,
      "Collections: " + `${siteUrl}/collections`,
      "Journal: " + `${siteUrl}/articles`,
      "Free Resources: " + `${siteUrl}/resources`,
    ].join("\n"),
    tags: [{ name: "kind", value: "welcome" }],
  });

  if (sent.error) {
    logProviderError("welcome_email", sent.error);
    return "provider-error";
  }

  return "ok";
}

function validateConfirmationPayload(payload: ConfirmationTokenPayload) {
  const email = normalizeEmail(payload.email);
  const source = parseNewsletterSource(payload.source);

  if (!email || !source || email !== payload.email) {
    return { ok: false as const };
  }

  if (
    payload.resourceSlug &&
    (!validateKnownResourceSlug(payload.resourceSlug) ||
      payload.source !== "resource")
  ) {
    return { ok: false as const };
  }

  return { ok: true as const };
}

function contactProperties(payload: ConfirmationTokenPayload) {
  return {
    signup_source: payload.source,
    requested_resource: payload.resourceSlug ?? null,
  };
}

function isDuplicateError(error: { message: string; statusCode: number | null }) {
  const message = error.message.toLowerCase();

  return (
    error.statusCode === 409 ||
    message.includes("already") ||
    message.includes("exists")
  );
}

function logProviderError(
  context: string,
  error: { message: string; statusCode: number | null; name: string },
) {
  console.error("[newsletter]", context, {
    name: error.name,
    statusCode: error.statusCode,
    message: error.message,
  });
}
