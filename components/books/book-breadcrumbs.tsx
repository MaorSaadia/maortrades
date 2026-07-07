import Link from "next/link";
import type { Book } from "@/types/book";

type BookBreadcrumbsProps = {
  book: Pick<Book, "title" | "subtitle" | "seriesNumber">;
};

export function BookBreadcrumbs({ book }: BookBreadcrumbsProps) {
  const label =
    book.seriesNumber && book.subtitle
      ? `${book.title}: ${book.subtitle}`
      : book.title;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface py-4">
      <ol className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-5 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link
            href="/books"
            className="transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Books
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-foreground">
          {label}
        </li>
      </ol>
    </nav>
  );
}
