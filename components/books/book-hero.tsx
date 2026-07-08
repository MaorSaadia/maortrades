import { BookCover } from "@/components/books/book-cover";
import { PurchasePanel } from "@/components/books/purchase-panel";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Book } from "@/types/book";

type BookHeroProps = {
  book: Book;
};

export function BookHero({ book }: BookHeroProps) {
  const category = book.categories[0];

  return (
    <Section className="border-b border-border">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -left-5 top-8 hidden h-[72%] w-px bg-gold/45 md:block"
            />
            <BookCover
              book={book}
              priority
              className="bg-background p-4"
              imageClassName="max-h-[38rem]"
            />
          </div>

          <div className="grid gap-8 xl:grid-cols-[1fr_20rem]">
            <article>
              <Eyebrow>MAORTRADES &middot; {category}</Eyebrow>
              {book.badge ? (
                <p className="label mt-4 inline-flex border border-gold/35 px-3 py-1 text-gold">
                  {book.badge}
                </p>
              ) : null}
              {book.series ? (
                <p className="label mt-5 text-muted-foreground">
                  {book.series} {book.seriesNumber ? `- Book ${book.seriesNumber}` : ""}
                </p>
              ) : null}
              <h1 className="display-lg mt-4 break-words text-navy">{book.title}</h1>
              {book.subtitle ? (
                <p className="heading-sm mt-5 text-foreground">{book.subtitle}</p>
              ) : null}
              <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
                {book.fullDescription ?? book.shortDescription}
              </p>

              <dl className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-3">
                <div>
                  <dt className="label text-muted-foreground">Level</dt>
                  <dd className="body-sm mt-1 text-navy">{book.level}</dd>
                </div>
                <div>
                  <dt className="label text-muted-foreground">Format</dt>
                  <dd className="body-sm mt-1 text-navy">Digital PDF Edition</dd>
                </div>
                <div>
                  <dt className="label text-muted-foreground">Author</dt>
                  <dd className="body-sm mt-1 text-navy">{book.author}</dd>
                </div>
              </dl>
            </article>

            <PurchasePanel book={book} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
