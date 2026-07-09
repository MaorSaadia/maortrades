import Link from "next/link";
import { getResourcesBySlugs, resourceTypeLabels } from "@/data/resources";
import type { Article } from "@/types/article";

export function ArticleResourceRecommendation({ article }: { article: Article }) {
  const resource = getResourcesBySlugs(article.relatedResourceSlugs ?? [])[0];

  if (!resource) {
    return null;
  }

  return (
    <section className="border border-border bg-background p-6">
      <p className="label text-gold">Use the Framework</p>
      <h2 className="heading-md mt-3 text-navy">Practical tool</h2>
      <article className="mt-6 border-l border-gold pl-5">
        <p className="label text-muted-foreground">
          {resourceTypeLabels[resource.resourceType]}
        </p>
        <h3 className="heading-sm mt-2 text-navy">{resource.title}</h3>
        <p className="body-sm mt-3 text-muted-foreground">
          {resource.shortDescription}
        </p>
        <Link
          href={`/resources/${resource.slug}`}
          className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          View Resource
        </Link>
      </article>
    </section>
  );
}
