import { getBookBySlug } from "@/data/books";
import { getCollectionBySlug } from "@/data/collections";
import type { Book } from "@/types/book";
import type { Collection } from "@/types/collection";

export type RecommendationTarget =
  | {
      type: "book";
      slug: string;
    }
  | {
      type: "collection";
      slug: string;
    };

export type ResolvedRecommendationTarget =
  | {
      type: "book";
      slug: string;
      href: string;
      label: string;
      description: string;
      book: Book;
    }
  | {
      type: "collection";
      slug: string;
      href: string;
      label: string;
      description: string;
      collection: Collection;
    };

export type ReaderSituation = {
  id: string;
  statement: string;
  description: string;
  primary: RecommendationTarget;
  secondary?: RecommendationTarget;
  stage: string;
  accentLabel: string;
};

export type QuickRecommendation = {
  label: string;
  target: RecommendationTarget;
};

export type PathStep = {
  target: RecommendationTarget;
  role: string;
};

export type DetailedPath = {
  eyebrow: string;
  title: string;
  description: string;
  steps: PathStep[];
  primaryCta: {
    label: string;
    target: RecommendationTarget;
  };
  secondaryCta?: {
    label: string;
    target: RecommendationTarget;
  };
  surface?: "default" | "dark";
};

export type ComparisonEntry = {
  target: RecommendationTarget;
  bestFor: string;
  mainPurpose: string;
  nextStep?: RecommendationTarget;
  nextStepNote?: string;
};

export const readerSituations: ReaderSituation[] = [
  {
    id: "new-to-trading",
    statement: "I'm completely new to trading.",
    description:
      "I need to understand markets, charts, order types, risk, and the basic language of trading before studying advanced models.",
    primary: { type: "book", slug: "day-trading-for-absolute-beginners" },
    secondary: { type: "collection", slug: "trading-foundations" },
    stage: "Foundations",
    accentLabel: "Start here",
  },
  {
    id: "ict-feels-confusing",
    statement: "I know the basics, but ICT feels confusing.",
    description:
      "I understand basic charts and trading mechanics, but liquidity, structure, Fair Value Gaps, Order Blocks, and other ICT concepts still feel disconnected.",
    primary: { type: "book", slug: "smart-money-simplified" },
    secondary: { type: "collection", slug: "smart-money-and-ict" },
    stage: "Smart Money",
    accentLabel: "Build the framework",
  },
  {
    id: "execution-needs-structure",
    statement: "I understand the concepts, but my execution needs structure.",
    description:
      "I already understand liquidity and market structure, but I need better model selection, execution sequencing, invalidation, targeting, and practical setup application.",
    primary: { type: "book", slug: "the-ict-playbook" },
    secondary: { type: "book", slug: "the-institutional-operator-book-2" },
    stage: "Advanced Execution",
    accentLabel: "Refine execution",
  },
  {
    id: "need-ict-reference",
    statement: "I need a systematic ICT reference.",
    description:
      "I already study ICT and Smart Money Concepts, but I want a structured reference for terminology, concept relationships, liquidity mechanics, price delivery, and execution logic.",
    primary: { type: "book", slug: "the-institutional-ict-codex" },
    secondary: { type: "collection", slug: "smart-money-and-ict" },
    stage: "Reference",
    accentLabel: "Organize concepts",
  },
  {
    id: "discipline-gap",
    statement: "My knowledge is better than my discipline.",
    description:
      "I often know what I should do, but fear, impatience, FOMO, overtrading, revenge trading, or rule-breaking interfere with my execution.",
    primary: { type: "book", slug: "the-disciplined-edge" },
    secondary: { type: "book", slug: "the-institutional-operator-book-2" },
    stage: "Discipline & Performance",
    accentLabel: "Behavior focus",
  },
  {
    id: "a-to-z-path",
    statement: "I want a broad A-to-Z learning path.",
    description:
      "I want one comprehensive progression that moves through foundations, Smart Money Concepts, and advanced ICT models.",
    primary: { type: "book", slug: "the-modern-ict-traders-masterclass" },
    secondary: { type: "collection", slug: "complete-maortrades-library" },
    stage: "Complete Learning Path",
    accentLabel: "Broad curriculum",
  },
  {
    id: "flagship-journey",
    statement: "I want the flagship complete journey.",
    description:
      "I want a structured professional-development path connecting foundations, Smart Money frameworks, advanced execution, risk architecture, psychology, discipline, and trading identity.",
    primary: { type: "collection", slug: "the-institutional-operator" },
    secondary: { type: "collection", slug: "complete-maortrades-library" },
    stage: "Professional Operator",
    accentLabel: "Flagship path",
  },
];

