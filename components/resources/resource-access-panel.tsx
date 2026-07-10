import { Button } from "@/components/ui/button";
import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import { getResourceDeliveryState } from "@/lib/resources/access";
import type { FreeResource } from "@/types/resource";

export function ResourceAccessPanel({ resource }: { resource: FreeResource }) {
  const deliveryState = getResourceDeliveryState(resource);

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
        {getAccessDescription(deliveryState.status)}
      </p>
      {deliveryState.status === "email-gated" ? (
        <div className="mt-6">
          <NewsletterSignupForm
            source="resource"
            resourceSlug={resource.slug}
            heading="GET THE RESOURCE BY EMAIL"
            buttonLabel="Get the Resource"
            className="shadow-none"
          />
        </div>
      ) : null}
      {deliveryState.status === "direct-download" ? (
        <div className="mt-6">
          <Button
            href={deliveryState.fileUrl}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Download Resource
          </Button>
        </div>
      ) : null}
      {deliveryState.status === "coming-soon" ||
      deliveryState.status === "unavailable" ? (
        <>
          <div className="mt-6">
            <Button disabled variant="outline" className="w-full sm:w-auto">
              {deliveryState.status === "coming-soon"
                ? "Resource Access Coming Soon"
                : "Access Not Available"}
            </Button>
          </div>
          <p className="body-sm mt-5 border-l border-gold pl-4 text-muted-foreground">
            {deliveryState.status === "coming-soon"
              ? "No verified downloadable PDF exists for this resource yet, so email delivery is not active."
              : deliveryState.reason}
          </p>
        </>
      ) : null}
    </section>
  );
}

function getAccessDescription(status: ReturnType<typeof getResourceDeliveryState>["status"]) {
  if (status === "email-gated") {
    return "Enter your email to receive this resource and join the MaorTrades Letter.";
  }

  if (status === "direct-download") {
    return "This resource is available as a direct public download.";
  }

  if (status === "unavailable") {
    return "This resource cannot be delivered right now.";
  }

  return "PDF access will be available when a verified downloadable resource file exists.";
}
