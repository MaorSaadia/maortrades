import { BookCard } from "@/components/books/book-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { BookCategory } from "@/data/book-categories";
import type { Book } from "@/types/book";

type BookCategorySectionProps = {
  category: BookCategory;
  books: Book[];
  surface?: "default" | "surface";
};

export function BookCategorySection({
  category,
  books,
  surface = "default",
}: BookCategorySectionProps) {
  return (
    <Section id={category.id} surface={surface} className="scroll-mt-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div className="max-w-xl">
            <p className="label text-gold">{category.eyebrow}</p>
            <h2 className="heading-lg mt-4 text-navy">{category.title}</h2>
            <p className="body mt-5 text-muted-foreground">{category.description}</p>
          </div>
          <div className="grid gap-6">
            {books.map((book, index) => (
              <BookCard
                key={book.id}
                book={book}
                variant="wide"
                priorityCover={index === 0 && category.id === "trading-foundations"}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
