export type BookLevel =
  | "Beginner"
  | "Beginner to Intermediate"
  | "Beginner to Advanced"
  | "Intermediate to Advanced"
  | "Advanced"
  | "All Levels"
  | "Complete Learning Path";

export type BookFormat = "pdf" | "ebook" | "print";

export type PurchaseStatus = "coming-soon" | "available" | "unavailable";

export type ReadingPathStage =
  | "Foundations"
  | "Smart Money"
  | "Advanced Execution"
  | "Professional Operator"
  | "Professional Discipline"
  | "Complete Learning Path";

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

export type BookSection = {
  number?: string;
  title: string;
  description?: string;
  chapters?: string[];
};

export type BookPurchase = {
  status: PurchaseStatus;
  formatLabel?: string;
  price?: number;
  originalPrice?: number;
  currency?: "USD" | "EUR" | "ILS";
  checkoutUrl?: string;
  checkoutId?: string;
  ctaLabel?: string;
  includedItems?: string[];
};

export type BookPreview = {
  label?: string;
  samplePdf?: string;
  previewImages?: string[];
  sampleChapterLabel?: string;
};

export type Book = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription?: string;
  coverImage?: string;
  coverImageWidth?: number;
  coverImageHeight?: number;
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
  idealFor?: string[];
  bookStructure?: BookSection[];
  relatedBookSlugs?: string[];
  readingPathStages?: ReadingPathStage[];
  purchase?: BookPurchase;
  preview?: BookPreview;
  tableOfContents?: TableOfContentsItem[];
  reviews?: BookReview[];
  author: string;
  publishedYear?: number;
  badge?: string;
  purchaseStatus: PurchaseStatus;
};
