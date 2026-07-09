import { ArticleCard } from "@/components/articles/article-card";
import { getArticlesBySlugs } from "@/data/articles";
import type { Article } from "@/types/article";

export function RelatedArticles({ article }: { article: Article }) {
  const relatedArticles = getArticlesBySlugs(article.relatedArticleSlugs ?? []);

  if (!relatedArticles.length) {
    return null;
  }

  return (
    <section className="border-t border-border pt-10">
      <p className="label text-gold">Related Articles</p>
      <h2 className="heading-md mt-3 text-navy">Keep the framework connected</h2>
      <div className="mt-7 grid gap-5">
        {relatedArticles.map((relatedArticle) => (
          <ArticleCard
            key={relatedArticle.id}
            article={relatedArticle}
            variant="compact"
          />
        ))}
      </div>
    </section>
  );
}
