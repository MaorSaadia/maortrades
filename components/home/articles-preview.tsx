import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";

const placeholderArticles = [
  {
    category: "Liquidity",
    title: "Understanding Liquidity Beyond Stop Hunts",
    excerpt:
      "A future article on reading liquidity as context, not just as a single event around obvious highs and lows.",
    readingTime: "6 min read",
    href: "/articles",
  },
  {
    category: "Risk",
    title: "Why Execution Without Risk Architecture Fails",
    excerpt:
      "A future article on why entries need predefined exposure, invalidation, and performance review standards.",
    readingTime: "7 min read",
    href: "/articles",
  },
  {
    category: "Process",
    title: "The Difference Between Knowing a Model and Trusting Your Process",
    excerpt:
      "A future article on transforming market knowledge into repeatable decision-making under pressure.",
    readingTime: "8 min read",
    href: "/articles",
  },
];

export function ArticlesPreview() {
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
            {placeholderArticles.map((article) => (
              <article key={article.title} className="border-y border-border py-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="label text-gold">{article.category}</p>
                  <span className="h-px w-8 bg-border" aria-hidden="true" />
                  <p className="label text-muted-foreground">{article.readingTime}</p>
                </div>
                <h3 className="heading-sm mt-4 text-navy">{article.title}</h3>
                <p className="body-sm mt-3 text-muted-foreground">{article.excerpt}</p>
                <Link
                  href={article.href}
                  className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Read Preview
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
