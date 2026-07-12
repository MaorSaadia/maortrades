export const LEMON_SQUEEZY_MY_ORDERS_URL =
  "https://app.lemonsqueezy.com/my-orders";

export const PURCHASE_CONTEXT_LIFETIME_SECONDS = 2 * 60 * 60;

export function getPurchaseSupportEmail() {
  return process.env.PURCHASE_SUPPORT_EMAIL?.trim() || null;
}
