import type { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "day-trading-for-absolute-beginners",
    slug: "day-trading-for-absolute-beginners",
    title: "Day Trading for Absolute Beginners",
    subtitle: "From Zero to Your First Trade",
    shortDescription:
      "The entry point into the MaorTrades library: markets, charts, order types, risk, execution, and the foundations required before advanced models.",
    fullDescription:
      "A practical introduction to markets, charts, order types, risk, execution, and the foundations required before studying advanced trading models.",
    coverImage: "/books/day-trading-for-absolute-beginners.jpg",
    coverImageWidth: 1600,
    coverImageHeight: 2560,
    level: "Beginner",
    categories: ["Trading Foundations"],
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "smart-money-simplified",
    slug: "smart-money-simplified",
    title: "Smart Money, Simplified",
    subtitle: "Your Complete ICT Blueprint from Beginner to Consistent Trader",
    shortDescription:
      "A structured introduction to ICT concepts, Smart Money Concepts, liquidity, market structure, displacement, imbalances, and institutional trading logic.",
    fullDescription:
      "A structured introduction to ICT concepts, Smart Money Concepts, liquidity, market structure, displacement, imbalances, and institutional trading logic.",
    coverImage: "/books/smart-money-simplified.jpg",
    coverImageWidth: 1600,
    coverImageHeight: 2560,
    level: "Beginner to Intermediate",
    categories: ["Smart Money & ICT"],
    featured: true,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "the-ict-playbook",
    slug: "the-ict-playbook",
    title: "The ICT Playbook",
    subtitle: "Mastering the Advanced ICT Models for Funded Trading",
    shortDescription:
      "An advanced trading book focused on ICT models, execution frameworks, refined setups, and practical application for funded trading.",
    fullDescription:
      "An advanced trading book focused on ICT models, execution frameworks, refined setups, and practical application for funded trading.",
    coverImage: "/books/the-ict-playbook.jpg",
    coverImageWidth: 960,
    coverImageHeight: 1500,
    level: "Advanced",
    categories: ["Advanced Execution"],
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "the-institutional-ict-codex",
    slug: "the-institutional-ict-codex",
    title: "The Institutional ICT Codex",
    shortDescription:
      "A structured reference guide to institutional trading concepts, ICT terminology, Smart Money Concepts, market structure, liquidity, and execution logic.",
    fullDescription:
      "A structured reference guide to institutional trading concepts, ICT terminology, Smart Money Concepts, market structure, liquidity, and execution logic.",
    coverImage: "/books/institutional-ict-codex.jpg",
    coverImageWidth: 625,
    coverImageHeight: 1000,
    level: "Intermediate to Advanced",
    categories: ["Smart Money & ICT"],
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "the-modern-ict-traders-masterclass",
    slug: "the-modern-ict-traders-masterclass",
    title: "The Modern ICT Trader's Masterclass",
    subtitle: "The 3-in-1 Path from A-Z to Day Trading Mastery",
    shortDescription:
      "A comprehensive combined learning path designed to move the reader through foundations, Smart Money Concepts, and advanced ICT trading models.",
    fullDescription:
      "A comprehensive combined learning path designed to move the reader through foundations, Smart Money Concepts, and advanced ICT trading models.",
    coverImage: "/books/modern-ict-traders-masterclass.png",
    coverImageWidth: 512,
    coverImageHeight: 800,
    level: "Complete Learning Path",
    categories: ["Complete Mastery"],
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "the-disciplined-edge",
    slug: "the-disciplined-edge",
    title: "The Disciplined Edge",
    subtitle: "Mastering the Mental Game of Institutional Trading",
    shortDescription:
      "A trading psychology and performance book focused on discipline, emotional control, self-trust, professional behavior, risk habits, and sustainable trading identity.",
    fullDescription:
      "A trading psychology and performance book focused on discipline, emotional control, self-trust, professional behavior, risk habits, and sustainable trading identity.",
    coverImage: "/books/the-disciplined-edge.jpg",
    coverImageWidth: 960,
    coverImageHeight: 1500,
    level: "All Levels",
    categories: ["Psychology & Discipline"],
    featured: true,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "the-institutional-operator-book-1",
    slug: "the-institutional-operator-book-1",
    title: "The Institutional Operator",
    subtitle: "From Zero to Funded",
    shortDescription:
      "The first volume of the flagship MaorTrades trading masterclass, from market foundations through Smart Money frameworks and advanced ICT models.",
    fullDescription:
      "The first volume of the flagship MaorTrades trading masterclass. It takes readers from market foundations through Smart Money frameworks and advanced ICT models.",
    coverImage: "/books/institutional-operator-book-1.jpg",
    coverImageWidth: 1024,
    coverImageHeight: 1536,
    level: "Beginner to Advanced",
    categories: ["Flagship Series"],
    featured: true,
    series: "The Institutional Operator",
    seriesNumber: 1,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
  {
    id: "the-institutional-operator-book-2",
    slug: "the-institutional-operator-book-2",
    title: "The Institutional Operator",
    subtitle: "Advanced Execution, Risk & The Disciplined Edge",
    shortDescription:
      "The second flagship volume, focused on advanced execution, risk architecture, performance psychology, professional behavior, and trading identity.",
    fullDescription:
      "The second volume of the flagship MaorTrades series, focused on advanced execution, risk architecture, performance psychology, professional behavior, and trading identity.",
    coverImage: "/books/institutional-operator-book-2.jpg",
    coverImageWidth: 1023,
    coverImageHeight: 1537,
    level: "Advanced",
    categories: ["Flagship Series"],
    featured: true,
    series: "The Institutional Operator",
    seriesNumber: 2,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
  },
];

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}
