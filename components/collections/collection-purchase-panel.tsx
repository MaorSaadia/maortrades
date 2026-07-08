import type { Collection } from "@/types/collection";

type CollectionPurchasePanelProps = {
  collection: Collection;
  includedBookCount: number;
};

export function CollectionPurchasePanel({
  collection,
  includedBookCount,
}: CollectionPurchasePanelProps) {
  const purchase = collection.purchase;

  return (
    <aside
      className="border border-border bg-surface p-6 shadow-refined"
      aria-labelledby="collection-purchase-heading"
    >
      <p className="label text-gold">Collection Access</p>
      <h2 id="collection-purchase-heading" className="heading-sm mt-3 text-navy">
        {includedBookCount} {includedBookCount === 1 ? "Book" : "Books"} Included
      </h2>
      <p className="body-sm mt-4 text-muted-foreground">
        {purchase?.statusText ??
          "Direct collection purchasing will be available when the MaorTrades store launches."}
      </p>

      <div
        role="status"
        aria-live="polite"
        className="label mt-6 flex min-h-12 items-center justify-center border border-navy/20 bg-muted px-4 text-center text-navy"
      >
        {purchase?.ctaLabel ?? "Collection Purchase Coming Soon"}
      </div>

      <ul className="mt-6 grid gap-3 border-t border-border pt-5">
        <li className="body-sm flex gap-3 text-muted-foreground">
          <span className="mt-2 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
          <span>Curated reading path built from real MaorTrades books.</span>
        </li>
        <li className="body-sm flex gap-3 text-muted-foreground">
          <span className="mt-2 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
          <span>No checkout, payment provider, or collection product is connected yet.</span>
        </li>
      </ul>
    </aside>
  );
}
