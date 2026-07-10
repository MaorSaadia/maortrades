import { CheckoutButton } from "@/components/commerce/CheckoutButton";
import { getCommerceAvailability } from "@/lib/commerce/service";
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
  const availability = getCommerceAvailability({
    type: "collection",
    slug: collection.slug,
  });
  const isAvailable = availability.status === "available";
  const unavailableLabel =
    availability.status === "launch-pending"
      ? (purchase?.ctaLabel ?? "Collection Purchase Coming Soon")
      : "Direct Purchase Temporarily Unavailable";

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
        {isAvailable
          ? "Purchase is completed securely through Lemon Squeezy. Download access is provided after successful purchase."
          : (purchase?.statusText ??
            "This collection is prepared for checkout, but direct purchase is not available right now.")}
      </p>

      <div className="mt-6">
        <CheckoutButton
          targetType="collection"
          targetSlug={collection.slug}
          source="collection-purchase-panel"
          label="Get the Collection"
          unavailable={!isAvailable}
          unavailableLabel={unavailableLabel}
          className="w-full"
        />
      </div>

      <ul className="mt-6 grid gap-3 border-t border-border pt-5">
        <li className="body-sm flex gap-3 text-muted-foreground">
          <span className="mt-2 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
          <span>Curated reading path built from real MaorTrades books.</span>
        </li>
        <li className="body-sm flex gap-3 text-muted-foreground">
          <span className="mt-2 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
          <span>
            Lemon Squeezy handles secure payment, receipts, and purchased-file
            access.
          </span>
        </li>
      </ul>
    </aside>
  );
}
