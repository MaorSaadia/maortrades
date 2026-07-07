import { Container } from "@/components/layout/container";

const pillars = ["Structure", "Execution", "Risk", "Discipline"];

export function BrandPillars() {
  return (
    <section className="border-b border-border bg-surface py-8">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="label text-muted-foreground">
            Four pillars of professional trading development.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-3 md:justify-end">
            {pillars.map((pillar, index) => (
              <li key={pillar} className="flex items-center gap-4">
                <span className="label text-navy">{pillar}</span>
                {index < pillars.length - 1 ? (
                  <span className="h-px w-8 bg-gold/55" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
