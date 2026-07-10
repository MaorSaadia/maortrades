import "server-only";

import { getSiteUrl } from "@/lib/site-url";

export type LemonSqueezyConfig = {
  apiKey: string;
  storeId: string;
  webhookSecret: string;
  siteUrl: string;
  testMode: boolean;
};

export type LemonSqueezyConfigResult =
  | { ok: true; config: LemonSqueezyConfig }
  | { ok: false; missing: string[] };

const requiredEnvKeys = [
  "LEMONSQUEEZY_API_KEY",
  "LEMONSQUEEZY_STORE_ID",
  "LEMONSQUEEZY_WEBHOOK_SECRET",
] as const;

export function getLemonSqueezyConfig(): LemonSqueezyConfigResult {
  const missing = requiredEnvKeys.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return {
    ok: true,
    config: {
      apiKey: process.env.LEMONSQUEEZY_API_KEY!.trim(),
      storeId: process.env.LEMONSQUEEZY_STORE_ID!.trim(),
      webhookSecret: process.env.LEMONSQUEEZY_WEBHOOK_SECRET!.trim(),
      siteUrl: getSiteUrl(),
      testMode: process.env.LEMONSQUEEZY_TEST_MODE?.trim() === "true",
    },
  };
}

export function getCheckoutConfig(): LemonSqueezyConfigResult {
  const result = getLemonSqueezyConfig();

  if (!result.ok) {
    return result;
  }

  return result;
}

export function getWebhookConfig(): LemonSqueezyConfigResult {
  return getLemonSqueezyConfig();
}

export function getCommerceConfigErrorMessage(missing: string[]) {
  if (process.env.NODE_ENV === "development") {
    return `Lemon Squeezy configuration is incomplete. Missing: ${missing.join(", ")}.`;
  }

  return "Checkout is not configured right now.";
}
