import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { maorTradesApproach } from "@/data/about";

export function MaorTradesApproach() {
  return (
    <Section id="approach">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.58fr_1.42fr]">
          <div>
            <Eyebrow>How the Library Is Built</Eyebrow>
            <h2 className="heading-lg mt-4 text-navy">
              THE MAORTRADES APPROACH.
            </h2>
          </div>

          <ol className="grid gap-0">
            {maorTradesApproach.map((item) => (
              <li
                key={item.number}
                className="grid gap-4 border-t border-border py-7 md:grid-cols-[6rem_0.7fr_1fr]"
              >
                <p className="font-display text-5xl font-semibold leading-none text-gold">
                  {item.number}
                </p>
                <h3 className="heading-sm text-navy">{item.title}</h3>
                <p className="body text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
