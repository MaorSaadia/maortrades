import "server-only";
import { absoluteUrl } from "@/lib/site-url";

type PinterestPurchase = { eventId: string; clickId: string; currency?: string; value?: number; itemId: string; itemName: string };
export async function sendPinterestPurchase(event: PinterestPurchase) {
  if (process.env.PINTEREST_CONVERSIONS_API_ENABLED !== "true") return;
  const account = process.env.PINTEREST_AD_ACCOUNT_ID?.trim(); const token = process.env.PINTEREST_CONVERSION_ACCESS_TOKEN?.trim();
  if (!account || !token) { if (process.env.NODE_ENV === "development") console.info("[analytics] pinterest_server_skipped", { reason: "missing-configuration" }); return; }
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 2500); const test = process.env.PINTEREST_CONVERSIONS_TEST_MODE === "true" ? "?test=true" : "";
  try {
    const customData: Record<string, unknown> = { order_id: event.eventId, num_items: 1, contents: [{ id: event.itemId, item_name: event.itemName, quantity: 1 }] }; if (event.currency) customData.currency = event.currency; if (event.value !== undefined) customData.value = event.value.toFixed(2);
    const response = await fetch(`https://api.pinterest.com/v5/ad_accounts/${encodeURIComponent(account)}/events${test}`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ data: [{ event_name: "checkout", action_source: "web", event_time: Math.floor(Date.now() / 1000), event_id: event.eventId, event_source_url: absoluteUrl("/purchase/success"), opt_out: false, partner_name: "direct", user_data: { click_id: event.clickId }, custom_data: customData }] }), signal: controller.signal });
    if (!response.ok) console.warn("[analytics] pinterest_server_failed", { status: response.status });
  } catch (error) { console.warn("[analytics] pinterest_server_failed", { reason: error instanceof Error && error.name === "AbortError" ? "timeout" : "network" }); } finally { clearTimeout(timer); }
}
