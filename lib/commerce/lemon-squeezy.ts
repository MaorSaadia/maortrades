import "server-only";

import {
  createCheckout,
  lemonSqueezySetup,
  type NewCheckout,
} from "@lemonsqueezy/lemonsqueezy.js";
import { getCheckoutConfig } from "@/lib/commerce/config";

let configuredApiKey: string | null = null;

export function getConfiguredLemonSqueezy() {
  const result = getCheckoutConfig();

  if (!result.ok) {
    return result;
  }

  if (configuredApiKey !== result.config.apiKey) {
    lemonSqueezySetup({
      apiKey: result.config.apiKey,
      onError: (error) => {
        console.error("[commerce] lemon-squeezy-sdk", {
          name: error.name,
          message: error.message,
        });
      },
    });
    configuredApiKey = result.config.apiKey;
  }

  return {
    ok: true as const,
    config: result.config,
    createCheckout: (
      storeId: string,
      variantId: string,
      checkout: NewCheckout,
    ) => createCheckout(storeId, variantId, checkout),
  };
}
