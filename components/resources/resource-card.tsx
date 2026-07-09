import Link from "next/link";
import {
  resourceCategoryLabels,
  resourceTypeLabels,
} from "@/data/resources";
import type { FreeResource } from "@/types/resource";

type ResourceCardProps = {
  resource: FreeResource;
  featured?: boolean;
};

export function ResourceCard({ resource, featured = false }: ResourceCardProps) {
  const firstOutcome = resource.outcomes?.[0];

  return (
    <article
      className={[
        "grid gap-5 border border-border bg-surface p-5 shadow-refined",
        featured ? "lg:grid-cols-[1fr_0.78fr] lg:items-end" : "",
      ].join(" ")}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="label text-gold">
            {resourceTypeLabels[resource.resourceType]}
          </p>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <p className="label text-muted-foreground">
            {resourceCategoryLabels[resource.category]}
          </p>
        </div>
        <h3 className="heading-sm mt-4 break-words text-navy">
          {resource.title}
        </h3>
        <p className="body-sm mt-3 text-muted-foreground">
          {resource.shortDescription}
        </p>
        {firstOutcome ? (
          <p className="body-sm mt-5 border-l border-gold pl-4 text-foreground">
            {firstOutcome}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 lg:border-t-0 lg:pt-0">
        <p className="label text-muted-foreground">
          {resource.access.status === "coming-soon"
            ? "Access coming soon"
            : "Resource access"}
        </p>
        <Link
          href={`/resources/${resource.slug}`}
          className="label text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          View Resource
        </Link>
      </div>
    </article>
  );
}
