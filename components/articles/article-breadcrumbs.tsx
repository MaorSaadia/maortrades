import Link from "next/link";
import type { Article } from "@/types/article";

export function ArticleBreadcrumbs({ article }: { article: Article }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <Link
          href="/"
          className="transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href="/articles"
          className="transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Articles
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground">{article.title}</span>
      </div>
    </nav>
  );
}
