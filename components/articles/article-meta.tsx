import Link from "next/link";
import type { Article } from "@/types/article";
import { getArticleCategory } from "@/data/articles";

export function ArticleMeta({ article }: { article: Article }) {
  const category = getArticleCategory(article.category);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
      <p className="label text-gold">{category?.label}</p>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <p className="label">{article.readingTime}</p>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <p className="label">
        Written by{" "}
        <Link
          href="/about"
          className="text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          {article.author}
        </Link>
      </p>
    </div>
  );
}
