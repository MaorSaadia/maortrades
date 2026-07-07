import type { Book } from "@/types/book";

const defaultPurchase = {
  status: "coming-soon",
  formatLabel: "Digital PDF Edition",
  ctaLabel: "PDF Edition Coming Soon",
  includedItems: [
    "Digital PDF edition",
    "Read on your preferred compatible device",
    "Direct MaorTrades purchase experience coming soon",
  ],
} satisfies Book["purchase"];

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
    purchase: defaultPurchase,
    readingPathStages: ["Foundations"],
    learnings: [
      "Understand how markets, charts, and basic price movement fit together.",
      "Learn the role of order types before placing your first trade.",
      "Build a foundational view of risk before studying advanced models.",
      "Recognize why preparation and process matter from the beginning.",
      "Develop the vocabulary needed to continue through the MaorTrades library.",
    ],
    bookStructure: [
      {
        number: "Part I",
        title: "Market Foundations",
        description:
          "The essential mechanics of markets, charts, price movement, and trading terminology.",
      },
      {
        number: "Part II",
        title: "Execution Basics",
        description:
          "Order types, trade planning, and the difference between watching price and making decisions.",
      },
      {
        number: "Part III",
        title: "Risk and First Process",
        description:
          "Foundational risk habits and the beginning of a structured trading process.",
      },
    ],
    idealFor: [
      "New traders learning how markets and charts work.",
      "Readers who need a clear foundation before advanced strategy study.",
      "Traders who want practical understanding of order types and risk.",
      "Beginners building their first structured trading process.",
    ],
    relatedBookSlugs: [
      "smart-money-simplified",
      "the-modern-ict-traders-masterclass",
    ],
    preview: {
      label: "Foundation Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: ["Smart Money"],
    learnings: [
      "Understand how liquidity shapes market behavior.",
      "Read market structure in context instead of isolation.",
      "Identify displacement, imbalance, and institutional price delivery.",
      "Understand Fair Value Gaps and related ICT concepts as part of a framework.",
      "Connect individual Smart Money concepts into a structured trading model.",
    ],
    bookStructure: [
      {
        number: "Part I",
        title: "Smart Money Foundations",
        description:
          "Liquidity, structure, and institutional trading logic introduced in a practical sequence.",
      },
      {
        number: "Part II",
        title: "ICT Building Blocks",
        description:
          "Displacement, imbalances, Fair Value Gaps, and the concepts that shape price delivery.",
      },
      {
        number: "Part III",
        title: "Framework Integration",
        description:
          "Connecting the concepts into a cleaner model for preparation and analysis.",
      },
    ],
    idealFor: [
      "Traders beginning their study of Smart Money and ICT concepts.",
      "Readers who want structure around liquidity, imbalance, and market structure.",
      "Beginners moving beyond basic chart reading.",
      "Intermediate traders organizing disconnected ICT terminology into a framework.",
    ],
    relatedBookSlugs: [
      "the-institutional-ict-codex",
      "the-ict-playbook",
      "the-institutional-operator-book-1",
    ],
    preview: {
      label: "Smart Money Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: ["Advanced Execution"],
    learnings: [
      "Move from concept recognition to structured model application.",
      "Study advanced ICT models through an execution-focused lens.",
      "Refine setup selection and trade preparation.",
      "Understand funded-trading relevance without treating it as a shortcut.",
      "Build cleaner execution frameworks around advanced market context.",
    ],
    bookStructure: [
      {
        number: "Part I",
        title: "Advanced Model Context",
        description:
          "How advanced ICT models fit into preparation, session logic, and trade selection.",
      },
      {
        number: "Part II",
        title: "Execution Frameworks",
        description:
          "Refined setups, model application, and execution standards for advanced traders.",
      },
      {
        number: "Part III",
        title: "Funded Trading Application",
        description:
          "Using model discipline and risk awareness in funded-account and evaluation contexts.",
      },
    ],
    idealFor: [
      "Traders already familiar with foundational ICT concepts.",
      "Traders studying advanced execution models.",
      "Funded-account and evaluation traders refining execution.",
      "Traders who want structured model application rather than disconnected concepts.",
    ],
    relatedBookSlugs: [
      "the-institutional-ict-codex",
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
    ],
    preview: {
      label: "Execution Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: ["Smart Money", "Advanced Execution"],
    learnings: [
      "Organize ICT terminology into a cleaner reference framework.",
      "Review institutional concepts around structure, liquidity, and delivery.",
      "Connect Smart Money terminology with execution logic.",
      "Use the book as a systematic companion while studying advanced material.",
      "Strengthen your ability to categorize concepts without losing context.",
    ],
    bookStructure: [
      {
        number: "Reference I",
        title: "Institutional Concepts",
        description:
          "A systematic view of ICT and Smart Money terminology used across the library.",
      },
      {
        number: "Reference II",
        title: "Market Structure and Liquidity",
        description:
          "High-level organization of structure, liquidity, and price-delivery concepts.",
      },
      {
        number: "Reference III",
        title: "Execution Logic",
        description:
          "How institutional concepts connect to trade planning and execution context.",
      },
    ],
    idealFor: [
      "Traders who want a structured ICT reference guide.",
      "Readers organizing institutional terminology and Smart Money Concepts.",
      "Intermediate traders reviewing liquidity, structure, and execution logic.",
      "Advanced traders who want a systematic companion to model study.",
    ],
    relatedBookSlugs: [
      "smart-money-simplified",
      "the-ict-playbook",
      "the-institutional-operator-book-1",
    ],
    preview: {
      label: "Reference Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: [
      "Foundations",
      "Smart Money",
      "Advanced Execution",
      "Complete Learning Path",
    ],
    learnings: [
      "Move through foundations, Smart Money Concepts, and advanced ICT models in one path.",
      "Understand how beginner material connects to advanced execution.",
      "Build a structured A-to-Z view of day trading development.",
      "Reduce fragmentation by studying the learning path as a connected curriculum.",
      "Clarify where each concept belongs in your development.",
    ],
    bookStructure: [
      {
        number: "Phase I",
        title: "Foundations",
        description:
          "Market mechanics, chart context, and the base layer required before advanced model work.",
      },
      {
        number: "Phase II",
        title: "Smart Money Concepts",
        description:
          "Liquidity, structure, displacement, and institutional price-delivery logic.",
      },
      {
        number: "Phase III",
        title: "Advanced ICT Models",
        description:
          "A progression into more refined ICT models and execution-oriented study.",
      },
    ],
    idealFor: [
      "Readers who want a complete curriculum rather than isolated books.",
      "Traders moving from beginner foundations into ICT model study.",
      "Students who prefer one combined learning path from A-Z.",
      "Traders trying to organize foundations, Smart Money, and advanced execution together.",
    ],
    relatedBookSlugs: [
      "day-trading-for-absolute-beginners",
      "smart-money-simplified",
      "the-ict-playbook",
    ],
    preview: {
      label: "Masterclass Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: ["Professional Discipline"],
    learnings: [
      "Understand the behavior gap between knowledge and execution.",
      "Recognize fear, impatience, overtrading, and revenge-trading patterns.",
      "Build stronger rule adherence through repeatable behavior.",
      "Develop self-trust by aligning preparation, execution, and review.",
      "Create a more stable professional trading identity.",
    ],
    bookStructure: [
      {
        number: "Part I",
        title: "The Behavior Gap",
        description:
          "Why knowing what to do and executing it consistently are different skills.",
      },
      {
        number: "Part II",
        title: "Discipline and Risk Habits",
        description:
          "Rule adherence, emotional control, and the trading behaviors that support risk management.",
      },
      {
        number: "Part III",
        title: "Professional Identity",
        description:
          "Self-trust, review, and the development of sustainable professional behavior.",
      },
    ],
    idealFor: [
      "Traders who know what to do but struggle to execute consistently.",
      "Traders dealing with fear, impatience, overtrading, or revenge trading.",
      "Traders building stronger rule adherence and self-trust.",
      "Traders developing a sustainable professional identity.",
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-2",
      "the-institutional-operator-book-1",
      "the-ict-playbook",
    ],
    preview: {
      label: "Performance Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: [
      "Foundations",
      "Smart Money",
      "Advanced Execution",
      "Professional Operator",
    ],
    learnings: [
      "Build from market foundations into Smart Money frameworks.",
      "Understand how advanced ICT models fit into a broader operating system.",
      "Connect structure, liquidity, and execution into a professional progression.",
      "Prepare for funded-style trading without skipping foundational development.",
      "Study the first half of the Institutional Operator journey.",
    ],
    bookStructure: [
      {
        number: "Part I",
        title: "The Retail Awakening",
        description:
          "The transition from unstructured retail learning toward a professional framework.",
      },
      {
        number: "Part II",
        title: "Smart Money Framework",
        description:
          "Liquidity, market structure, and institutional logic organized into a trading framework.",
      },
      {
        number: "Part III",
        title: "Advanced ICT Models",
        description:
          "A progression into advanced ICT model study and execution preparation.",
      },
    ],
    idealFor: [
      "Traders who want the flagship MaorTrades progression from foundations forward.",
      "Readers connecting Smart Money frameworks with advanced ICT models.",
      "Traders preparing for more professional execution standards.",
      "Students who want a structured path from zero toward funded-trading readiness.",
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-2",
      "smart-money-simplified",
      "the-ict-playbook",
    ],
    preview: {
      label: "Operator Book 1 Preview",
    },
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
    purchase: defaultPurchase,
    readingPathStages: ["Advanced Execution", "Professional Operator", "Professional Discipline"],
    learnings: [
      "Study advanced execution through a professional operating framework.",
      "Connect risk architecture with model selection and performance standards.",
      "Understand how psychology and discipline influence execution quality.",
      "Build a more professional trading identity around preparation, risk, and review.",
      "Continue the Institutional Operator journey into advanced performance work.",
    ],
    bookStructure: [
      {
        number: "Part I",
        title: "Advanced Execution Models",
        description:
          "Refined model work and execution standards for advanced trading development.",
      },
      {
        number: "Part II",
        title: "Risk & Performance Architecture",
        description:
          "Risk planning, performance standards, and the operating rules that protect execution quality.",
      },
      {
        number: "Part III",
        title: "The Disciplined Edge",
        description:
          "Professional psychology, discipline, behavior, and trading identity themes.",
      },
    ],
    idealFor: [
      "Advanced traders refining execution and risk architecture.",
      "Readers continuing from Institutional Operator Book 1.",
      "Traders working on performance psychology and professional behavior.",
      "Traders who want execution, risk, and discipline organized into one framework.",
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-1",
      "the-disciplined-edge",
      "the-ict-playbook",
    ],
    preview: {
      label: "Operator Book 2 Preview",
    },
  },
];

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getBooksBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is Book => Boolean(book));
}
