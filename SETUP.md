# Labbaik Driving School — Full Site + Booking
## Setup & Launch Guide (v3 — merged into one project)

This project now contains your ENTIRE public website:

- `public/index.html` — your main marketing site (homepage, courses, story,
  reviews, FAQ, contact)
- `public/book.html` — the booking page, where customers pick a pickup
  option and are sent to the correctly-priced Calendly event to pay and
  schedule

Both are static HTML — no backend, no API keys, no database. Calendly (with
its own Stripe connection) handles all scheduling and payment.

## Why these two pages had to be merged into one project

Vercel (and most hosts) point a custom domain at exactly ONE deployed
project. Since you want both the homepage and the booking page on the same
domain (`labbaikdrivingschool.com/` and `labbaikdrivingschool.com/book.html`),
they need to be one deployment, not two separate ones. That's done — this
folder is now that single project.

## Deploying this

From inside this project folder:

```
vercel --prod
```

This replaces whatever was previously deployed under your `labbaik-booking`
Vercel project with the full site (homepage + booking page together).

## Connecting your real domain

If you haven't already:

1. Go to your Vercel project → **Settings → Domains**
2. Add `labbaikdrivingschool.com` (and/or `www.labbaikdrivingschool.com`)
3. Vercel will show you DNS records to add at wherever your domain is
   registered (your registrar's dashboard, not Vercel's)
4. DNS changes can take anywhere from a few minutes to a few hours to fully
   take effect

Once that's done, `labbaikdrivingschool.com` will show your real homepage,
and `labbaikdrivingschool.com/book.html` will show the booking page —
exactly the setup you asked for.

**Important:** if `labbaikdrivingschool.com` is currently pointed at Wix or
anything else, you'll be redirecting it away from that and to this Vercel
project. Make sure you're ready for that switch before changing DNS — once
changed, the old site stops being what visitors see at that domain.

## Full list of booking options now live on the site

**Full Course:**

| Option | Price |
|---|---|
| Meet at Whitehorn Station | $550 |
| Pickup within 10 km | $550 |
| Pickup within 15 km | $650 |
| Pickup within 20–25 km | $750 |

**Brush-Up Lessons** (minimum 2 sessions, enforced by Calendly):

| Option | Price |
|---|---|
| Pickup within 10 km | $55/session |
| Pickup within 20 km | $75/session |

**Road Test:**

| Option | Price |
|---|---|
| Rent a Car for the Test | $90 |

These exact numbers appear in THREE places on the site, and all three were
checked to match exactly before launch: the course cards on the homepage,
the FAQ answers, and the actual booking page / Calendly events. If you ever
change a price, update it in all three spots — search the file for the old
dollar amount to find every mention.

## What changed in this merge (so nothing surprises you later)

- The homepage's old "Book a Lesson" section (which had an embedded,
  never-fully-configured Calendly widget) was removed entirely. Every
  "Book a Lesson" / "Book Now" button across the site now links straight
  to `/book.html` instead.
- Fixed several prices on the homepage that had gone stale after the
  booking page's real pricing was finalized in Calendly: Brush-Up was
  shown as "$55–$75/hr, 2-hour minimum" (now correctly "$55–$75/session,
  2-session minimum"), and Rent-a-Car was shown as "$85" (now correctly
  "$90").
- The "We accept" payment badge now correctly distinguishes online card
  payment (via the booking page) from e-transfer/debit/PayPal, which are
  only available if someone books by phone or email directly.
- The Google Reviews widget (Elfsight) and everything else from earlier
  in this site's build is untouched and still working as before.

## Pre-launch checklist

Go through this before telling customers the site is live:

- [ ] Visit the live URL once DNS has propagated — confirm the homepage
      loads correctly, including the hero image (it may not load in some
      restricted preview environments, but should load fine on a real
      browser with normal internet access)
- [ ] Click every "Book a Lesson" / "Book Now" button — confirm each lands
      on `/book.html`
- [ ] On `/book.html`, click each of the 7 options — confirm each opens the
      correct Calendly event (cross-check against the table above)
- [ ] Do one real test booking through to actual payment, in a quiet
      moment, to confirm Calendly + Stripe charges correctly end to end
- [ ] Check the Google Reviews section actually shows real reviews (it was
      connected earlier — confirm it's still pulling live data, not the
      fallback message)
- [ ] Check the site on an actual phone, not just desktop — confirm the
      sticky mobile call/book bar, mobile menu, and course cards all look
      right
- [ ] Confirm your phone number, email, and address shown on the site are
      all current and correct
- [ ] Once confident, switch DNS at your registrar to point to Vercel (see
      "Connecting your real domain" above) — this is the actual "go live"
      moment

## What's NOT automated (known, accepted limitation)

There's no system that calculates a customer's real distance and enforces
the correct price — customers read the distance ranges on `book.html` and
self-select. If you ever want this fully automated (so customers can't
pick the wrong tier even by mistake), that requires a more involved system
with a real distance-calculation API and a custom Stripe checkout —
meaningfully more setup and a small ongoing cost, but it actually verifies
and enforces the price rather than relying on the customer reading
correctly. Let me know if you want to revisit that down the line.

## Updating anything later

- **Homepage content/pricing:** edit `public/index.html`
- **Booking options/prices/Calendly links:** edit `public/book.html`,
  search for the `option-card` blocks
- After any edit: `vercel --prod` to push the change live
