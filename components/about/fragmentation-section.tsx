import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  fragmentedLearningItems,
  structuredDevelopmentItems,
} from "@/data/about";

export function FragmentationSection() {
  return (
    <Section surface="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="heading-lg mt-4 max-w-2xl text-navy">
              MORE INFORMATION DOES NOT ALWAYS CREATE MORE CLARITY.
            </h2>
            <p className="body-lg mt-6 text-muted-foreground">
              A trader can know dozens of concepts and still struggle to
              understand when they matter, how they relate, or how to turn them
              into a repeatable decision process.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="border border-border bg-background p-5">
              <p className="label text-muted-foreground">Fragmented Learning</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {fragmentedLearningItems.map((item) => (
                  <li
                    key={item}
                    className="label border border-border bg-surface px-3 py-2 text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="body-sm mt-7 text-muted-foreground">
                Individual ideas can be useful, but isolated ideas rarely become
                a dependable study process on their own.
              </p>
            </article>

            <article className="border border-gold/50 bg-surface p-5 shadow-refined">
              <p className="label text-gold">Structured Development</p>
              <ol className="mt-6 grid gap-3">
                {structuredDevelopmentItems.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] items-center gap-3"
                  >
                    <span className="label text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="label border-b border-border pb-3 text-navy">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="body-sm mt-7 text-muted-foreground">
                MaorTrades focuses on connection and progression rather than
                criticism of other educators or communities.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}
