import { ANALYTICS_DEBUG } from "@/lib/analytics/constants";
import type { AnalyticsEvent, CheckoutAnalyticsContext } from "@/lib/analytics/events";

const pendingGoogle: AnalyticsEvent[] = [];
const pendingPinterest: AnalyticsEvent[] = [];

export function trackEvent(event: AnalyticsEvent, consent: { analytics: boolean; marketing: boolean }) {
  if (ANALYTICS_DEBUG) console.info("[analytics]", event.name, sanitize(event));
  if (consent.analytics) { if (window.gtag) window.gtag("event", gaName(event.name), gaParameters(event)); else pendingGoogle.push(event); }
  if (consent.marketing && window.pintrk) {
    const pinterest = pinterestMapping(event);
    if (pinterest) window.pintrk("track", pinterest.name, pinterest.parameters);
  } else if (consent.marketing && pinterestMapping(event)) pendingPinterest.push(event);
}

export function flushAnalyticsQueues() {
  if (window.gtag) pendingGoogle.splice(0).forEach((event) => window.gtag!("event", gaName(event.name), gaParameters(event)));
  if (window.pintrk) pendingPinterest.splice(0).forEach((event) => { const mapped = pinterestMapping(event); if (mapped) window.pintrk!("track", mapped.name, mapped.parameters); });
}
export function clearAnalyticsQueues() { pendingGoogle.length = 0; pendingPinterest.length = 0; }

export async function captureCheckoutAnalyticsContext(consent: { analytics: boolean; marketing: boolean }): Promise<CheckoutAnalyticsContext> {
  const result: CheckoutAnalyticsContext = { analytics_consent: consent.analytics, marketing_consent: consent.marketing };
  if (consent.analytics && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    result.ga_client_id = await new Promise<string | undefined>((resolve) => {
      const timer = window.setTimeout(() => resolve(undefined), 500);
      window.gtag!("get", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, "client_id", (value) => { clearTimeout(timer); resolve(typeof value === "string" ? value : undefined); });
    });
  }
  if (consent.marketing) {
    const value = document.cookie.split("; ").find((entry) => entry.startsWith("_epik="))?.split("=").slice(1).join("=") ?? new URLSearchParams(location.search).get("epik");
    if (value && /^[A-Za-z0-9_%=-]{6,300}$/.test(value)) result.pinterest_click_id = value;
  }
  return result;
}

function gaName(name: AnalyticsEvent["name"]) { return ({ view_catalogue: "view_item_list", select_catalogue_item: "select_item", view_commerce_item: "view_item", checkout_started: "begin_checkout", newsletter_confirmed: "sign_up", resource_confirmed: "generate_lead" } as Partial<Record<AnalyticsEvent["name"], string>>)[name] ?? name; }
function gaParameters(event: AnalyticsEvent): Record<string, unknown> {
  const value = { ...event } as Record<string, unknown>; delete value.name;
  if ("items" in event) value.items = event.items.map((item) => ({ item_id: item.itemId, item_name: item.itemName, item_category: item.category, item_variant: item.itemType, quantity: item.quantity, ...(item.series ? { item_brand: item.series } : {}), ...(item.price !== undefined ? { price: item.price } : {}) }));
  if (ANALYTICS_DEBUG) value.debug_mode = true;
  return value;
}
function pinterestMapping(event: AnalyticsEvent): { name: string; parameters?: Record<string, unknown> } | null {
  if (event.name === "page_view") return { name: "PageVisit" };
  if (event.name === "view_catalogue") return { name: "ViewCategory", parameters: { content_category: event.item_list_id } };
  if (["view_commerce_item", "article_view", "resource_view"].includes(event.name)) return { name: "ViewContent" };
  if (event.name === "checkout_started") return { name: "InitiateCheckout", parameters: { event_id: event.event_id } };
  if (event.name === "newsletter_confirmed") return { name: "Subscribe" };
  if (event.name === "resource_confirmed") return { name: "Lead" };
  return null;
}
function sanitize(event: AnalyticsEvent) { const value = { ...event } as Record<string, unknown>; delete value.event_id; return value; }
