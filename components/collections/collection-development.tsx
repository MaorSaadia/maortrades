import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Collection } from "@/types/collection";

type CollectionDevelopmentProps = {
  collection: Collection;
};

export function CollectionDevelopment({ collection }: CollectionDevelopmentProps) {
  if (!collection.featuredTopics?.length) {
    return null;
  }

  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
          <SectionHeader
            eyebrow="Development Focus"
            title="WHAT THIS PATH DEVELOPS."
            description="The collection is organized around these areas of trader development."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collection.featuredTopics.map((topic) => (
              <li
                key={topic}
                className="label border border-border bg-background px-4 py-3 text-navy"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
