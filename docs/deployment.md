# Provider-Neutral Deployment Guide

The repository is not tied to a hosting provider. Select a platform supporting Next.js 16 App Router, Node.js Route Handlers, server environment variables, dynamic rendering, and raw webhook request bodies.

1. Connect Git and create separate preview/production environments.
2. Keep indexing off, Lemon Squeezy in Test Mode, and Pinterest CAPI in test mode for preview.
3. Select the production domain, configure DNS/HTTPS, set `NEXT_PUBLIC_SITE_URL` to the exact origin, and redeploy.
4. Configure `.env.example` values without copying test credentials to production.
5. Verify metadata, canonicals, robots, sitemap, social previews, legal pages, and headers.
6. Configure Resend and Lemon Squeezy webhook URLs; test email, checkout, receipts, My Orders, webhooks, success and refund behavior.
7. Test consent and production analytics before indexing.
8. Complete KDP, legal, pricing, PDF, accessibility and purchase blockers.
9. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` only on reviewed production, rebuild, inspect robots, and submit the sitemap.

## Domain migration

- [ ] Metadata base, canonicals, Open Graph, sitemap and robots use the final origin.
- [ ] Email links and purchase/receipt redirects use the final origin.
- [ ] Lemon Squeezy webhook and receipt return links use the final origin.
- [ ] GA locations and Pinterest event-source URLs use the final origin.
- [ ] Legal/support links and structured data use the final origin.
- [ ] Search Console and Pinterest domain verification complete.
- [ ] Preview deployments remain noindex with separate credentials.

Rebuild after domain changes because public environment values are embedded at build time.
