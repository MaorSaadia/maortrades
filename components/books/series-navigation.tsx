import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { books } from "@/data/books";
import type { Book } from "@/types/book";
import { cn } from "@/lib/utils";

type SeriesNavigationProps = {
  book: Book;
};

export function SeriesNavigation({ book }: SeriesNavigationProps) {
  if (!book.series) {
    return null;
  }

  const seriesBooks = books
    .filter((item) => item.series === book.series)
    .sort((a, b) => (a.seriesNumber ?? 0) - (b.seriesNumber ?? 0));

  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-8 border-y border-border py-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="label text-gold">{book.series} Series</p>
            <h2 className="heading-lg mt-4 text-navy">
              CONTINUE THROUGH THE FLAGSHIP SERIES.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {seriesBooks.map((seriesBook) => {
              const current = seriesBook.slug === book.slug;
              return (
                <Link
                  key={seriesBook.id}
                  href={`/books/${seriesBook.slug}`}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "border p-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                    current
                      ? "border-gold bg-background"
                      : "border-border bg-background hover:border-gold",
                  )}
                >
                  <p className="label text-gold">Book {seriesBook.seriesNumber}</p>
                  <h3 className="heading-sm mt-3 text-navy">{seriesBook.title}</h3>
                  {seriesBook.subtitle ? (
                    <p className="body-sm mt-2 text-muted-foreground">
                      {seriesBook.subtitle}
                    </p>
                  ) : null}
                  <p className="label mt-5 text-muted-foreground">
                    {current ? "Current Book" : "View Book"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
