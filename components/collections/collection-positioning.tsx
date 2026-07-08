import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Collection } from "@/types/collection";

type CollectionPositioningProps = {
  collection: Collection;
};

export function CollectionPositioning({ collection }: CollectionPositioningProps) {
  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-8 border-y border-border py-14 lg:grid-cols-[0.64fr_1.36fr] lg:items-start">
          <SectionHeader
            eyebrow="Why This Collection"
            title={(collection.positioningTitle ?? "Why This Collection").toUpperCase()}
          />
          <p className="body-lg max-w-4xl text-muted-foreground">
            {collection.positioningDescription}
          </p>
        </div>
      </Container>
    </Section>
  );
}
