import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { getBooksBySlugs } from "@/data/books";
import type { Collection } from "@/types/collection";

type CompleteLibraryGroupsProps = {
  collection: Collection;
};

export function CompleteLibraryGroups({ collection }: CompleteLibraryGroupsProps) {
  if (!collection.grouping?.length) {
    return null;
  }

  return (
    <Section surface="muted">
      <Container>
        <SectionHeader
          eyebrow="Library Roles"
          title="HOW THE COMPLETE LIBRARY IS ORGANIZED"
          description="The complete collection combines progressive learning, reference material, execution study, performance work, and the flagship series."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {collection.grouping.map((group) => {
            const books = getBooksBySlugs(group.bookSlugs);
            return (
              <article
                key={group.title}
                className="border border-border bg-background p-5"
              >
                <p className="label text-gold">{group.title}</p>
                {group.description ? (
                  <p className="body-sm mt-3 text-muted-foreground">
                    {group.description}
                  </p>
                ) : null}
                <ul className="mt-5 grid gap-3 border-t border-border pt-5">
                  {books.map((book) => (
                    <li key={book.id}>
                      <Link
                        href={`/books/${book.slug}`}
                        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        <span className="heading-sm text-navy transition-colors group-hover:text-gold">
                          {book.title}
                        </span>
                        {book.subtitle ? (
                          <span className="body-sm mt-1 block text-muted-foreground">
                            {book.subtitle}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
