import { getArticlesBySlugs } from "@/data/articles";
import { getBooksBySlugs } from "@/data/books";
import { getCollectionsBySlugs } from "@/data/collections";
import type {
  FreeResource,
  ResourceCategory,
  ResourceType,
} from "@/types/resource";

export const resourceCategoryLabels = {
  "ict-models-execution": "ICT Models & Execution",
  "liquidity-price-delivery": "Liquidity & Price Delivery",
  "trading-psychology": "Trading Psychology",
  "professional-development": "Professional Development",
} satisfies Record<ResourceCategory, string>;

export const resourceCategoryDescriptions = {
  "ict-models-execution":
    "Structured tools for model selection, confirmation, invalidation, session context, and execution review.",
  "liquidity-price-delivery":
    "Reference material for organizing liquidity, structure, displacement, imbalance, and price-delivery terminology.",
  "trading-psychology":
    "Behavior-focused tools for recognizing drift, reviewing decisions, and returning attention to process.",
  "professional-development":
    "Preparation and review resources for traders building clearer routines around planning, execution, and feedback.",
} satisfies Record<ResourceCategory, string>;

export const resourceTypeLabels = {
  checklist: "Checklist",
  "reference-sheet": "Reference Sheet",
  worksheet: "Worksheet",
  guide: "Guide",
  "behavior-checklist": "Behavior Checklist",
} satisfies Record<ResourceType, string>;

const defaultAccess = {
  status: "coming-soon",
} satisfies FreeResource["access"];

