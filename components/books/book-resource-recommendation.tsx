import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getResourcesBySlugs, resourceTypeLabels } from "@/data/resources";
import type { Book } from "@/types/book";

export function BookResourceRecommendation({ book }: { book: Book }) {
  const resource = getResourcesBySlugs(book.relatedResourceSlugs ?? [])[0];

  if (!resource) {
    return null;
  }

  return (
    <Section surface="muted">
      <Container>
        <div className="grid gap-8 border-y border-border py-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="label text-gold">Practical Tool</p>
            <h2 className="heading-md mt-3 text-navy">
              A free resource connected to this book
            </h2>
          </div>
          <article className="border-l border-gold bg-background p-5">
            <p className="label text-muted-foreground">
              {resourceTypeLabels[resource.resourceType]}
            </p>
            <h3 className="heading-sm mt-3 text-navy">{resource.title}</h3>
            <p className="body-sm mt-3 text-muted-foreground">
              {resource.shortDescription}
            </p>
            <Link
              href={`/resources/${resource.slug}`}
              className="label mt-5 inline-flex text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              View Resource
            </Link>
          </article>
        </div>
      </Container>
    </Section>
  );
}
