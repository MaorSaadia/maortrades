import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ResourceCard } from "@/components/resources/resource-card";
import { getArticleBySlug } from "@/data/articles";
import { getBookBySlug } from "@/data/books";
import { getCollectionBySlug } from "@/data/collections";
import {
  getFeaturedResources,
  getResourceBySlug,
  resourceCategoryDescriptions,
  resourceCategoryLabels,
  resources,
} from "@/data/resources";
import type { ResourceCategory } from "@/types/resource";

const categoryOrder: ResourceCategory[] = [
  "ict-models-execution",
  "liquidity-price-delivery",
  "trading-psychology",
  "professional-development",
];

const usageSteps = [
  {
    label: "Prepare",
    text: "Use the worksheet or checklist before execution.",
  },
  {
    label: "Execute",
    text: "Use only the frameworks relevant to the planned model.",
  },
  {
    label: "Review",
    text: "Compare actual behavior with the written plan.",
  },
  {
    label: "Refine",
    text: "Identify one process change rather than collecting another random concept.",
  },
];

const ecosystemPaths = [
  {
    label: "New Trader",
    resourceSlug: "daily-trading-preparation-sheet",
    bookSlug: "day-trading-for-absolute-beginners",
  },
  {
    label: "ICT Learner",
    resourceSlug: "smart-money-quick-reference",
    bookSlug: "smart-money-simplified",
    collectionSlug: "smart-money-and-ict",
  },
  {
    label: "Performance Development",
    resourceSlug: "trading-discipline-reset-checklist",
    bookSlug: "the-disciplined-edge",
    collectionSlug: "the-institutional-operator",
  },
];

const journalConnections = [
  {
    articleSlug: "understanding-liquidity-beyond-stop-hunts",
    resourceSlug: "smart-money-quick-reference",
  },
  {
    articleSlug: "why-execution-without-risk-architecture-fails",
    resourceSlug: "daily-trading-preparation-sheet",
  },
  {
    articleSlug: "knowing-a-trading-model-and-trusting-your-process",
    resourceSlug: "trading-discipline-reset-checklist",
  },
];

