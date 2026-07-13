# Labbaik Driving School — Website

Live site: https://labbaikdrivingschool.com
Hosting: Vercel (static site, no backend)

## Structure

- `public/index.html` — main marketing homepage (single self-contained file: all CSS/JS inline)
- `public/book.html` — booking page; lists pickup options, links to per-tier Calendly events
- `public/favicon.svg` — site favicon (car icon, brand colors)

## How it works

Static HTML only. No backend, no API keys, no database. Calendly (with its own
built-in Stripe connection) handles all scheduling and payment. The booking page
routes customers to the correctly-priced Calendly event for their pickup distance.

## Booking options & prices (also encoded in book.html)

Full Course:
- Whitehorn Station meet-up — $550
- Pickup within 10 km — $550
- Pickup within 15 km — $650
- Pickup within 20–25 km — $750

Brush-Up Lessons (minimum 2 sessions, enforced by Calendly):
- Pickup within 10 km — $55/session
- Pickup within 20 km — $75/session

Road Test:
- Rent a Car for the Test — $90

NOTE: The Calendly event URLs have misleading auto-generated slugs that do NOT
match their real titles/prices (a result of cloning events). The links in
book.html were each verified against the real Calendly page title before wiring.
Do not assume a link's URL text describes what it is — verify against the live
Calendly page.

## Deploying changes

    vercel --prod

run from the project root. (Or, if this repo is connected to Vercel via Git,
just push to the main branch and Vercel auto-deploys.)

## Business details

- Address: 5150 47 St NE, Unit 1101, Calgary, AB T3J 4N4
- Phone: 403-383-6595 / 403-452-5314
- Email: labbaikdrivingschool@gmail.com
- Hours: Mon–Fri 8AM–8PM, Sat–Sun 8AM–6PM

## Known follow-ups / open items

- Google Search Console: not yet set up (needed to fix stale old-Wix index).
- Google Calendar ↔ Calendly: connect inside Calendly (Availability → Calendar settings).
- Calendly Workflows (confirmation/reminder/follow-up emails): pending plan upgrade.
- labbaikdriving.com (no "school") + old 652 McDougall Rd NE address: appears in
  directories (Yelp/BBB/411) with the same phone number; likely the business's
  OLD domain/address from before current ownership. Confirm with prior owner
  before touching those listings.
