import Link from "next/link";
import type { Collection } from "@/types/collection";

type CollectionBreadcrumbsProps = {
  collection: Pick<Collection, "title">;
};

export function CollectionBreadcrumbs({ collection }: CollectionBreadcrumbsProps) {
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
            href="/collections"
            className="transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Collections
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-foreground">
          {collection.title}
        </li>
      </ol>
    </nav>
  );
}
