import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Book } from "@/types/book";

type BookPreviewProps = {
  book: Book;
};

export function BookPreview({ book }: BookPreviewProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 border-y border-border py-14 md:grid-cols-[0.95fr_1.05fr] md:py-16">
          <div>
            <Eyebrow>Book Preview</Eyebrow>
            <h2 className="heading-lg mt-4 text-navy">LOOK INSIDE THE BOOK</h2>
            <p className="body-lg mt-5 text-muted-foreground">
              {book.preview?.label
                ? `${book.preview.label} architecture is prepared for future sample material.`
                : "Preview architecture is prepared for future sample material."}
            </p>
          </div>
          <div className="border border-border bg-surface p-6 shadow-refined">
            <p className="label text-gold">Preview Coming Soon</p>
            <p className="body mt-4 text-muted-foreground">
              A book preview will be available here before direct sales launch.
            </p>
            <p className="body-sm mt-4 text-muted-foreground">
              No sample PDF, downloadable chapter, or interior preview is connected
              in this phase.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
