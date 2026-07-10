"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type {
  CheckoutCreateResponse,
  CheckoutSource,
  CommerceTargetType,
} from "@/lib/commerce/types";

type CheckoutButtonProps = {
  targetType: CommerceTargetType;
  targetSlug: string;
  source: CheckoutSource;
  label: string;
  unavailable?: boolean;
  unavailableLabel?: string;
  variant?: "primary" | "gold" | "outline" | "text";
  className?: string;
};

type CheckoutState =
  | "idle"
  | "creating-checkout"
  | "opening-checkout"
  | "configuration-unavailable"
  | "checkout-error";

export function CheckoutButton({
  targetType,
  targetSlug,
  source,
  label,
  unavailable = false,
  unavailableLabel = "Direct Purchase Temporarily Unavailable",
  variant = "primary",
  className,
}: CheckoutButtonProps) {
  const [state, setState] = useState<CheckoutState>(
    unavailable ? "configuration-unavailable" : "idle",
  );
  const [message, setMessage] = useState("");
  const isWorking =
    state === "creating-checkout" || state === "opening-checkout";

  async function startCheckout() {
    if (unavailable || isWorking) {
      return;
    }

    setState("creating-checkout");
    setMessage("");

    try {
      const response = await fetch("/api/checkout/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: targetType,
          slug: targetSlug,
          source,
        }),
      });
      const data = (await response.json()) as CheckoutCreateResponse;

      if (data.status !== "success") {
        setState(
          data.status === "configuration-error" || data.status === "unavailable"
            ? "configuration-unavailable"
            : "checkout-error",
        );
        setMessage(
          data.status === "unavailable" ||
            data.status === "configuration-error"
            ? data.message
            : "Checkout could not be opened right now. Please try again.",
        );
        return;
      }

      setState("opening-checkout");
      openCheckout(data.url);
      setState("idle");
    } catch {
      setState("checkout-error");
      setMessage("Checkout could not be opened right now. Please try again.");
    }
  }

  function openCheckout(url: string) {
    const lemonSqueezy = window.LemonSqueezy;

    if (lemonSqueezy?.Url?.Open) {
      lemonSqueezy.Url.Open(url);
      return;
    }

    window.location.assign(url);
  }

  return (
    <div>
      <Button
        type="button"
        variant={variant}
        className={className}
        disabled={unavailable || isWorking}
        aria-busy={isWorking}
        onClick={startCheckout}
      >
        {unavailable
          ? unavailableLabel
          : state === "creating-checkout" || state === "opening-checkout"
            ? "Opening secure checkout..."
            : label}
      </Button>
      <div className="mt-3" aria-live="polite">
        {message ? (
          <p className="body-sm border-l border-gold pl-4 text-muted-foreground">
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
