export const newsletterSources = [
  "homepage",
  "footer",
  "articles",
  "article",
  "resources",
  "resource",
] as const;

export type NewsletterSource = (typeof newsletterSources)[number];

export type NewsletterSubscribeRequest = {
  email?: unknown;
  source?: unknown;
  resourceSlug?: unknown;
  company?: unknown;
};

export type ConfirmationTokenPayload = {
  version: 1;
  email: string;
  source: NewsletterSource;
  resourceSlug?: string;
  exp: number;
};

export type SubscribeResultStatus =
  | "confirmation-required"
  | "already-subscribed"
  | "invalid-input"
  | "configuration-error"
  | "provider-error";

export type SubscribeApiResponse =
  | { status: "confirmation-required" }
  | { status: "already-subscribed" }
  | { status: "invalid-input"; message: string }
  | { status: "configuration-error"; message: string }
  | { status: "provider-error"; message: string };

export type ConfirmResultStatus =
  | "confirmed"
  | "already-confirmed"
  | "expired"
  | "invalid"
  | "unavailable"
  | "configuration-error"
  | "provider-error";
