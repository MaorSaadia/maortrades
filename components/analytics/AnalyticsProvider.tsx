"use client";

import Script from "next/script";
import { createContext, Suspense, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { RouteAnalytics } from "@/components/analytics/RouteAnalytics";
import { ANALYTICS_DEBUG, COOKIE_SETTINGS_EVENT } from "@/lib/analytics/constants";
import { createConsent, defaultConsentPreferences, persistConsent, readConsentCookie, type ConsentPreferences } from "@/lib/analytics/consent";
import { clearAnalyticsQueues, flushAnalyticsQueues, trackEvent } from "@/lib/analytics/client";
import type { AnalyticsEvent } from "@/lib/analytics/events";

type Value = { consent: ConsentPreferences; decided: boolean; save: (analytics: boolean, marketing: boolean) => void; track: (event: AnalyticsEvent) => void };
const AnalyticsContext = createContext<Value | null>(null);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState(defaultConsentPreferences);
  const [decided, setDecided] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  useEffect(() => { const saved = readConsentCookie(); if (saved) setTimeout(() => { setConsent(saved); setDecided(true); }, 0); }, []);
  useEffect(() => { const open = () => setSettingsOpen(true); window.addEventListener(COOKIE_SETTINGS_EVENT, open); return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open); }, []);
  const save = useCallback((analytics: boolean, marketing: boolean) => {
    const previous = consent; const next = createConsent(analytics, marketing); persistConsent(next); setConsent(next); setDecided(true); setSettingsOpen(false);
    if (!analytics || !marketing) clearAnalyticsQueues();
    if (window.gtag) window.gtag("consent", "update", { analytics_storage: analytics ? "granted" : "denied", ad_storage: marketing ? "granted" : "denied" });
    if (previous.marketing && !marketing) location.reload();
  }, [consent]);
  const track = useCallback((event: AnalyticsEvent) => trackEvent(event, consent), [consent]);
  const value = useMemo(() => ({ consent, decided, save, track }), [consent, decided, save, track]);
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pinId = process.env.NEXT_PUBLIC_PINTEREST_TAG_ID;
  return <AnalyticsContext.Provider value={value}>
    {children}
    <Suspense fallback={null}><RouteAnalytics /></Suspense>
    {consent.analytics && gaId ? <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="maortrades-ga-init" strategy="afterInteractive" onReady={flushAnalyticsQueues}>{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','${gaId}',{send_page_view:false${ANALYTICS_DEBUG ? ",debug_mode:true" : ""}});`}</Script></> : null}
    {consent.marketing && pinId ? <Script id="maortrades-pinterest-init" strategy="afterInteractive" onReady={flushAnalyticsQueues}>{`!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};window.pintrk.queue=[];var n=document.createElement('script');n.async=!0;n.src=e;document.head.appendChild(n)}}('https://s.pinimg.com/ct/core.js');window.pintrk('load','${pinId}');`}</Script> : null}
    <ConsentBanner open={!decided || settingsOpen} managed={settingsOpen} consent={consent} onSave={save} onClose={() => decided && setSettingsOpen(false)} />
  </AnalyticsContext.Provider>;
}

export function useAnalytics() { const value = useContext(AnalyticsContext); if (!value) throw new Error("useAnalytics must be used within AnalyticsProvider"); return value; }
