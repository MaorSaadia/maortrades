import { Button } from "@/components/ui/button";
import type { FreeResource } from "@/types/resource";

export function ResourceAccessPanel({ resource }: { resource: FreeResource }) {
  const isComingSoon = resource.access.status === "coming-soon";

  return (
    <section
      className="border border-border bg-surface p-6 shadow-refined"
      aria-labelledby="resource-access-title"
    >
      <p className="label text-gold">Free Resource</p>
      <h2 id="resource-access-title" className="heading-md mt-3 text-navy">
        Access status
      </h2>
      <p className="body mt-4 text-muted-foreground">
        {isComingSoon
          ? "PDF access will be available when the MaorTrades resource library launches."
          : "This resource access state is prepared for a later delivery phase."}
      </p>
      <div className="mt-6">
        <Button disabled variant="outline" className="w-full sm:w-auto">
          {isComingSoon ? "Resource Access Coming Soon" : "Access Not Active"}
        </Button>
      </div>
      <p className="body-sm mt-5 border-l border-gold pl-4 text-muted-foreground">
        No email service, API route, database storage, or download delivery is
        connected in this phase.
      </p>
    </section>
  );
}
