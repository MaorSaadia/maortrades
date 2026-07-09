import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { articles, getArticleCategory } from "@/data/articles";

export function ArticlesPreview() {
  const previewArticles = articles.slice(0, 3);

  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Trading Education"
              title="IDEAS BEYOND THE BOOKS."
              description="Articles on market structure, execution, risk, trading psychology, and professional development."
            />
            <div className="mt-8">
              <Button href="/articles" variant="outline">
                Explore Articles
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {previewArticles.map((article) => {
              const category = getArticleCategory(article.category);
              return (
              <article key={article.id} className="border-y border-border py-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="label text-gold">{category?.label}</p>
                  <span className="h-px w-8 bg-border" aria-hidden="true" />
                  <p className="label text-muted-foreground">{article.readingTime}</p>
                </div>
                <h3 className="heading-sm mt-4 text-navy">{article.title}</h3>
                <p className="body-sm mt-3 text-muted-foreground">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Read Article
                </Link>
              </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
