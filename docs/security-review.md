# Security Review

## Implemented controls

- Checkout targets, sources, and analytics context are allow-listed server-side; browser prices, Variant IDs, and redirect URLs are rejected.
- Purchase Context is HMAC-signed, short-lived, PII-free, and never treated as payment proof.
- Lemon Squeezy webhook signatures are verified before JSON event processing.
- Newsletter tokens are server-signed and expiration-checked; secrets remain server-only.
- Analytics conversion failures are bounded and non-critical. GA/Pinterest secrets are not client-prefixed.
- Baseline headers add `nosniff`, same-origin framing, strict referrer behavior, restrictive Permissions Policy, and production HSTS.
- CSP is initially **Report-Only** to observe Next.js, Lemon Squeezy, GA4, and Pinterest behavior before enforcement. It uses exact origins rather than wildcards but temporarily permits inline scripts/styles required by the current architecture.

Required CSP origins: site origin; `app.lemonsqueezy.com`, `api.lemonsqueezy.com`, `www.googletagmanager.com`, `www.google-analytics.com`, `region1.google-analytics.com`, `s.pinimg.com`, `ct.pinterest.com`, `i.pinimg.com`, and `api.pinterest.com` for their documented roles.

## Manual blockers

- [ ] Review report-only violations with all consent and checkout flows, then design nonce/hash enforcement before changing to enforcing CSP.
- [ ] Confirm deployment proxy preserves raw webhook bodies and security headers.
- [ ] Rotate and separate production/preview secrets; verify no secret enters logs or client bundles.
- [ ] Configure rate limiting/WAF controls at the chosen host for newsletter, checkout, confirmation, and webhook endpoints.
- [ ] Review dependency advisories and provider SDK updates without force-upgrading majors.
- [ ] Confirm incident, backup, secret-rotation, and provider-access procedures.

## Dependency advisory

`npm audit --omit=dev` reports two moderate findings through Next.js's nested PostCSS version (`GHSA-qx2v-qp2m-jg93`). The offered automated command would force a breaking downgrade to Next.js 9.3.3, so it was deliberately not run. Track an upstream-compatible Next.js/PostCSS resolution and reassess before launch; do not use `npm audit fix --force`.

No exposed secret was identified by the repository pattern scan. This is not a guarantee that secrets were never committed historically; repository-history and provider-console review remain manual.
