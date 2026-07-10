import { getBookBySlug } from "@/data/books";
import { getCollectionBySlug } from "@/data/collections";
import type {
  CheckoutSource,
  CommerceProduct,
  CommerceTarget,
  CommerceTargetType,
} from "@/lib/commerce/types";

export const commerceProducts = [
  {
    type: "book",
    slug: "day-trading-for-absolute-beginners",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_DAY_TRADING_BEGINNERS",
    expectedFiles: ["Day Trading for Absolute Beginners PDF"],
  },
  {
    type: "book",
    slug: "smart-money-simplified",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_SMART_MONEY_SIMPLIFIED",
    expectedFiles: ["Smart Money, Simplified PDF"],
  },
  {
    type: "book",
    slug: "the-ict-playbook",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_ICT_PLAYBOOK",
    expectedFiles: ["The ICT Playbook PDF"],
  },
  {
    type: "book",
    slug: "the-institutional-ict-codex",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_INSTITUTIONAL_ICT_CODEX",
    expectedFiles: ["The Institutional ICT Codex PDF"],
  },
  {
    type: "book",
    slug: "the-modern-ict-traders-masterclass",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_MODERN_ICT_MASTERCLASS",
    expectedFiles: ["The Modern ICT Trader's Masterclass PDF"],
  },
  {
    type: "book",
    slug: "the-disciplined-edge",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_DISCIPLINED_EDGE",
    expectedFiles: ["The Disciplined Edge PDF"],
  },
  {
    type: "book",
    slug: "the-institutional-operator-book-1",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_INSTITUTIONAL_OPERATOR_BOOK_1",
    expectedFiles: ["The Institutional Operator Book 1 PDF"],
  },
  {
    type: "book",
    slug: "the-institutional-operator-book-2",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_INSTITUTIONAL_OPERATOR_BOOK_2",
    expectedFiles: ["The Institutional Operator Book 2 PDF"],
  },
  {
    type: "collection",
    slug: "trading-foundations",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_TRADING_FOUNDATIONS_COLLECTION",
    expectedFiles: [
      "Day Trading for Absolute Beginners PDF",
      "Smart Money, Simplified PDF",
    ],
  },
  {
    type: "collection",
    slug: "smart-money-and-ict",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_SMART_MONEY_ICT_COLLECTION",
    expectedFiles: [
      "Smart Money, Simplified PDF",
      "The Institutional ICT Codex PDF",
      "The ICT Playbook PDF",
    ],
  },
  {
    type: "collection",
    slug: "the-institutional-operator",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_INSTITUTIONAL_OPERATOR_COLLECTION",
    expectedFiles: [
      "The Institutional Operator Book 1 PDF",
      "The Institutional Operator Book 2 PDF",
    ],
  },
  {
    type: "collection",
    slug: "complete-maortrades-library",
    variantEnvKey: "LEMONSQUEEZY_VARIANT_COMPLETE_MAORTRADES_LIBRARY",
    expectedFiles: ["All eight MaorTrades book PDFs"],
  },
] as const satisfies Omit<CommerceProduct, "title">[];

export function getCommerceProduct(target: CommerceTarget) {
  const mapping = commerceProducts.find(
    (product) => product.type === target.type && product.slug === target.slug,
  );

  if (!mapping) {
    return null;
  }

  const title =
    target.type === "book"
      ? getBookBySlug(target.slug)?.title
      : getCollectionBySlug(target.slug)?.title;

  if (!title) {
    return null;
  }

  return {
    ...mapping,
    title,
  };
}

export function isKnownCommerceTarget(type: CommerceTargetType, slug: string) {
  return Boolean(getCommerceProduct({ type, slug } as CommerceTarget));
}

export function isCheckoutSourceAllowedForTarget(
  target: CommerceTarget,
  source: CheckoutSource,
) {
  if (target.type === "book") {
    return [
      "book-hero",
      "book-final-cta",
      "related-book",
      "books-catalogue",
      "homepage",
      "start-here",
    ].includes(source);
  }

  return [
    "collection-hero",
    "collection-purchase-panel",
    "collections-page",
    "homepage",
    "start-here",
  ].includes(source);
}
