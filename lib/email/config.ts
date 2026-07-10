import "server-only";

import { getSiteUrl } from "@/lib/site-url";

export type EmailConfig = {
  resendApiKey: string;
  fromEmail: string;
  replyToEmail: string;
  newsletterSegmentId: string;
  signingSecret: string;
  siteUrl: string;
};

export type EmailConfigResult =
  | { ok: true; config: EmailConfig }
  | { ok: false; missing: string[] };

const requiredEnvKeys = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "RESEND_REPLY_TO_EMAIL",
  "RESEND_NEWSLETTER_SEGMENT_ID",
  "NEWSLETTER_SIGNING_SECRET",
] as const;

export function getEmailConfig(): EmailConfigResult {
  const missing = requiredEnvKeys.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return {
    ok: true,
    config: {
      resendApiKey: process.env.RESEND_API_KEY!.trim(),
      fromEmail: process.env.RESEND_FROM_EMAIL!.trim(),
      replyToEmail: process.env.RESEND_REPLY_TO_EMAIL!.trim(),
      newsletterSegmentId: process.env.RESEND_NEWSLETTER_SEGMENT_ID!.trim(),
      signingSecret: process.env.NEWSLETTER_SIGNING_SECRET!.trim(),
      siteUrl: getSiteUrl(),
    },
  };
}

export function getConfigurationErrorMessage(missing: string[]) {
  if (process.env.NODE_ENV === "development") {
    return `Email configuration is incomplete. Missing: ${missing.join(", ")}.`;
  }

  return "Email subscription is not configured right now.";
}
