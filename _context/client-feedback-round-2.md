# Client Feedback Round 2

**Date collected:** 2026-03-20
**Source:** Bobby + Cindy (Mom) video call transcript (`changes-2 transcript.rtf`)
**Branch:** TBD (will branch off current dev branch or main)
**Status:** Collected — not yet implemented

---

## Summary of ALL Changes Since v1.0

### What's Changed (Round 1 — DONE on dev branch)

All 17 items implemented on `claude/repo-assessment-lzcl6`. Not yet merged to main.

| # | Change | Status |
|---|--------|--------|
| 1 | Remove BBB references sitewide (keep A+ standalone) | ✅ Done |
| 2 | Add Wyoming to service area (JSON-LD, metadata, hero, footer) | ✅ Done |
| 3 | Add /airport and /mountains to sitemap | ✅ Done |
| 4 | Homepage: swap hero to DIA tent roof | ✅ Done |
| 5 | Services: brighten airport card photo | ✅ Done |
| 6 | Fleet: restructure to 4 cards (Sedans, SUVs, Executive Vans, Affiliates), remove Stretch Limos + Sprinter | ✅ Done |
| 7 | Airport: add phone to Book step, fix "curb not booth" in How It Works | ✅ Done |
| 8 | Airport: rewrite DIA pickup instructions (Level 5, East/West door, 2nd island) | ✅ Done |
| 9 | Airport: rewrite Meet & Greet (escalator greeting, name sign, baggage assist) | ✅ Done |
| 10 | Airport: replace rate table with distances (miles, not pricing) | ✅ Done |
| 11 | Mountains: update "Any Size Group" to match new fleet | ✅ Done |
| 12 | Mountains: distances in miles replace drive times | ✅ Done |
| 13 | About: genericize timeframes ("over 30 years") | ✅ Done |
| 14 | Reservations: update DIA pickup instructions sidebar | ✅ Done |
| 15 | Reservations: remove Special Requests field | ✅ Done |
| 16 | InquiryForm: update vehicle dropdown to match new fleet | ✅ Done |

### What's Changed (Post-Round 1 — DONE on dev branch)

Additional improvements after round 1 formal changes:

| Change | Status |
|--------|--------|
| Fleet hero image: swapped to Ford vehicle photo | ✅ Done |
| Fleet cards: Ford Explorer (Sedans), Ford Expedition (SUVs), Ford Transit High Top (Vans) photos | ✅ Done |
| Airport: "Any Size Group, One Call" section added | ✅ Done |
| Airport: Meet Your Chauffeur step 03 text corrected | ✅ Done |
| About: affiliation logos added (NLA, CLA, Denver Metro Convention & Visitors Bureau) | ✅ Done |
| Reservations: Flight Information section with Origin City field | ✅ Done |
| Reservations: Luggage Count fields (carry-on + checked) | ✅ Done |
| Homepage: airport card photo overlay lightened | ✅ Done |

---

## Round 2 Changes (From Call Transcript — NOT YET DONE)

### 1. Homepage hero text — add company name
**Source:** ~01:37:52–01:40:57 in transcript
**What:** Add "A Custom Coach" above the existing "Denver's Premier Transportation" in the hero. Currently the hero has no company name — just "Denver's Premier Transportation."
**Agreed text:** Something like:
> A Custom Coach
> Denver's Premier Transportation
Bobby will keep "Denver's" (not "Colorado's") for SEO — airport searches skew Denver.

### 2. Homepage hero image — lighten overlay
**Source:** ~53:48–54:35 in transcript
**What:** Cindy says the DIA hero image needs to be lighter/brighter. Current overlay is `bg-foundation/75` (75% dark). Reduce to make the tent roof more visible.
**Note:** The airport *card* on homepage was already lightened (commit `5c1acd4`), but the main hero was not.

### 3. Add "Home" link to navigation
**Source:** ~01:27:09–01:30:17 in transcript
**What:** Cindy wants an obvious way to get back to the landing page. Bobby pushed back (no major site uses a Home button) but agreed to add it. Add "Home" as the first nav item linking to `/`.
**Note:** The logo already links home, but Cindy (and likely other 60+ users) don't know that convention.

### 4. Services page — remove "booth" from metadata/copy
**Source:** ~56:40–56:57 in transcript
**What:** "Meet at ground transportation booth" — remove "booth" because there is no booth at DIA anymore. The airport page How It Works was already fixed (round 1 #7), but check all remaining references:
- `airport/page.tsx` line 24 metadata still says "Ground Transportation booth"
- Any other "booth" references in services or other pages

### 5. Services page — change wedding card photo
**Source:** ~57:01–01:06:29 in transcript
**What:** Keep the "Your Day, Your Way" wedding section (they decided to leave it for marketing value — affiliates can handle wedding bookings). But **change the photo** from the current mountain wedding/ceremony image to a different one Bobby showed Cindy (a Denver-area wedding photographer's shot — elegant, not ceremony-focused).
**Note:** Round 1 rule was "Do NOT touch wedding card" — that's now superseded by this call.

### 6. Services page — add wedding mention to galas/events card
**Source:** ~58:02–58:13 in transcript
**What:** Cindy wrote something in blue (in her emailed notes) about adding wedding-related wording to the "Any Occasion, Any Size" section near "galas and formal events." Exact wording TBD — check Cindy's email for the blue-text additions.

### 7. Pink accent color exploration (DEFERRED)
**Source:** ~01:25:16–01:26:53 in transcript
**What:** John wants pink instead of gold accents. Bobby will try swapping `--color-gold` and related tokens to a pink. This is a global change affecting every page.
**Status:** Not a firm go. Bobby wants to prototype it and see if it works. Defer to a separate branch (`experiment/pink-accents` or similar).
**Note:** Round 1 rule "Do NOT change any CSS color tokens" still applies until Bobby explicitly greenlights.

---

## Still Blocked on Client

- **Domain transfer** — registrar, credentials, email on account (CRITICAL for go-live)
- **FASTTRAK portal URL** — needed for booking form integration
- **Real fleet photos** — William sent some photos via Cindy's email, need to retrieve and evaluate
- **Address confirmation** — Missouri Ave vs Commerce City
- **Hours confirmation** — Nextdoor data unconfirmed
- **Google Business Profile** — access unknown
- **Email migration** — Google Workspace planned, waiting on clarity
- **Cindy's blue-text email** — contains exact wording for some changes (especially #6)
- **Admin info from William** — Cindy sent a screenshot of Tearinet.net admin info

---

## Additional Context from Call

- CLA (Colorado Limousine Association) website currently links to acustomcoach.com which is dead — urgency to get site live
- New client acquisition is less than 1/month currently — Bobby expects significant increase once SEO and site go live
- Affiliate for limos/stretches: company called "Advanced" (used for Tammy's funerals)
- Affiliate for wedding shuttles: "Paulos" (has shuttle buses)
- John no longer owns any stretch limousines
- Lincoln Town Cars discontinued — that's why fleet is all Ford now
- Form backend decision: short-term = email to office, long-term = FASTTRAK integration
