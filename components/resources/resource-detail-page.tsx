import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ResourceAccessPanel } from "@/components/resources/resource-access-panel";
import { ResourceCoverage } from "@/components/resources/resource-coverage";
import { ResourcePreview } from "@/components/resources/resource-preview";
import { ResourceRecommendations } from "@/components/resources/resource-recommendations";
import {
  resourceCategoryLabels,
  resourceTypeLabels,
} from "@/data/resources";
import type { FreeResource } from "@/types/resource";

export function ResourceDetailPage({ resource }: { resource: FreeResource }) {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <Container className="py-5">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2">
            <Link
              href="/resources"
              className="label text-muted-foreground transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Resources
            </Link>
            <span className="label text-muted-foreground" aria-hidden="true">
              /
            </span>
            <span className="label text-navy">{resource.title}</span>
          </nav>
        </Container>
      </div>

      <Section className="border-b border-border py-0">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.76fr] lg:items-end">
          <div>
            <Eyebrow>
              {resourceCategoryLabels[resource.category]} /{" "}
              {resourceTypeLabels[resource.resourceType]}
            </Eyebrow>
            <h1 className="display-lg mt-5 max-w-4xl break-words text-navy">
              {resource.title.toUpperCase()}
            </h1>
            <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
              {resource.shortDescription}
            </p>
            <p className="body mt-5 max-w-3xl text-muted-foreground">
              {resource.fullDescription}
            </p>
            {resource.idealFor?.length ? (
              <div className="mt-8">
                <p className="label text-gold">Ideal For</p>
                <ul className="mt-3 grid gap-2">
                  {resource.idealFor.slice(0, 3).map((item) => (
                    <li key={item} className="body-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="border border-border bg-surface p-5 shadow-refined">
            <p className="label text-gold">Interface Preview</p>
            <div className="mt-5 border border-border bg-background p-5">
              <p className="label text-muted-foreground">
                {resourceTypeLabels[resource.resourceType]}
              </p>
              <h2 className="heading-sm mt-4 text-navy">{resource.title}</h2>
              <ol className="mt-6 grid gap-3">
                {resource.sections.slice(0, 5).map((section, index) => (
                  <li
                    key={section.id}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-border pt-3"
                  >
                    <p className="label text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="label text-navy">{section.title}</p>
                  </li>
                ))}
              </ol>
            </div>
            <p className="body-sm mt-4 text-muted-foreground">
              This page-sheet composition is a website preview of resource
              structure, not a claim that a downloadable PDF is already
              available.
            </p>
          </aside>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div className="grid gap-12">
              <section>
                <p className="label text-gold">What This Resource Is For</p>
                <h2 className="heading-md mt-3 text-navy">
                  A practical support tool
                </h2>
                <p className="body-lg mt-5 text-muted-foreground">
                  {resource.purpose}
                </p>
                {resource.outcomes?.length ? (
                  <ul className="mt-6 grid gap-3 border-l border-gold pl-4">
                    {resource.outcomes.map((outcome) => (
                      <li key={outcome} className="body-sm text-foreground">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>

              <ResourceCoverage resource={resource} />
              <ResourcePreview resource={resource} />

              <section>
                <p className="label text-gold">How to Use It</p>
                <h2 className="heading-md mt-3 text-navy">
                  Place the tool in the process
                </h2>
                <ol className="mt-7 grid gap-4 md:grid-cols-3">
                  {resource.usageSteps.map((step, index) => (
                    <li
                      key={step.label}
                      className="border-l border-gold bg-surface p-5"
                    >
                      <p className="label text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="heading-sm mt-4 text-navy">
                        {step.label}
                      </h3>
                      <p className="body-sm mt-3 text-muted-foreground">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
                <p className="body-sm mt-6 text-muted-foreground">
                  This resource helps organize the decision process. It does not
                  provide financial advice or guarantee any trading outcome.
                </p>
              </section>
            </div>
            <aside className="lg:sticky lg:top-28">
              <ResourceAccessPanel resource={resource} />
            </aside>
          </div>
        </Container>
      </Section>

      <ResourceRecommendations resource={resource} />

      <Section surface="dark">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <Eyebrow className="text-gold">Continue the Path</Eyebrow>
              <h2 className="heading-lg mt-4 text-ivory">
                USE THE TOOL, THEN BUILD THE FRAMEWORK.
              </h2>
              <p className="body-lg mt-5 text-ivory/72">
                Free resources are entry points into a larger educational
                system. Use the tool for the immediate process, then choose the
                book or collection that gives the idea more depth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/resources" variant="gold">
                All Resources
              </Button>
              <Button
                href="/start-here"
                variant="outline"
                className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy"
              >
                Start Here
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
