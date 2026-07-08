import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Collection } from "@/types/collection";

type CollectionProgressionProps = {
  collection: Collection;
};

export function CollectionProgression({ collection }: CollectionProgressionProps) {
  if (!collection.learningProgression?.length) {
    return null;
  }

  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr]">
          <SectionHeader
            eyebrow="Collection Progression"
            title="THE PATH IN SEQUENCE"
            description="A simple view of the educational movement inside this collection."
            className="[&_h2]:text-ivory [&_p]:text-ivory/70"
          />
          <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {collection.learningProgression.map((stage, index) => (
              <li
                key={stage}
                className="border border-ivory/15 bg-surface-dark p-5"
              >
                <p className="label text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="label mt-5 text-ivory">{stage}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
