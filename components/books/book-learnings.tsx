import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book } from "@/types/book";

type BookLearningsProps = {
  book: Book;
};

export function BookLearnings({ book }: BookLearningsProps) {
  if (!book.learnings?.length) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="The Framework"
            title="WHAT YOU'LL LEARN"
            description="Each outcome is written around practical understanding, not hype or shortcuts."
          />
          <ol className="grid gap-0 border-y border-border sm:grid-cols-2">
            {book.learnings.map((learning, index) => (
              <li
                key={learning}
                className="grid gap-4 border-b border-border py-6 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
              >
                <span className="font-display text-4xl font-semibold leading-none text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="body text-muted-foreground">{learning}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
