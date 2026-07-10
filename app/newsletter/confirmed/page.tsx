import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getResourceBySlug } from "@/data/resources";

type ConfirmedPageProps = {
  searchParams: Promise<{
    status?: string;
    resource?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Subscription Confirmed | MaorTrades",
  description: "Confirmation status for the MaorTrades Letter.",
  robots: {
    index: false,
    follow: false,
  },
};

const allowedStatuses = [
  "confirmed",
  "already-confirmed",
  "expired",
  "invalid",
  "unavailable",
  "configuration-error",
  "provider-error",
] as const;

export default async function NewsletterConfirmedPage({
  searchParams,
}: ConfirmedPageProps) {
  const params = await searchParams;
  const rawStatus = params.status ?? "invalid";
  const status = allowedStatuses.includes(
    rawStatus as (typeof allowedStatuses)[number],
  )
    ? rawStatus
    : "invalid";
  const resource = params.resource ? getResourceBySlug(params.resource) : null;
  const copy = getStatusCopy(status, resource?.title);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl border-y border-border py-16 text-center md:py-24">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h1 className="heading-lg mt-4 text-navy">{copy.heading}</h1>
          <p className="body-lg mx-auto mt-6 max-w-2xl text-muted-foreground">
            {copy.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={copy.primaryHref}>{copy.primaryLabel}</Button>
            <Button href={copy.secondaryHref} variant="outline">
              {copy.secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function getStatusCopy(status: string, resourceTitle?: string) {
  if (status === "confirmed") {
    return {
      eyebrow: "WELCOME TO MAORTRADES",
      heading: "YOUR SUBSCRIPTION IS CONFIRMED.",
      description:
        "You are now part of the MaorTrades Letter. New articles, book updates, educational frameworks, and selected resources will arrive by email.",
      primaryLabel: "Start Here",
      primaryHref: "/start-here",
      secondaryLabel: "Explore the Journal",
      secondaryHref: "/articles",
    };
  }

  if (status === "already-confirmed") {
    return {
      eyebrow: "MAORTRADES LETTER",
      heading: "YOUR SUBSCRIPTION IS ALREADY CONFIRMED.",
      description:
        "This confirmation link has already been used, and your MaorTrades Letter subscription is active.",
      primaryLabel: "Read the Journal",
      primaryHref: "/articles",
      secondaryLabel: "Explore Books",
      secondaryHref: "/books",
    };
  }

  if (status === "expired") {
    return {
      eyebrow: "CONFIRMATION EXPIRED",
      heading: "THIS CONFIRMATION LINK HAS EXPIRED.",
      description:
        "For security, MaorTrades confirmation links are short-lived. Return to the site and subscribe again to receive a new link.",
      primaryLabel: "Subscribe Again",
      primaryHref: "/#newsletter",
      secondaryLabel: "Start Here",
      secondaryHref: "/start-here",
    };
  }

  if (status === "unavailable") {
    return {
      eyebrow: "RESOURCE UNAVAILABLE",
      heading: resourceTitle
        ? "THIS RESOURCE IS NOT AVAILABLE FOR EMAIL DELIVERY."
        : "RESOURCE DELIVERY IS NOT AVAILABLE.",
      description: resourceTitle
        ? `${resourceTitle} does not currently have a verified downloadable file, so no resource email was sent.`
        : "No verified downloadable file exists for this resource, so no resource email was sent.",
      primaryLabel: "View Resources",
      primaryHref: "/resources",
      secondaryLabel: "Read the Journal",
      secondaryHref: "/articles",
    };
  }

  if (status === "configuration-error" || status === "provider-error") {
    return {
      eyebrow: "EMAIL SERVICE",
      heading: "WE COULD NOT CONFIRM THIS SUBSCRIPTION RIGHT NOW.",
      description:
        "The MaorTrades email service could not complete the request. Please return to the site and try again later.",
      primaryLabel: "Return Home",
      primaryHref: "/",
      secondaryLabel: "Explore the Journal",
      secondaryHref: "/articles",
    };
  }

  return {
    eyebrow: "INVALID LINK",
    heading: "THIS CONFIRMATION LINK IS NOT VALID.",
    description:
      "The link may be incomplete or altered. Return to the site and subscribe again to receive a new confirmation email.",
    primaryLabel: "Subscribe Again",
    primaryHref: "/#newsletter",
    secondaryLabel: "Start Here",
    secondaryHref: "/start-here",
  };
}
