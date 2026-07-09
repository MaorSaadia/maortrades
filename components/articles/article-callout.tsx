import type { ArticleCallout as ArticleCalloutType } from "@/types/article";

export function ArticleCallout({ callout }: { callout: ArticleCalloutType }) {
  return (
    <aside className="my-8 border-l border-gold bg-surface p-5">
      <p className="label text-gold">{callout.label}</p>
      <p className="body mt-3 text-navy">{callout.text}</p>
    </aside>
  );
}
