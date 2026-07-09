import { BookCover } from "@/components/books/book-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getBooksBySlugs } from "@/data/books";

const volumePaths = [
  {
    label: "Volume 01",
    subtitle: "From Zero to Funded",
    stages: ["The Retail Awakening", "Smart Money Framework", "Advanced ICT Models"],
  },
  {
    label: "Volume 02",
    subtitle: "Advanced Execution, Risk & The Disciplined Edge",
    stages: [
      "Advanced Execution",
      "Risk Architecture",
      "Performance Psychology",
      "Professional Identity",
    ],
  },
];

export function FlagshipWork() {
  const operatorBooks = getBooksBySlugs([
    "the-institutional-operator-book-1",
    "the-institutional-operator-book-2",
  ]);

  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow className="text-gold">The Flagship Work</Eyebrow>
            <h2 className="display-lg mt-5 max-w-4xl text-ivory">
              A TWO-VOLUME PROFESSIONAL DEVELOPMENT JOURNEY.
            </h2>
            <p className="body-lg mt-6 max-w-3xl text-ivory/72">
              The Institutional Operator series represents the broadest
              expression of the MaorTrades educational philosophy.
            </p>
            <p className="body mt-5 max-w-3xl text-ivory/66">
              The journey begins with understanding the market, develops through
              institutional frameworks and advanced models, and continues into
              execution, risk, review, psychology, discipline, and professional
              identity.
            </p>
            <div className="mt-9">
              <Button
                href="/collections/the-institutional-operator"
                variant="gold"
                className="max-w-full text-center"
              >
                Explore the Institutional Operator Collection
              </Button>
            </div>
          </div>

          <div className="grid gap-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {operatorBooks.map((book) => (
                <BookCover
                  key={book.id}
                  book={book}
                  imageClassName="max-h-[28rem]"
                  className="border-ivory/15 bg-surface-dark"
                />
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {volumePaths.map((volume) => (
                <article
                  key={volume.label}
                  className="border border-ivory/15 bg-surface-dark p-5"
                >
                  <p className="label text-gold">{volume.label}</p>
                  <h3 className="heading-sm mt-3 text-ivory">
                    {volume.subtitle}
                  </h3>
                  <ol className="mt-5 grid gap-3">
                    {volume.stages.map((stage, index) => (
                      <li
                        key={stage}
                        className="grid grid-cols-[2rem_1fr] gap-3"
                      >
                        <span className="label text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="body-sm border-b border-ivory/10 pb-2 text-ivory/70">
                          {stage}
                        </span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
