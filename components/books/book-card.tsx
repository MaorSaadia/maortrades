import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import type { Book } from "@/types/book";
import { cn } from "@/lib/utils";

type BookCardProps = {
  book: Book;
  priorityCover?: boolean;
  variant?: "default" | "wide";
};

export function BookCard({
  book,
  priorityCover = false,
  variant = "default",
}: BookCardProps) {
  const primaryCategory = book.categories[0];
  const formatLabel = book.formats.map((format) => format.toUpperCase()).join(" + ");

  return (
    <article
      className={cn(
        "group grid gap-6 border border-border bg-surface p-4 shadow-refined transition-colors hover:border-gold/70",
        variant === "wide"
          ? "sm:grid-cols-[minmax(10rem,14rem)_1fr] md:p-5"
          : "sm:grid-cols-[12rem_1fr] lg:grid-cols-1",
      )}
    >
      <BookCover
        book={book}
        priority={priorityCover}
        className="self-start"
        imageClassName="max-h-[24rem]"
      />
      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <BookLevelBadge level={book.level} />
          {book.badge ? (
            <span className="label border border-border px-2 py-1 text-muted-foreground">
              {book.badge}
            </span>
          ) : null}
          {book.series ? (
            <span className="label border border-gold/35 px-2 py-1 text-gold">
              Series
            </span>
          ) : null}
        </div>

        <p className="label mt-5 text-gold">{primaryCategory}</p>
        <h3 className="heading-sm mt-2 break-words text-navy">{book.title}</h3>
        {book.subtitle ? (
          <p className="body-sm mt-2 text-muted-foreground">{book.subtitle}</p>
        ) : null}
        <p className="body-sm mt-4 text-muted-foreground">{book.shortDescription}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <p className="label text-muted-foreground">
            {formatLabel || "Format to be announced"}
          </p>
          <Link
            href={`/books/${book.slug}`}
            className="label text-navy transition-colors group-hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            View Book
          </Link>
        </div>
      </div>
    </article>
  );
}

function BookLevelBadge({ level }: { level: Book["level"] }) {
  return (
    <span className="label border border-gold/40 px-2 py-1 text-gold">
      {level}
    </span>
  );
}
