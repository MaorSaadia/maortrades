import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

const seriesBooks = [
  {
    label: "Book 1",
    title: "The Institutional Operator",
    subtitle: "From Zero to Funded",
    theme: "Foundations, Smart Money Framework, Advanced ICT Models",
  },
  {
    label: "Book 2",
    title: "The Institutional Operator",
    subtitle: "Advanced Execution, Risk & The Disciplined Edge",
    theme:
      "Advanced execution, risk architecture, performance psychology, and professional discipline",
  },
];

export function FlagshipSeriesSection() {
  return (
    <Section surface="dark" className="overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow className="text-gold">The Flagship Series</Eyebrow>
            <h2 className="display-lg mt-5 text-ivory">THE INSTITUTIONAL OPERATOR</h2>
            <p className="body-lg mt-6 max-w-2xl text-ivory/72">
              The flagship two-volume system for moving from market foundations
              and Smart Money frameworks into advanced execution, risk architecture,
              performance psychology, and professional trading identity.
            </p>
            <div className="mt-9">
              <Button href="/books#flagship-series" variant="gold">
                Explore the Series
              </Button>
            </div>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2">
            <div
              aria-hidden="true"
              className="absolute -left-8 top-10 hidden h-px w-[calc(100%+4rem)] bg-gold/35 sm:block"
            />
            {seriesBooks.map((book, index) => (
              <article
                key={book.label}
                className="relative flex min-h-[28rem] flex-col justify-between border border-ivory/15 bg-surface-dark p-7 shadow-editorial"
              >
                <div>
                  <p className="label text-gold">{book.label}</p>
                  <div className="mt-8 h-px w-16 bg-gold" />
                </div>
                <div>
                  <h3 className="heading-md text-ivory">{book.title}</h3>
                  <p className="body mt-4 text-ivory/78">{book.subtitle}</p>
                </div>
                <div>
                  <p className="label text-ivory/45">Theme</p>
                  <p className="body-sm mt-2 text-ivory/70">{book.theme}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 font-display text-7xl leading-none text-ivory/[0.04]"
                >
                  {index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
