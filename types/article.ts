export type ArticleCategoryId =
  | "market-structure"
  | "liquidity-price-delivery"
  | "ict-models-execution"
  | "risk-management"
  | "trading-psychology"
  | "professional-development";

export type ArticleCategory = {
  id: ArticleCategoryId;
  slug: string;
  label: string;
  description: string;
  topics: string[];
};

export type ArticleCallout = {
  label: "CORE IDEA" | "COMMON MISTAKE" | "EXECUTION NOTE" | "RISK NOTE" | "REMEMBER" | "FRAMEWORK";
  text: string;
};

export type ArticleInlineLink = {
  label: string;
  href: string;
};

export type ArticleParagraph =
  | string
  | {
      text: string;
      links?: ArticleInlineLink[];
    };

export type ArticleSubSection = {
  heading: string;
  paragraphs?: ArticleParagraph[];
  bullets?: string[];
  numberedItems?: string[];
  callout?: ArticleCallout;
};

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs?: ArticleParagraph[];
  bullets?: string[];
  numberedItems?: string[];
  quote?: string;
  callout?: ArticleCallout;
  subSections?: ArticleSubSection[];
};

export type ArticleSeoMetadata = {
  title: string;
  description: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  introduction: ArticleParagraph[];
  category: ArticleCategoryId;
  tags: string[];
  author: "Maor Saadia";
  readingTime: string;
  featured?: boolean;
  sections: ArticleSection[];
  keyTakeaways?: string[];
  relatedArticleSlugs?: string[];
  relatedBookSlugs?: string[];
  relatedCollectionSlugs?: string[];
  relatedResourceSlugs?: string[];
  seo: ArticleSeoMetadata;
};
