import { NextResponse } from "next/server";
import { sendConfirmationRequest } from "@/lib/email/service";
import type {
  NewsletterSubscribeRequest,
  SubscribeApiResponse,
} from "@/lib/email/types";
import {
  normalizeEmail,
  parseNewsletterSource,
  parseResourceSlug,
  validateKnownResourceSlug,
} from "@/lib/email/validation";
import { getResourceBySlug } from "@/data/resources";
import { isResourceEmailDeliverable } from "@/lib/resources/access";

export const runtime = "nodejs";

const maxBodyBytes = 4096;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > maxBodyBytes) {
    return json(
      {
        status: "invalid-input",
        message: "Please submit a valid email address.",
      },
      400,
    );
  }

  let body: NewsletterSubscribeRequest;

  try {
    body = (await request.json()) as NewsletterSubscribeRequest;
  } catch {
    return json(
      {
        status: "invalid-input",
        message: "Please submit a valid email address.",
      },
      400,
    );
  }

  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return json({ status: "confirmation-required" }, 200);
  }

  const email = normalizeEmail(body.email);
  const source = parseNewsletterSource(body.source);
  const resourceSlug = parseResourceSlug(body.resourceSlug);

  if (!email) {
    return json(
      {
        status: "invalid-input",
        message: "Enter a valid email address.",
      },
      400,
    );
  }

  if (!source || resourceSlug === null) {
    return json(
      {
        status: "invalid-input",
        message: "This subscription request is not valid.",
      },
      400,
    );
  }

  if (resourceSlug) {
    const resource = getResourceBySlug(resourceSlug);

    if (
      source !== "resource" ||
      !validateKnownResourceSlug(resourceSlug) ||
      !resource ||
      !isResourceEmailDeliverable(resource)
    ) {
      return json(
        {
          status: "invalid-input",
          message: "This resource is not available for email delivery.",
        },
        400,
      );
    }
  }

  const result = await sendConfirmationRequest({
    email,
    source,
    resourceSlug,
  });

  if (result.status === "configuration-error") {
    return json(
      {
        status: "configuration-error",
        message: result.message,
      },
      503,
    );
  }

  if (result.status === "provider-error") {
    return json(
      {
        status: "provider-error",
        message: "We could not start the subscription process right now.",
      },
      502,
    );
  }

  return json({ status: "confirmation-required" }, 200);
}

function json(body: SubscribeApiResponse, status: number) {
  return NextResponse.json(body, { status });
}
