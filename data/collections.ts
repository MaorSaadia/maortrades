import type { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "smart-money-foundations",
    slug: "smart-money-foundations",
    title: "Smart Money Foundations",
    subtitle: "Market structure, liquidity, and institutional concepts",
    description:
      "A focused reading set for organizing Smart Money Concepts, ICT terminology, liquidity, market structure, and price-delivery logic.",
    bookSlugs: ["smart-money-simplified", "the-institutional-ict-codex"],
    featured: true,
    badge: "Smart Money",
  },
  {
    id: "advanced-ict-execution",
    slug: "advanced-ict-execution",
    title: "Advanced ICT Collection",
    subtitle: "Advanced execution models and funded trading applications",
    description:
      "A tactical path for readers moving from concept knowledge into advanced model selection, session logic, execution standards, and risk-aware application.",
    bookSlugs: ["the-ict-playbook", "the-institutional-operator-book-2"],
    featured: false,
    badge: "Execution",
  },
  {
    id: "complete-maortrades-library",
    slug: "complete-maortrades-library",
    title: "The Complete MaorTrades Library",
    subtitle: "From foundations through advanced performance",
    description:
      "The connected catalogue path from beginner foundations through Smart Money study, advanced execution, risk architecture, and trading psychology.",
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
    badge: "Complete Library",
  },
];
