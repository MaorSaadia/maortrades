import type { FreeResource, ResourceSection } from "@/types/resource";

function getPreviewText(section: ResourceSection) {
  return section.questions?.[0] ?? section.items?.[0]?.text;
}

export function ResourcePreview({ resource }: { resource: FreeResource }) {
  const previewSections = resource.sections
    .map((section) => ({
      title: section.title,
      text: getPreviewText(section),
    }))
    .filter((section): section is { title: string; text: string } =>
      Boolean(section.text),
    )
    .slice(0, 6);

  if (!previewSections.length) {
    return null;
  }

  return (
    <section className="border-y border-border py-12">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="label text-gold">Resource Preview</p>
          <h2 className="heading-md mt-3 text-navy">
            Selected prompts from the resource
          </h2>
          <p className="body mt-4 text-muted-foreground">
            This is an interface preview built from the actual resource content.
            It is not a downloadable PDF preview.
          </p>
        </div>
        <div className="border border-border bg-background p-5">
          <ol className="grid gap-4">
            {previewSections.map((section, index) => (
              <li
                key={section.title}
                className="grid gap-3 border-b border-border pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[4rem_1fr]"
              >
                <p className="label text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="label text-navy">{section.title}</p>
                  <p className="body-sm mt-2 text-muted-foreground">
                    {section.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
