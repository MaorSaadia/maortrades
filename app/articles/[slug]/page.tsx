import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/articles/article-body";
import { ArticleBookRecommendation } from "@/components/articles/article-book-recommendation";
import { ArticleBreadcrumbs } from "@/components/articles/article-breadcrumbs";
import { ArticleCollectionRecommendation } from "@/components/articles/article-collection-recommendation";
import { ArticleFinalCTA } from "@/components/articles/article-final-cta";
import { ArticleHeader } from "@/components/articles/article-header";
import { ArticleJsonLd } from "@/components/articles/article-json-ld";
import { ArticleNewsletterCTA } from "@/components/articles/article-newsletter-cta";
import { ArticleResourceRecommendation } from "@/components/articles/article-resource-recommendation";
import { ArticleRichParagraph } from "@/components/articles/article-rich-text";
import { ArticleTableOfContents } from "@/components/articles/article-table-of-contents";
import { KeyTakeaways } from "@/components/articles/key-takeaways";
import { RelatedArticles } from "@/components/articles/related-articles";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { articles, getArticleBySlug } from "@/data/articles";
import { absoluteUrl } from "@/lib/site-url";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: {
      canonical: absoluteUrl(`/articles/${article.slug}`),
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: absoluteUrl(`/articles/${article.slug}`),
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd article={article} />
      <ArticleBreadcrumbs article={article} />
      <ArticleHeader article={article} />
      <Section surface="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <article className="min-w-0">
              <div className="article-body">
                {article.introduction.map((paragraph, index) => (
                  <ArticleRichParagraph
                    key={`intro-${index}`}
                    paragraph={paragraph}
                  />
                ))}
              </div>
              <div className="mt-10">
                <KeyTakeaways items={article.keyTakeaways} />
              </div>
              <div className="mt-10 lg:hidden">
                <ArticleTableOfContents article={article} />
              </div>
              <div className="mt-10">
                <ArticleBody article={article} />
              </div>
              <div className="mt-12 grid gap-12">
                <ArticleResourceRecommendation article={article} />
                <ArticleBookRecommendation article={article} />
                <ArticleCollectionRecommendation article={article} />
                <RelatedArticles article={article} />
                <ArticleFinalCTA />
                <ArticleNewsletterCTA />
              </div>
            </article>
            <aside className="hidden lg:block">
              <ArticleTableOfContents article={article} />
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
