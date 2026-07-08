import { BookCard } from "@/components/books/book-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { books, getBookBySlug } from "@/data/books";

const featuredSlugs = [
  "the-institutional-operator-book-1",
  "the-institutional-operator-book-2",
  "smart-money-simplified",
  "the-disciplined-edge",
];

export function FeaturedBooksSection() {
  const featuredBooks = featuredSlugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is (typeof books)[number] => Boolean(book));

  return (
    <Section surface="surface">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Featured Books"
            title="EXPLORE THE LIBRARY"
            description="A selected view of the MaorTrades catalogue, spanning the flagship series, Smart Money study, advanced execution, and trading behavior."
          />
          <Button href="/books" variant="outline" className="md:mb-1">
            View All Books
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
