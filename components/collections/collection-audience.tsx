import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Collection } from "@/types/collection";

type CollectionAudienceProps = {
  collection: Collection;
};

export function CollectionAudience({ collection }: CollectionAudienceProps) {
  if (!collection.idealFor?.length) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
          <SectionHeader
            eyebrow="Reader Profile"
            title="WHO THIS COLLECTION IS FOR"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {collection.idealFor.map((profile) => (
              <li key={profile} className="border-l border-gold bg-surface p-5">
                <p className="body-sm text-muted-foreground">{profile}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