export const quickRecommendations: QuickRecommendation[] = [
  {
    label: "New to trading",
    target: { type: "book", slug: "day-trading-for-absolute-beginners" },
  },
  {
    label: "Learning ICT",
    target: { type: "book", slug: "smart-money-simplified" },
  },
  {
    label: "Need a reference",
    target: { type: "book", slug: "the-institutional-ict-codex" },
  },
  {
    label: "Refining execution",
    target: { type: "book", slug: "the-ict-playbook" },
  },
  {
    label: "Working on discipline",
    target: { type: "book", slug: "the-disciplined-edge" },
  },
  {
    label: "Want a complete curriculum",
    target: { type: "book", slug: "the-modern-ict-traders-masterclass" },
  },
  {
    label: "Want the flagship system",
    target: { type: "collection", slug: "the-institutional-operator" },
  },
];

export const detailedPaths: DetailedPath[] = [
  {
    eyebrow: "Path 01",
    title: "Build the Foundation.",
    description:
      "Advanced concepts become more useful when they are built on a stable foundation. This path moves from market mechanics into Smart Money concepts and then into advanced execution.",
    steps: [
      {
        target: { type: "book", slug: "day-trading-for-absolute-beginners" },
        role: "Learn the mechanics and language of trading.",
      },
      {
        target: { type: "book", slug: "smart-money-simplified" },
        role: "Build the institutional conceptual framework.",
      },
      {
        target: { type: "book", slug: "the-ict-playbook" },
        role: "Move into advanced model application and execution.",
      },
    ],
    primaryCta: {
      label: "Explore the Foundations Book",
      target: { type: "book", slug: "day-trading-for-absolute-beginners" },
    },
    secondaryCta: {
      label: "View the Trading Foundations Collection",
      target: { type: "collection", slug: "trading-foundations" },
    },
  },
  {
    eyebrow: "Path 02",
    title: "Organize Your ICT Knowledge.",
    description:
      "These books complement one another without being interchangeable: one builds the framework, one organizes the reference layer, and one moves toward model application.",
    steps: [
      {
        target: { type: "book", slug: "smart-money-simplified" },
        role: "Guided framework building.",
      },
      {
        target: { type: "book", slug: "the-institutional-ict-codex" },
        role: "Systematic reference and concept organization.",
      },
      {
        target: { type: "book", slug: "the-ict-playbook" },
        role: "Advanced model application and execution.",
      },
    ],
    primaryCta: {
      label: "Explore Smart Money & ICT Collection",
      target: { type: "collection", slug: "smart-money-and-ict" },
    },
    surface: "dark",
  },
];

export const comparisonEntries: ComparisonEntry[] = [
  {
    target: { type: "book", slug: "day-trading-for-absolute-beginners" },
    bestFor: "Complete beginners",
    mainPurpose: "Market mechanics and trading foundations",
    nextStep: { type: "book", slug: "smart-money-simplified" },
  },
  {
    target: { type: "book", slug: "smart-money-simplified" },
    bestFor: "Traders moving into ICT and SMC",
    mainPurpose: "Structured conceptual framework",
    nextStepNote: "Institutional ICT Codex or ICT Playbook",
  },
  {
    target: { type: "book", slug: "the-institutional-ict-codex" },
    bestFor: "Readers needing systematic reference",
    mainPurpose: "Terminology and concept organization",
    nextStep: { type: "book", slug: "the-ict-playbook" },
  },
  {
    target: { type: "book", slug: "the-ict-playbook" },
    bestFor: "Advanced concept learners",
    mainPurpose: "Models and execution structure",
    nextStep: { type: "book", slug: "the-institutional-operator-book-2" },
  },
  {
    target: { type: "book", slug: "the-disciplined-edge" },
    bestFor: "Behavior and discipline development",
    mainPurpose: "Trading psychology and professional behavior",
    nextStep: { type: "book", slug: "the-institutional-operator-book-2" },
  },
  {
    target: { type: "book", slug: "the-modern-ict-traders-masterclass" },
    bestFor: "Broad combined curriculum",
    mainPurpose: "A-to-Z progression",
    nextStepNote: "Specialized study or flagship series",
  },
  {
    target: { type: "collection", slug: "the-institutional-operator" },
    bestFor: "Complete flagship development",
    mainPurpose: "Technical, risk, behavioral, and identity progression",
    nextStepNote: "Ongoing study and application",
  },
];

export function resolveRecommendationTarget(
  target: RecommendationTarget,
): ResolvedRecommendationTarget {
  if (target.type === "book") {
    const book = getBookBySlug(target.slug);

    if (!book) {
      throw new Error(`Unknown book recommendation: ${target.slug}`);
    }

    return {
      type: "book",
      slug: target.slug,
      href: `/books/${target.slug}`,
      label: book.title,
      description: book.subtitle ?? book.shortDescription,
      book,
    };
  }

  const collection = getCollectionBySlug(target.slug);

  if (!collection) {
    throw new Error(`Unknown collection recommendation: ${target.slug}`);
  }

  return {
    type: "collection",
    slug: target.slug,
    href: `/collections/${target.slug}`,
    label: collection.title,
    description: collection.shortDescription,
    collection,
  };
}
