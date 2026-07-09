import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { futureFoundationItems } from "@/data/about";

export function FutureDirection() {
  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-10 border-y border-border py-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Eyebrow>The Direction</Eyebrow>
            <h2 className="heading-lg mt-4 text-navy">
              A GROWING EDUCATIONAL ECOSYSTEM.
            </h2>
          </div>
          <div>
            <p className="body-lg text-muted-foreground">
              MaorTrades begins with books, but the long-term direction is
              broader: creating a connected educational ecosystem around
              structured learning, professional execution, risk awareness,
              review, and performance development.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {futureFoundationItems.map((item) => (
                <p
                  key={item}
                  className="label border-l border-gold bg-background p-4 text-navy"
                >
                  {item}
                </p>
              ))}
            </div>
            <p className="heading-sm mt-9 text-navy">
              The objective remains the same: less fragmented information, more
              structured development.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
