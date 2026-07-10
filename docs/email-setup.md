# MaorTrades Email Setup

Phase 11 uses Resend Contacts and Segments for the MaorTrades Letter. It does not use the deprecated Audience API.

## Required Setup

1. Create a Resend account.
2. Verify the sending domain before production use.
3. Create a Resend API key with permission to send email and manage Contacts.
4. Create one Segment named `MAORTRADES LETTER SUBSCRIBERS`.
5. Copy the Segment ID into `RESEND_NEWSLETTER_SEGMENT_ID`.
6. Configure the environment variables from `.env.example`.
7. Generate a secure signing secret for `NEWSLETTER_SIGNING_SECRET`.
8. Test a normal newsletter form submission.
9. Confirm the email link and verify the Contact is created or resolved.
10. Verify the Contact is added to the configured Segment and receives the welcome email.

You can generate a local signing secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

Do not commit the generated value.

## Resource Delivery

Resource delivery is only enabled when a resource has a verified real downloadable file configured in `data/resources.ts`.

Current status:

- `ict-trading-checklist`: coming-soon
- `smart-money-quick-reference`: coming-soon
- `trading-discipline-reset-checklist`: coming-soon
- `daily-trading-preparation-sheet`: coming-soon

No PDFs currently exist under `public/`, so no resource email delivery is active yet.

## Abuse And Safety Notes

The current foundation includes server-side validation, a honeypot field, short-lived signed confirmation tokens, generic API responses, and no public mass-email endpoint.

There is no distributed production rate limiter yet. Add one later only if abuse patterns justify the extra service.
