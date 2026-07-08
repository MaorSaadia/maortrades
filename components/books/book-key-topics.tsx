import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book } from "@/types/book";

type BookKeyTopicsProps = {
  book: Book;
};

export function BookKeyTopics({ book }: BookKeyTopicsProps) {
  if (!book.keyTopics?.length) {
    return null;
  }

  return (
    <Section surface="surface" className="border-y border-border">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr]">
          <SectionHeader
            eyebrow="Key Topics"
            title="TOPICS INSIDE"
            description="A concise topic map for discovering what this book focuses on."
          />
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {book.keyTopics.map((topic) => (
              <li
                key={topic}
                className="label border border-border bg-background px-4 py-3 text-navy"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
