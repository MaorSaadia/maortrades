# Lemon Squeezy Setup

Phase 12 uses Lemon Squeezy for payment collection, receipts, taxes, order records, and purchased-file access. MaorTrades creates secure checkout sessions from catalogue slugs only.

## Setup Steps

1. Create a Lemon Squeezy account and store.
2. Use Test Mode first.
3. Create the eight Book products.
4. Create the four Collection products.
5. Configure each product as a real single-payment digital product.
6. Upload the correct PDF files inside Lemon Squeezy.
7. Record each product's PDF Edition Variant ID.
8. Configure test environment variables in the deployment environment.
9. Create a test API key.
10. Configure the webhook endpoint: `/api/webhooks/lemon-squeezy`.
11. Add a webhook signing secret.
12. Subscribe the webhook to `order_created` and `order_refunded`.
13. Make test purchases.
14. Verify the checkout overlay opens.
15. Verify the hosted checkout fallback works when Lemon.js is unavailable.
16. Verify the Lemon Squeezy receipt and purchased-file access.
17. Verify `order_created` webhook delivery.
18. Verify `order_refunded` webhook delivery.
19. Prepare separate Live Mode products, Variant IDs, API key, Store ID, and webhook secret.
20. Test production configuration carefully before public launch.

Do not commit real API keys, webhook secrets, or Variant IDs unless the project intentionally changes that policy.

## Test Mode And Live Mode

Test Mode and Live Mode must use separate environment values. Do not assume Store IDs, Variant IDs, API keys, or webhook secrets are shared between modes.

For local and staging environments, use test values and set:

```bash
LEMONSQUEEZY_TEST_MODE="true"
```

For production, use live values and set:

```bash
LEMONSQUEEZY_TEST_MODE="false"
```

## Commerce Targets

| Type | MaorTrades Slug | Lemon Squeezy Product Name | Required Variant Environment Variable | Expected PDF Contents |
| --- | --- | --- | --- | --- |
| Book | `day-trading-for-absolute-beginners` | Day Trading for Absolute Beginners | `LEMONSQUEEZY_VARIANT_DAY_TRADING_BEGINNERS` | Day Trading for Absolute Beginners PDF |
| Book | `smart-money-simplified` | Smart Money, Simplified | `LEMONSQUEEZY_VARIANT_SMART_MONEY_SIMPLIFIED` | Smart Money, Simplified PDF |
| Book | `the-ict-playbook` | The ICT Playbook | `LEMONSQUEEZY_VARIANT_ICT_PLAYBOOK` | The ICT Playbook PDF |
| Book | `the-institutional-ict-codex` | The Institutional ICT Codex | `LEMONSQUEEZY_VARIANT_INSTITUTIONAL_ICT_CODEX` | The Institutional ICT Codex PDF |
| Book | `the-modern-ict-traders-masterclass` | The Modern ICT Trader's Masterclass | `LEMONSQUEEZY_VARIANT_MODERN_ICT_MASTERCLASS` | The Modern ICT Trader's Masterclass PDF |
| Book | `the-disciplined-edge` | The Disciplined Edge | `LEMONSQUEEZY_VARIANT_DISCIPLINED_EDGE` | The Disciplined Edge PDF |
| Book | `the-institutional-operator-book-1` | The Institutional Operator - Book 1 | `LEMONSQUEEZY_VARIANT_INSTITUTIONAL_OPERATOR_BOOK_1` | The Institutional Operator Book 1 PDF |
| Book | `the-institutional-operator-book-2` | The Institutional Operator - Book 2 | `LEMONSQUEEZY_VARIANT_INSTITUTIONAL_OPERATOR_BOOK_2` | The Institutional Operator Book 2 PDF |
| Collection | `trading-foundations` | Trading Foundations Collection | `LEMONSQUEEZY_VARIANT_TRADING_FOUNDATIONS_COLLECTION` | Day Trading for Absolute Beginners PDF; Smart Money, Simplified PDF |
| Collection | `smart-money-and-ict` | Smart Money & ICT Collection | `LEMONSQUEEZY_VARIANT_SMART_MONEY_ICT_COLLECTION` | Smart Money, Simplified PDF; The Institutional ICT Codex PDF; The ICT Playbook PDF |
| Collection | `the-institutional-operator` | The Institutional Operator Collection | `LEMONSQUEEZY_VARIANT_INSTITUTIONAL_OPERATOR_COLLECTION` | The Institutional Operator Book 1 PDF; The Institutional Operator Book 2 PDF |
| Collection | `complete-maortrades-library` | The Complete MaorTrades Library | `LEMONSQUEEZY_VARIANT_COMPLETE_MAORTRADES_LIBRARY` | All eight MaorTrades book PDFs |

