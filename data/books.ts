import type { Book } from "@/types/book";

const defaultPurchase = {
  status: "coming-soon",
  formatLabel: "Digital PDF Edition",
  ctaLabel: "PDF Edition Not Yet Available",
  includedItems: [
    "Digital PDF edition",
    "Read on your preferred compatible device",
    "Direct PDF purchasing will be available when the MaorTrades store launches.",
  ],
} satisfies Book["purchase"];

export const books: Book[] = [
  {
    id: "day-trading-for-absolute-beginners",
    slug: "day-trading-for-absolute-beginners",
    title: "Day Trading for Absolute Beginners",
    subtitle: "From Zero to Your First Trade",
    shortDescription:
      "The MaorTrades starting point for new traders: market basics, charts, order types, trade planning, risk, and a first structured execution process.",
    fullDescription:
      "Day Trading for Absolute Beginners is written for readers who need trading to become understandable before it becomes advanced. It introduces the language, mechanics, and decision points a new trader must know before studying Smart Money Concepts or ICT models. The book focuses on charts, candlesticks, basic market structure, order types, risk, trade planning, and the practical sequence behind a first structured approach. Its role in the MaorTrades library is foundational: it helps the reader stop guessing at terminology and start seeing trading as a process built from preparation, execution, and review.",
    coverImage: "/books/day-trading-for-absolute-beginners.jpg",
    coverImageWidth: 1600,
    coverImageHeight: 2560,
    level: "Beginner",
    categories: ["Trading Foundations"],
    badge: "START HERE",
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: ["Foundations"],
    keyTopics: [
      "Market basics",
      "Chart reading",
      "Candlestick foundations",
      "Market structure basics",
      "Order types",
      "Trade planning",
      "Basic risk management",
      "Execution process",
    ],
    learnings: [
      "Understand the basic mechanics of markets, price charts, and trade execution.",
      "Recognize common candlestick behavior without overcomplicating early analysis.",
      "Differentiate market orders, limit orders, stop orders, and their practical use.",
      "Build a simple trade plan with entry logic, risk, invalidation, and review.",
      "Connect early market structure concepts to the advanced material that comes later.",
      "Develop the vocabulary required to continue through the MaorTrades reading path.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "Foundations",
        description:
          "Market mechanics, chart layout, candlestick language, and the essential vocabulary new traders need first.",
      },
      {
        title: "Planning and Execution",
        description:
          "Order types, trade preparation, execution steps, and the difference between watching price and making a decision.",
      },
      {
        title: "Risk and First Process",
        description:
          "Position risk, basic rules, trade review, and the beginning of a repeatable personal trading process.",
      },
    ],
    idealFor: [
      "Complete beginners who need the mechanics of day trading explained in a serious but accessible way.",
      "Readers who feel lost when charts, order types, or market structure terms appear in advanced material.",
      "New traders who want to place their first study around process rather than random signals.",
      "Students preparing to move into Smart Money Concepts after building basic chart and risk literacy.",
    ],
    relatedBookSlugs: [
      "smart-money-simplified",
      "the-modern-ict-traders-masterclass",
      "the-institutional-operator-book-1",
    ],
    preview: {
      label: "Foundation Preview",
      description:
        "A selected beginner-focused preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample pages for this title are planned, but no downloadable chapter is connected in this phase.",
    },
    seo: {
      title:
        "Day Trading for Absolute Beginners | Beginner Trading Book by Maor Saadia",
      description:
        "A beginner day trading book covering charts, candlesticks, order types, risk management, trade planning, and first execution foundations.",
    },
  },
  {
    id: "smart-money-simplified",
    slug: "smart-money-simplified",
    title: "Smart Money, Simplified",
    subtitle: "Your Complete ICT Blueprint from Beginner to Consistent Trader",
    shortDescription:
      "A guided introduction to Smart Money Concepts and ICT language, organized around liquidity, structure, displacement, imbalance, narrative, and confluence.",
    fullDescription:
      "Smart Money, Simplified is for traders who have heard the terminology but need the concepts arranged into a usable framework. Rather than treating liquidity, market structure, displacement, Fair Value Gaps, Order Blocks, and narrative as isolated definitions, the book shows how they relate to one another inside a clearer model of price delivery. It is not the most advanced title in the catalogue; its value is clarity, sequencing, and foundation-building. The reader should come away with a stronger map for studying ICT and Smart Money Concepts before moving into tactical model selection or advanced execution work.",
    coverImage: "/books/smart-money-simplified.jpg",
    coverImageWidth: 1600,
    coverImageHeight: 2560,
    level: "Beginner to Intermediate",
    categories: ["Smart Money & ICT"],
    badge: "SMART MONEY FOUNDATIONS",
    featured: true,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: ["Smart Money"],
    keyTopics: [
      "Liquidity",
      "Market structure",
      "Displacement",
      "Imbalance",
      "Fair Value Gaps",
      "Order Blocks",
      "Price delivery",
      "Trading narrative",
      "Confluence",
    ],
    learnings: [
      "Understand liquidity as a structural idea rather than a buzzword.",
      "Recognize how displacement and imbalance change the quality of market context.",
      "Differentiate Fair Value Gaps, Order Blocks, and related concepts by function.",
      "Connect Smart Money terminology into a cleaner preparation framework.",
      "Build a basic ICT narrative before moving into advanced setup execution.",
      "Apply confluence without turning every chart feature into a trade reason.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "Smart Money Foundations",
        description:
          "Liquidity, market structure, and the conceptual shift from retail chart reading to contextual analysis.",
      },
      {
        title: "ICT Building Blocks",
        description:
          "Displacement, imbalance, Fair Value Gaps, Order Blocks, and price-delivery concepts arranged in sequence.",
      },
      {
        title: "Framework Integration",
        description:
          "Narrative, confluence, and the process of moving from terminology toward structured understanding.",
      },
    ],
    idealFor: [
      "Traders who know basic chart terms and want a clear entry into Smart Money Concepts.",
      "Readers who have learned ICT vocabulary online but do not yet see how the ideas connect.",
      "Beginners moving beyond simple support, resistance, and indicator-based thinking.",
      "Intermediate traders who need a cleaner conceptual base before studying advanced models.",
    ],
    relatedBookSlugs: [
      "the-institutional-ict-codex",
      "the-ict-playbook",
      "the-institutional-operator-book-1",
    ],
    relatedResourceSlugs: ["smart-money-quick-reference"],
    preview: {
      label: "Smart Money Preview",
      description:
        "A selected Smart Money Concepts preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample material for this title is planned, but no interior preview is connected in this phase.",
    },
    seo: {
      title: "Smart Money, Simplified | ICT and Smart Money Concepts Book",
      description:
        "A structured Smart Money Concepts and ICT trading book covering liquidity, market structure, displacement, Fair Value Gaps, Order Blocks, and narrative.",
    },
  },
  {
    id: "the-ict-playbook",
    slug: "the-ict-playbook",
    title: "The ICT Playbook",
    subtitle: "Mastering the Advanced ICT Models for Funded Trading",
    shortDescription:
      "An advanced execution-focused ICT book for traders moving from concept recognition into model selection, setup sequencing, invalidation, and targeting.",
    fullDescription:
      "The ICT Playbook serves traders who already understand the core language of ICT and now need tactical organization. Its focus is not beginner explanation, but the practical movement from context to setup: model selection, liquidity conditions, displacement confirmation, retracement logic, entry refinement, invalidation, targets, and session-based opportunity. The funded-account context is treated as an execution environment that demands rules and restraint, not as a shortcut or promise. In the MaorTrades path, this book belongs after foundational and Smart Money study, when the reader is ready to think in repeatable models and cleaner execution standards.",
    coverImage: "/books/the-ict-playbook.jpg",
    coverImageWidth: 960,
    coverImageHeight: 1500,
    level: "Advanced",
    categories: ["Advanced Execution"],
    badge: "ADVANCED EXECUTION",
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: ["Advanced Execution"],
    keyTopics: [
      "Advanced ICT models",
      "Model selection",
      "Liquidity context",
      "Displacement confirmation",
      "Retracement logic",
      "Entry refinement",
      "Invalidation",
      "Targeting",
      "Session opportunities",
      "Funded trading context",
    ],
    learnings: [
      "Differentiate advanced ICT models by context, purpose, and execution demand.",
      "Build a setup sequence from liquidity context through confirmation and entry.",
      "Recognize when displacement supports continuation, retracement, or no-trade decisions.",
      "Define invalidation and targeting before execution pressure appears.",
      "Apply session context without forcing trades into every market window.",
      "Develop repeatable setup frameworks suited to stricter evaluation environments.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "Model Context",
        description:
          "How advanced ICT models are selected, filtered, and placed inside broader market and session conditions.",
      },
      {
        title: "Execution Sequencing",
        description:
          "Liquidity, confirmation, retracement, entry refinement, invalidation, and targets arranged as a practical workflow.",
      },
      {
        title: "Funded-Account Application",
        description:
          "Using execution standards, risk restraint, and model discipline in evaluation-style trading conditions.",
      },
    ],
    idealFor: [
      "Traders already familiar with liquidity, structure, displacement, and imbalance concepts.",
      "ICT students who understand terminology but struggle to sequence an actual setup.",
      "Funded-account or evaluation traders who need execution rules before taking risk.",
      "Advanced readers comparing models and deciding when a setup is valid enough to trade.",
    ],
    relatedBookSlugs: [
      "the-institutional-ict-codex",
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
    ],
    relatedResourceSlugs: ["ict-trading-checklist"],
    preview: {
      label: "Execution Preview",
      description:
        "A selected advanced-execution preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample pages for this title are planned, but no downloadable preview is connected in this phase.",
    },
    seo: {
      title: "The ICT Playbook | Advanced ICT Trading Models and Execution",
      description:
        "An advanced ICT trading book focused on model selection, liquidity context, displacement confirmation, entry refinement, invalidation, targeting, and funded trading execution.",
    },
  },
  {
    id: "the-institutional-ict-codex",
    slug: "the-institutional-ict-codex",
    title: "The Institutional ICT Codex",
    shortDescription:
      "A systematic ICT and Smart Money reference for terminology, concept relationships, liquidity mechanics, market structure, price delivery, and execution logic.",
    fullDescription:
      "The Institutional ICT Codex is positioned as a reference, not a linear beginner course. Where Smart Money, Simplified guides the reader through an educational progression, the Codex organizes ICT and Smart Money terminology into a systematic conceptual map. It is designed for traders who want clearer relationships between structure, liquidity, price delivery, imbalance concepts, execution language, and market-context terms. The book can support intermediate study, advanced review, and cross-checking while reading more tactical MaorTrades titles. Its purpose is precision: helping the reader categorize concepts accurately without mistaking a glossary for a trade plan.",
    coverImage: "/books/institutional-ict-codex.jpg",
    coverImageWidth: 625,
    coverImageHeight: 1000,
    level: "Intermediate to Advanced",
    categories: ["Smart Money & ICT"],
    badge: "REFERENCE GUIDE",
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: ["Smart Money", "Advanced Execution"],
    keyTopics: [
      "ICT terminology",
      "Smart Money Concepts",
      "Concept relationships",
      "Liquidity mechanics",
      "Market structure",
      "Price delivery",
      "Imbalance concepts",
      "Execution terminology",
      "Concept cross-reference",
    ],
    learnings: [
      "Organize ICT terminology by function instead of memorizing disconnected definitions.",
      "Recognize relationships between liquidity, structure, imbalance, and delivery concepts.",
      "Differentiate reference knowledge from execution rules and trade selection.",
      "Use concept categories to review advanced material with more precision.",
      "Connect Smart Money language to the preparation and execution process.",
      "Build a cleaner reference base for study across the MaorTrades catalogue.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "Terminology System",
        description:
          "ICT and Smart Money concepts organized as a reference layer for study, review, and cross-checking.",
      },
      {
        title: "Structure, Liquidity, and Delivery",
        description:
          "Concept relationships across market structure, liquidity mechanics, price delivery, and imbalance.",
      },
      {
        title: "Execution Language",
        description:
          "The terminology that supports trade planning, model discussion, invalidation, and contextual review.",
      },
    ],
    idealFor: [
      "Readers seeking a reference guide rather than a step-by-step introduction.",
      "Traders who know many ICT terms but want better conceptual organization.",
      "Intermediate students reviewing liquidity, structure, price delivery, and execution language.",
      "Advanced readers who want a companion while studying model-focused books.",
    ],
    relatedBookSlugs: [
      "smart-money-simplified",
      "the-ict-playbook",
      "the-institutional-operator-book-1",
    ],
    preview: {
      label: "Reference Preview",
      description:
        "A selected reference-style preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample reference pages are planned, but no interior preview is connected in this phase.",
    },
    seo: {
      title: "The Institutional ICT Codex | ICT Trading Reference Guide",
      description:
        "A systematic ICT and Smart Money Concepts reference covering terminology, liquidity mechanics, market structure, price delivery, imbalance concepts, and execution logic.",
    },
  },
  {
    id: "the-modern-ict-traders-masterclass",
    slug: "the-modern-ict-traders-masterclass",
    title: "The Modern ICT Trader's Masterclass",
    subtitle: "The 3-in-1 Path from A-Z to Day Trading Mastery",
    shortDescription:
      "A broad combined curriculum that connects beginner trading foundations, Smart Money Concepts, ICT framework development, and advanced model study.",
    fullDescription:
      "The Modern ICT Trader's Masterclass is the broad combined path in the MaorTrades library. It is for readers who prefer one integrated curriculum instead of moving through separate books by topic. The book brings foundational trading education, Smart Money Concepts, ICT framework development, advanced models, execution, and concept integration into a single progression. Its role is breadth: helping the reader see how the A-to-Z learning path fits together. It differs from The Institutional Operator series by functioning as a combined curriculum, while the Operator volumes are positioned as the deeper flagship professional-development system.",
    coverImage: "/books/modern-ict-traders-masterclass.png",
    coverImageWidth: 512,
    coverImageHeight: 800,
    level: "Complete Learning Path",
    categories: ["Complete Mastery"],
    badge: "COMPLETE PATH",
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
    keyTopics: [
      "Beginner foundations",
      "Day trading process",
      "Smart Money Concepts",
      "ICT framework development",
      "Advanced models",
      "Execution planning",
      "Concept integration",
      "A-to-Z learning path",
    ],
    learnings: [
      "Connect beginner trading foundations to Smart Money and ICT study.",
      "Build a progressive view of how concepts should be introduced and revisited.",
      "Recognize where market basics, liquidity, structure, and models fit in one path.",
      "Develop a broader ICT framework before narrowing into specialized execution.",
      "Reduce fragmented study by organizing the curriculum from fundamentals to application.",
      "Identify which separate MaorTrades books can deepen each stage after completion.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "Foundations",
        description:
          "Market mechanics, chart context, basic structure, risk awareness, and the base layer for later study.",
      },
      {
        title: "Smart Money and ICT Framework",
        description:
          "Liquidity, displacement, imbalance, narrative, and the concepts that connect analysis to preparation.",
      },
      {
        title: "Advanced Model Integration",
        description:
          "A progression into advanced ICT models, execution logic, and the organization of a complete learning path.",
      },
    ],
    idealFor: [
      "Readers who want one broad curriculum instead of choosing several separate entry points.",
      "Traders moving from basic day trading into Smart Money Concepts and ICT frameworks.",
      "Students who feel their trading education is fragmented and want a clearer A-to-Z path.",
      "Readers deciding whether to later specialize in references, playbooks, or the flagship series.",
    ],
    relatedBookSlugs: [
      "day-trading-for-absolute-beginners",
      "smart-money-simplified",
      "the-ict-playbook",
    ],
    preview: {
      label: "Masterclass Preview",
      description:
        "A selected curriculum preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample curriculum pages are planned, but no interior preview is connected in this phase.",
    },
    seo: {
      title:
        "The Modern ICT Trader's Masterclass | Complete ICT Trading Curriculum",
      description:
        "A complete ICT trading curriculum connecting day trading foundations, Smart Money Concepts, ICT framework development, advanced models, and execution planning.",
    },
  },
  {
    id: "the-disciplined-edge",
    slug: "the-disciplined-edge",
    title: "The Disciplined Edge",
    subtitle: "Mastering the Mental Game of Institutional Trading",
    shortDescription:
      "A trading psychology and discipline book about the gap between knowing what to do and behaving according to that knowledge under pressure.",
    fullDescription:
      "The Disciplined Edge focuses on the behavioral side of trading performance. Many traders do not fail because they lack another concept; they struggle because execution pressure exposes fear, impatience, FOMO, overtrading, revenge trading, rule breaking, and weak review habits. This book treats discipline as practical behavior, not emotional perfection. It is written for traders whose technical knowledge is ahead of their consistency and who need a more professional relationship with preparation, risk, mistakes, recovery, self-trust, and identity. In the catalogue, it stands apart as the specialized performance and behavior track.",
    coverImage: "/books/the-disciplined-edge.jpg",
    coverImageWidth: 960,
    coverImageHeight: 1500,
    level: "All Levels",
    categories: ["Psychology & Discipline"],
    badge: "TRADING PSYCHOLOGY",
    featured: true,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: ["Professional Discipline"],
    keyTopics: [
      "Knowledge vs behavior gap",
      "Discipline",
      "FOMO",
      "Overtrading",
      "Revenge trading",
      "Rule breaking",
      "Self-trust",
      "Risk behavior",
      "Mistake recovery",
      "Trading identity",
    ],
    learnings: [
      "Understand why knowing a rule is different from following it under pressure.",
      "Recognize fear, impatience, FOMO, overtrading, and revenge-trading patterns.",
      "Differentiate confidence from self-trust built through preparation and review.",
      "Build routines that support rule adherence, risk behavior, and recovery after mistakes.",
      "Develop a more stable trading identity without expecting emotional perfection.",
      "Apply review practices that turn mistakes into behavioral feedback.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "The Behavior Gap",
        description:
          "The difference between technical knowledge and the behavior required to execute it consistently.",
      },
      {
        title: "Pressure, Rules, and Risk",
        description:
          "Fear, impatience, FOMO, overtrading, rule breaking, and the habits that distort risk decisions.",
      },
      {
        title: "Recovery and Identity",
        description:
          "Self-trust, review, recovery after mistakes, routines, and the development of professional behavior.",
      },
    ],
    idealFor: [
      "Traders whose technical understanding is stronger than their real-time decision behavior.",
      "Readers who break rules through fear, impatience, FOMO, or revenge trading.",
      "Traders rebuilding self-trust after repeated execution mistakes.",
      "All-level readers who want the psychology and discipline track without another technical model book.",
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-2",
      "the-institutional-operator-book-1",
      "the-ict-playbook",
    ],
    relatedResourceSlugs: ["trading-discipline-reset-checklist"],
    preview: {
      label: "Performance Preview",
      description:
        "A selected trading-behavior preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample pages for this title are planned, but no downloadable preview is connected in this phase.",
    },
    seo: {
      title: "The Disciplined Edge | Trading Psychology and Discipline Book",
      description:
        "A trading psychology book focused on discipline, self-trust, trading behavior, risk decisions, overtrading, revenge trading, recovery, and professional routines.",
    },
  },
  {
    id: "the-institutional-operator-book-1",
    slug: "the-institutional-operator-book-1",
    title: "The Institutional Operator",
    subtitle: "From Zero to Funded",
    shortDescription:
      "Book 1 of the flagship series, progressing from market foundations into Smart Money framework development and advanced ICT model application.",
    fullDescription:
      "The Institutional Operator: From Zero to Funded is the first volume of the flagship MaorTrades series. It is designed as a structured progression from foundational market understanding into Smart Money frameworks and advanced ICT model application. The verified high-level path moves through The Retail Awakening, Smart Money Framework, and Advanced ICT Models, helping the reader connect candlesticks, market participants, structure, liquidity, displacement, imbalance, Fair Value Gaps, Order Blocks, premium and discount, session behavior, daily bias, OTE, confluence, targeting, and invalidation into a larger operating framework. Its role is progression: foundations to framework to advanced model application.",
    coverImage: "/books/institutional-operator-book-1.jpg",
    coverImageWidth: 1024,
    coverImageHeight: 1536,
    level: "Beginner to Advanced",
    categories: ["Flagship Series"],
    badge: "FLAGSHIP - BOOK 1",
    featured: true,
    series: "The Institutional Operator",
    seriesNumber: 1,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: ["Foundations", "Smart Money", "Advanced Execution"],
    keyTopics: [
      "Candlestick foundations",
      "Market participants",
      "Liquidity sweeps",
      "Displacement",
      "Fair Value Gaps",
      "Order Blocks",
      "Premium and Discount",
      "BOS and MSS",
      "Judas Swing",
      "Daily Bias",
      "OTE",
      "Model sequencing",
    ],
    learnings: [
      "Build from foundational market mechanics into a Smart Money operating framework.",
      "Recognize how structure, liquidity, displacement, and imbalance shape trade context.",
      "Connect PD Arrays, dealing ranges, premium and discount, and OTE to preparation.",
      "Apply session rhythm, intraday narrative, daily bias, and targeting as a progression.",
      "Differentiate valid model development from failed models and invalidation conditions.",
      "Prepare for advanced execution standards without skipping the foundation layer.",
    ],
    structureType: "verified-parts",
    bookStructure: [
      {
        number: "PART I",
        title: "The Retail Awakening",
        description:
          "The transition from unstructured retail learning into market foundations, participants, candlesticks, and structure.",
      },
      {
        number: "PART II",
        title: "Smart Money Framework",
        description:
          "Liquidity, sweeps, displacement, imbalance, Fair Value Gaps, Order Blocks, BOS, MSS, inducement, and price context.",
      },
      {
        number: "PART III",
        title: "Advanced ICT Models",
        description:
          "Session behavior, daily bias, dealing ranges, PD Arrays, OTE, confluence, timeframe layering, targeting, sequencing, and invalidation.",
      },
    ],
    idealFor: [
      "Readers who want the flagship progression from foundations into Smart Money and advanced ICT models.",
      "Traders who need structure across candlesticks, liquidity, session behavior, and model sequencing.",
      "Students preparing for funded-style execution while still needing a complete development path.",
      "Readers who plan to continue into Book 2 for advanced execution, risk, psychology, and identity.",
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-2",
      "smart-money-simplified",
      "the-ict-playbook",
    ],
    relatedResourceSlugs: ["daily-trading-preparation-sheet"],
    preview: {
      label: "Operator Book 1 Preview",
      description:
        "A selected flagship Book 1 preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample pages for this volume are planned, but no downloadable preview is connected in this phase.",
    },
    seo: {
      title:
        "The Institutional Operator Book 1 | From Zero to Funded by Maor Saadia",
      description:
        "The first Institutional Operator volume, covering market foundations, Smart Money frameworks, liquidity, structure, Fair Value Gaps, Order Blocks, daily bias, OTE, and advanced ICT model application.",
    },
  },
  {
    id: "the-institutional-operator-book-2",
    slug: "the-institutional-operator-book-2",
    title: "The Institutional Operator",
    subtitle: "Advanced Execution, Risk & The Disciplined Edge",
    shortDescription:
      "Book 2 of the flagship series, extending the system into advanced execution models, risk architecture, performance psychology, and professional identity.",
    fullDescription:
      "The Institutional Operator: Advanced Execution, Risk & The Disciplined Edge continues the flagship system beyond concept development. This volume is broader than the standalone psychology book: it combines advanced execution models, risk and performance architecture, professional review, compliance, feedback loops, and the behavioral layer required to sustain decision quality. Topics include Breaker Blocks, Mitigation Blocks, Unicorn Entry, Inversion and Implied Fair Value Gaps, Standard Deviation Projections, Silver Bullet, TGIF, NWOG, NDOG, stop loss work, journaling, playbook development, accountability, the Knowledge vs Behavior Gap, rule-breaking cycles, self-trust, recovery, and trading identity. Its role is professional operator development.",
    coverImage: "/books/institutional-operator-book-2.jpg",
    coverImageWidth: 1023,
    coverImageHeight: 1537,
    level: "Advanced",
    categories: ["Flagship Series"],
    badge: "FLAGSHIP - BOOK 2",
    featured: true,
    series: "The Institutional Operator",
    seriesNumber: 2,
    formats: ["pdf"],
    author: "Maor Saadia",
    purchaseStatus: "coming-soon",
    purchase: defaultPurchase,
    readingPathStages: [
      "Advanced Execution",
      "Professional Operator",
      "Professional Discipline",
    ],
    keyTopics: [
      "Breaker Blocks",
      "Mitigation Blocks",
      "Unicorn Entry",
      "Inversion Fair Value Gaps",
      "Standard Deviation Projections",
      "Silver Bullet",
      "TGIF",
      "NWOG and NDOG",
      "Stop Loss Mastery",
      "Journaling",
      "Feedback loops",
      "Trading identity",
    ],
    learnings: [
      "Apply advanced execution models inside a broader professional operating system.",
      "Differentiate model opportunity from risk permission and emotional risk-taking.",
      "Build risk architecture around fixed risk, review, compliance, and feedback loops.",
      "Develop a trading playbook that connects models, rules, accountability, and review.",
      "Recognize the behavior patterns that weaken execution even when analysis is correct.",
      "Connect advanced execution, risk management, psychology, and identity into one framework.",
    ],
    structureType: "editorial-topics",
    bookStructure: [
      {
        title: "Advanced Execution Models",
        description:
          "Breaker Blocks, Mitigation Blocks, Unicorn Entry, Inversion and Implied Fair Value Gaps, projections, Silver Bullet, TGIF, NWOG, NDOG, and stop loss work.",
      },
      {
        title: "Risk and Performance Architecture",
        description:
          "Fixed risk versus emotional risk, journaling, feedback loops, playbook development, accountability, compliance, and professional review.",
      },
      {
        title: "Performance Psychology and Identity",
        description:
          "Knowledge versus behavior, rule-breaking cycles, fear, impatience, force-action patterns, self-trust, recovery, rebuild, and trading identity.",
      },
    ],
    idealFor: [
      "Advanced readers continuing from The Institutional Operator Book 1.",
      "Traders who want execution models connected to risk architecture and review standards.",
      "Funded-account or evaluation traders working on compliance, accountability, and playbook development.",
      "Readers who need the professional identity layer alongside advanced technical execution.",
    ],
    relatedBookSlugs: [
      "the-institutional-operator-book-1",
      "the-disciplined-edge",
      "the-ict-playbook",
    ],
    preview: {
      label: "Operator Book 2 Preview",
      description:
        "A selected flagship Book 2 preview will be available before direct sales launch.",
      statusLabel: "Preview Not Yet Connected",
      statusText:
        "Sample pages for this volume are planned, but no downloadable preview is connected in this phase.",
    },
    seo: {
      title:
        "The Institutional Operator Book 2 | Advanced Execution, Risk and Discipline",
      description:
        "The second Institutional Operator volume covering advanced ICT execution models, risk management, journaling, trading playbooks, performance psychology, self-trust, recovery, and professional trading identity.",
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
