# Heyoworld / 海柚

Bilingual UK education consultation website, built with the existing React + Vite setup and deployed to GitHub Pages. No site backend, external font downloads, or runtime CSS framework is required.

## Development

- `npm ci`
- `npm run dev`
- `npm run build` — creates `dist/`, including the custom domain and SVG logo.
- `node --test tests/form.test.mjs` — form contract tests, using Node 22.18+ (or Node 24+).

Pushes to `main` run the existing GitHub Pages deployment. `public/CNAME` preserves `heyoworld.com` in the published output.

## Consultation email setup

Forms are posted to `https://formsubmit.co/ajax/hello@heyoworld.com` using FormSubmit. Client email is included as `email` so replies can be addressed to the client. Names, inquiry details, selected service and language are included. The UI only shows submission success after both an HTTP success and an explicit provider success response; failures retain the form entries. Requests time out after 15 seconds and duplicate submissions are blocked while pending.

**Owner activation is required.** A setup request was sent on 2026-09-08. FormSubmit returned “This form needs Activation” and reported sending its verification email to hello@heyoworld.com. Open that email and click **Activate Form**. After activation, submit a clearly labelled test inquiry and confirm receipt in that mailbox. Until this happens, end-to-end email delivery is not verified. Check spam folders if the activation email is not visible.

The direct email link remains available. No SMTP passwords or private API credentials belong in this public repository. Do not replace provider failures with simulated success.

Provider documentation: https://formsubmit.co/documentation

## Brand and content

Public-facing Chinese brand: **海柚**. The existing company name, HEYO WORLD CO., LTD., is retained. This is a website brand update, not a registered legal-name change.

The primary logo is `public/wordmark.svg`: custom lowercase lettering with an orbital blue “o” integrated into Heyoworld. `public/logo.svg` isolates that symbol for the favicon. There is no separate icon before the header wordmark. Both are small SVG assets and require no font downloads. The Chinese name 海柚 keeps the sound of Heyo with a lighter, more approachable character. The library image reuses an existing site image from Unsplash at a reduced requested size.

Design references studied for principles of reduction and consistency between symbol and lettering (no source brand assets are included):
- https://www.pentagram.com/work/mastercard
- https://www.pentagram.com/work/covariant

Content is maintained in `constants.tsx`; styles in `styles.css`. Both languages are updated together. Social feed and social links have been removed.
