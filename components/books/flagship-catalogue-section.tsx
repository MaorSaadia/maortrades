import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { BookCategory } from "@/data/book-categories";
import type { Book } from "@/types/book";

type FlagshipCatalogueSectionProps = {
  category: BookCategory;
  books: Book[];
};

export function FlagshipCatalogueSection({
  category,
  books,
}: FlagshipCatalogueSectionProps) {
  return (
    <Section id={category.id} surface="dark" className="scroll-mt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="label text-gold">The Flagship Series</p>
            <h2 className="display-lg mt-5 text-ivory">THE INSTITUTIONAL OPERATOR</h2>
            <p className="body-lg mt-6 max-w-2xl text-ivory/72">
              A two-volume trading masterclass connecting market foundations,
              institutional concepts, advanced execution, risk architecture,
              psychology, and professional trading identity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {books.map((book) => (
              <article
                key={book.id}
                className="grid gap-6 border border-ivory/15 bg-surface-dark p-5"
              >
                <BookCover
                  book={book}
                  className="border-ivory/10 bg-navy/30"
                  imageClassName="max-h-[25rem]"
                />
                <div>
                  <p className="label text-gold">Book {book.seriesNumber}</p>
                  <h3 className="heading-sm mt-3 text-ivory">{book.title}</h3>
                  {book.subtitle ? (
                    <p className="body-sm mt-2 text-ivory/70">{book.subtitle}</p>
                  ) : null}
                  <p className="body-sm mt-4 text-ivory/65">{book.shortDescription}</p>
                  <Link
                    href={`/books/${book.slug}`}
                    className="label mt-6 inline-flex text-gold transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    View Book
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
