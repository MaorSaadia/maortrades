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
              {book.preview?.description ??
                "A selected book preview will be available before direct sales launch."}
            </p>
          </div>
          <div className="border border-border bg-surface p-6 shadow-refined">
            <p className="label text-gold">
              {book.preview?.statusLabel ?? "Preview Not Yet Connected"}
            </p>
            <p className="body mt-4 text-muted-foreground">
              {book.preview?.statusText ??
                "Sample pages are planned, but no downloadable preview is connected in this phase."}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
