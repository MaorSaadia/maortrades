import Link from "next/link";
import { getCollectionBySlug } from "@/data/collections";
import type { Article } from "@/types/article";

export function ArticleCollectionRecommendation({ article }: { article: Article }) {
  const collection = article.relatedCollectionSlugs?.[0]
    ? getCollectionBySlug(article.relatedCollectionSlugs[0])
    : undefined;

  if (!collection) {
    return null;
  }

  return (
    <section className="border border-border bg-background p-6">
      <p className="label text-gold">Explore the Full Path</p>
      <h2 className="heading-md mt-3 text-navy">{collection.title}</h2>
      <p className="body mt-4 text-muted-foreground">
        {collection.positioningDescription}
      </p>
      {collection.learningProgression?.length ? (
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
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
        Explore {collection.title}
      </Link>
    </section>
  );
}
