import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArticleMeta } from "@/components/articles/article-meta";
import type { Article } from "@/types/article";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <Section className="border-b border-border py-0">
      <Container className="py-14 md:py-20">
        <div className="max-w-5xl">
          <ArticleMeta article={article} />
          <h1 className="display-lg mt-6 max-w-5xl break-words text-navy">
            {article.title.toUpperCase()}
          </h1>
          {article.subtitle ? (
            <p className="heading-sm mt-6 max-w-4xl text-foreground">
              {article.subtitle}
            </p>
          ) : null}
          <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </Container>
    </Section>
  );
}
