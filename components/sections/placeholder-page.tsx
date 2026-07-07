import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  detail?: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  detail,
}: PlaceholderPageProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 border-y border-border py-12 md:grid-cols-[1fr_0.7fr] md:py-16">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          <aside className="self-start border border-border bg-surface p-6 shadow-refined">
            <p className="label text-gold">Future Surface</p>
            <p className="body-sm mt-4 text-muted-foreground">
              {detail ??
                "This route is intentionally minimal for now and will be expanded in a later phase."}
            </p>
            <div className="mt-6">
              <Button href="/books" variant="outline" size="sm">
                Explore Books
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
