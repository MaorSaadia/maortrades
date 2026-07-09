import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { brandPrinciples } from "@/data/about";

export function BrandPrinciples() {
  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow className="text-gold">What MaorTrades Believes</Eyebrow>
            <h2 className="display-lg mt-5 max-w-3xl text-ivory">
              THE FRAMEWORK MATTERS.
            </h2>
          </div>

          <div className="grid gap-6">
            {brandPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="border-t border-ivory/15 pt-6"
              >
                <h3 className="heading-sm text-ivory">{principle.title}</h3>
                <p className="body mt-2 text-ivory/68">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
