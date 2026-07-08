import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book } from "@/types/book";

type BookStructureProps = {
  book: Book;
};

export function BookStructure({ book }: BookStructureProps) {
  if (!book.bookStructure?.length) {
    return null;
  }

  const isVerifiedParts = book.structureType === "verified-parts";

  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            eyebrow="The Curriculum"
            title="INSIDE THE BOOK"
            description={
              isVerifiedParts
                ? "Verified high-level parts from the book structure."
                : "Editorial topic groupings based on the book's known positioning, not a fabricated chapter list."
            }
            className="[&_h2]:text-ivory [&_p]:text-ivory/70"
          />
          <div className="grid gap-4">
            {book.bookStructure.map((section) => (
              <article
                key={`${section.number}-${section.title}`}
                className="border border-ivory/15 bg-surface-dark p-6"
              >
                {section.number ? (
                  <p className="label text-gold">{section.number}</p>
                ) : null}
                <h3 className="heading-sm mt-3 text-ivory">{section.title}</h3>
                {section.description ? (
                  <p className="body-sm mt-4 text-ivory/68">{section.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
