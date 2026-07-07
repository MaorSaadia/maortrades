import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const principles = [
  "Understand the Framework",
  "Execute with Purpose",
  "Manage Risk Professionally",
  "Build Disciplined Behavior",
];

export function PhilosophySection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 border-y border-border py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <Eyebrow>Why MaorTrades</Eyebrow>
            <h2 className="display-lg mt-5 text-navy">
              TRADING KNOWLEDGE NEEDS STRUCTURE.
            </h2>
          </div>
          <div className="max-w-2xl lg:pt-10">
            <p className="body-lg text-muted-foreground">
              Trading education is often consumed as disconnected concepts,
              isolated setups, and endless fragments of information.
            </p>
            <p className="body-lg mt-5 text-muted-foreground">
              MaorTrades is built around a different approach: structured
              progression. The goal is not to collect more terminology. It is to
              understand how market structure, liquidity, execution, risk, and
              discipline connect into one professional operating framework.
            </p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <li key={principle} className="border-l border-gold pl-4">
                  <span className="label text-navy">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
