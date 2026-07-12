import {
  checkoutSources,
  commerceTargetTypes,
  type CheckoutSource,
  type CommerceTarget,
  type CommerceTargetType,
} from "@/lib/commerce/types";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const maxSlugLength = 120;

export function parseCommerceTarget(type: unknown, slug: unknown) {
  if (
    typeof type !== "string" ||
    !commerceTargetTypes.includes(type as CommerceTargetType) ||
    typeof slug !== "string" ||
    slug.length > maxSlugLength ||
    !slugPattern.test(slug)
  ) {
    return null;
  }

  return { type, slug } as CommerceTarget;
}

export function parseCheckoutSource(source: unknown): CheckoutSource | null {
  if (
    typeof source !== "string" ||
    !checkoutSources.includes(source as CheckoutSource)
  ) {
    return null;
  }

  return source as CheckoutSource;
}

export function parseCheckoutAnalyticsContext(value: unknown) {
  if (!value || typeof value !== "object") return { analytics_consent: false, marketing_consent: false };
  const record = value as Record<string, unknown>;
  const analyticsConsent = record.analytics_consent === true;
  const marketingConsent = record.marketing_consent === true;
  const gaClientId = analyticsConsent && typeof record.ga_client_id === "string" && /^\d{6,20}\.\d{6,20}$/.test(record.ga_client_id) ? record.ga_client_id : undefined;
  const pinterestClickId = marketingConsent && typeof record.pinterest_click_id === "string" && /^[A-Za-z0-9_%=-]{6,300}$/.test(record.pinterest_click_id) ? record.pinterest_click_id : undefined;
  return { analytics_consent: analyticsConsent, marketing_consent: marketingConsent, ga_client_id: gaClientId, pinterest_click_id: pinterestClickId };
}

export function parseCheckoutCustomData(customData: unknown) {
  if (!customData || typeof customData !== "object") {
    return null;
  }

  const record = customData as Record<string, unknown>;
  const target = parseCommerceTarget(record.product_type, record.product_slug);
  const source = parseCheckoutSource(record.source);
  const checkoutReference =
    typeof record.checkout_reference === "string" &&
    /^[0-9a-f]{8}-[0-9a-f-]{27}$/i.test(record.checkout_reference)
      ? record.checkout_reference
      : null;
  const analyticsConsent = record.analytics_consent === "true";
  const marketingConsent = record.marketing_consent === "true";
  const gaClientId = analyticsConsent && typeof record.ga_client_id === "string" && /^\d{6,20}\.\d{6,20}$/.test(record.ga_client_id) ? record.ga_client_id : undefined;
  const pinterestClickId = marketingConsent && typeof record.pinterest_click_id === "string" && /^[A-Za-z0-9_%=-]{6,300}$/.test(record.pinterest_click_id) ? record.pinterest_click_id : undefined;

  if (!target || !source || !checkoutReference) {
    return null;
  }

  return {
    productType: target.type,
    productSlug: target.slug,
    source,
    checkoutReference,
    analyticsConsent,
    marketingConsent,
    gaClientId,
    pinterestClickId,
  };
}
