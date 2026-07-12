export const CONSENT_COOKIE_NAME = "maortrades_consent";
export const CONSENT_VERSION = 1 as const;
export const CONSENT_MAX_AGE_SECONDS = 180 * 24 * 60 * 60;
export const COOKIE_SETTINGS_EVENT = "maortrades:cookie-settings";
export const ANALYTICS_DEBUG = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
