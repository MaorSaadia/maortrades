import Link from "next/link";
import { BookCover } from "@/components/books/book-cover";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  resolveRelatedArticles,
  resolveRelatedBooks,
  resolveRelatedCollections,
} from "@/data/resources";
import type { FreeResource } from "@/types/resource";

export function ResourceRecommendations({
  resource,
}: {
  resource: FreeResource;
}) {
  const books = resolveRelatedBooks(resource).slice(0, 3);
  const collections = resolveRelatedCollections(resource).slice(0, 1);
  const articles = resolveRelatedArticles(resource).slice(0, 2);

  if (!books.length && !collections.length && !articles.length) {
    return null;
  }

  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-12">
          {books.length ? (
            <section>
              <p className="label text-gold">Go Deeper Into the Framework</p>
              <h2 className="heading-md mt-3 text-navy">
                Books connected to this resource
              </h2>
              <div className="mt-7 grid gap-5 lg:grid-cols-3">
                {books.map((book) => (
                  <article
                    key={book.id}
                    className="grid gap-5 border border-border bg-background p-5"
                  >
                    <BookCover
                      book={book}
                      imageClassName="max-h-64"
                      className="p-2"
                    />
                    <div>
                      <p className="label text-gold">{book.categories[0]}</p>
                      <h3 className="heading-sm mt-2 text-navy">
                        {book.title}
                      </h3>
                      <p className="body-sm mt-3 text-muted-foreground">
                        {book.shortDescription}
                      </p>
                      <Link
                        href={`/books/${book.slug}`}
                        className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        View Book
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {collections.length ? (
            <section className="border border-border bg-background p-6">
              <p className="label text-gold">Explore the Complete Path</p>
              {collections.map((collection) => (
                <div key={collection.id}>
                  <h2 className="heading-md mt-3 text-navy">
                    {collection.title}
                  </h2>
                  <p className="body mt-4 text-muted-foreground">
                    {collection.positioningDescription}
                  </p>
                  {collection.learningProgression?.length ? (
                    <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {collection.learningProgression.slice(0, 4).map((stage, index) => (
                        <li key={stage} className="border-l border-gold pl-4">
                          <p className="label text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="label mt-1 text-navy">{stage}</p>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="label mt-7 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    Explore Collection
                  </Link>
                </div>
              ))}
            </section>
          ) : null}

          {articles.length ? (
            <section className="border-t border-border pt-10">
              <p className="label text-gold">Related Reading</p>
              <h2 className="heading-md mt-3 text-navy">
                Articles connected to this tool
              </h2>
              <div className="mt-7 grid gap-5 lg:grid-cols-2">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="compact"
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
