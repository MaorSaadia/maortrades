export type BookLevel = "beginner" | "intermediate" | "advanced" | "professional";

export type BookFormat = "pdf" | "ebook" | "print";

export type PurchaseStatus = "coming-soon" | "available" | "unavailable";

export type BookReview = {
  id: string;
  reviewerName: string;
  reviewerTitle?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  quote: string;
};

export type TableOfContentsItem = {
  title: string;
  description?: string;
};

export type Book = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription?: string;
  coverImage?: string;
  price?: number;
  originalPrice?: number;
  currency?: "USD" | "EUR" | "ILS";
  level: BookLevel;
  categories: string[];
  featured?: boolean;
  series?: string;
  seriesNumber?: number;
  pageCount?: number;
  formats: BookFormat[];
  learnings?: string[];
  tableOfContents?: TableOfContentsItem[];
  reviews?: BookReview[];
  author: string;
  publishedYear?: number;
  badge?: string;
  purchaseStatus: PurchaseStatus;
};