export const resources: FreeResource[] = [
  {
    id: "ict-trading-checklist",
    slug: "ict-trading-checklist",
    title: "ICT Trading Checklist",
    resourceType: "checklist",
    category: "ict-models-execution",
    shortDescription:
      "A structured pre-trade and execution checklist for traders using ICT and Smart Money concepts.",
    fullDescription:
      "This checklist is designed to slow the decision process down before entry. It encourages the trader to connect market context, liquidity, confirmation, invalidation, targets, and personal risk rules before acting.",
    purpose:
      "Help traders organize whether a trade idea has context, structure, confirmation, risk logic, and a defined target before execution.",
    featured: true,
    badge: "Structured Execution",
    sections: [
      {
        id: "higher-timeframe-context",
        title: "Higher-Timeframe Context",
        questions: [
          "What is the directional bias?",
          "What is price currently delivering toward?",
          "Is the current market context trending, ranging, expanding, or repricing?",
        ],
      },
      {
        id: "liquidity",
        title: "Liquidity",
        questions: [
          "What liquidity has already been taken?",
          "What liquidity remains available?",
          "Is the setup reacting after liquidity interaction or simply approaching it?",
        ],
      },
      {
        id: "session-context",
        title: "Session Context",
        questions: [
          "Which trading session is active?",
          "Is the setup occurring during the intended trading window?",
          "Is volatility appropriate for the model being traded?",
        ],
      },
      {
        id: "displacement",
        title: "Displacement",
        questions: [
          "Has meaningful displacement occurred?",
          "Is there clear evidence of repricing?",
          "Did the move create an imbalance or relevant PD Array?",
        ],
      },
      {
        id: "entry-model",
        title: "Entry Model",
        questions: [
          "What exact model is being traded?",
          "What confirms the model?",
          "Where is the entry location?",
        ],
      },
      {
        id: "invalidation",
        title: "Invalidation",
        questions: [
          "What price action invalidates the idea?",
          "Is the stop placement based on logic rather than emotion?",
        ],
      },
      {
        id: "target",
        title: "Target",
        questions: [
          "What liquidity or objective is being targeted?",
          "Is the expected path clear enough to justify participation?",
        ],
      },
      {
        id: "risk",
        title: "Risk",
        questions: [
          "Is risk defined before entry?",
          "Does the trade remain within the trader's own written risk framework?",
          "Is position size based on the plan rather than emotion?",
        ],
      },
      {
        id: "execution-state",
        title: "Execution State",
        questions: [
          "Is the trade planned or impulsive?",
          "Is FOMO influencing the decision?",
          "Is the trader attempting to recover a previous loss?",
        ],
      },
      {
        id: "review",
        title: "Review",
        questions: [
          "Was the setup followed correctly?",
          "Was the trade managed according to the plan?",
          "What should be reviewed after the session?",
        ],
      },
    ],
    idealFor: [
      "ICT learners who need a slower pre-entry review process.",
      "Traders connecting liquidity, displacement, invalidation, targets, and risk before acting.",
      "Readers moving from concept recognition toward more structured execution review.",
    ],
    outcomes: [
      "Organize the trade idea before pressure appears.",
      "Separate model confirmation from impulse.",
      "Review whether execution followed the written process.",
    ],
    usageSteps: [
      {
        label: "Before session",
        text: "Review context, liquidity, and the conditions required for your intended model.",
      },
      {
        label: "Before entry",
        text: "Confirm model, invalidation, target, and personal risk rules before participating.",
      },
      {
        label: "After session",
        text: "Review whether the process was followed rather than judging the trade only by outcome.",
      },
    ],
    relatedBookSlugs: [
      "the-ict-playbook",
      "smart-money-simplified",
      "the-institutional-operator-book-1",
    ],
    relatedCollectionSlugs: ["smart-money-and-ict"],
    relatedArticleSlugs: ["understanding-liquidity-beyond-stop-hunts"],
    access: defaultAccess,
    seo: {
      title: "ICT Trading Checklist | Free Trading Resource | MaorTrades",
      description:
        "Use the ICT Trading Checklist to organize context, liquidity, displacement, entry model, invalidation, targets, risk, execution state, and review.",
    },
  },
  {
    id: "smart-money-quick-reference",
    slug: "smart-money-quick-reference",
    title: "Smart Money Concepts Quick Reference",
    resourceType: "reference-sheet",
    category: "liquidity-price-delivery",
    shortDescription:
      "A concise visual-reference guide to core Smart Money Concepts and ICT terminology.",
    fullDescription:
      "This reference sheet helps traders organize common Smart Money and ICT concepts into categories instead of memorizing disconnected definitions.",
    purpose:
      "Help traders arrange liquidity, structure, price delivery, location, and targeting language into a more usable study reference.",
    badge: "Terminology Map",
    sections: [
      {
        id: "liquidity",
        title: "Liquidity",
        description:
          "Within ICT terminology, liquidity language is often used to describe areas where orders or transaction opportunity may become available.",
        items: [
          { label: "External liquidity", text: "Areas beyond a current range, often prior highs or lows." },
          { label: "Internal liquidity", text: "Areas inside a range that price may revisit during retracement or rebalancing." },
          { label: "Obvious highs and lows", text: "Visible reference points that may attract trader decisions and orders." },
          { label: "Liquidity sweep", text: "A move through a visible level that can be interpreted as interaction with resting liquidity." },
          { label: "Liquidity raid", text: "Often used to describe a sharper move into liquidity before a meaningful response." },
        ],
      },
      {
        id: "market-structure",
        title: "Market Structure",
        description:
          "Structure terms help describe swing behavior and whether price is maintaining, breaking, or shifting a local condition.",
        items: [
          { label: "Swing high", text: "A local high that forms a visible turning point." },
          { label: "Swing low", text: "A local low that forms a visible turning point." },
          { label: "Higher high", text: "A high that exceeds a prior comparable high." },
          { label: "Higher low", text: "A low that holds above a prior comparable low." },
          { label: "Lower high", text: "A high that fails below a prior comparable high." },
          { label: "Lower low", text: "A low that breaks below a prior comparable low." },
          { label: "BOS", text: "Often used to describe a break of structure in the direction being studied." },
          { label: "MSS", text: "A market structure shift can be interpreted as evidence that the local condition has changed." },
        ],
      },
      {
        id: "price-delivery",
        title: "Price Delivery",
        items: [
          { label: "Displacement", text: "A forceful move that suggests urgency and can create imbalance." },
          { label: "Imbalance", text: "An area where price moved inefficiently and may later be revisited." },
          { label: "Fair Value Gap", text: "Within ICT terminology, a three-candle imbalance often used as a point of interest." },
          { label: "Order Block", text: "Often used to describe a candle or price area associated with institutional-style delivery logic." },
          { label: "Breaker Block", text: "A failed area of structure that can become relevant after a change in condition." },
          { label: "Mitigation Block", text: "A price area sometimes studied for return-to-origin or mitigation logic." },
        ],
      },
      {
        id: "location",
        title: "Location",
        items: [
          { label: "Premium", text: "The upper portion of a dealing range." },
          { label: "Discount", text: "The lower portion of a dealing range." },
          { label: "Equilibrium", text: "The midpoint of a dealing range." },
          { label: "Dealing range", text: "A defined high-to-low or low-to-high range used to study relative price location." },
          { label: "OTE", text: "Optimal Trade Entry, commonly associated with a deeper retracement zone inside ICT study." },
        ],
      },
      {
        id: "targeting",
        title: "Targeting",
        items: [
          { label: "Internal range liquidity", text: "Objectives inside the active range." },
          { label: "External range liquidity", text: "Objectives beyond the active range." },
          { label: "Opposing liquidity", text: "Liquidity resting on the opposite side of the current idea." },
          { label: "PD Array context", text: "Using price-delivery arrays to frame location, reaction, or objective." },
        ],
      },
    ],
    idealFor: [
      "Traders learning Smart Money and ICT terminology.",
      "Readers who know many terms but need clearer categories.",
      "Students reviewing concepts before reading deeper execution material.",
    ],
    outcomes: [
      "Categorize core terminology by function.",
      "Avoid treating definitions as complete trade plans.",
      "Build a cleaner reference base for deeper Smart Money study.",
    ],
    usageSteps: [
      {
        label: "During study",
        text: "Use the categories to keep liquidity, structure, delivery, location, and targeting separate.",
      },
      {
        label: "Before chart work",
        text: "Review the relevant terms for the concept being studied instead of scanning every definition.",
      },
      {
        label: "After review",
        text: "Connect terms back to a framework, book chapter, or article rather than collecting vocabulary alone.",
      },
    ],
    relatedBookSlugs: [
      "smart-money-simplified",
      "the-institutional-ict-codex",
      "the-institutional-operator-book-1",
    ],
    relatedCollectionSlugs: ["smart-money-and-ict"],
    relatedArticleSlugs: ["understanding-liquidity-beyond-stop-hunts"],
    access: defaultAccess,
    seo: {
      title:
        "Smart Money Concepts Quick Reference | Free Trading Resource | MaorTrades",
      description:
        "A free Smart Money Concepts and ICT quick reference for liquidity, market structure, displacement, Fair Value Gaps, Order Blocks, premium, discount, and targeting.",
    },
  },
  {
    id: "trading-discipline-reset-checklist",
    slug: "trading-discipline-reset-checklist",
    title: "Trading Discipline Reset Checklist",
    resourceType: "behavior-checklist",
    category: "trading-psychology",
    shortDescription:
      "A practical reset guide for traders who recognize that technical knowledge is not always translating into disciplined execution.",
    fullDescription:
      "This resource is designed for moments when technical knowledge is not translating into planned behavior. It creates a simple review process for recognizing drift and returning attention to the written trading process.",
    purpose:
      "Help traders pause, identify behavior drift, review recent decisions, and return attention to process.",
    badge: "Behavior Reset",
    sections: [
      {
        id: "pause-the-cycle",
        title: "Pause the Cycle",
        items: [
          { text: "Stop adding new trades automatically after frustration." },
          { text: "Separate the current decision from the previous result." },
          { text: "Identify whether the next action belongs to the plan." },
        ],
      },
      {
        id: "check-for-behavior-drift",
        title: "Check for Behavior Drift",
        items: [
          { text: "FOMO" },
          { text: "Revenge trading" },
          { text: "Overtrading" },
          { text: "Moving stops emotionally" },
          { text: "Increasing size impulsively" },
          { text: "Entering without confirmation" },
          { text: "Taking trades outside the planned session" },
          { text: "Forcing a setup that is not present" },
        ],
      },
      {
        id: "review-the-last-decision",
        title: "Review the Last Decision",
        questions: [
          "Was the trade planned?",
          "Was the entry model clear?",
          "Was risk defined?",
          "Was invalidation respected?",
          "Was management changed because of fear?",
          "Was the trade part of the playbook?",
        ],
      },
      {
        id: "reset-the-standard",
        title: "Reset the Standard",
        items: [
          { text: "Return to planned risk." },
          { text: "Return to approved setups." },
          { text: "Return to approved time windows." },
          { text: "Return to the written process." },
        ],
      },
      {
        id: "end-of-day-review",
        title: "End-of-Day Review",
        questions: [
          "Which rule was hardest to follow?",
          "What triggered the behavior?",
          "What behavior was under control?",
          "What will be changed in the next session?",
          "What evidence of discipline was created today?",
        ],
      },
    ],
    idealFor: [
      "Traders who recognize repeated behavior drift after technical study.",
      "Readers working on FOMO, overtrading, revenge trading, or rule adherence.",
      "Traders who need a simple process reset without treating it as therapy.",
    ],
    outcomes: [
      "Pause before compounding a behavioral mistake.",
      "Name the behavior that moved away from the plan.",
      "Return attention to the written process and next review.",
    ],
    usageSteps: [
      {
        label: "When drift appears",
        text: "Stop adding trades automatically and identify whether the next action belongs to the plan.",
      },
      {
        label: "After a decision",
        text: "Review whether risk, invalidation, confirmation, and management matched the written process.",
      },
      {
        label: "End of day",
        text: "Record the rule that was hardest to follow and one process change for the next session.",
      },
    ],
    relatedBookSlugs: [
      "the-disciplined-edge",
      "the-institutional-operator-book-2",
    ],
    relatedCollectionSlugs: ["the-institutional-operator"],
    relatedArticleSlugs: ["knowing-a-trading-model-and-trusting-your-process"],
    access: defaultAccess,
    seo: {
      title:
        "Trading Discipline Reset Checklist | Free Trading Resource | MaorTrades",
      description:
        "A free trading discipline reset checklist for pausing behavior drift, reviewing decisions, and returning attention to process.",
    },
  },
  {
    id: "daily-trading-preparation-sheet",
    slug: "daily-trading-preparation-sheet",
    title: "Daily Trading Preparation Sheet",
    resourceType: "worksheet",
    category: "professional-development",
    shortDescription:
      "A structured preparation and review worksheet for planning the trading day before execution begins.",
    fullDescription:
      "This worksheet encourages deliberate preparation and clearer separation between planning, execution, and review.",
    purpose:
      "Help traders map the day before execution begins and compare the plan with actual behavior afterward.",
    badge: "Preparation Tool",
    sections: [
      {
        id: "market-context",
        title: "Market Context",
        items: [
          { label: "Date", text: "Record the trading date." },
          { label: "Instrument", text: "Name the instrument being studied." },
          { label: "Higher-timeframe context", text: "Summarize the broader condition." },
          { label: "Directional bias", text: "State the current bias if one is justified." },
          { label: "Key market condition", text: "Describe whether the market is trending, ranging, repricing, or unclear." },
        ],
      },
      {
        id: "liquidity-map",
        title: "Liquidity Map",
        items: [
          { label: "Key highs", text: "Identify important highs." },
          { label: "Key lows", text: "Identify important lows." },
          { label: "External liquidity", text: "Mark objectives beyond the current range." },
          { label: "Internal liquidity", text: "Mark internal objectives or retracement areas." },
          { label: "Likely draw on liquidity", text: "Define the likely objective if the context is clear enough." },
        ],
      },
      {
        id: "session-plan",
        title: "Session Plan",
        items: [
          { label: "Session being traded", text: "Name the intended session." },
          { label: "Intended trading window", text: "Define the window before execution begins." },
          { label: "Major time considerations", text: "Note major timing factors that affect participation." },
          { label: "Conditions required", text: "Write what must be present before taking risk." },
        ],
      },
      {
        id: "scenario-a",
        title: "Scenario A",
        items: [
          { label: "Bullish scenario", text: "Describe the bullish path." },
          { label: "Required confirmation", text: "Name the confirmation needed." },
          { label: "Entry area", text: "Define the location being considered." },
          { label: "Invalidation", text: "State what would make the idea wrong." },
          { label: "Objective", text: "Name the target or objective." },
        ],
      },
      {
        id: "scenario-b",
        title: "Scenario B",
        items: [
          { label: "Bearish scenario", text: "Describe the bearish path." },
          { label: "Required confirmation", text: "Name the confirmation needed." },
          { label: "Entry area", text: "Define the location being considered." },
          { label: "Invalidation", text: "State what would make the idea wrong." },
          { label: "Objective", text: "Name the target or objective." },
        ],
      },
      {
        id: "risk-framework",
        title: "Risk Framework",
        items: [
          { text: "Planned maximum exposure according to the personal trading plan." },
          { text: "Maximum number of planned attempts." },
          { text: "Stop conditions for the session." },
        ],
      },
      {
        id: "execution-notes",
        title: "Execution Notes",
        items: [
          { label: "Setup selected", text: "Name the actual setup, if one appears." },
          { label: "Reason for participation", text: "Record why the trade belongs to the plan." },
          { label: "Reason for no trade", text: "If no trade is taken, record why standing aside was appropriate." },
        ],
      },
      {
        id: "post-session-review",
        title: "Post-Session Review",
        questions: [
          "What happened?",
          "What was expected?",
          "What was done well?",
          "What should change?",
          "Was the plan followed?",
          "What was the emotional state?",
          "What is the next review focus?",
        ],
      },
    ],
    idealFor: [
      "Traders who want preparation separated from execution pressure.",
      "Readers developing a daily market and session planning routine.",
      "Traders who need a simple review path after the session ends.",
    ],
    outcomes: [
      "Clarify market context before the session.",
      "Define scenarios, invalidation, and objectives before execution.",
      "Compare the plan with actual behavior after the session.",
    ],
    usageSteps: [
      {
        label: "Before session",
        text: "Write market context, liquidity, session timing, and the conditions required for participation.",
      },
      {
        label: "Before execution",
        text: "Define scenarios, confirmation, invalidation, objectives, and personal stop conditions.",
      },
      {
        label: "After session",
        text: "Compare expectation with behavior and choose one review focus for the next session.",
      },
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
      "the-ict-playbook",
    ],
    relatedCollectionSlugs: ["the-institutional-operator"],
    relatedArticleSlugs: ["why-execution-without-risk-architecture-fails"],
    access: defaultAccess,
    seo: {
      title:
        "Daily Trading Preparation Sheet | Free Trading Resource | MaorTrades",
      description:
        "A free daily trading preparation worksheet for market context, liquidity mapping, session planning, scenarios, risk framework, execution notes, and review.",
    },
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getResourcesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getResourceBySlug(slug))
    .filter((resource): resource is FreeResource => Boolean(resource));
}

export function getFeaturedResources() {
  return resources.filter((resource) => resource.featured);
}

export function getResourcesByCategory(category: ResourceCategory) {
  return resources.filter((resource) => resource.category === category);
}

export function resolveRelatedBooks(resource: FreeResource) {
  return getBooksBySlugs(resource.relatedBookSlugs ?? []);
}

export function resolveRelatedCollections(resource: FreeResource) {
  return getCollectionsBySlugs(resource.relatedCollectionSlugs ?? []);
}

export function resolveRelatedArticles(resource: FreeResource) {
  return getArticlesBySlugs(resource.relatedArticleSlugs ?? []);
}
