# North Peak Home Services Demo

A conversion-focused lead-generation demo website for a fictional local contractor brand, **North Peak Home Services**.

## Purpose

This project is designed to generate:
- Phone calls (`Call Now` CTAs)
- Quote requests (minimal contact form)

No checkout or ecommerce flows are included.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Local API route for form submission (`/api/contact`)

## Pages

- `/` Home
- `/services`
- `/projects`
- `/about`
- `/contact`

## Reusable Components

- `Header`
- `Footer`
- `CTAButton`
- `TestimonialCard`
- `ServiceCard`
- `FAQAccordion`
- `GalleryGrid`
- `ContactForm`
- `FloatingMobileCTA`

## Running Locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Contact Form Behavior

The contact form POSTs to `/api/contact` and logs submission payloads server-side.

Production TODOs are documented in `src/app/api/contact/route.ts`:
- Swap log-based handling for Resend/Formspree/email integration
- Add anti-spam protection (rate limiting/honeypot)

## What to Customize for a Real Client

1. Replace brand name, phone number, service area, and address.
2. Replace placeholder project visuals and testimonials with real approved assets.
3. Connect form API route to email/CRM and add analytics event tracking.
4. Update pricing language and scope bullets to match actual operations.
5. Add legal pages (privacy policy/terms) and real social links.
