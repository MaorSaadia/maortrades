"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type {
  NewsletterSource,
  SubscribeApiResponse,
} from "@/lib/email/types";
import { cn } from "@/lib/utils";
import { useAnalytics } from "@/components/analytics/AnalyticsProvider";

type FormState =
  | "idle"
  | "submitting"
  | "confirmation-required"
  | "already-subscribed"
  | "validation-error"
  | "server-error";

type NewsletterSignupFormProps = {
  source: NewsletterSource;
  resourceSlug?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  compact?: boolean;
  className?: string;
};

const defaultHeading = "JOIN THE MAORTRADES LETTER";
const defaultDescription =
  "Receive new articles, book updates, educational frameworks, and selected trading resources from MaorTrades.";
const consentText =
  "By subscribing, you agree to receive MaorTrades emails. You can unsubscribe from marketing emails at any time.";

export function NewsletterSignupForm({
  source,
  resourceSlug,
  heading,
  description,
  buttonLabel,
  compact = false,
  className,
}: NewsletterSignupFormProps) {
  const emailId = useId();
  const statusId = useId();
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const { track } = useAnalytics();

  const isResourceRequest = Boolean(resourceSlug);
  const resolvedHeading =
    heading ?? (isResourceRequest ? "GET THE RESOURCE BY EMAIL" : defaultHeading);
  const resolvedDescription =
    description ??
    (isResourceRequest
      ? "Enter your email to receive the resource and join the MaorTrades Letter for educational articles, book updates, and selected trading resources."
      : defaultDescription);
  const resolvedButtonLabel =
    buttonLabel ?? (isResourceRequest ? "Get the Resource" : "Join the Letter");
  const isSubmitting = state === "submitting";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const company = formData.get("company");

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source,
          resourceSlug,
          company,
        }),
      });
      const data = (await response.json()) as SubscribeApiResponse;

      if (data.status === "confirmation-required") {
        track(isResourceRequest && resourceSlug ? { name: "resource_requested", resource_slug: resourceSlug } : { name: "newsletter_confirmation_requested", source });
        setState("confirmation-required");
        setMessage(
          "Check your inbox. We sent a confirmation link to complete your MaorTrades subscription.",
        );
        event.currentTarget.reset();
        return;
      }

      if (data.status === "already-subscribed") {
        setState("already-subscribed");
        setMessage("You are already subscribed to the MaorTrades Letter.");
        return;
      }

      if (data.status === "invalid-input") {
        setState("validation-error");
        setMessage(data.message);
        return;
      }

      setState("server-error");
      setMessage(
        "We could not start the subscription process right now. Please try again.",
      );
    } catch {
      setState("server-error");
      setMessage(
        "We could not start the subscription process right now. Please try again.",
      );
    }
  }

  return (
    <form
      className={cn(
        "border border-border bg-surface p-5 shadow-refined",
        compact && "p-0 shadow-none md:border-0 md:bg-transparent",
        className,
      )}
      aria-describedby={`${statusId}-consent ${statusId}`}
      onSubmit={onSubmit}
    >
      {heading !== "" ? (
        <div className={compact ? "sr-only" : "mb-5"}>
          <p className="label text-gold">{resolvedHeading}</p>
          <p className="body-sm mt-3 text-muted-foreground">
            {resolvedDescription}
          </p>
        </div>
      ) : null}

      <label htmlFor={emailId} className={compact ? "sr-only" : "label text-navy"}>
        Email address
      </label>
      <div
        className={cn(
          "mt-3 flex flex-col gap-3 sm:flex-row",
          compact && "mt-0 md:items-start",
        )}
      >
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          disabled={isSubmitting}
          className="min-h-12 w-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:min-w-0"
        />
        <input
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <Button
          type="submit"
          variant={compact ? "outline" : "primary"}
          className="shrink-0"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : resolvedButtonLabel}
        </Button>
      </div>
      <p
        id={`${statusId}-consent`}
        className="body-sm mt-4 text-muted-foreground"
      >
        {consentText}
      </p>
      <div id={statusId} className="mt-4" aria-live="polite">
        {message ? (
          <div
            className={cn(
              "body-sm border-l pl-4",
              state === "validation-error" || state === "server-error"
                ? "border-red-700 text-red-800"
                : "border-gold text-navy",
            )}
          >
            <p>{message}</p>
            {state === "already-subscribed" ? (
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/articles"
                  className="label text-gold transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Read the Journal
                </Link>
                <Link
                  href="/books"
                  className="label text-gold transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Explore the Library
                </Link>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
}
