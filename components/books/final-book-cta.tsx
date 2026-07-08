import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Book } from "@/types/book";

type FinalBookCTAProps = {
  book: Book;
};

export function FinalBookCTA({ book }: FinalBookCTAProps) {
  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold">Ready to Go Deeper?</Eyebrow>
            <h2 className="heading-lg mt-4 text-ivory">{book.title}</h2>
            {book.subtitle ? (
              <p className="body-lg mt-3 text-ivory/74">{book.subtitle}</p>
            ) : null}
            <p className="body mt-5 text-ivory/68">
              Direct PDF purchasing will be available when the MaorTrades store
              launches.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div
              role="status"
              className="label flex min-h-12 items-center justify-center border border-gold bg-gold px-5 text-center text-navy"
            >
              PDF Edition Not Yet Available
            </div>
            <Button href="/books" variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy">
              Back to All Books
            </Button>
            <Button href="/start-here" variant="text" className="text-gold hover:text-ivory">
              Start Here
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
