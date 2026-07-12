"use client";
import { useEffect, useRef } from "react";
import { useAnalytics } from "@/components/analytics/AnalyticsProvider";
import type { AnalyticsEvent } from "@/lib/analytics/events";
export function ConversionTracker({ event }: { event: AnalyticsEvent }) { const { track } = useAnalytics(); const sent = useRef(false); useEffect(() => { if (!sent.current) { sent.current = true; track(event); } }, [event, track]); return null; }
