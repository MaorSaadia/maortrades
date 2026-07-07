import type { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "placeholder-institutional-operator-1",
    slug: "institutional-operator-placeholder",
    title: "Institutional Operator Placeholder",
    subtitle: "A future MaorTrades trading book",
    shortDescription:
      "Placeholder record for testing catalogue cards, product routes, and series metadata.",
    fullDescription:
      "This placeholder exists only to exercise the Book type while the real catalogue is still being prepared.",
    coverImage: "/books/institutional-operator-placeholder.jpg",
    price: 49,
    originalPrice: 79,
    currency: "USD",
    level: "advanced",
    categories: ["Market Structure", "Execution", "Risk Management"],
    featured: true,
    series: "The Institutional Operator Series",
    seriesNumber: 1,
    pageCount: 180,
    formats: ["pdf"],
    learnings: [
      "Read structure with a professional framework.",
      "Prepare execution plans before price reaches decision areas.",
    ],
    tableOfContents: [
      { title: "Framework Orientation" },
      { title: "Execution and Risk" },
    ],
    reviews: [],
    author: "Maor Saadia",
    publishedYear: 2026,
    badge: "Placeholder",
    purchaseStatus: "coming-soon",
  },
  {
    id: "placeholder-risk-discipline",
    slug: "risk-discipline-placeholder",
    title: "Risk and Discipline Placeholder",
    subtitle: "A future professional performance guide",
    shortDescription:
      "Placeholder record for risk, psychology, and discipline-focused book metadata.",
    coverImage: "/books/risk-discipline-placeholder.jpg",
    price: 39,
    currency: "USD",
    level: "intermediate",
    categories: ["Risk Management", "Trading Psychology", "Discipline"],
    featured: false,
    pageCount: 140,
    formats: ["pdf"],
    learnings: [
      "Define risk before execution.",
      "Build repeatable review habits around process quality.",
    ],
    tableOfContents: [{ title: "Risk First" }, { title: "Professional Habits" }],
    reviews: [],
    author: "Maor Saadia",
    badge: "Placeholder",
    purchaseStatus: "coming-soon",
  },
];
