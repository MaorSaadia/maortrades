import "server-only";

import { randomUUID } from "node:crypto";

import { getBookBySlug } from "@/data/books";
import { getCollectionBySlug } from "@/data/collections";
import {
  getCommerceConfigErrorMessage,
  getCheckoutConfig,
} from "@/lib/commerce/config";
import {
  getCommerceProduct,
  isCheckoutSourceAllowedForTarget,
} from "@/lib/commerce/catalog";
import { getConfiguredLemonSqueezy } from "@/lib/commerce/lemon-squeezy";
import type {
  CheckoutCreateResult,
  CheckoutSource,
  CommerceAvailability,
  CommerceTarget,
} from "@/lib/commerce/types";
import { signPurchaseContext } from "@/lib/commerce/purchase-context";

export function getCommerceAvailability(
  target: CommerceTarget,
): CommerceAvailability {
  const product = getCommerceProduct(target);

  if (!product) {
    return { status: "invalid-product" };
  }

  const catalogueItem =
    target.type === "book"
      ? getBookBySlug(target.slug)
      : getCollectionBySlug(target.slug);
  const purchaseStatus =
    target.type === "book"
      ? getBookBySlug(target.slug)?.purchaseStatus
      : getCollectionBySlug(target.slug)?.purchase?.status;

  if (!catalogueItem || purchaseStatus !== "available") {
    return { status: "launch-pending" };
  }

  const config = getCheckoutConfig();

  if (!config.ok) {
    return { status: "configuration-missing", missing: config.missing };
  }

  const variantId = process.env[product.variantEnvKey]?.trim();

  if (!variantId || !/^\d+$/.test(variantId)) {
    return {
      status: "variant-missing",
      variantEnvKey: product.variantEnvKey,
    };
  }

  return { status: "available", variantId };
}

export async function createProductCheckout({
  target,
  source,
}: {
  target: CommerceTarget;
  source: CheckoutSource;
}): Promise<CheckoutCreateResult> {
  const product = getCommerceProduct(target);

  if (!product || !isCheckoutSourceAllowedForTarget(target, source)) {
    return { status: "invalid-product", reason: "Invalid checkout target." };
  }

  const availability = getCommerceAvailability(target);

  if (availability.status === "launch-pending") {
    return { status: "unavailable", reason: "This product is not available yet." };
  }

  if (availability.status === "variant-missing") {
    return {
      status: "unavailable",
      reason: "This product is not configured for checkout yet.",
    };
  }

  if (availability.status === "configuration-missing") {
    return {
      status: "configuration-error",
      reason: getCommerceConfigErrorMessage(availability.missing),
    };
  }

  if (availability.status !== "available") {
    return { status: "invalid-product", reason: "Invalid checkout target." };
  }

  const client = getConfiguredLemonSqueezy();

  if (!client.ok) {
    return {
      status: "configuration-error",
      reason: getCommerceConfigErrorMessage(client.missing),
    };
  }

  const checkoutReference = randomUUID();
  const purchaseContextToken = signPurchaseContext({ ...target, source, checkoutReference });
  if (!purchaseContextToken) {
    return {
      status: "configuration-error",
      reason: getCommerceConfigErrorMessage(["PURCHASE_CONTEXT_SIGNING_SECRET"]),
    };
  }
  const successUrl = `${client.config.siteUrl}/purchase/success?context=${encodeURIComponent(purchaseContextToken)}`;

  const checkout = await client.createCheckout(
    client.config.storeId,
    availability.variantId,
    {
      productOptions: {
        redirectUrl: successUrl,
        enabledVariants: [Number(availability.variantId)],
        receiptButtonText: "Begin Your MaorTrades Reading Path",
        receiptLinkUrl: successUrl,
      },
      checkoutOptions: {
        embed: true,
        media: true,
        logo: true,
        desc: true,
        discount: true,
        buttonColor: "#14213d",
        buttonTextColor: "#f7f4ed",
      },
      checkoutData: {
        custom: {
          product_type: product.type,
          product_slug: product.slug,
          source,
          checkout_reference: checkoutReference,
        },
      },
      testMode: client.config.testMode,
    },
  );

  if (checkout.error || !checkout.data?.data.attributes.url) {
    console.error("[commerce] checkout_create", {
      statusCode: checkout.statusCode,
      message: checkout.error?.message,
    });
    return {
      status: "provider-error",
      reason: "Checkout could not be created.",
    };
  }

  return {
    status: "success",
    url: checkout.data.data.attributes.url,
  };
}
