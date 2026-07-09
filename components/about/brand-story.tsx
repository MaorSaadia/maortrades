import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const developmentSequence = [
  "Begin with the foundation",
  "Build the conceptual framework",
  "Study advanced execution",
  "Develop risk architecture",
  "Review behavior",
  "Build professional discipline",
];

export function BrandStory() {
  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>The Story</Eyebrow>
            <h2 className="display-lg mt-5 max-w-2xl text-navy">
              WHY MAORTRADES EXISTS.
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="body-lg text-muted-foreground">
              The modern trader has access to more educational content than
              ever. That creates opportunity, but it also creates a problem:
              concepts are often learned separately.
            </p>
            <div className="my-8 border-y border-border py-7">
              <p className="heading-md text-navy">
                Market structure without context. Liquidity without narrative.
                Entries without invalidation. Risk rules without behavioral
                discipline.
              </p>
            </div>
            <p className="body-lg text-muted-foreground">
              MaorTrades was created to bring these areas together. The
              objective is not to add more isolated terminology; it is to
              organize information into frameworks that help readers understand
              how individual concepts connect.
            </p>
            <ol className="mt-9 grid gap-3">
              {developmentSequence.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[3rem_1fr] items-start gap-4 border-t border-border pt-4"
                >
                  <span className="label text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="body-sm text-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
