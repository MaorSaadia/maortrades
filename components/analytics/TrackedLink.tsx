"use client";
import Link from "next/link";
import { useAnalytics } from "@/components/analytics/AnalyticsProvider";
import type { AnalyticsEvent } from "@/lib/analytics/events";
export function TrackedLink({ event, ...props }: React.ComponentPropsWithoutRef<typeof Link> & { event: AnalyticsEvent }) { const { track } = useAnalytics(); return <Link {...props} onClick={(click) => { props.onClick?.(click); track(event); }} />; }
