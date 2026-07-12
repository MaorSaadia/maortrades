import { CONSENT_COOKIE_NAME, CONSENT_MAX_AGE_SECONDS, CONSENT_VERSION } from "@/lib/analytics/constants";

export type ConsentPreferences = { version: 1; necessary: true; analytics: boolean; marketing: boolean; updatedAt: string };
export const defaultConsentPreferences: ConsentPreferences = { version: CONSENT_VERSION, necessary: true, analytics: false, marketing: false, updatedAt: "" };

export function readConsentCookie(): ConsentPreferences | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie.split("; ").find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`))?.split("=").slice(1).join("=");
  if (!raw) return null;
  try {
    const value = JSON.parse(decodeURIComponent(raw)) as Partial<ConsentPreferences>;
    return value.version === CONSENT_VERSION && value.necessary === true && typeof value.analytics === "boolean" && typeof value.marketing === "boolean" && typeof value.updatedAt === "string" ? value as ConsentPreferences : null;
  } catch { return null; }
}

export function persistConsent(preferences: ConsentPreferences) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(preferences))}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export function createConsent(analytics: boolean, marketing: boolean): ConsentPreferences {
  return { version: CONSENT_VERSION, necessary: true, analytics, marketing, updatedAt: new Date().toISOString() };
}
