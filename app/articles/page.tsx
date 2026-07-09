import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/articles/article-card";
import { ArticleNewsletterCTA } from "@/components/articles/article-newsletter-cta";
import { BookCover } from "@/components/books/book-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  articleCategories,
  articles,
  getArticlesByCategory,
  getFeaturedArticle,
} from "@/data/articles";
import { getBookBySlug } from "@/data/books";
import { getCollectionBySlug } from "@/data/collections";

export const metadata: Metadata = {
  title: "Articles | The MaorTrades Journal",
  description:
    "Structured MaorTrades Journal articles on market behavior, Smart Money Concepts, ICT models, execution, risk, trading psychology, and professional development.",
};

const readingPathSteps = [
  "Read the idea",
  "Understand the framework",
  "Study the book",
  "Apply and review",
];

const bridgeRoutes = [
  {
    label: "Learning the Foundations",
    type: "Book",
    slug: "day-trading-for-absolute-beginners",
  },
  {
    label: "Studying Smart Money & ICT",
    type: "Collection",
    slug: "smart-money-and-ict",
  },
  {
    label: "Developing the Complete Operator",
    type: "Collection",
    slug: "the-institutional-operator",
  },
];

export default function ArticlesPage() {
  const featuredArticle = getFeaturedArticle();
  const allArticles = articles;
  const supportedTopics = Array.from(
    new Set(allArticles.flatMap((article) => article.tags)),
  ).slice(0, 12);
  const foundationBook = getBookBySlug("day-trading-for-absolute-beginners");

  return (
    <>
      <Section className="border-b border-border py-0">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <Eyebrow>The MaorTrades Journal</Eyebrow>
            <h1 className="display-lg mt-5 max-w-4xl break-words text-navy">
              IDEAS BEYOND THE BOOKS.
            </h1>
            <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
              Structured articles on market behavior, Smart Money Concepts, ICT
              models, execution, risk, trading psychology, and professional
              development.
            </p>
            <p className="body mt-5 max-w-3xl text-muted-foreground">
              The Journal extends the MaorTrades library through focused
              educational essays, concept explanations, execution frameworks,
              and performance-oriented thinking.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#articles">Explore Articles</Button>
              <Button href="/start-here" variant="outline">
                Start Here
              </Button>
            </div>
          </div>
          <aside className="border-l border-gold pl-6">
            <p className="heading-sm text-navy">
              Free education should not become another pile of fragments. Each
              article is written to clarify where an idea belongs in a wider
              framework.
            </p>
          </aside>
        </Container>
      </Section>

      <Section surface="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_1.6fr]">
            <SectionHeader
              eyebrow="Featured Article"
              title="START WITH LIQUIDITY IN CONTEXT."
              description="The first featured essay sets the tone for the Journal: a concept is useful only when it connects to context, execution, risk, and review."
            />
            <ArticleCard article={featuredArticle} variant="featured" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Editorial Pillars"
            title="EXPLORE THE JOURNAL."
            description="Six canonical pillars organize the MaorTrades editorial system without turning every concept into a thin category page."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articleCategories.map((category) => {
              const count = getArticlesByCategory(category.id).length;
              return (
                <article
                  key={category.id}
                  id={category.slug}
                  className="border border-border bg-surface p-5 shadow-refined"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="heading-sm text-navy">{category.label}</h2>
                    {count > 0 ? (
                      <p className="label text-gold">
                        {count} {count === 1 ? "Article" : "Articles"}
                      </p>
                    ) : null}
                  </div>
                  <p className="body-sm mt-4 text-muted-foreground">
                    {category.description}
                  </p>
                  {count > 0 ? (
                    <a
                      href={`#${category.slug}-articles`}
                      className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      View related articles
                    </a>
                  ) : (
                    <p className="label mt-5 text-muted-foreground">
                      Editorial pillar
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="articles" surface="muted">
        <Container>
          <SectionHeader
            eyebrow="Latest Articles"
            title="ALL CURRENT JOURNAL ESSAYS."
            description="A compact editorial library for the first MaorTrades articles. Pagination and search can wait until the archive is large enough to justify them."
          />
          <div className="mt-10 grid gap-5">
            {allArticles.map((article) => (
              <div key={article.id} id={`${article.category}-articles`}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <SectionHeader
              eyebrow="Explore by Topic"
              title="CONCEPTS CURRENTLY IN THE JOURNAL."
              description="Topic labels reflect actual article content or the established editorial architecture. They do not create empty tag pages."
            />
            <div className="flex flex-wrap gap-2">
              {supportedTopics.map((topic) => (
                <span
                  key={topic}
                  className="label border border-border bg-background px-3 py-2 text-navy"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Recommended Reading Path</Eyebrow>
              <h2 className="heading-lg mt-4 text-navy">
                READ THE IDEA. THEN PLACE IT INSIDE A FRAMEWORK.
              </h2>
              <p className="body-lg mt-5 text-muted-foreground">
                Free educational content can introduce and clarify ideas. Deeper
                development requires connected study, deliberate practice, risk
                management, and honest review.
              </p>
            </div>
            <ol className="grid gap-3 md:grid-cols-4">
              {readingPathSteps.map((step, index) => (
                <li key={step} className="border border-border bg-surface p-5">
                  <p className="label text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="label mt-5 text-navy">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section surface="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <Eyebrow className="text-gold">From Article to Framework</Eyebrow>
              <h2 className="heading-lg mt-4 text-ivory">
                ARTICLES CAN CLARIFY A CONCEPT.
              </h2>
              <p className="body-lg mt-5 text-ivory/72">
                Books and collections create room for progression, context, and
                deeper study. Choose the route that matches your current gap.
              </p>
              {foundationBook ? (
                <div className="mt-8 max-w-56">
                  <BookCover
                    book={foundationBook}
                    imageClassName="max-h-72"
                    className="border-ivory/15 bg-surface-dark"
                  />
                </div>
              ) : null}
            </div>
            <div className="grid gap-4">
              {bridgeRoutes.map((route) => {
                const book =
                  route.type === "Book" ? getBookBySlug(route.slug) : undefined;
                const collection =
                  route.type === "Collection"
                    ? getCollectionBySlug(route.slug)
                    : undefined;
                const title = book?.title ?? collection?.title;
                const description = book?.shortDescription ?? collection?.shortDescription;
                const href = book
                  ? `/books/${book.slug}`
                  : collection
                    ? `/collections/${collection.slug}`
                    : "/books";

                return (
                  <article
                    key={route.label}
                    className="border border-ivory/15 bg-surface-dark p-5"
                  >
                    <p className="label text-gold">{route.label}</p>
                    <h3 className="heading-sm mt-3 text-ivory">{title}</h3>
                    <p className="body-sm mt-3 text-ivory/68">{description}</p>
                    <Link
                      href={href}
                      className="label mt-5 inline-flex text-gold transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      View {route.type}
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="surface">
        <Container>
          <ArticleNewsletterCTA />
        </Container>
      </Section>
    </>
  );
}
