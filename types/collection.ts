import type { PurchaseStatus } from "@/types/book";

export type CollectionPurchase = {
  status: PurchaseStatus;
  ctaLabel?: string;
  statusText?: string;
  price?: number;
  originalPrice?: number;
  currency?: "USD" | "EUR" | "ILS";
  checkoutUrl?: string;
  checkoutId?: string;
};

export type CollectionRecommendedBook = {
  bookSlug: string;
  label?: string;
  role: string;
  rationale?: string;
};

export type CollectionGrouping = {
  title: string;
  description?: string;
  bookSlugs: string[];
};

export type CollectionSeoMetadata = {
  title: string;
  description: string;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  positioningTitle?: string;
  positioningDescription: string;
  bookSlugs: string[];
  featured?: boolean;
  badge?: string;
  recommendedOrder?: CollectionRecommendedBook[];
  idealFor?: string[];
  learningProgression?: string[];
  featuredTopics?: string[];
  grouping?: CollectionGrouping[];
  relatedCollectionSlugs?: string[];
  purchase?: CollectionPurchase;
  seo: CollectionSeoMetadata;
};
