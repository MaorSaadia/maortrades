import "server-only";
import { getCommerceProduct } from "@/lib/commerce/catalog";
import { sendGoogleOrderEvent } from "@/lib/analytics/server/google-measurement-protocol";
import { sendPinterestPurchase } from "@/lib/analytics/server/pinterest-conversions";

export async function sendVerifiedOrderAnalytics({ eventName, orderId, attributes, context }: { eventName: "order_created" | "order_refunded"; orderId: string; attributes: Record<string, unknown>; context: { productType: "book" | "collection"; productSlug: string; analyticsConsent: boolean; marketingConsent: boolean; gaClientId?: string; pinterestClickId?: string } }) {
  const product = getCommerceProduct({ type: context.productType, slug: context.productSlug }); if (!product) return;
  const currency = typeof attributes.currency === "string" && /^[A-Z]{3}$/.test(attributes.currency) ? attributes.currency : undefined;
  const total = typeof attributes.total === "number" ? attributes.total / 100 : undefined; const tax = typeof attributes.tax === "number" ? attributes.tax / 100 : undefined;
  const itemId = `${product.type}:${product.slug}`;
  const calls: Promise<void>[] = [];
  if (context.analyticsConsent && context.gaClientId) calls.push(sendGoogleOrderEvent({ name: eventName === "order_created" ? "purchase" : "refund", clientId: context.gaClientId, transactionId: orderId, itemId, itemName: product.title, itemType: product.type, currency, value: total, tax: eventName === "order_created" ? tax : undefined }));
  if (eventName === "order_created" && context.marketingConsent && context.pinterestClickId) calls.push(sendPinterestPurchase({ eventId: orderId, clickId: context.pinterestClickId, currency, value: total, itemId, itemName: product.title }));
  await Promise.allSettled(calls);
}
