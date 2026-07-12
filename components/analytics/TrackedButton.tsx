"use client";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/components/analytics/AnalyticsProvider";
import type { AnalyticsEvent } from "@/lib/analytics/events";
type Props = { event: AnalyticsEvent; href: string; children: React.ReactNode; variant?: "primary" | "gold" | "outline" | "text"; className?: string; target?: string; rel?: string };
export function TrackedButton({ event, ...props }: Props) { const { track } = useAnalytics(); return <Button {...props} onClick={() => track(event)} />; }
