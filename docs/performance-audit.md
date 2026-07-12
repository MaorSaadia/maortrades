# Performance Audit

## Current strengths

- Server Components remain the default; client code is limited to navigation, forms, checkout, consent, and analytics boundaries.
- Book covers use `next/image` with intrinsic dimensions and responsive sizes.
- Fonts use `next/font` and are self-hosted by the production build.
- GA4 and Pinterest are lazy and consent-gated; no general analytics framework was installed.
- No animation, dashboard, database, PDF-viewer, or account dependency was added.

## Remaining measurement

- [ ] Run Lighthouse and WebPageTest against the final production-like origin on throttled mobile and desktop.
- [ ] Measure LCP on Homepage, Books, Book detail, Collections, Article, Purchase Success, and legal pages.
- [ ] Review image formats and source quality; do not recompress cover masters without visual approval.
- [ ] Inspect client bundles and provider-script impact with production IDs and consent states.
- [ ] Test checkout overlay, consent dialog, and newsletter without layout shift.
- [ ] Test Chromium, Firefox, and Safari/WebKit. Only the automated Next.js build was available in this environment.

No Lighthouse score is claimed.
