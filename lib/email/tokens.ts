import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ConfirmationTokenPayload,
  NewsletterSource,
} from "@/lib/email/types";

export const confirmationTokenTtlSeconds = 60 * 60 * 24;

type VerifyTokenResult =
  | { ok: true; payload: ConfirmationTokenPayload }
  | { ok: false; reason: "expired" | "invalid" };

export function createConfirmationToken({
  email,
  source,
  resourceSlug,
  secret,
  now = Date.now(),
}: {
  email: string;
  source: NewsletterSource;
  resourceSlug?: string;
  secret: string;
  now?: number;
}) {
  const payload: ConfirmationTokenPayload = {
    version: 1,
    email,
    source,
    resourceSlug,
    exp: Math.floor(now / 1000) + confirmationTokenTtlSeconds,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  const signature = sign(encodedPayload, secret);

  return `${encodedPayload}.${signature}`;
}

export function verifyConfirmationToken(
  token: string,
  secret: string,
  now = Date.now(),
): VerifyTokenResult {
  const [encodedPayload, signature, extra] = token.split(".");

  if (!encodedPayload || !signature || extra) {
    return { ok: false, reason: "invalid" };
  }

  const expectedSignature = sign(encodedPayload, secret);

  if (!safeEqual(signature, expectedSignature)) {
    return { ok: false, reason: "invalid" };
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as ConfirmationTokenPayload;

    if (!isTokenPayload(payload)) {
      return { ok: false, reason: "invalid" };
    }

    if (payload.exp <= Math.floor(now / 1000)) {
      return { ok: false, reason: "expired" };
    }

    return { ok: true, payload };
  } catch {
    return { ok: false, reason: "invalid" };
  }
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  return (
    valueBuffer.length === expectedBuffer.length &&
    timingSafeEqual(valueBuffer, expectedBuffer)
  );
}

function isTokenPayload(
  payload: ConfirmationTokenPayload,
): payload is ConfirmationTokenPayload {
  return (
    payload?.version === 1 &&
    typeof payload.email === "string" &&
    typeof payload.source === "string" &&
    typeof payload.exp === "number" &&
    (payload.resourceSlug === undefined ||
      typeof payload.resourceSlug === "string")
  );
}
