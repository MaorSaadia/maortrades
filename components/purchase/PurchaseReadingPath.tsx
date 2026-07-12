import { getBooksBySlugs } from "@/data/books";
import type { Book } from "@/types/book";
import type { Collection } from "@/types/collection";

export function PurchaseReadingPath({ book, collection }: { book?: Book; collection?: Collection }) {
  if (collection?.grouping?.length) return <div className="grid gap-4 md:grid-cols-2">
    {collection.grouping.map((group) => <div key={group.title} className="border-l border-gold bg-surface p-5">
      <h3 className="heading-sm text-navy">{group.title}</h3><p className="body-sm mt-2 text-muted-foreground">{group.description}</p>
      <p className="label mt-4 text-foreground">{getBooksBySlugs(group.bookSlugs).map((item) => item.title).join(" · ")}</p>
    </div>)}
  </div>;
  const entries = collection?.recommendedOrder?.map((entry) => ({ ...entry, book: getBooksBySlugs([entry.bookSlug])[0] })) ??
    (book ? [{ label: "01", role: book.bookStructure?.[0]?.title ?? "Establish the first framework", rationale: book.bookStructure?.[0]?.description, book }] : []);
  return <ol className="border-t border-border">{entries.map((entry, index) => entry.book ? <li key={`${entry.book.slug}-${index}`} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[7rem_1fr]">
    <p className="label text-gold">{entry.label ?? String(index + 1).padStart(2, "0")}</p><div><h3 className="heading-sm text-navy">{entry.book.title}</h3><p className="label mt-2 text-foreground">{entry.role}</p>{entry.rationale ? <p className="body-sm mt-2 text-muted-foreground">{entry.rationale}</p> : null}</div>
  </li> : null)}</ol>;
}
