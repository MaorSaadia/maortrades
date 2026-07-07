import { Container } from "@/components/layout/container";
import type { Book } from "@/types/book";

type BookMetadataStripProps = {
  book: Book;
};

export function BookMetadataStrip({ book }: BookMetadataStripProps) {
  const fields = [
    { label: "Level", value: book.level },
    { label: "Category", value: book.categories[0] },
    {
      label: "Format",
      value: book.formats.map((format) => format.toUpperCase()).join(" + "),
    },
    { label: "Series", value: book.series },
    {
      label: "Volume",
      value: book.seriesNumber ? String(book.seriesNumber).padStart(2, "0") : undefined,
    },
  ].filter((field) => field.value);

  return (
    <section className="border-b border-border bg-surface py-8">
      <Container>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {fields.map((field) => (
            <div key={field.label} className="border-l border-gold pl-4">
              <dt className="label text-muted-foreground">{field.label}</dt>
              <dd className="label mt-2 text-navy">{field.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
