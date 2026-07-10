import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { getWebhookConfig } from "@/lib/commerce/config";
import { getCommerceProduct, isCheckoutSourceAllowedForTarget } from "@/lib/commerce/catalog";
import { parseCheckoutCustomData } from "@/lib/commerce/validation";

export type LemonSqueezyWebhookResult =
  | { status: "ok" }
  | { status: "configuration-error"; missing: string[] }
  | { status: "invalid-signature" }
  | { status: "invalid-json" };

const supportedEvents = ["order_created", "order_refunded"] as const;

export async function handleLemonSqueezyWebhook({
  rawBody,
  signature,
}: {
  rawBody: string;
  signature: string | null;
}): Promise<LemonSqueezyWebhookResult> {
  const config = getWebhookConfig();

  if (!config.ok) {
    return { status: "configuration-error", missing: config.missing };
  }

  if (!signature || !isValidSignature(rawBody, signature, config.config.webhookSecret)) {
    return { status: "invalid-signature" };
  }

  let payload: unknown;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return { status: "invalid-json" };
  }

  processWebhookPayload(payload);

  return { status: "ok" };
}

function processWebhookPayload(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return;
  }

  const record = payload as Record<string, unknown>;
  const meta =
    record.meta && typeof record.meta === "object"
      ? (record.meta as Record<string, unknown>)
      : {};
  const eventName = typeof meta.event_name === "string" ? meta.event_name : "";

  if (!supportedEvents.includes(eventName as (typeof supportedEvents)[number])) {
    console.info("[commerce] webhook_ignored", { eventName });
    return;
  }

  const customData = parseCheckoutCustomData(meta.custom_data);
  const data =
    record.data && typeof record.data === "object"
      ? (record.data as Record<string, unknown>)
      : {};
  const attributes =
    data.attributes && typeof data.attributes === "object"
      ? (data.attributes as Record<string, unknown>)
      : {};

  if (customData) {
    const product = getCommerceProduct({
      type: customData.productType,
      slug: customData.productSlug,
    });

    if (
      !product ||
      !isCheckoutSourceAllowedForTarget(
        { type: customData.productType, slug: customData.productSlug },
        customData.source,
      )
    ) {
      console.info("[commerce] webhook_custom_data_invalid", { eventName });
      return;
    }
  }

  console.info("[commerce] webhook_received", {
    eventName,
    orderId: data.id,
    productId: attributes.product_id,
    variantId: attributes.variant_id,
    productType: customData?.productType,
    productSlug: customData?.productSlug,
    source: customData?.source,
  });
}

function isValidSignature(rawBody: string, signature: string, secret: string) {
  const expectedSignature = createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");
  const expected = Buffer.from(expectedSignature, "utf8");
  const actual = Buffer.from(signature, "utf8");

  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
