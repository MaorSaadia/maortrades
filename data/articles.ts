import type { Article, ArticleCategory, ArticleCategoryId } from "@/types/article";

export const articleCategories = [
  {
    id: "market-structure",
    slug: "market-structure",
    label: "Market Structure",
    description:
      "Structural context, swing behavior, protected highs and lows, dealing ranges, and timeframe hierarchy.",
    topics: [
      "Trends",
      "Swing structure",
      "Protected highs and lows",
      "BOS",
      "MSS",
      "Dealing ranges",
      "Timeframe hierarchy",
    ],
  },
  {
    id: "liquidity-price-delivery",
    slug: "liquidity-price-delivery",
    label: "Liquidity & Price Delivery",
    description:
      "Liquidity, displacement, imbalance, Fair Value Gaps, Order Blocks, premium and discount, and price delivery concepts.",
    topics: [
      "Liquidity",
      "Liquidity sweeps",
      "Displacement",
      "Imbalance",
      "Fair Value Gaps",
      "Order Blocks",
      "PD Arrays",
    ],
  },
  {
    id: "ict-models-execution",
    slug: "ict-models-execution",
    label: "ICT Models & Execution",
    description:
      "Model selection, session logic, execution sequencing, invalidation, targeting, and advanced ICT execution concepts.",
    topics: [
      "Silver Bullet",
      "Judas Swing",
      "OTE",
      "Unicorn Entry",
      "Breaker Blocks",
      "Mitigation Blocks",
      "Targeting",
    ],
  },
  {
    id: "risk-management",
    slug: "risk-management",
    label: "Risk Management",
    description:
      "Planned risk, invalidation, stop placement, drawdown thinking, journaling, review, and compliance.",
    topics: [
      "Fixed risk",
      "Emotional risk",
      "Stop placement",
      "Position sizing",
      "Invalidation",
      "Journaling",
      "Review",
    ],
  },
  {
    id: "trading-psychology",
    slug: "trading-psychology",
    label: "Trading Psychology",
    description:
      "Fear, impatience, FOMO, revenge trading, rule breaking, self-trust, recovery, and discipline.",
    topics: [
      "Fear",
      "Impatience",
      "FOMO",
      "Overtrading",
      "Rule breaking",
      "Self-trust",
      "Recovery",
    ],
  },
  {
    id: "professional-development",
    slug: "professional-development",
    label: "Professional Development",
    description:
      "Trading process, preparation, review, feedback loops, playbook development, accountability, and professional routines.",
    topics: [
      "Preparation",
      "Execution review",
      "Feedback loops",
      "Playbook development",
      "Accountability",
      "Trading identity",
      "Routines",
    ],
  },
] satisfies ArticleCategory[];

