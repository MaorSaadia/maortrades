import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "MaorTrades",
    template: "%s | MaorTrades",
  },
  description:
    "Premium trading books and frameworks for structure, execution, risk, and professional discipline.",
  openGraph: { type: "website", siteName: "MaorTrades", title: "MaorTrades", description: "Premium trading books and frameworks for structure, execution, risk, and professional discipline." },
  twitter: { card: "summary", title: "MaorTrades", description: "Premium trading books and frameworks for structure, execution, risk, and professional discipline." },
  robots: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true" ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#main-content" className="fixed left-3 top-3 z-[200] -translate-y-24 bg-navy px-4 py-3 text-sm font-semibold text-ivory transition-transform focus:translate-y-0">Skip to main content</a>
        <AnalyticsProvider><SiteHeader /><main id="main-content" tabIndex={-1} className="flex-1">{children}</main><SiteFooter /></AnalyticsProvider>
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
