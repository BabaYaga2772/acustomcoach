# Client Feedback Round 1

**Date collected:** 2026-03-17
**Source:** Bobby (via project chat with Claude)
**Branch:** `claude/repo-assessment-lzcl6`
**Status:** ✅ All 16 changes + vehicle dropdown fix implemented on dev branch. Main reverted (PR #4). Awaiting client review via Vercel preview URL.

---

## Rules for This Round

- Do NOT touch the wedding card on services page — pinned for discussion
- Do NOT touch the affiliate vehicles card on fleet page — keeping as-is
- Do NOT change any CSS color tokens — deferred to separate branch
- All vehicle photos sitewide: BLACK exterior, BLACK interior
- Every image swap: leave `// PHOTO: Bobby to verify — [description]` comment

---

## Changes (in execution order)

### Global Changes

1. **Remove BBB references sitewide** — Keep "A+" rating standalone everywhere, remove all "BBB" and "Better Business Bureau" mentions from site code
2. **Add Wyoming to service area** — JSON-LD, metadata, hero text, footer. "Serving Colorado and Wyoming"
3. **Add /airport and /mountains to sitemap** — Bug fix, both routes were missing

### Homepage

4. **Swap hero image** — Replace Denver skyline with DIA tent roof photo

### Services Page

5. **Brighten airport services card photo** — Current photo too dark, find brighter DIA image

### Fleet Page

6. **Restructure fleet cards** — New lineup:
   - Luxury Sedans (up to 3 pax + 3 bags) — replaces Lincoln Continental
   - Luxury SUVs (6-7 pax + 6 bags) — replaces Ford Expedition
   - Luxury Executive Vans (high top, up to 14 pax) — replaces both Passenger Van and Sprinter
   - Affiliate Vehicles (26-55 pax) — keep as-is
   - **REMOVE:** Stretch Limousines, Executive Sprinter Vans

### Airport Page

7. **Update How It Works** — Add phone to Book step, update flight tracking text, fix Meet Your Chauffeur to say curb not booth
8. **Rewrite DIA Pickup Instructions** — New text: chauffeur texts/calls, Level 5 Ground Transportation, East/West door, 2nd island
9. **Rewrite Meet & Greet** — Greeter at top of escalators after train, name sign, assist to baggage claim, escort to vehicle
10. **Replace rate table with distances** — Remove "Call for quote" table, add distances in miles (DIA → Denver ~35mi, Boulder ~50mi, DTC ~30mi, Vail ~120mi, COS ~115mi)
11. ~~Remove "No Surprises" section~~ — SKIPPED, covered by #10

### Mountains Page

12. **Update "Any Size Group"** — Match new fleet: SUVs 6-7 pax, Luxury Executive Van up to 14, remove old Passenger/Executive Van lines
13. **Remove drive times, add distances** — Vail ~100mi, Breck ~80mi, Aspen ~200mi, Beaver Creek ~110mi, Keystone ~75mi

### About Page

14. **Update "Decades at the Table"** — Genericize timeframes: "since 1995" → "over 30 years", "over 20 years" → "over 30 years"

### Reservations Page

15. **Update DIA Pickup Instructions sidebar** — Match airport page text from #8
16. **Remove Special Requests from form** — Remove entire textarea section

### Post-Round Fix

17. **Update InquiryForm vehicle dropdown** — Old options ("Stretch Limousine", "SUV", "Passenger Van (up to 14)", "Luxury Executive Van (up to 9)") didn't match updated fleet. New options: Luxury Sedan, Luxury SUV, Luxury Executive Van (up to 14), Motor Coach (26–55 via affiliate), Not sure — help me decide.
