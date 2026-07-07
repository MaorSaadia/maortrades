import { BookCard } from "@/components/books/book-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { getBooksBySlugs } from "@/data/books";
import type { Book } from "@/types/book";

type RelatedBooksProps = {
  book: Book;
};

export function RelatedBooks({ book }: RelatedBooksProps) {
  const relatedBooks = getBooksBySlugs(book.relatedBookSlugs ?? []).slice(0, 3);

  if (!relatedBooks.length) {
    return null;
  }

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Continue the Reading Path"
          title="CONTINUE YOUR DEVELOPMENT"
          description="These recommendations are selected from the MaorTrades catalogue based on how the books connect in the learning path."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relatedBooks.map((relatedBook) => (
            <BookCard key={relatedBook.id} book={relatedBook} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
