import type { FreeResource } from "@/types/resource";

export function ResourceCoverage({ resource }: { resource: FreeResource }) {
  return (
    <section>
      <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr]">
        <div>
          <p className="label text-gold">What It Covers</p>
          <h2 className="heading-md mt-3 text-navy">
            The working sections
          </h2>
          <p className="body mt-4 text-muted-foreground">
            The content below is rendered from the structured resource data, so
            each page can support checklists, reference definitions, and
            worksheet prompts without separate static implementations.
          </p>
        </div>
        <div className="grid gap-5">
          {resource.sections.map((section, index) => (
            <article
              key={section.id}
              className="grid gap-5 border-t border-border pt-5 md:grid-cols-[4rem_1fr]"
            >
              <p className="label text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="heading-sm text-navy">{section.title}</h3>
                {section.description ? (
                  <p className="body-sm mt-3 text-muted-foreground">
                    {section.description}
                  </p>
                ) : null}
                {section.questions?.length ? (
                  <ul className="mt-4 grid gap-2 border-l border-gold pl-4">
                    {section.questions.map((question) => (
                      <li key={question} className="body-sm text-foreground">
                        {question}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.items?.length ? (
                  <dl className="mt-4 grid gap-3">
                    {section.items.map((item) => (
                      <div key={`${item.label ?? "item"}-${item.text}`}>
                        {item.label ? (
                          <dt className="label text-navy">{item.label}</dt>
                        ) : null}
                        <dd className="body-sm text-muted-foreground">
                          {item.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
