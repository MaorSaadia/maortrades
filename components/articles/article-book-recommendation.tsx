import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import { getBooksBySlugs } from "@/data/books";
import type { Article } from "@/types/article";

export function ArticleBookRecommendation({ article }: { article: Article }) {
  const books = getBooksBySlugs(article.relatedBookSlugs ?? []);

  if (!books.length) {
    return null;
  }

  return (
    <section className="border-y border-border py-10">
      <p className="label text-gold">Continue the Study</p>
      <h2 className="heading-md mt-3 text-navy">Books connected to this article</h2>
      <div className="mt-7 grid gap-5">
        {books.slice(0, 3).map((book) => (
          <article
            key={book.id}
            className="grid gap-5 border border-border bg-surface p-4 sm:grid-cols-[8rem_1fr]"
          >
            <BookCover book={book} imageClassName="max-h-48" className="p-2" />
            <div>
              <p className="label text-gold">{book.categories[0]}</p>
              <h3 className="heading-sm mt-2 text-navy">{book.title}</h3>
              <p className="body-sm mt-3 text-muted-foreground">
                {book.shortDescription}
              </p>
              <Link
                href={`/books/${book.slug}`}
                className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                View {book.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
