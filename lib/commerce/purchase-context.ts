import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { isKnownCommerceTarget } from "@/lib/commerce/catalog";
import { PURCHASE_CONTEXT_LIFETIME_SECONDS } from "@/lib/commerce/constants";
import type { CheckoutSource, CommerceTarget } from "@/lib/commerce/types";
import { parseCheckoutSource, parseCommerceTarget } from "@/lib/commerce/validation";

export type PurchaseContext = CommerceTarget & {
  version: 1;
  source: CheckoutSource;
  checkoutReference: string;
  issuedAt: number;
  expiresAt: number;
};

export type PurchaseContextVerification =
  | { status: "valid"; context: PurchaseContext }
  | { status: "missing" | "invalid" | "expired" };

// This token supplies editorial context only. It is never payment proof,
// an entitlement, an order identifier, or a route to purchased files.
export function signPurchaseContext(
  input: CommerceTarget & { source: CheckoutSource; checkoutReference: string },
) {
  const secret = getSigningSecret();
  if (!secret) return null;

  const issuedAt = Math.floor(Date.now() / 1000);
  const payload: PurchaseContext = {
    version: 1,
    ...input,
    issuedAt,
    expiresAt: issuedAt + PURCHASE_CONTEXT_LIFETIME_SECONDS,
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encoded}.${signature(encoded, secret)}`;
}

export function verifyPurchaseContext(
  token: string | string[] | undefined,
): PurchaseContextVerification {
  if (typeof token !== "string" || !token) return { status: "missing" };
  const [encoded, suppliedSignature, extra] = token.split(".");
  const secret = getSigningSecret();
  if (!encoded || !suppliedSignature || extra || !secret) return { status: "invalid" };

  const expected = Buffer.from(signature(encoded, secret));
  const supplied = Buffer.from(suppliedSignature);
  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) {
    return { status: "invalid" };
  }

  try {
    const value = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as Record<string, unknown>;
    const target = parseCommerceTarget(value.type, value.slug);
    const source = parseCheckoutSource(value.source);
    if (
      value.version !== 1 || !target || !source ||
      !isKnownCommerceTarget(target.type, target.slug) ||
      typeof value.checkoutReference !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f-]{27}$/i.test(value.checkoutReference) ||
      typeof value.issuedAt !== "number" || typeof value.expiresAt !== "number" ||
      value.expiresAt - value.issuedAt !== PURCHASE_CONTEXT_LIFETIME_SECONDS
    ) return { status: "invalid" };
    if (value.expiresAt <= Math.floor(Date.now() / 1000)) return { status: "expired" };
    return { status: "valid", context: { version: 1, ...target, source, checkoutReference: value.checkoutReference, issuedAt: value.issuedAt, expiresAt: value.expiresAt } };
  } catch {
    return { status: "invalid" };
  }
}

function getSigningSecret() {
  const value = process.env.PURCHASE_CONTEXT_SIGNING_SECRET?.trim();
  return value && value.length >= 32 ? value : null;
}

function signature(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}