export const articles: Article[] = [
  {
    id: "understanding-liquidity-beyond-stop-hunts",
    slug: "understanding-liquidity-beyond-stop-hunts",
    title: "Understanding Liquidity Beyond Stop Hunts",
    subtitle:
      "Liquidity is not only a dramatic sweep of an obvious high or low. It is the transaction environment that helps explain where price can move, react, and continue.",
    excerpt:
      "A structured explanation of liquidity as available transaction opportunity, why obvious highs and lows attract attention, and why a sweep alone is not a complete trade signal.",
    introduction: [
      "Liquidity is one of the most repeated words in Smart Money and ICT education, but it is also one of the most easily flattened. Many traders first learn it through the phrase stop hunt, then begin to treat every move through an obvious high or low as proof that the market is about to reverse.",
      "That simplification can create more confidence than clarity. A liquidity sweep may matter, but it is still only an event. A trading model requires context, displacement, structural response, risk definition, and a reasoned target.",
      {
        text: "This article explains liquidity as a broader market concept and places the sweep inside a larger framework for study.",
        links: [
          {
            label: "Smart Money, Simplified",
            href: "/books/smart-money-simplified",
          },
          {
            label: "The Institutional ICT Codex",
            href: "/books/the-institutional-ict-codex",
          },
        ],
      },
    ],
    category: "liquidity-price-delivery",
    tags: [
      "Liquidity",
      "Liquidity sweeps",
      "Market structure",
      "Displacement",
      "Smart Money Concepts",
      "ICT concepts",
    ],
    author: "Maor Saadia",
    readingTime: "9 min read",
    featured: true,
    keyTakeaways: [
      "Liquidity is better understood as available transaction opportunity, not only as retail stop losses.",
      "Obvious highs and lows matter because many decisions and orders cluster around them.",
      "A sweep is an event; context determines whether it becomes useful.",
      "Displacement and structural response help separate meaningful reactions from noise.",
      "Targets should connect to the same liquidity narrative that shaped the setup.",
    ],
    relatedArticleSlugs: ["why-execution-without-risk-architecture-fails"],
    relatedBookSlugs: [
      "smart-money-simplified",
      "the-institutional-ict-codex",
      "the-institutional-operator-book-1",
    ],
    relatedCollectionSlugs: ["smart-money-and-ict"],
    relatedResourceSlugs: ["smart-money-quick-reference"],
    seo: {
      title: "Understanding Liquidity Beyond Stop Hunts | MaorTrades Journal",
      description:
        "Learn why liquidity is broader than stop hunts, how liquidity sweeps fit into market context, and why displacement, structure, and targets matter.",
    },
    sections: [
      {
        id: "liquidity-is-transaction-opportunity",
        heading: "Liquidity Is Transaction Opportunity",
        paragraphs: [
          "At its simplest, liquidity describes the availability of orders that allow transactions to occur. A trader who wants to buy needs someone willing to sell. A trader who wants to exit a short position by buying also needs available sell-side participation. The market is always matching interest, and some areas naturally attract more of that interest than others.",
          "Obvious highs and lows matter because they are visible reference points. Traders may place stop losses above highs, breakout orders above highs, sell stops below lows, or limit orders around prior reaction areas. None of this requires a dramatic story. These levels attract attention because they are easy to identify and useful for decision-making.",
          "When price moves into one of these areas, it can access the orders resting or triggered there. That interaction can provide fuel for continuation, create a reaction, or produce a temporary expansion before the market decides nothing meaningful has changed.",
        ],
        callout: {
          label: "CORE IDEA",
          text: "Liquidity is not automatically a reversal signal. It is a place where transactions can become available.",
        },
      },
      {
        id: "why-stop-hunt-language-can-mislead",
        heading: "Why Stop Hunt Language Can Mislead",
        paragraphs: [
          "The phrase stop hunt can be useful as shorthand, but it can also encourage a trader to assume intention. Once the trader believes every sweep is a deliberate attack on retail stops, the chart becomes a story about hidden motives instead of a study of conditions.",
          "A more careful approach is to ask what the liquidity event changed. Did the move through the high create displacement in the opposite direction? Did it fail to hold above a range? Did the market break a meaningful swing? Did the move occur inside a higher-timeframe area where a reaction already made sense?",
          "Without those questions, a trader may short every high sweep or buy every low sweep simply because the level was taken. That is not a model. It is a reaction to one visual event.",
        ],
      },
      {
        id: "external-and-internal-liquidity",
        heading: "External and Internal Liquidity",
        paragraphs: [
          "Within ICT terminology, traders often distinguish between external liquidity and internal liquidity. External liquidity generally refers to pools beyond a current dealing range, such as prior highs and lows. Internal liquidity often refers to areas within the range, such as imbalances, retracements, or intermediate levels that price may revisit before expanding.",
          "This distinction helps traders avoid treating all liquidity as the same. A move into external liquidity may complete one objective, while a return into internal liquidity may provide a retracement or rebalance before continuation. The exact interpretation depends on the broader market context.",
          "The practical value is not the label itself. The value is understanding whether price is reaching for a larger objective, retracing inside a range, or building conditions for a new leg.",
        ],
        bullets: [
          "External liquidity: areas beyond a current range or obvious prior extremes.",
          "Internal liquidity: areas inside a range that may attract price during retracement or rebalancing.",
          "Context decides whether either area is useful for execution.",
        ],
      },
      {
        id: "sweep-event-vs-trading-model",
        heading: "A Sweep Is an Event, Not a Complete Model",
        paragraphs: [
          "The sweep itself tells the trader that price interacted with a visible area of liquidity. It does not automatically tell the trader direction, entry quality, risk, invalidation, or target. Those pieces belong to the model around the event.",
          "A stronger study process looks for context before the sweep and confirmation after it. Before the sweep, a trader may study higher-timeframe bias, current dealing range, session conditions, and whether price is approaching a meaningful area. After the sweep, the trader may study displacement, market structure response, and whether price respects a logical retracement area.",
          {
            text: "This is where a liquidity concept begins to connect to a framework instead of remaining a single vocabulary word.",
            links: [
              {
                label: "The Smart Money & ICT Collection",
                href: "/collections/smart-money-and-ict",
              },
            ],
          },
        ],
        callout: {
          label: "COMMON MISTAKE",
          text: "Assuming that taking a high means price must reverse immediately can turn a useful observation into a forced trade.",
        },
      },
      {
        id: "displacement-and-structure-response",
        heading: "Displacement and Structure Response",
        paragraphs: [
          "After liquidity is taken, the quality of the response matters. A slow drift away from the level is different from clean displacement. A shallow reaction that fails to break structure is different from a move that changes the short-term market condition.",
          "Displacement suggests urgency. It can show that price did more than touch a level; it moved away with enough force to create imbalance and shift attention. Market structure response then helps the trader decide whether the move has changed the local narrative or whether the sweep remains an isolated wick.",
          "This is why the order of thinking matters. Liquidity can draw attention, displacement can show reaction quality, and structure can help define whether the reaction is becoming a usable idea.",
        ],
      },
      {
        id: "targets-belong-to-the-same-narrative",
        heading: "Targets Belong to the Same Narrative",
        paragraphs: [
          "Target selection should not be random or based only on the nearest attractive line. If the setup begins with a liquidity narrative, the target should connect to that narrative. Price may be reaching toward opposing liquidity, an unfilled imbalance, a prior swing, or another area that logically fits the model.",
          "This keeps the trade from becoming a disconnected entry. The trader is not only asking where to get in. The trader is asking what the market may be reaching for, where the idea is wrong, and whether the distance between those two points is worth the risk.",
          "A liquidity sweep becomes more useful when it sits inside this wider process: context, event, response, invalidation, target, and review.",
        ],
        callout: {
          label: "FRAMEWORK",
          text: "Context gives the sweep meaning. Displacement tests reaction quality. Structure helps define the idea. Targets complete the narrative.",
        },
      },
    ],
  },
  {
    id: "why-execution-without-risk-architecture-fails",
    slug: "why-execution-without-risk-architecture-fails",
    title: "Why Execution Without Risk Architecture Fails",
    subtitle:
      "A good entry model can still produce poor development if risk, invalidation, review, and behavior are not planned before pressure appears.",
    excerpt:
      "Execution determines how you enter. Risk architecture determines whether the process remains sustainable when trades win, lose, or apply pressure.",
    introduction: [
      "Many traders spend most of their study time refining entries. They compare models, mark confirmations, replay examples, and search for cleaner execution. That work can be useful, but it is incomplete if the trader has not built risk architecture around it.",
      "Execution answers the question: how do I enter this idea? Risk architecture answers a different question: can this process survive uncertainty, mistakes, emotional pressure, and losing sequences without becoming chaotic?",
      {
        text: "This article is educational only and does not prescribe personal risk levels. Its purpose is to organize the risk questions that should exist around an execution model.",
        links: [
          {
            label: "The ICT Playbook",
            href: "/books/the-ict-playbook",
          },
        ],
      },
    ],
    category: "risk-management",
    tags: [
      "Risk",
      "Execution",
      "Invalidation",
      "Stop placement",
      "Journaling",
      "Compliance",
      "Risk architecture",
    ],
    author: "Maor Saadia",
    readingTime: "8 min read",
    keyTakeaways: [
      "A strong entry does not replace a complete risk process.",
      "Invalidation should be defined before the trade is entered.",
      "Emotional risk often appears when sizing, stops, or decision limits are unclear.",
      "Review and compliance are part of risk architecture, not separate administrative tasks.",
      "The goal is sustainability under uncertainty, not certainty of outcome.",
    ],
    relatedArticleSlugs: [
      "understanding-liquidity-beyond-stop-hunts",
      "knowing-a-trading-model-and-trusting-your-process",
    ],
    relatedBookSlugs: [
      "the-ict-playbook",
      "the-institutional-operator-book-2",
      "the-disciplined-edge",
    ],
    relatedCollectionSlugs: ["the-institutional-operator"],
    relatedResourceSlugs: ["daily-trading-preparation-sheet"],
    seo: {
      title: "Why Execution Without Risk Architecture Fails | MaorTrades Journal",
      description:
        "Understand why entry models need risk architecture, invalidation, stop planning, decision limits, review, and compliance to remain sustainable.",
    },
    sections: [
      {
        id: "entry-quality-is-not-account-survival",
        heading: "Entry Quality Is Not Account Survival",
        paragraphs: [
          "A clean entry can make a trade look professional at the moment of execution. It can align with a model, respect a retracement, and occur after a convincing confirmation. None of that guarantees that the trader knows how to handle the trade after entry.",
          "The account is not protected by the beauty of the setup. It is protected by predefined risk, invalidation, position sizing decisions, and the ability to follow the plan when the market does something uncomfortable.",
          "This is why traders can recognize strong models and still experience unstable results. The problem is not always the concept. Sometimes the missing layer is the architecture around the concept.",
        ],
      },
      {
        id: "planned-risk-before-emotion",
        heading: "Planned Risk Comes Before Emotion",
        paragraphs: [
          "Risk should be defined before the trade becomes emotionally active. Once price is moving, the trader is no longer planning in a neutral state. Fear, excitement, regret, and urgency can begin shaping decisions.",
          "Planned risk includes the conditions that make the idea wrong, the area where the stop belongs, the size that keeps the trade inside personal rules, and the point at which no more decisions should be made for the session or day.",
          "This does not mean every trader must use the same risk number. It means the process should be decided before the pressure of the trade begins.",
        ],
        callout: {
          label: "RISK NOTE",
          text: "Risk architecture is not a universal percentage. It is the planned structure that governs exposure, invalidation, behavior, and review.",
        },
      },
      {
        id: "invalidation-is-not-discomfort",
        heading: "Invalidation Is Not Discomfort",
        paragraphs: [
          "A trade can feel uncomfortable long before it is invalid. A pullback, pause, or temporary adverse movement may create pressure, but pressure is not the same as proof that the idea is wrong.",
          "Invalidation should be connected to the model. If the setup depends on a structural level holding, the invalidation logic should be tied to that structure. If the setup depends on displacement and continuation, the invalidation may involve failure to respect the retracement or loss of the condition that made the trade valid.",
          "When invalidation is vague, the trader is more likely to move stops, exit too early, hold too long, or reinterpret the setup after entry.",
        ],
        bullets: [
          "Discomfort asks how the trader feels.",
          "Invalidation asks whether the original idea still exists.",
          "Risk architecture separates the two before pressure appears.",
        ],
      },
      {
        id: "emotional-risk-changes-the-model",
        heading: "Emotional Risk Changes the Model",
        paragraphs: [
          "A trader may believe they are trading the same model, but the risk behavior around the model changes the actual process. Oversizing, widening stops, taking immediate re-entry after a loss, and adding trades outside the plan are not small details. They create a different system.",
          "Revenge risk is especially dangerous because it often appears as analysis. The trader finds a new reason to enter, but the real driver is the desire to recover from the previous outcome. The chart becomes a justification engine for an emotional state.",
          {
            text: "The behavioral layer is why risk and psychology cannot be fully separated.",
            links: [
              {
                label: "The Disciplined Edge",
                href: "/books/the-disciplined-edge",
              },
            ],
          },
        ],
      },
      {
        id: "review-is-part-of-risk",
        heading: "Review Is Part of Risk",
        paragraphs: [
          "Review is often treated as something that happens after the real work. In a mature risk process, review is part of the architecture. It shows whether the trader followed the model, respected invalidation, sized consistently, and avoided decisions that were never part of the plan.",
          "Without review, the trader may only remember the outcome. A winning trade can hide poor risk behavior. A losing trade can still be a good execution. The journal should help separate process quality from result emotion.",
          "This is not paperwork for its own sake. It is the evidence layer that tells the trader whether the system being practiced is actually the system being recorded.",
        ],
      },
      {
        id: "sustainable-execution",
        heading: "Sustainable Execution",
        paragraphs: [
          "Execution becomes more professional when it is surrounded by rules that can be followed during both clarity and pressure. The entry matters, but it is only one part of the chain.",
          {
            text: "The broader Institutional Operator path connects execution models with risk architecture, review standards, psychology, and professional identity.",
            links: [
              {
                label: "The Institutional Operator Collection",
                href: "/collections/the-institutional-operator",
              },
            ],
          },
        ],
        callout: {
          label: "CORE IDEA",
          text: "Execution determines how you enter. Risk architecture determines whether the process remains sustainable.",
        },
      },
    ],
  },
  {
    id: "knowing-a-trading-model-and-trusting-your-process",
    slug: "knowing-a-trading-model-and-trusting-your-process",
    title: "The Difference Between Knowing a Trading Model and Trusting Your Process",
    subtitle:
      "Technical knowledge can explain what should happen. Self-trust develops when behavior repeatedly matches the process you said you would follow.",
    excerpt:
      "A trader can know the model and still hesitate, interfere, chase, or break rules. The missing piece is often behavioral evidence, not another setup.",
    introduction: [
      "Knowing a trading model and trusting your process are not the same skill. A trader may understand the setup, describe the confirmation, and explain the invalidation, then still hesitate when the moment arrives.",
      "The gap is not always more information. Sometimes the trader has enough technical knowledge to act, but not enough behavioral evidence to trust themselves under pressure.",
      {
        text: "This article discusses trading behavior in an educational way. It is not psychological treatment, diagnosis, or personal advice.",
        links: [
          {
            label: "The Disciplined Edge",
            href: "/books/the-disciplined-edge",
          },
        ],
      },
    ],
    category: "trading-psychology",
    tags: [
      "Trading psychology",
      "Discipline",
      "Self-trust",
      "FOMO",
      "Rule breaking",
      "Process",
      "Review",
    ],
    author: "Maor Saadia",
    readingTime: "8 min read",
    keyTakeaways: [
      "Technical knowledge does not automatically create behavioral consistency.",
      "Self-trust grows from repeated evidence that the trader follows their own rules.",
      "Confidence is weaker when it depends on emotional certainty before every trade.",
      "Review helps identify whether mistakes are technical, behavioral, or both.",
      "A process becomes trustworthy when it is practiced, recorded, and respected.",
    ],
    relatedArticleSlugs: ["why-execution-without-risk-architecture-fails"],
    relatedBookSlugs: [
      "the-disciplined-edge",
      "the-institutional-operator-book-2",
    ],
    relatedCollectionSlugs: ["the-institutional-operator"],
    relatedResourceSlugs: ["trading-discipline-reset-checklist"],
    seo: {
      title:
        "Knowing a Trading Model vs Trusting Your Process | MaorTrades Journal",
      description:
        "Explore the difference between technical trading knowledge and behavioral self-trust, including hesitation, FOMO, rule-following, and review.",
    },
    sections: [
      {
        id: "knowledge-is-not-behavior",
        heading: "Knowledge Is Not Behavior",
        paragraphs: [
          "A trader can know the entry model and still fail to execute it consistently. They may wait for confirmation, then freeze. They may take the correct entry once, then take three unplanned trades afterward. They may understand invalidation, then move the stop because the loss feels too real.",
          "This is the knowledge versus behavior gap. The model exists in the trader's mind, but the behavior does not yet match the model under pressure. More terminology does not automatically close that gap.",
          "The question becomes less about whether the trader can explain the setup and more about whether the trader can behave according to the process when uncertainty is active.",
        ],
      },
      {
        id: "hesitation-and-forced-action",
        heading: "Hesitation and Forced Action Can Come From the Same Problem",
        paragraphs: [
          "Hesitation and impulsive action may look opposite, but both can come from weak process trust. The hesitant trader waits for a feeling of certainty that the market cannot provide. The impulsive trader acts quickly to escape the discomfort of waiting.",
          "Both patterns place emotion above process. One refuses valid risk because it feels uncertain. The other accepts unplanned risk because waiting feels intolerable.",
          "The solution is not to become emotionless. It is to make the process specific enough that the trader can evaluate behavior after the fact.",
        ],
        callout: {
          label: "REMEMBER",
          text: "Confidence does not require emotional certainty. It requires enough process clarity to act, review, and improve without needing the market to feel safe.",
        },
      },
      {
        id: "self-trust-needs-evidence",
        heading: "Self-Trust Needs Evidence",
        paragraphs: [
          "Self-trust is not created by repeating that you are confident. It develops when your behavior repeatedly matches the process you said you would follow.",
          "That evidence can be simple: skipping trades outside the plan, accepting a predefined loss, leaving the stop where the model placed it, avoiding revenge entries, and recording decisions honestly. Over time, these behaviors tell the trader that the plan is not just a document. It is something they actually follow.",
          {
            text: "This is why discipline belongs beside execution and risk, not after them.",
            links: [
              {
                label: "The Institutional Operator Book 2",
                href: "/books/the-institutional-operator-book-2",
              },
            ],
          },
        ],
      },
      {
        id: "premature-profit-and-early-stop-movement",
        heading: "Premature Profit and Early Stop Movement",
        paragraphs: [
          "Two common signs of weak process trust are premature profit-taking and early stop movement. In both cases, the trader changes the plan while the trade is active because the pressure of uncertainty has become more important than the original structure.",
          "Sometimes reducing risk or taking partial profit may belong to a defined model. The problem is not management itself. The problem is management that appears only when emotion rises and disappears when the journal is reviewed.",
          "A process cannot be trusted if it changes every time discomfort appears. It needs rules for management as much as rules for entry.",
        ],
      },
      {
        id: "review-separates-technical-and-behavioral-errors",
        heading: "Review Separates Technical and Behavioral Errors",
        paragraphs: [
          "Not every mistake is technical. A trader may correctly identify the model but execute late. Another trader may enter perfectly but violate the risk plan. Another may skip the valid trade and then chase a worse version of it later.",
          "Review helps classify the error. Was the concept misunderstood? Was the setup invalid? Was the trade valid but managed poorly? Was the issue fear, impatience, FOMO, or revenge after a previous outcome?",
          "This classification matters because each problem requires a different response. Studying more charts may help a technical weakness. It will not automatically repair repeated rule-breaking.",
        ],
        bullets: [
          "Technical review asks whether the model was understood.",
          "Execution review asks whether the trade matched the plan.",
          "Behavioral review asks whether the trader respected the process under pressure.",
        ],
      },
      {
        id: "trusting-the-process",
        heading: "Trusting the Process",
        paragraphs: [
          "Trusting the process does not mean believing every trade will work. It means trusting that the process is clear enough to follow, honest enough to review, and stable enough to improve over time.",
          {
            text: "If you are unsure where the current gap sits, the MaorTrades Start Here guide is designed to help locate whether the next step is foundations, Smart Money structure, execution, risk, or discipline.",
            links: [
              {
                label: "Start Here",
                href: "/start-here",
              },
            ],
          },
        ],
        callout: {
          label: "CORE IDEA",
          text: "Self-trust develops when your behavior repeatedly matches the process you said you would follow.",
        },
      },
    ],
  },
];

export function getArticleCategory(categoryId: ArticleCategoryId) {
  return articleCategories.find((category) => category.id === categoryId);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => Boolean(article));
}

export function getArticlesByCategory(categoryId: ArticleCategoryId) {
  return articles.filter((article) => article.category === categoryId);
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? articles[0];
}
