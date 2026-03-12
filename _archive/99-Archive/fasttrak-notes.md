# FASTTRAK Notes

## What We Know
- John uses FASTTRAK Cloud for booking and dispatch
- FASTTRAK is cloud-hosted on Microsoft Azure
- Full name: FASTTRAK Technologies LLC
- Products: FASTTRAK InVision (web/mobile), FASTTRAK Ultimate (Windows desktop)
- Features: booking, dispatch, billing, driver apps (iOS/Android), flight tracking, SMS/email notifications, QuickBooks integration, Stripe payment processing
- They offer a customer-facing online booking portal
- They have a developer API
- Pricing: volume-based, plans up to $229/mo for 2,000 bookings/month and 150 vehicles. 30-day free trial, no setup or cancellation fees.
- Website: fasttrakcloud.com
- Login portal: invision.ifasttrak.com
- Industry recognition: listed as a major limo booking system alongside Limo Anywhere, Livery Coach, and Hudson Software

## What We Need to Find Out
- What plan is John on?
- Does he use the customer booking portal? If so, what's the URL?
- Can we embed or iframe the booking portal on the new site?
- Is there a public API we can hit for availability or booking?
- Or do we just link out to his FASTTRAK portal from a "Book Now" button?

## Integration Strategy
Path of least resistance: Link to FASTTRAK's existing customer portal from the new site.

Decision tree:
1. If FASTTRAK portal URL exists for John's account → prominent "Book Online" button linking directly to it
2. If portal can be embedded/iframed → embed it on the Reservations page
3. If neither → build a clean inquiry form that emails the office + include DIA pickup instructions from old site

Don't rebuild what FASTTRAK already does. John's team already knows the software.
