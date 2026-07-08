import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book } from "@/types/book";
import type { Collection, CollectionRecommendedBook } from "@/types/collection";

type ResolvedRecommendedBook = CollectionRecommendedBook & {
  book: Book;
};

type ReadingOrderProps = {
  collection: Collection;
  recommendedBooks: ResolvedRecommendedBook[];
};

export function ReadingOrder({
  collection,
  recommendedBooks,
}: ReadingOrderProps) {
  if (!recommendedBooks.length) {
    return null;
  }

  const isCompleteLibrary = collection.slug === "complete-maortrades-library";

  return (
    <Section surface="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
          <SectionHeader
            eyebrow={isCompleteLibrary ? "Library Navigation" : "Recommended Path"}
            title={
              isCompleteLibrary
                ? "HOW TO USE THE LIBRARY."
                : "HOW TO MOVE THROUGH THE COLLECTION."
            }
            description={
              isCompleteLibrary
                ? "The complete library supports multiple learning paths rather than one required sequence."
                : "The order is designed around progression, not urgency."
            }
          />
          <ol className="grid gap-4">
            {recommendedBooks.map((item) => (
              <li
                key={`${item.label}-${item.bookSlug}`}
                className="grid gap-5 border border-border bg-background p-5 md:grid-cols-[9rem_1fr]"
              >
                <div>
                  <p className="label text-gold">{item.label}</p>
                  <p className="body-sm mt-2 text-muted-foreground">{item.role}</p>
                </div>
                <div>
                  <h3 className="heading-sm text-navy">{item.book.title}</h3>
                  {item.book.subtitle ? (
                    <p className="body-sm mt-2 text-muted-foreground">
                      {item.book.subtitle}
                    </p>
                  ) : null}
                  {item.rationale ? (
                    <p className="body-sm mt-4 text-muted-foreground">
                      {item.rationale}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
