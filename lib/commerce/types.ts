export const commerceTargetTypes = ["book", "collection"] as const;

export type CommerceTargetType = (typeof commerceTargetTypes)[number];

export type CommerceTarget =
  | {
      type: "book";
      slug: string;
    }
  | {
      type: "collection";
      slug: string;
    };

export const checkoutSources = [
  "book-hero",
  "book-final-cta",
  "related-book",
  "books-catalogue",
  "collection-hero",
  "collection-purchase-panel",
  "collections-page",
  "homepage",
  "start-here",
] as const;

export type CheckoutSource = (typeof checkoutSources)[number];

export type CheckoutCreateRequest = {
  type?: unknown;
  slug?: unknown;
  source?: unknown;
  variantId?: unknown;
  price?: unknown;
  redirectUrl?: unknown;
};

export type CheckoutCreateResponse =
  | { status: "success"; url: string }
  | { status: "unavailable"; message: string }
  | { status: "invalid-product"; message: string }
  | { status: "configuration-error"; message: string }
  | { status: "provider-error"; message: string };

export type CheckoutCreateResult =
  | { status: "success"; url: string }
  | { status: "unavailable"; reason: string }
  | { status: "invalid-product"; reason: string }
  | { status: "configuration-error"; reason: string }
  | { status: "provider-error"; reason: string };

export type CommerceProductKind = "book" | "collection";

export type CommerceProduct = {
  type: CommerceProductKind;
  slug: string;
  title: string;
  variantEnvKey: string;
  expectedFiles: string[];
};

export type CommerceAvailability =
  | { status: "available"; variantId: string }
  | { status: "launch-pending" }
  | { status: "configuration-missing"; missing: string[] }
  | { status: "variant-missing"; variantEnvKey: string }
  | { status: "invalid-product" };
