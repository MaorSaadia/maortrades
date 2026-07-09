import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getBooksBySlugs } from "@/data/books";
import { libraryRoles } from "@/data/about";

export function ConnectedLibrary() {
  const featuredBooks = getBooksBySlugs([
    "day-trading-for-absolute-beginners",
    "smart-money-simplified",
    "the-ict-playbook",
  ]);

  return (
    <Section id="library" surface="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <Eyebrow>The Library</Eyebrow>
            <h2 className="heading-lg mt-4 max-w-3xl text-navy">
              DIFFERENT BOOKS. CONNECTED PURPOSE.
            </h2>
            <p className="body-lg mt-6 max-w-3xl text-muted-foreground">
              The MaorTrades catalogue serves different reader needs. Some books
              build foundations, some clarify concepts, some focus on execution,
              and others develop the behavioral layer that supports risk and
              review.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {featuredBooks.map((book) => (
                <BookCover
                  key={book.id}
                  book={book}
                  imageClassName="max-h-64"
                  className="p-1.5 sm:p-2"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-0 border-y border-border">
            {libraryRoles.map((role) => {
              const books = getBooksBySlugs(role.bookSlugs);
              return (
                <article
                  key={role.role}
                  className="grid gap-4 border-b border-border py-5 last:border-b-0 md:grid-cols-[0.6fr_1fr]"
                >
                  <div>
                    <p className="label text-gold">{role.role}</p>
                    <div className="mt-2 grid gap-1">
                      {books.map((book) => (
                        <Link
                          key={book.id}
                          href={`/books/${book.slug}`}
                          className="heading-sm break-words text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                          {book.title}
                          {book.subtitle ? (
                            <span className="body-sm block text-muted-foreground">
                              {book.subtitle}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <p className="body-sm text-muted-foreground">{role.purpose}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/books">Explore All Books</Button>
          <Button href="/collections" variant="outline">
            View Collections
          </Button>
        </div>
      </Container>
    </Section>
  );
}
