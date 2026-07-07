import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book } from "@/types/book";

type ReaderProfileProps = {
  book: Book;
};

export function ReaderProfile({ book }: ReaderProfileProps) {
  if (!book.idealFor?.length) {
    return null;
  }

  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <SectionHeader
            eyebrow="Reader Profile"
            title="WHO THIS BOOK IS FOR"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {book.idealFor.map((profile) => (
              <li key={profile} className="border-l border-gold bg-background p-5">
                <p className="body-sm text-muted-foreground">{profile}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
