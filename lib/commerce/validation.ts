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

export function parseCheckoutCustomData(customData: unknown) {
  if (!customData || typeof customData !== "object") {
    return null;
  }

  const record = customData as Record<string, unknown>;
  const target = parseCommerceTarget(record.product_type, record.product_slug);
  const source = parseCheckoutSource(record.source);

  if (!target || !source) {
    return null;
  }

  return {
    productType: target.type,
    productSlug: target.slug,
    source,
  };
}
