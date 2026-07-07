export type Collection = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  bookSlugs: string[];
  featured?: boolean;
  badge?: string;
  price?: number;
  originalPrice?: number;
  coverImage?: string;
};
