# Accessibility Audit

## Code-level improvements completed

- Semantic Header, Main, Footer, navigation and article landmarks are present.
- A keyboard-visible skip link targets the focusable main landmark.
- Existing visible focus styles, labelled forms, live form status, descriptive cover alternatives, and real buttons/links were preserved.
- Consent choices use labelled checkboxes, a labelled modal, Escape closure for reopened settings, and text status in addition to color.
- Reduced-motion preferences now suppress non-essential smooth scrolling and transitions.
- Legal pages use one H1, structured H2 sections, readable body sizing, and responsive layouts.
- 404 and error recovery controls retain keyboard semantics.

## Manual review required

- [ ] Keyboard-test desktop/mobile navigation, checkout overlay/fallback, every form, Cookie Settings, legal navigation, and error recovery.
- [ ] Test 200% and 400% zoom/reflow at 320, 375, 768, 1024, 1280, and 1440px.
- [ ] Test NVDA or JAWS with Chromium/Firefox and VoiceOver with Safari/iOS.
- [ ] Confirm consent focus order/trapping expectations and focus return with disabled users.
- [ ] Measure contrast for every state, especially muted text, gold text, dark sections, and disabled controls.
- [ ] Audit every paid and free PDF independently for headings, reading order, alternatives, bookmarks, language, and tagged content.
- [ ] Review Lemon Squeezy and Resend interfaces outside the site's accessibility control.

No claim of complete WCAG conformance is made.
