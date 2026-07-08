import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book } from "@/types/book";
import type { Collection } from "@/types/collection";

type IncludedBooksProps = {
  collection: Collection;
  books: Book[];
};

export function IncludedBooks({ collection, books }: IncludedBooksProps) {
  const orderBySlug = new Map(
    (collection.recommendedOrder ?? []).map((item) => [item.bookSlug, item]),
  );

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Included Books"
          title="INCLUDED IN THIS COLLECTION"
          description="Each title keeps its own role while contributing to the wider reading path."
        />
        <div className="mt-10 grid gap-5">
          {books.map((book, index) => {
            const order = orderBySlug.get(book.slug);
            return (
              <article
                key={book.id}
                className="grid gap-6 border border-border bg-surface p-4 shadow-refined md:grid-cols-[minmax(9rem,13rem)_1fr] md:p-5"
              >
                <BookCover
                  book={book}
                  className="self-start"
                  imageClassName="max-h-[20rem]"
                />
                <div className="flex min-w-0 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="label border border-gold/40 px-2 py-1 text-gold">
                      {order?.label ?? String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="label border border-border px-2 py-1 text-muted-foreground">
                      {book.level}
                    </p>
                  </div>
                  <p className="label mt-5 text-gold">
                    {order?.role ?? "Included Title"}
                  </p>
                  <h3 className="heading-sm mt-2 break-words text-navy">
                    {book.title}
                  </h3>
                  {book.subtitle ? (
                    <p className="body-sm mt-2 text-muted-foreground">
                      {book.subtitle}
                    </p>
                  ) : null}
                  <p className="body-sm mt-4 text-muted-foreground">
                    {order?.rationale ?? book.shortDescription}
                  </p>
                  <div className="mt-auto border-t border-border pt-5">
                    <Link
                      href={`/books/${book.slug}`}
                      className="label text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      View Book
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
