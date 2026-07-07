export type BookCategory = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  bookSlugs: string[];
};

export const bookCategories: BookCategory[] = [
  {
    id: "trading-foundations",
    navLabel: "Foundations",
    eyebrow: "01",
    title: "Trading Foundations",
    description:
      "Start with the essential mechanics of markets, charts, execution, and risk before moving into advanced institutional models.",
    bookSlugs: ["day-trading-for-absolute-beginners"],
  },
  {
    id: "smart-money-ict",
    navLabel: "Smart Money & ICT",
    eyebrow: "02",
    title: "Smart Money & ICT",
    description:
      "Build a deeper understanding of liquidity, structure, displacement, imbalance, institutional price delivery, and ICT concepts.",
    bookSlugs: ["smart-money-simplified", "the-institutional-ict-codex"],
  },
  {
    id: "advanced-execution",
    navLabel: "Advanced Execution",
    eyebrow: "03",
    title: "Advanced Execution",
    description:
      "Move from understanding concepts to applying precise models and execution frameworks.",
    bookSlugs: ["the-ict-playbook"],
  },
  {
    id: "complete-mastery",
    navLabel: "Complete Mastery",
    eyebrow: "04",
    title: "Complete Mastery",
    description:
      "A comprehensive path combining foundations, Smart Money Concepts, and advanced ICT models.",
    bookSlugs: ["the-modern-ict-traders-masterclass"],
  },
  {
    id: "psychology-discipline",
    navLabel: "Psychology",
    eyebrow: "05",
    title: "Psychology & Discipline",
    description:
      "Build the behavioral foundation required to execute consistently under pressure.",
    bookSlugs: ["the-disciplined-edge"],
  },
  {
    id: "flagship-series",
    navLabel: "Flagship Series",
    eyebrow: "06",
    title: "Flagship Series",
    description:
      "The complete Institutional Operator journey from market foundations through advanced execution, risk architecture, psychology, and professional identity.",
    bookSlugs: [
      "the-institutional-operator-book-1",
      "the-institutional-operator-book-2",
    ],
  },
];
