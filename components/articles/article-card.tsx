import Link from "next/link";
import type { Article } from "@/types/article";
import { getArticleCategory } from "@/data/articles";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  variant?: "default" | "compact" | "featured";
};

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const category = getArticleCategory(article.category);

  return (
    <article
      className={cn(
        "group border border-border bg-surface p-5 shadow-refined transition-colors hover:border-gold/70",
        variant === "featured" && "grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
        variant === "compact" && "shadow-none",
      )}
    >
      {variant === "featured" ? (
        <div className="flex min-h-64 flex-col justify-between border-l border-gold bg-background p-6">
          <p className="label text-gold">{category?.label}</p>
          <div>
            <p className="heading-md text-navy">Context</p>
            <p className="body-sm mt-3 text-muted-foreground">
              Event / Framework / Execution / Review
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <p className="label text-gold">{category?.label}</p>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <p className="label text-muted-foreground">{article.readingTime}</p>
        </div>
        <h3
          className={cn(
            "mt-4 break-words text-navy",
            variant === "featured" ? "heading-lg" : "heading-sm",
          )}
        >
          {article.title}
        </h3>
        <p className="body-sm mt-4 text-muted-foreground">{article.excerpt}</p>
        <Link
          href={`/articles/${article.slug}`}
          className="label mt-6 inline-flex text-navy transition-colors group-hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