export function ResourcesLanding() {
  const featuredResource =
    getFeaturedResources()[0] ?? getResourceBySlug("ict-trading-checklist");

  return (
    <>
      <Section className="border-b border-border py-0">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <Eyebrow>Free Trading Resources</Eyebrow>
            <h1 className="display-lg mt-5 max-w-4xl break-words text-navy">
              PRACTICAL TOOLS FOR STRUCTURED DEVELOPMENT.
            </h1>
            <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
              Checklists, worksheets, reference sheets, and educational tools
              designed to support preparation, execution, review, and disciplined
              trading development.
            </p>
            <p className="body mt-5 max-w-3xl text-muted-foreground">
              The resources are designed to complement deeper study, not replace
              planning, experience, or personal risk rules.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#resource-library">Explore Resources</Button>
              <Button href="/start-here" variant="outline">
                Start Here
              </Button>
            </div>
          </div>
          <aside className="border-l border-gold pl-6">
            <p className="heading-sm text-navy">
              Free education should create structure, trust, and better study
              decisions before it points toward books or collections.
            </p>
          </aside>
        </Container>
      </Section>

      {featuredResource ? (
        <Section surface="surface">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionHeader
                eyebrow="Featured Resource"
                title="START WITH THE ICT TRADING CHECKLIST."
                description="A practical checklist for slowing the decision process down before entry."
              />
              <ResourceCard resource={featuredResource} featured />
            </div>
          </Container>
        </Section>
      ) : null}

      <Section id="resource-library">
        <Container>
          <SectionHeader
            eyebrow="The Resource Library"
            title="TOOLS FOR PREPARATION, EXECUTION, AND REVIEW."
            description="Each resource supports a specific part of the learning ecosystem without pretending to replace a complete trading process."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
            <SectionHeader
              eyebrow="Resource Categories"
              title="BROWSE BY DEVELOPMENT AREA."
              description="The categories are editorial groupings for the current resource library, not empty route pages."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {categoryOrder.map((category) => (
                <a
                  key={category}
                  href="#resource-library"
                  className="border border-border bg-background p-5 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  <p className="label text-gold">
                    {resourceCategoryLabels[category]}
                  </p>
                  <p className="body-sm mt-3 text-muted-foreground">
                    {resourceCategoryDescriptions[category]}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeader
              eyebrow="Use Them With Purpose"
              title="TOOLS SUPPORT A PROCESS. THEY DO NOT REPLACE ONE."
              description="The value of a resource is not collecting it. The value is using it at the right moment in the process."
            />
            <ol className="grid gap-4 md:grid-cols-2">
              {usageSteps.map((step, index) => (
                <li
                  key={step.label}
                  className="border-l border-gold bg-surface p-5 shadow-refined"
                >
                  <p className="label text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="heading-sm mt-4 text-navy">{step.label}</h3>
                  <p className="body-sm mt-3 text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section surface="dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Eyebrow className="text-gold">Learning Ecosystem</Eyebrow>
              <h2 className="heading-lg mt-4 text-ivory">
                FROM TOOL TO FRAMEWORK.
              </h2>
              <p className="body-lg mt-5 text-ivory/72">
                A checklist can improve preparation. A reference sheet can
                organize terminology. A worksheet can improve review. A book or
                collection creates room for deeper progression and context.
              </p>
            </div>
            <div className="grid gap-4">
              {ecosystemPaths.map((path) => {
                const resource = getResourceBySlug(path.resourceSlug);
                const book = getBookBySlug(path.bookSlug);
                const collection = path.collectionSlug
                  ? getCollectionBySlug(path.collectionSlug)
                  : undefined;

                if (!resource || !book) {
                  return null;
                }

                return (
                  <article
                    key={path.label}
                    className="grid gap-5 border border-ivory/15 bg-surface-dark p-5 md:grid-cols-[0.42fr_1fr]"
                  >
                    <p className="label text-gold">{path.label}</p>
                    <div className="grid gap-4">
                      <Link
                        href={`/resources/${resource.slug}`}
                        className="heading-sm text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {resource.title}
                      </Link>
                      <div className="grid gap-3 md:grid-cols-2">
                        <Link
                          href={`/books/${book.slug}`}
                          className="body-sm text-ivory/72 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                          Book: {book.title}
                        </Link>
                        {collection ? (
                          <Link
                            href={`/collections/${collection.slug}`}
                            className="body-sm text-ivory/72 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                          >
                            Collection: {collection.title}
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
            <SectionHeader
              eyebrow="Journal Connection"
              title="READ THE IDEA. USE THE TOOL."
              description="Selected Journal articles connect directly to practical resources so the idea can move into preparation or review."
            />
            <div className="grid gap-4">
              {journalConnections.map((connection) => {
                const article = getArticleBySlug(connection.articleSlug);
                const resource = getResourceBySlug(connection.resourceSlug);

                if (!article || !resource) {
                  return null;
                }

                return (
                  <article
                    key={article.id}
                    className="grid gap-4 border-y border-border py-5 md:grid-cols-[1fr_auto_1fr] md:items-center"
                  >
                    <Link
                      href={`/articles/${article.slug}`}
                      className="heading-sm text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {article.title}
                    </Link>
                    <span
                      className="hidden h-px w-10 bg-gold md:block"
                      aria-hidden="true"
                    />
                    <Link
                      href={`/resources/${resource.slug}`}
                      className="label text-gold transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {resource.title}
                    </Link>
                  </article>
                );
              })}
              <div>
                <Button href="/articles" variant="outline">
                  Explore the Journal
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="newsletter">
        <Container>
          <div className="grid gap-8 border-y border-border py-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <Eyebrow>The MaorTrades Letter</Eyebrow>
              <h2 className="heading-lg mt-4 text-navy">
                RESOURCE DELIVERY WILL CONNECT LATER.
              </h2>
              <p className="body-lg mt-5 text-muted-foreground">
                The resource library is prepared for future email delivery, but
                no newsletter provider, database, or download automation is
                connected in this phase.
              </p>
            </div>
            <Button href="/start-here" variant="outline">
              Start With the Reading Path
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
