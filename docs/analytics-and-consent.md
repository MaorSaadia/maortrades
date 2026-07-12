# Analytics and Consent

> Production gate: verify consent states and final-origin network requests; configure live identifiers; disable debug/test modes deliberately; audit PII; and ensure Privacy/Cookie drafts match deployment before indexing.

Phase 14 uses direct Google Analytics 4 and Pinterest integrations. It does not use Google Tag Manager, a customer profile database, or an internal reporting dashboard. This technical architecture is not, by itself, a legal-compliance conclusion; final privacy and cookie language requires launch review.

## Consent Model

The versioned `maortrades_consent` first-party cookie contains only `necessary`, `analytics`, `marketing`, a version, and an update timestamp. It uses `SameSite=Lax`, site-wide path, a centralized 180-day duration, and `Secure` on HTTPS. The duration is a product setting, not a claim about a legal requirement.

First-visit defaults are necessary on, analytics off, and marketing off. The banner gives equal access to Accept All, Reject Optional, and Manage Preferences. Footer **Cookie Settings** reopens the dialog. Granting a category loads that provider and sends the current route once. Revoking analytics stops calls and updates Google consent state. Revoking marketing reloads the page so Pinterest no longer operates. The implementation does not guess at or delete provider cookies; identifier-removal policy requires separate CMP/privacy review.

## Provider Loading

- GA4 loads only with analytics consent and `NEXT_PUBLIC_GA_MEASUREMENT_ID`. It initializes with `send_page_view: false`; App Router page views are manual and route-deduplicated.
- Pinterest Tag loads only with marketing consent and `NEXT_PUBLIC_PINTEREST_TAG_ID`. Browser enhanced matching is not enabled.
- Missing configuration skips delivery and never blocks rendering, navigation, email, checkout, or webhooks.

No CSP currently exists. A future CSP review should narrowly allow `www.googletagmanager.com`, `www.google-analytics.com`, `s.pinimg.com`, and the exact Pinterest event endpoints required by the deployed tag; do not use wildcard script, image, or connection policies.

## Checkout and Verified Orders

At successful checkout creation, the browser emits GA `begin_checkout` and Pinterest `InitiateCheckout`. Before the request, it captures the GA client ID only with analytics consent and a Pinterest `epik` click identifier only with marketing consent. The server validates all values and passes minimal consent/attribution context through Lemon Squeezy custom data.

Purchase Context remains editorial personalization—not payment proof. No purchase event fires from Lemon.js or `/purchase/success`. Only a signature-verified `order_created` webhook may send GA `purchase` or Pinterest server `checkout`; only a verified `order_refunded` webhook may send GA `refund`. Lemon Squeezy order ID is the stable GA transaction ID and Pinterest event ID, providing provider-side duplicate-event protection. Collection purchases are one Collection item, not multiple included Book purchases.

Google receives no email, name, address, Lemon Squeezy customer ID, confirmation token, or Purchase Context. Pinterest receives no raw email. `PINTEREST_HASHED_EMAIL_MATCH_ENABLED` is off by default and this phase does not implement hashed-email extraction even if mistakenly enabled.

## Environment Variables

Client-visible: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_PINTEREST_TAG_ID`, `NEXT_PUBLIC_ANALYTICS_DEBUG`.

Server-only: `GA_MEASUREMENT_PROTOCOL_API_SECRET`, `PINTEREST_AD_ACCOUNT_ID`, `PINTEREST_CONVERSION_ACCESS_TOKEN`, `PINTEREST_CONVERSIONS_API_ENABLED`, `PINTEREST_CONVERSIONS_TEST_MODE`, `PINTEREST_HASHED_EMAIL_MATCH_ENABLED`.

## Events

GA browser events: `page_view`, `view_item_list`, `view_item`, `select_item` where instrumented, `article_view`, `resource_view`, `start_here_recommendation_selected`, `newsletter_confirmation_requested`, `sign_up`, `resource_requested`, `generate_lead`, `begin_checkout`, and restrained post-purchase engagement events.

Pinterest browser events: `PageVisit`, `ViewCategory`, `ViewContent`, `InitiateCheckout`, `Subscribe`, and `Lead`. Pinterest purchase `checkout` is server-only. GA `purchase` and `refund` are server-only.

Recommended event-scoped GA custom dimensions include `content_type`, `content_slug`, `content_category`, `product_type`, `product_slug`, `checkout_source`, `reader_situation`, `resource_type`, and `resource_category`. Configure these manually. Recommended key events are `purchase`, `sign_up`, and `generate_lead`; monitor `begin_checkout` before deciding whether to mark it.

## Manual GA4 Setup

1. Create a GA4 property and Web stream; copy its Measurement ID.
2. Create a Measurement Protocol API secret and configure it only server-side.
3. Test page views, item lists, item views, checkout, signup, lead, verified purchase, and refund in DebugView and Realtime.
4. Configure useful custom dimensions and chosen key events manually.
5. Confirm transaction-ID deduplication and audit every parameter for PII.

## Manual Pinterest Setup

1. Confirm business and advertiser accounts, create one Pinterest Tag, and configure its public Tag ID.
2. Verify PageVisit, ViewCategory, ViewContent, InitiateCheckout, Subscribe, and Lead.
3. Generate a Conversions API token, record the Ad Account ID, and keep API delivery disabled until consent/privacy review is complete.
4. Enable Test Events first, verify server `checkout`, review Conversions Health, and confirm stable event IDs with no browser purchase duplicate.

## Test Matrix and Launch Checklist

Test fresh consent, analytics-only, marketing-only, accept-all, reject-optional, and preference revocation. Confirm no GA/Pinterest requests before consent. Navigate through homepage, catalogue/detail routes, Articles, Resources, Start Here, newsletter/resource confirmation, checkout, purchase success, and purchase access. Test missing IDs/secrets, GA debug mode, Pinterest test mode, invalid attribution context, duplicate webhook delivery, purchase/refund webhooks, all supported breakpoints, keyboard/Escape behavior, focus visibility, console errors, and horizontal overflow.

Before production, set Pinterest test mode false only after test verification, keep hashed email matching false, complete final policy review, validate dashboards, and repeat a live end-to-end purchase/refund test.