## Price Handling

No verified local display prices currently exist in the MaorTrades catalogue data. Checkout prices are therefore shown by Lemon Squeezy and remain authoritative.

If local display prices are added later, dashboard price changes require local display-price review. The client must never send prices to checkout creation.

Products lacking verified local display prices:

- All eight Book products
- All four Collection products

## Responsibility Boundary

MaorTrades owns product discovery, checkout initiation, source context, and the branded purchase-success page.

Lemon Squeezy owns payment collection, checkout payment fields, tax handling, receipts, order records, and purchased-file access.

Do not place paid PDFs in `public/`. Do not send paid PDFs with Resend. Do not build a parallel paid-download delivery system.

## Post-Purchase Experience

Lemon Squeezy remains the paid-file delivery system. Its receipt email contains purchased-content access, and [My Orders](https://app.lemonsqueezy.com/my-orders) lets customers retrieve prior purchases using the checkout email and a secure email login link. MaorTrades does not store customer accounts, entitlements, private order data, or paid files.

The checkout server creates a signed Purchase Context token that lives for two hours. It contains only the catalogue type and slug, checkout source, a random correlation reference, and timestamps. It personalizes `/purchase/success`; it is not payment proof, an order ID, an entitlement, or a download credential. Missing, expired, invalid, tampered, and unknown contexts all fall back to the complete generic access guide.

Configure a dedicated secret of at least 32 characters. Do not reuse any provider or newsletter secret:

```bash
openssl rand -base64 48
PURCHASE_CONTEXT_SIGNING_SECRET="generated-value"
```

Set `PURCHASE_SUPPORT_EMAIL` to show the support-email action. When it is absent, My Orders remains the safe fallback and no broken email action is rendered.

To test the experience:

1. Create one Test Mode checkout for a Book, a Collection, and the Complete Library; follow the server-created success redirect.
2. Confirm Book context shows canonical cover and study topics, Collection context shows canonical order, and the Complete Library shows grouped paths.
3. Visit `/purchase/success` without a query, with `?context=invalid`, with a changed token character, and after changing a decoded slug before reusing the old signature. Each should render the generic experience.
4. For expiry testing, temporarily use an already-expired fixture in a local test or wait beyond the centralized two-hour lifetime; do not shorten production lifetime ad hoc.
5. Open My Orders and confirm its email-link flow in Test Mode. Test Mode receipt behavior may differ from live delivery.

The Lemon Squeezy receipt button is configured to return to the editorial success page, while the receipt's purchased-content access must remain available through Lemon Squeezy's own content-access control. Configure the dashboard thank-you note to explain: “Use the content-access button in this receipt for your files. Keep this email, or use Lemon Squeezy My Orders to return later.” Do not replace Lemon Squeezy's file-access destination with a marketing link.

## Twelve-Product Dashboard Checklist

For each of the eight Book products and four Collection products in the table above, manually verify:

- the product and variant names;
- the correct PDF or PDFs are attached (one intended file for a Book; every included Book for a Collection);
- receipt content-access behavior and button wording;
- the thank-you note;
- a Test Mode purchase;
- file access from both the receipt and My Orders.

Application code does not assume these dashboard checks are complete.

## Security And Future Architecture

The success URL contains no email, billing details, amounts, provider response, order data, or file links. The random checkout reference is only for operational correlation. Webhooks log minimal structured context and neither deliver files nor subscribe purchasers to marketing. Paid PDFs must never be placed in `public/`, and Resend must never send them.

A branded order history, persistent idempotency, verified accounts, or local entitlement dashboard would require a separately designed authentication, database, order-storage, and authorization architecture. None is created in this phase.
