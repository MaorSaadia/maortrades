import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookCover } from "@/components/books/book-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { books, getBookBySlug } from "@/data/books";

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: `${book.title} | MaorTrades`,
    description: book.shortDescription,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 border-y border-border py-12 md:grid-cols-[minmax(13rem,20rem)_1fr] md:py-16 lg:gap-14">
          <BookCover
            book={book}
            priority
            className="mx-auto w-full max-w-xs self-start md:max-w-none"
            imageClassName="max-h-[34rem]"
          />

          <article className="max-w-3xl">
            <p className="label text-gold">
              {book.series
                ? `${book.series} · Book ${book.seriesNumber}`
                : book.categories[0]}
            </p>
            <h1 className="heading-lg mt-4 text-navy">{book.title}</h1>
            {book.subtitle ? (
              <p className="body-lg mt-4 text-muted-foreground">{book.subtitle}</p>
            ) : null}
            <p className="body-lg mt-7 text-muted-foreground">
              {book.shortDescription}
            </p>

            <dl className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-2">
              <div>
                <dt className="label text-muted-foreground">Level</dt>
                <dd className="body-sm mt-1 text-navy">{book.level}</dd>
              </div>
              <div>
                <dt className="label text-muted-foreground">Format</dt>
                <dd className="body-sm mt-1 text-navy">
                  {book.formats.map((format) => format.toUpperCase()).join(" + ")}
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <Button href="/books" variant="outline">
                Back to All Books
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
