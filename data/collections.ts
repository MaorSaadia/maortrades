import type { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "placeholder-smart-money-foundations",
    slug: "smart-money-foundations-placeholder",
    title: "Smart Money Foundations",
    subtitle: "Market structure, liquidity, and institutional concepts",
    description:
      "A structured introduction to market structure, liquidity, institutional concepts, and execution foundations.",
    bookSlugs: ["smart-money-simplified", "the-institutional-ict-codex"],
    featured: true,
    badge: "Placeholder",
    coverImage: "/books/smart-money-foundations-placeholder.jpg",
  },
  {
    id: "placeholder-advanced-ict-collection",
    slug: "advanced-ict-collection-placeholder",
    title: "Advanced ICT Collection",
    subtitle: "Advanced execution models and funded trading applications",
    description:
      "Advanced models, refined entry frameworks, session logic, and funded trading execution.",
    bookSlugs: ["the-ict-playbook", "the-institutional-operator-book-2"],
    featured: false,
    badge: "Placeholder",
    coverImage: "/books/advanced-ict-collection-placeholder.jpg",
  },
  {
    id: "placeholder-complete-maortrades-library",
    slug: "complete-maortrades-library-placeholder",
    title: "The Complete MaorTrades Library",
    subtitle: "From foundations through advanced performance",
    description:
      "The complete educational collection from beginner foundations through advanced execution and trading psychology.",
    bookSlugs: [
      "day-trading-for-absolute-beginners",
      "smart-money-simplified",
      "the-ict-playbook",
      "the-institutional-ict-codex",
      "the-modern-ict-traders-masterclass",
      "the-disciplined-edge",
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
    ],
    featured: true,
    badge: "Placeholder",
    coverImage: "/books/complete-maortrades-library-placeholder.jpg",
  },
];
