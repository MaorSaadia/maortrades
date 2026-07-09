import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { authorLabels } from "@/data/about";

export function AuthorProfile() {
  return (
    <Section id="author">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <aside className="border border-border bg-surface p-6 shadow-refined">
            <Eyebrow>The Author</Eyebrow>
            <h2 className="display-lg mt-5 break-words text-navy">
              MAOR SAADIA
            </h2>
            <div className="mt-8 grid gap-3">
              {authorLabels.map((label) => (
                <p
                  key={label}
                  className="label border-t border-border pt-3 text-muted-foreground"
                >
                  {label}
                </p>
              ))}
            </div>
          </aside>

          <div className="max-w-3xl">
            <p className="body-lg text-muted-foreground">
              Maor Saadia is the creator of MaorTrades and author of a growing
              library focused on day trading, Smart Money Concepts, ICT
              frameworks, execution, risk management, and trading psychology.
            </p>
            <p className="body-lg mt-5 text-muted-foreground">
              His work is built around a systems-oriented approach to education:
              breaking complex subjects into clear components, understanding how
              those components relate, and organizing them into practical
              frameworks.
            </p>
            <p className="body-lg mt-5 text-muted-foreground">
              The purpose behind MaorTrades is not to present trading as simple
              or predictable. It is to make difficult concepts clearer, more
              connected, and easier to study deliberately.
            </p>
            <p className="body mt-6 border-l border-gold pl-5 text-muted-foreground">
              With a background in software engineering, Maor brings a
              structured, systems-oriented perspective to organizing complex
              trading concepts and educational material.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
