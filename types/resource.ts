export type ResourceCategory =
  | "ict-models-execution"
  | "liquidity-price-delivery"
  | "trading-psychology"
  | "professional-development";

export type ResourceType =
  | "checklist"
  | "reference-sheet"
  | "worksheet"
  | "guide"
  | "behavior-checklist";

export type ResourceAccessStatus =
  | "coming-soon"
  | "email-gated"
  | "direct-download"
  | "unavailable";

export type ResourceSectionItem = {
  label?: string;
  text: string;
};

export type ResourceSection = {
  id: string;
  title: string;
  description?: string;
  items?: ResourceSectionItem[];
  questions?: string[];
};

export type ResourceUsageStep = {
  label: string;
  text: string;
};

export type FreeResource = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  resourceType: ResourceType;
  category: ResourceCategory;
  shortDescription: string;
  fullDescription: string;
  purpose: string;
  featured?: boolean;
  badge?: string;
  sections: ResourceSection[];
  idealFor?: string[];
  outcomes?: string[];
  usageSteps: ResourceUsageStep[];
  relatedBookSlugs?: string[];
  relatedCollectionSlugs?: string[];
  relatedArticleSlugs?: string[];
  access: {
    status: ResourceAccessStatus;
    filePath?: string;
    fileName?: string;
    formId?: string;
  };
  seo: {
    title: string;
    description: string;
  };
};
