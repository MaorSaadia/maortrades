import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";

const stages = [
  {
    number: "01",
    name: "Foundations",
    book: "Day Trading for Absolute Beginners",
    description:
      "Understand markets, charts, order types, risk, and the foundations of day trading.",
  },
  {
    number: "02",
    name: "Smart Money",
    book: "Smart Money, Simplified",
    description:
      "Build a practical understanding of liquidity, structure, displacement, and institutional trading concepts.",
  },
  {
    number: "03",
    name: "Advanced Execution",
    book: "The ICT Playbook",
    description:
      "Study advanced ICT models, execution frameworks, and funded trading applications.",
  },
  {
    number: "04",
    name: "Professional Operator",
    book: "The Institutional Operator Series",
    description:
      "Bring structure, models, execution, risk, and trading psychology into one professional framework.",
  },
];

export function LearningPathSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="A Structured Path"
            title="START YOUR JOURNEY"
            description="Every trader starts from a different place. Explore the MaorTrades library through a clear progression from market foundations to advanced execution and professional discipline."
          />

          <ol className="relative grid gap-0 border-y border-border">
            {stages.map((stage, index) => (
              <li
                key={stage.number}
                className="grid gap-5 border-b border-border py-7 last:border-b-0 md:grid-cols-[6rem_1fr]"
              >
                <div className="flex items-center gap-4 md:block">
                  <span className="font-display text-5xl font-semibold leading-none text-gold">
                    {stage.number}
                  </span>
                  {index < stages.length - 1 ? (
                    <span className="hidden h-10 w-px bg-gold/35 md:mx-6 md:mt-4 md:block" />
                  ) : null}
                </div>
                <div className="grid gap-4 md:grid-cols-[0.65fr_1fr]">
                  <div>
                    <h3 className="heading-sm text-navy">{stage.name}</h3>
                    <p className="label mt-3 text-gold">{stage.book}</p>
                  </div>
                  <div>
                    <p className="body-sm text-muted-foreground">{stage.description}</p>
                    <Link
                      href="/start-here"
                      className="label mt-4 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      Explore Path
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
