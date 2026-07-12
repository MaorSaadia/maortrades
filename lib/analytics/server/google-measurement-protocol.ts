import "server-only";

type GoogleOrderEvent = { name: "purchase" | "refund"; clientId: string; transactionId: string; itemId: string; itemName: string; itemType: string; currency?: string; value?: number; tax?: number };
export async function sendGoogleOrderEvent(event: GoogleOrderEvent) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim(); const secret = process.env.GA_MEASUREMENT_PROTOCOL_API_SECRET?.trim();
  if (!measurementId || !secret) { if (process.env.NODE_ENV === "development") console.info("[analytics] ga_server_skipped", { reason: "missing-configuration" }); return; }
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 2500);
  try {
    const params: Record<string, unknown> = { transaction_id: event.transactionId, items: [{ item_id: event.itemId, item_name: event.itemName, item_category: event.itemType, quantity: 1 }] };
    if (event.currency) params.currency = event.currency; if (event.value !== undefined) params.value = event.value; if (event.tax !== undefined) params.tax = event.tax;
    const response = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(secret)}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: event.clientId, consent: { ad_user_data: "DENIED", ad_personalization: "DENIED" }, events: [{ name: event.name, params }] }), signal: controller.signal });
    if (!response.ok) console.warn("[analytics] ga_server_failed", { event: event.name, status: response.status });
  } catch (error) { console.warn("[analytics] ga_server_failed", { event: event.name, reason: error instanceof Error && error.name === "AbortError" ? "timeout" : "network" }); } finally { clearTimeout(timer); }
}
