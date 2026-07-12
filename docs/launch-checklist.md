# MaorTrades Launch Checklist

| System | Status | Reason |
| --- | --- | --- |
| Domain | BLOCKED | No verified production domain/DNS/HTTPS |
| Hosting | NEEDS CONFIGURATION | Provider not selected |
| Books | NEEDS MANUAL TEST | Final files and claims need review |
| KDP Select | BLOCKED | Eight title terms/end dates unverified |
| Lemon Squeezy | BLOCKED | Live store/products/files/prices/purchase unverified |
| Paid files | NEEDS MANUAL TEST | None found publicly; dashboard unverified |
| Resend | BLOCKED | Production domain/inbox tests unverified |
| Free Resources | NEEDS MANUAL TEST | Delivery must match real files |
| Analytics | NEEDS CONFIGURATION | Production GA setup/test missing |
| Pinterest | NEEDS CONFIGURATION | Production tag/CAPI setup missing |
| Legal | NEEDS LEGAL REVIEW | Drafts and identity/date/jurisdiction incomplete |
| Accessibility | NEEDS MANUAL TEST | AT/PDF/browser testing missing |
| Performance | NEEDS MANUAL TEST | Production measurement missing |
| Security | NEEDS MANUAL TEST | CSP report-only; host controls unknown |
| SEO | NEEDS CONFIGURATION | Indexing closed; domain/Search Console missing |
| Support | BLOCKED | Public mailboxes unverified |

## Non-negotiable blockers

- [ ] Final domain, DNS, HTTPS, site URL and no localhost production links.
- [ ] Remove reliance on the development-only `http://localhost:3000` site URL fallback by configuring the production environment before its build.
- [ ] Every applicable [KDP row](./kdp-select-launch-checklist.md) complete.
- [ ] Lemon Squeezy Live approval, twelve products, pricing/taxes/files/IDs/webhooks/receipt/My Orders verified.
- [ ] Resend domain, From, Reply-To and double opt-in tested in real inboxes.
- [ ] Legal drafts, identity, contacts, date, jurisdiction decision and consumer rights reviewed.
- [ ] Consent and production GA/Pinterest network behavior reviewed; policies match.
- [ ] Every displayed price matches Lemon Squeezy with consistent currency.
- [ ] Approved production purchase/refund including receipt, files, My Orders, webhook and success.

## Search and journeys

- [ ] Search Console/domain verified, sitemap submitted, robots/canonicals/structured data/social previews inspected.
- [ ] Preview remains noindex; transactional routes remain excluded; broken-link crawl complete.
- [ ] Test New Reader, Pinterest Article, Free Resource, Returning Buyer, Privacy-Conscious, Mobile Buyer and Accessibility journeys described in the Phase 15 brief.

Recommendation: **READY FOR STAGING REVIEW**, but **NOT READY FOR PUBLIC LAUNCH**.
