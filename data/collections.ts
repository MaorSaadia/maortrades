import { getBooksBySlugs } from "@/data/books";
import type { Book } from "@/types/book";
import type { Collection, CollectionRecommendedBook } from "@/types/collection";

const defaultCollectionPurchase = {
  status: "coming-soon",
  ctaLabel: "Collection Purchase Coming Soon",
  statusText:
    "Direct collection purchasing will be available when the MaorTrades store launches.",
} satisfies Collection["purchase"];

export const collections: Collection[] = [
  {
    id: "trading-foundations",
    slug: "trading-foundations",
    title: "Trading Foundations Collection",
    eyebrow: "START YOUR JOURNEY",
    subtitle: "From market language to Smart Money context",
    shortDescription:
      "A structured starting path for traders who need to understand the market before moving into institutional concepts and advanced execution.",
    fullDescription:
      "The Trading Foundations Collection gives new and returning traders a serious starting point. It begins with market mechanics, charts, order types, risk, and the first structured trading process, then moves into liquidity, market structure, displacement, imbalance, Fair Value Gaps, Order Blocks, and organized ICT concepts. The collection is accessible without becoming simplistic: its purpose is to help readers build context before entering more technical Smart Money or advanced execution study.",
    positioningTitle: "Why This Collection",
    positioningDescription:
      "Day Trading for Absolute Beginners builds the market vocabulary and first process. Smart Money, Simplified then connects that foundation to liquidity, structure, and ICT concepts. Together, the books create a cleaner bridge from basic chart understanding into Smart Money study.",
    bookSlugs: ["day-trading-for-absolute-beginners", "smart-money-simplified"],
    featured: true,
    badge: "Foundations",
    recommendedOrder: [
      {
        bookSlug: "day-trading-for-absolute-beginners",
        label: "01",
        role: "Build the foundation",
        rationale:
          "Build the basic market vocabulary, chart understanding, order knowledge, risk foundation, and first structured trading process.",
      },
      {
        bookSlug: "smart-money-simplified",
        label: "02",
        role: "Move into Smart Money context",
        rationale:
          "Move from market foundations into liquidity, structure, displacement, imbalance, Fair Value Gaps, Order Blocks, and organized ICT concepts.",
      },
    ],
    idealFor: [
      "Complete beginners who want a professional starting point without skipping the basics.",
      "Traders with fragmented basic knowledge who need a clearer learning sequence.",
      "Readers who moved into ICT concepts too quickly and need stronger market foundations.",
      "Students seeking a clear progression into Smart Money Concepts.",
    ],
    learningProgression: [
      "Market Foundations",
      "Structure",
      "Liquidity",
      "Smart Money Framework",
    ],
    featuredTopics: [
      "Market language",
      "Chart reading",
      "Order types",
      "Risk foundations",
      "Market structure",
      "Liquidity",
      "ICT concepts",
    ],
    relatedCollectionSlugs: [
      "smart-money-and-ict",
      "complete-maortrades-library",
    ],
    purchase: defaultCollectionPurchase,
    seo: {
      title: "Trading Foundations Collection | MaorTrades",
      description:
        "A MaorTrades collection for beginner traders covering day trading foundations, charts, order types, risk, market structure, liquidity, and Smart Money Concepts.",
    },
  },
  {
    id: "smart-money-and-ict",
    slug: "smart-money-and-ict",
    title: "Smart Money & ICT Collection",
    eyebrow: "FROM FRAMEWORK TO EXECUTION",
    subtitle: "Concepts, reference, model selection, and execution",
    shortDescription:
      "A focused progression through Smart Money Concepts, ICT terminology, institutional price-delivery logic, and advanced execution models.",
    fullDescription:
      "The Smart Money & ICT Collection is built for traders who already understand basic market mechanics and want a more organized path through ICT study. Smart Money, Simplified establishes the conceptual framework. The Institutional ICT Codex deepens terminology and reference knowledge. The ICT Playbook then moves the reader toward model selection, execution sequencing, setup refinement, and practical application. The collection is technical and structured, but each book has a distinct role in the progression.",
    positioningTitle: "Why These Books Belong Together",
    positioningDescription:
      "This collection moves from framework to reference to execution. Smart Money, Simplified organizes the core concepts, The Institutional ICT Codex clarifies relationships and terminology, and The ICT Playbook translates that understanding into advanced setup work.",
    bookSlugs: [
      "smart-money-simplified",
      "the-institutional-ict-codex",
      "the-ict-playbook",
    ],
    featured: true,
    badge: "Smart Money & ICT",
    recommendedOrder: [
      {
        bookSlug: "smart-money-simplified",
        label: "01",
        role: "Build the conceptual framework",
        rationale:
          "Start with liquidity, market structure, displacement, imbalance, and the basic relationships behind Smart Money Concepts.",
      },
      {
        bookSlug: "the-institutional-ict-codex",
        label: "02",
        role: "Deepen the reference layer",
        rationale:
          "Use the Codex to organize terminology, concept relationships, and structured reference knowledge.",
      },
      {
        bookSlug: "the-ict-playbook",
        label: "03",
        role: "Apply advanced models",
        rationale:
          "Move into model selection, execution sequencing, setup refinement, invalidation, and targeting.",
      },
    ],
    idealFor: [
      "Traders familiar with basic market mechanics who want to study ICT more seriously.",
      "Readers learning Smart Money Concepts and needing structure around the terminology.",
      "Traders who know many concepts but lack conceptual organization.",
      "Students preparing to move into advanced execution models.",
      "Funded-account traders refining model application and execution standards.",
    ],
    learningProgression: ["Concepts", "Reference", "Model Selection", "Execution"],
    featuredTopics: [
      "Liquidity",
      "Market structure",
      "Price delivery",
      "ICT terminology",
      "Fair Value Gaps",
      "Order Blocks",
      "Advanced models",
      "Execution sequencing",
    ],
    relatedCollectionSlugs: [
      "trading-foundations",
      "the-institutional-operator",
      "complete-maortrades-library",
    ],
    purchase: defaultCollectionPurchase,
    seo: {
      title: "Smart Money & ICT Collection | MaorTrades",
      description:
        "A Smart Money and ICT trading collection covering liquidity, market structure, ICT terminology, institutional price delivery, advanced models, and execution.",
    },
  },
  {
    id: "the-institutional-operator",
    slug: "the-institutional-operator",
    title: "The Institutional Operator Collection",
    eyebrow: "THE FLAGSHIP SERIES",
    subtitle: "The complete two-volume Institutional Operator masterclass",
    shortDescription:
      "The complete two-volume Institutional Operator masterclass, connecting market foundations and Smart Money frameworks with advanced execution, risk architecture, performance psychology, and professional trading identity.",
    fullDescription:
      "The Institutional Operator Collection is the flagship MaorTrades series. Volume 1 moves through market foundations, the Smart Money framework, and advanced ICT models. Volume 2 continues into advanced execution, risk architecture, performance psychology, review, compliance, recovery, and professional trading identity. This collection is designed for readers who want a structured professional-development system rather than isolated concepts or disconnected model study.",
    positioningTitle: "The Flagship Progression",
    positioningDescription:
      "Volume 1 develops the technical foundation and framework. Volume 2 extends that work into execution quality, risk architecture, psychology, and identity. The two books belong together because professional trading development requires both technical sequencing and behavioral standards.",
    bookSlugs: [
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
    ],
    featured: true,
    badge: "Flagship Series",
    recommendedOrder: [
      {
        bookSlug: "the-institutional-operator-book-1",
        label: "VOLUME 01",
        role: "Foundations, framework, and advanced models",
        rationale:
          "The Retail Awakening to Smart Money Framework to Advanced ICT Models.",
      },
      {
        bookSlug: "the-institutional-operator-book-2",
        label: "VOLUME 02",
        role: "Advanced execution, risk, psychology, and identity",
        rationale:
          "Advanced Execution to Risk Architecture to Performance Psychology to Professional Identity.",
      },
    ],
    idealFor: [
      "Traders wanting the flagship MaorTrades curriculum.",
      "Readers seeking a structured progression rather than isolated concepts.",
      "Traders developing both technical and behavioral skill.",
      "Advanced traders working on execution, risk, process, and professional identity.",
    ],
    learningProgression: [
      "Foundations",
      "Framework",
      "Advanced Execution",
      "Risk Architecture",
      "Discipline",
      "Professional Operator",
    ],
    featuredTopics: [
      "Market foundations",
      "Smart Money framework",
      "Advanced ICT models",
      "Risk architecture",
      "Performance psychology",
      "Professional identity",
    ],
    relatedCollectionSlugs: [
      "smart-money-and-ict",
      "complete-maortrades-library",
    ],
    purchase: defaultCollectionPurchase,
    seo: {
      title: "The Institutional Operator Collection | MaorTrades",
      description:
        "The flagship MaorTrades collection connecting Institutional Operator Book 1 and Book 2 across foundations, Smart Money, advanced execution, risk, psychology, and identity.",
    },
  },
  {
    id: "complete-maortrades-library",
    slug: "complete-maortrades-library",
    title: "The Complete MaorTrades Library",
    eyebrow: "THE COMPLETE COLLECTION",
    subtitle: "The full MaorTrades educational catalogue",
    shortDescription:
      "The complete MaorTrades trading library, covering market foundations, Smart Money Concepts, ICT frameworks, advanced execution, funded trading, risk management, psychology, discipline, and professional development.",
    fullDescription:
      "The Complete MaorTrades Library gathers all eight books into one connected educational ecosystem. It is not a requirement to read every book from first page to last in one strict sequence. The library combines progressive learning books, reference material, specialized execution study, psychology and performance development, complete curriculum work, and the flagship Institutional Operator series. Readers can use it as a full reference library, a staged learning path, or a way to move between technical and behavioral development as their needs change.",
    positioningTitle: "A Complete Educational Ecosystem",
    positioningDescription:
      "The complete library shows how the catalogue fits together: beginner foundations, Smart Money and ICT study, advanced execution, a broad combined curriculum, trading psychology, and the two-volume flagship series. Different books serve different roles, so the value is coverage and navigation rather than a forced linear path.",
    bookSlugs: [
      "day-trading-for-absolute-beginners",
      "smart-money-simplified",
      "the-institutional-ict-codex",
      "the-ict-playbook",
      "the-modern-ict-traders-masterclass",
      "the-disciplined-edge",
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
    ],
    featured: true,
    badge: "Complete Library",
    recommendedOrder: [
      {
        bookSlug: "day-trading-for-absolute-beginners",
        label: "Core Progression",
        role: "Begin with market foundations when the basics need strengthening.",
      },
      {
        bookSlug: "smart-money-simplified",
        label: "Core Progression",
        role: "Move into Smart Money Concepts and ICT framework-building.",
      },
      {
        bookSlug: "the-ict-playbook",
        label: "Execution Study",
        role: "Use advanced execution study when model sequencing becomes the focus.",
      },
      {
        bookSlug: "the-disciplined-edge",
        label: "Performance Track",
        role: "Add the psychology and discipline track when behavior is the limiting factor.",
      },
    ],
    idealFor: [
      "Readers wanting access to the full MaorTrades educational catalogue.",
      "Traders studying multiple dimensions of technical and behavioral development.",
      "Readers who prefer a complete reference library rather than a single narrow path.",
      "Traders progressing from foundations toward advanced professional development.",
    ],
    learningProgression: [
      "Foundations",
      "Smart Money",
      "ICT Concepts",
      "Advanced Models",
      "Execution",
      "Risk",
      "Psychology",
      "Discipline",
      "Professional Identity",
    ],
    featuredTopics: [
      "Day trading foundations",
      "Smart Money Concepts",
      "ICT frameworks",
      "Advanced execution",
      "Funded trading context",
      "Risk management",
      "Trading psychology",
      "Professional development",
    ],
    grouping: [
      {
        title: "Trading Foundations",
        description: "The starting point for market language, charts, risk, and process.",
        bookSlugs: ["day-trading-for-absolute-beginners"],
      },
      {
        title: "Smart Money & ICT",
        description:
          "Conceptual framework and reference support for liquidity, structure, terminology, and price delivery.",
        bookSlugs: ["smart-money-simplified", "the-institutional-ict-codex"],
      },
      {
        title: "Advanced Execution",
        description: "Model selection, execution sequencing, setup refinement, and application.",
        bookSlugs: ["the-ict-playbook"],
      },
      {
        title: "Complete Learning Path",
        description: "A broad combined curriculum across foundations, ICT, and advanced models.",
        bookSlugs: ["the-modern-ict-traders-masterclass"],
      },
      {
        title: "Psychology & Discipline",
        description: "The performance layer for behavior, discipline, risk habits, and identity.",
        bookSlugs: ["the-disciplined-edge"],
      },
      {
        title: "Flagship Series",
        description: "The two-volume Institutional Operator professional-development system.",
        bookSlugs: [
          "the-institutional-operator-book-1",
          "the-institutional-operator-book-2",
        ],
      },
    ],
    relatedCollectionSlugs: [
      "the-institutional-operator",
      "smart-money-and-ict",
    ],
    purchase: defaultCollectionPurchase,
    seo: {
      title: "The Complete MaorTrades Library | MaorTrades",
      description:
        "The complete MaorTrades trading library covering foundations, Smart Money Concepts, ICT frameworks, advanced execution, risk, psychology, discipline, and professional identity.",
    },
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getCollectionsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getCollectionBySlug(slug))
    .filter((collection): collection is Collection => Boolean(collection));
}

export function getBooksForCollection(collection: Collection) {
  return getBooksBySlugs(collection.bookSlugs);
}

export function getRecommendedBooksForCollection(collection: Collection) {
  const order = collection.recommendedOrder ?? [];

  return order
    .map((item) => {
      const [book] = getBooksBySlugs([item.bookSlug]);
      return book ? { ...item, book } : undefined;
    })
    .filter(
      (
        item,
      ): item is CollectionRecommendedBook & {
        book: Book;
      } => Boolean(item),
    );
}
