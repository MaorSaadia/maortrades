"use client";
import { COOKIE_SETTINGS_EVENT } from "@/lib/analytics/constants";
export function CookieSettingsButton() { return <button type="button" onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))} className="body-sm text-left text-muted-foreground transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Cookie Settings</button>; }
