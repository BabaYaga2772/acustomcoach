# A Custom Coach — Project Hub

> Cowork reads this file automatically. It is the single source of truth for project state, design decisions, architecture, and workflow rules. Update it when milestones complete.

---

## What This Project Is

Rebuilding acustomcoach.com for A Custom Coach / Boulder Transportation — a Denver/Boulder luxury ground transportation company established September 1, 1988 by John Hafer (Bobby's uncle). The original website went down when the hosting provider (iVenue / Market America) permanently closed. No backups existed.

All site content was recovered from Google's cached index, Wayback Machine snapshots, and business directory listings (BBB, Yelp, Nextdoor, LimoHQ). The recovery document in `_context/site-recovery.md` is the content source of truth.

This project also serves as the proof-of-concept for Speed of Now Productions' SMB digital recovery service offering.

---

## Project Resources

- **Live site:** https://acustomcoach.vercel.app
- **GitHub repo:** https://github.com/BabaYaga2772/acustomcoach
- **Competitive analysis:** https://son-client-docs.vercel.app/acc/competitive-analysis.html
- **Old site reference:** https://son-client-docs.vercel.app/acc/old-site-reference.html
- **Project summary:** https://son-client-docs.vercel.app/acc/project-summary.html
- **Mom questionnaire:** `deliverables/What_Bobby_Needs_From_John.docx`
- **Service scope & pricing:** `_context/service-scope-pricing.md`

---

## Current Status

| Item | Status | Notes |
|------|--------|-------|
| Content recovery | ✅ COMPLETE | All 6 pages + business listings scraped |
| Design direction | ✅ APPROVED | Style tile reviewed, "Old Money Meets Modern Convenience" |
| Repo scaffold | ✅ COMPLETE | Next.js 16 + TS + Tailwind v4, all 8 routes build clean |
| Homepage | ✅ COMPLETE | DIA tent roof + Rocky Mountains hero (`09_homepage_hero_dia_mountains.jpg`, object-bottom, 70% overlay), pink ESTABLISHED line has textShadow for legibility, trust indicators, 3-card services preview, fleet highlight, CTA band |
| About page | ✅ COMPLETE | Hero image, company history, vision, John Hafer bio, acquisitions (genericized timeframes — "over 30 years"), industry positions, clickable affiliation logo cards (NLA, CLA, Visit Denver) with cream backgrounds, CTA band |
| Services page | ✅ COMPLETE | Hero (`16_services_hero_v3.jpg` — private jet terminal/mountain van), 6 service cards (Weddings → Sporting Events w/ `17_sporting_events.jpg`, Meet & Greet card: `12_services_hero.webp`, Airport Transfers: Unsplash), "scenic tours" and "custom signage" removed, chauffeur standards, CTA band |
| Airport page | ✅ COMPLETE | DIA night hero (`14_airport_transfers_night.jpg`, no people), trust bar, 2-step pickup (step numbers pink/60 opacity), "Your chauffeur monitors" flight delay box, meet & greet (escalator meeting point, no gate/baggage claim), call-for-quote CTA card, group transport, 6 Colorado airports grid, 24/7 callout, CTA band |
| Mountains page | ✅ COMPLETE | Mountain highway hero, trust bar (AWD/4WD), 5 resort cards with distances in miles (not drive times), "and more" card, group transport (SUVs 6-7 pax, Executive Vans up to 14 pax), seasonal availability (spring=sporting events, summer=hiking & resort, fall=retreats), CTA band |
| Fleet page | ✅ COMPLETE | Hero, 4 vehicle cards: Lincoln Continental sedan, Ford Expedition SUV, Ford Transit executive van (processed bg), Affiliate motor coach. Simple object-cover, uniform hover zoom. Pricing note, CTA band |
| Reservations page | ✅ COMPLETE | Booking form (origin city now required), FASTTRAK callout (URL TBD), 2-step DIA pickup instructions (step 2: door number + 2nd island), sidebar cards |
| Contact page | ✅ COMPLETE | Self-hosted hero (`17_contact_hero.jpg` Denver City Park skyline, 25% overlay), contact info column + 9-field inquiry form (phone + date now required, backend TODO) |
| Header component | ✅ COMPLETE | Responsive, sticky, mobile hamburger, Book Now CTA, drop shadow. Nav: Services / Airport / Mountains / Fleet / About / Contact |
| Footer component | ✅ COMPLETE | 3-column layout, contact info, affiliations, top shadow. "Serving Colorado & Wyoming" |
| Contact/inquiry form | 🟡 FRONTEND DONE | InquiryForm + ReservationForm components built, needs backend (Formspree/Resend/FASTTRAK) |
| FASTTRAK integration | ❌ NOT STARTED | Need portal URL from client |
| Domain transfer | ❌ BLOCKED | Waiting on client — Mom questionnaire sent |
| Vercel deployment | ✅ LIVE | https://acustomcoach.vercel.app — domain transfer pending for acustomcoach.com |
| Email migration | ❌ NOT STARTED | Google Workspace planned, waiting on email situation clarity |
| SEO / schema markup | ✅ COMPLETE | LocalBusiness JSON-LD (includes Wyoming), OG tags all pages, sitemap.xml (all 8 routes), robots.txt, canonical URLs. BBB references removed sitewide, A+ rating kept standalone. |
| Image assets | ✅ MOSTLY SELF-HOSTED | Fleet, service cards, homepage hero, airport hero, services hero, Meet & Greet card, contact hero, sporting events card, affiliation logos all self-hosted. Airport Transfers + Mountains service cards still Unsplash. Replace with real fleet/team photos when available |
| Mobile CTA bar | ✅ COMPLETE | Sticky bottom bar on mobile (<md), Call + Book Now buttons, in layout.tsx |
| Design polish | ✅ COMPLETE | Card shadows, gold glow hovers, CTA band lift, form focus rings, bumped border/accent opacity, design feedback pass (warmer gold, brighter text, title case, overlay fix) |
| Mom questionnaire | ✅ SENT | `deliverables/What_Bobby_Needs_From_John.docx` |
| Service scope & pricing | ✅ COMPLETE | `_context/service-scope-pricing.md` |
| Roadmap | ✅ COMPLETE | 5 phases, 34 tasks (see Roadmap section below) |
| Client feedback round 1 | ✅ MERGED TO MAIN | 16 changes + vehicle dropdown fix + pink accents + photo swaps. Merged via `efbc056`. See `_context/client-feedback-round-1.md` |
| Client feedback round 2 | ✅ ON MAIN | About: clickable affiliation logos. Airport: DIA sunset hero, 2-step pickup, chauffeur monitors, CTA replaces rate table. Mountains: distances replace drive times, AWD/4WD. Fleet: Lincoln Continental sedan photo, processed van bg, uniform cards. Homepage: DIA+Mountains hero (45% overlay), gold subtitle on own line. Services: Meet & Greet chauffeur photo. Reservations: 2-step pickup (step 2 removed). Applied by Manus via 5 direct commits (`19d9501`) |
| Client feedback round 3 | ✅ ON MAIN | Applied by Manus via direct commits (`e155315`). Homepage: 70% overlay, object-bottom, textShadow on ESTABLISHED line. Services: new hero (`16_services_hero_v3.jpg`), Meet & Greet card (`12_services_hero.webp`), Airport Transfers card reverted to Unsplash. Airport: night hero (`14_airport_transfers_night.jpg`). Contact: overlay lightened to 35%. Reservations: step 2 rewritten (door number + 2nd island). New assets: 5 images added to replacement-assets/ |
| Client feedback round 4 | ✅ ON MAIN | Applied by Manus via direct commits (`bec643a`). Toll-free 800 → text number (303) 669-5144 sitewide (incl. JSON-LD schema). Weddings card → Sporting Events (Rockies/Coors Field/Empower Field, `17_sporting_events.jpg`). Contact hero self-hosted (`17_contact_hero.jpg`, 25% overlay). Airport meet & greet: escalator meeting point. "Scenic tours" + "custom signage" removed. Mountains seasons updated. Form fields: phone+date required (inquiry), origin city required (reservation). ⚠️ Known bug: "or or text" typo in reservations/page.tsx:50 |

---

## Key Business Details (Use Until Client Confirms Otherwise)

| Field | Value | Source | Confirmed? |
|-------|-------|--------|------------|
| Company | A Custom Coach / Boulder Transportation | All sources | ✅ |
| Legal name | A Custom Coach, Inc. | boulderselectlimo.com | — |
| Established | September 1, 1988 | BBB | ✅ |
| Owner/CEO | John Hafer | All sources | ✅ |
| General Manager | Bobby Long | BBB | ⚠️ Unconfirmed for new site |
| Local phone | (303) 759-1376 | All sources | ⚠️ Using on site |
| Text number | (303) 669-5144 | Client (replaced toll-free 800-671-5466) | ✅ Using on site |
| Other phone | (303) 373-5560 | BBB only | ❌ Unknown purpose — NOT using |
| Fax | (303) 373-5251 | BBB, old site | ⚠️ Not displaying unless confirmed |
| Email | info@acustomcoach.com | Old site | ⚠️ Routing unknown |
| Address (BBB) | 5105 E Missouri Ave, Denver, CO 80246 | BBB, LimoHQ, Nextdoor | ⚠️ Using as default |
| Address (Yelp) | 6240 E 49th Ave, Commerce City, CO | Yelp | ⚠️ May be dispatch location |
| Hours | Mon–Sat 6AM–11PM, Sun 9AM–10PM | Nextdoor | ⚠️ Unconfirmed |
| BBB Rating | A+ | BBB | ✅ |
| Entity type | Sole Proprietorship | BBB | — |
| Permit | LL-249 | boulderselectlimo.com | — |
| Booking software | FASTTRAK Cloud | Bobby (confirmed in use) | ✅ Active |
| Affiliations | NLA, CLA, Denver Metro Convention & Visitors Bureau | Old site | — |
| Acquired companies | Boulder Transportation, Centennial Sedans, Diamond Limousine | Old site | — |

---

## Design System (LOCKED)

### Concept: "Old Money Meets Modern Convenience"

37 years of trust, distilled into a digital presence that feels like a first-class lounge. Dark, warm, confident. The kind of brand that doesn't need to shout.

### Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| foundation | `#0F0F0F` | `bg-foundation` | Page background |
| surface | `#1A1917` | `bg-surface` | Card/section backgrounds |
| elevated | `#242220` | `bg-elevated` | Elevated surfaces, hover states |
| gold | `#D4AF37` | `text-gold`, `bg-gold` | Warmth accent: borders, nav hovers, decorative elements |
| gold-light | `#E8C95A` | `text-gold-light` | Hover states, highlights |
| gold-muted | `rgba(212,175,55,0.22)` | `bg-gold-muted` | Subtle backgrounds |
| pink | `#FF1493` | `text-pink`, `bg-pink` | Action accent: CTAs, labels, trust numbers |
| pink-light | `#FF69B4` | `text-pink-light` | Hover variant for pink elements |
| pink-muted | `rgba(255,20,147,0.22)` | `bg-pink-muted` | Subtle pink backgrounds (badges) |
| cream | `#F5F0E8` | `text-cream` | Primary text |
| cream-muted | `#CCC5B9` | `text-cream-muted` | Secondary text |
| white | `#FAFAF8` | `text-white` | Headlines, emphasis |
| border-gold | `rgba(212,175,55,0.35)` | `border-border-gold` | Accent borders |
| border-pink | `rgba(255,20,147,0.35)` | `border-border-pink` | Pink accent borders (badges, mobile CTA) |
| border-subtle | `rgba(255,255,255,0.08)` | `border-border-subtle` | Structural dividers |

### Typography

| Role | Font | Weights |
|------|------|---------|
| Headlines | Playfair Display (serif) | 400, 500, 600, 700 |
| Body | DM Sans (sans-serif) | 300, 400, 500, 600 |

Loaded via Google Fonts `<link>` tags in `layout.tsx` (not `next/font` — build environment can't fetch at compile time).

### Type Scale

| Level | Size | Font | Usage |
|-------|------|------|-------|
| H1 | 48px | Playfair Display 500 | Page heroes |
| H2 | 32px | Playfair Display 500 | Section headings |
| H3 | 24px | Playfair Display 500 | Card/subsection headings |
| Body Large | 18px | DM Sans 500 | Subheadings, lead text |
| Body | 15px | DM Sans 400 | Paragraph text |
| Small | 13px | DM Sans 400 | Secondary info, captions |
| Label | 10px | DM Sans 500, uppercase, 0.2em tracking | Section labels, tags |

### Component Patterns

- **Primary button:** Pink gradient (`from-pink to-[#CC1076]`), dark text, uppercase, 0.08em tracking, 6px radius, pink glow hover
- **Secondary button:** Transparent, gold border, cream text, uppercase (stays gold)
- **Text link button:** Gold text, underline on hover (stays gold)
- **Cards:** `surface` or `elevated` bg, `border-subtle` or `border-gold` border, 10-12px radius
- **Section labels:** 10px pink, uppercase, 0.2em letter-spacing, above headings
- **Trust indicators:** Large Playfair numbers in pink, small uppercase DM Sans labels
- **Form labels:** Pink uppercase text, pink-light required asterisks

### Accent Strategy: Gold vs. Pink

John chose bright neon pink business card stock in the 1980s so his cards would stand out in a stack of white ones. The same instinct applies here:

- **Pink = action/attention** — CTA buttons, section labels, trust numbers, form labels, mobile CTA bar, badges. The things you want eyes on.
- **Gold = warmth/luxury** — borders, nav hovers, dividers, decorative bullets, timeline lines, phone links, structural elements. The foundation that says "premium."

### Design Principles

- **Photography:** Dark overlays on recovered images until new photos arrive. No generic stock. Subtle grain on placeholders.
- **Animation:** Restrained. Fade-ups on scroll, smooth hover states. Nothing bouncy — this is a black-car service, not a party bus.
- **Mobile:** Sticky CTA bar with Call and Book buttons. Phone number always one tap away. Hamburger nav with full-screen overlay.
- **Spacing:** Generous. Let the dark background breathe. Premium = room to think.

---

## Technical Architecture

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-based `@theme {}` config in globals.css — no tailwind.config.js) |
| Fonts | Google Fonts via `<link>` in layout.tsx |
| Deployment | Vercel (planned) |
| Repo | GitHub — `acustomcoach` |

### Project Structure
```
src/
├── app/
│   ├── globals.css           ← Tailwind v4 @theme with all design tokens
│   ├── layout.tsx            ← Root layout, fonts, SEO metadata
│   ├── page.tsx              ← Homepage
│   ├── about/page.tsx
│   ├── airport/page.tsx      ← DIA & Colorado airport transfers
│   ├── mountains/page.tsx    ← Ski resort & mountain transportation
│   ├── services/page.tsx
│   ├── fleet/page.tsx
│   ├── reservations/
│   │   ├── page.tsx          ← Includes DIA pickup instructions
│   │   └── ReservationForm.tsx ← Booking form (client component)
│   └── contact/page.tsx      ← Structured layout, form placeholder
├── components/
│   ├── Header.tsx            ← Responsive nav, sticky, mobile menu
│   ├── Footer.tsx            ← 3-column, contact + links + affiliations
│   ├── InquiryForm.tsx       ← 9-field contact form (client component)
│   └── MobileCTABar.tsx      ← Sticky bottom bar, mobile only, Call + Book Now
├── lib/                      ← Utilities (empty, add as needed)
└── styles/                   ← (empty — globals.css handles everything)
```

### Tailwind v4 Notes
- Theme defined via `@theme {}` block in `globals.css`, NOT a JS config file
- Custom colors: `--color-foundation`, `--color-gold`, etc. → used as `text-gold`, `bg-surface`
- Custom fonts: `--font-display`, `--font-body`

---

## Key Decisions Made

1. **No landing page phase.** The old site (copyright 2013, no responsive, no SEO) was doing nothing for the business. John's pipeline is referrals and repeat clients. Go straight to full build.
2. **Build first, verify later.** Use recovered data as-is. Phone numbers, addresses, hours are easy swaps. Don't wait on a 60-year-old finding his GoDaddy password.
3. **FASTTRAK = link, don't rebuild.** FASTTRAK Cloud handles booking, dispatch, billing. If portal URL exists → link to it. If not → simple inquiry form that emails the office. Don't rebuild what FASTTRAK already does.
4. **Dark premium aesthetic.** Approved via style tile. Not negotiable without Bobby's sign-off.
5. **Portfolio piece.** This doubles as a Speed of Now Productions case study. Craft matters.
6. **Tiered pricing established.** Family rate: $1,500 site + $350 email + $450 SEO = $2,300 total. Market equivalent: $7,700–$16,100. See `_context/service-scope-pricing.md`.

---

## Roadmap Overview

### Phase 0 — Discovery & Lock-In (Week 1) ← MOSTLY COMPLETE
- ✅ Content recovery (all 6 pages + business directories)
- ✅ FASTTRAK identified and researched
- ✅ Service scope & pricing doc written
- ✅ Mom questionnaire created and sent
- ✅ Design direction established and approved
- ⬜ Verify domain ownership (waiting on John via Mom)
- ⬜ Download Wayback Machine images
- ⬜ Collect fleet photos from John
- ⬜ Get verbal/written agreement on scope

### Phase 1 — Build the Site (Weeks 2–3) ← COMPLETE
- ✅ Next.js repo initialized with proper structure
- ✅ Design system implemented (Tailwind v4 tokens)
- ✅ Header and Footer components built
- ✅ Homepage structured (hero image, trust indicators, services preview, CTA)
- ✅ Build out page bodies (Fleet ✅, Services ✅, About ✅, Contact ✅, Reservations ✅)
- ✅ Write/refine copy from recovered content
- ✅ Reservation form built (FASTTRAK portal URL still needed from client)
- ✅ SEO foundation (LocalBusiness JSON-LD, OG tags, sitemap.xml, robots.txt, canonical URLs)
- ✅ Design polish pass (shadows, gold glow, depth, form focus rings)
- ✅ Stock photography added (Pexels for fleet, Unsplash elsewhere — replace with real photos later)
- ✅ Homepage complete (services preview + fleet highlight added)
- ✅ Dedicated Airport page (DIA pickup, meet & greet, rate table placeholder, Colorado airports)
- ✅ Dedicated Mountains page (5 resort cards with drive times, group transport, seasonal availability)
- ✅ Deployed to Vercel (https://acustomcoach.vercel.app) — custom domain pending transfer

### Phase 1.5 — Client Feedback Round 1 ← MERGED TO MAIN
- ✅ 16 changes implemented across 7 pages (see `_context/client-feedback-round-1.md`)
- ✅ BBB references removed sitewide (A+ rating kept standalone)
- ✅ Wyoming added to service area (JSON-LD, metadata, hero, footer)
- ✅ /airport and /mountains added to sitemap
- ✅ Homepage hero swapped to DIA tent roof
- ✅ Fleet restructured: 4 vehicles (Sedans, SUVs, Executive Vans, Affiliates) — removed Stretch Limos
- ✅ Airport page: rewritten pickup instructions, meet & greet, distances table replaces rate table
- ✅ Mountains page: distances in miles replace drive times, group capacities updated
- ✅ About page: timeframes genericized ("over 30 years")
- ✅ Reservations: updated DIA instructions, Special Requests field removed
- ✅ Pink accent system added (CTAs, labels, trust numbers, form labels, mobile CTA bar)
- ✅ All photos swapped to self-hosted replacement assets
- ✅ Merged to main via commit `efbc056` — all changes are live

### Phase 1.6 — Client Feedback Rounds 2 & 3 ← ON MAIN
- ✅ Round 2: About affiliation logos, Airport DIA hero, 2-step pickup, Mountains AWD/4WD, Fleet Lincoln Continental, Homepage 45% overlay, Services Meet & Greet photo, Reservations step 2 removed — applied by Manus (`19d9501`)
- ✅ Round 3: Homepage 70% overlay + object-bottom + ESTABLISHED textShadow, Services new hero + Meet & Greet card, Airport night hero, Contact overlay 35%, Reservations step 2 rewritten — applied by Manus (`e155315`)
- ✅ 5 new self-hosted images added to `public/images/replacement-assets/`

### Phase 1.7 — Client Feedback Round 4 ← ON MAIN
- ✅ Toll-free 800 number replaced with text number (303) 669-5144 sitewide + JSON-LD schema — applied by Manus (`bec643a`)
- ✅ Weddings service card → Sporting Events (Rockies, Coors Field, Empower Field) with `17_sporting_events.jpg`
- ✅ Contact hero self-hosted (`17_contact_hero.jpg` Denver City Park skyline, overlay 25%)
- ✅ Airport meet & greet: escalator meeting point replaces gate/baggage claim, step numbers pink/60 opacity
- ✅ "Scenic tours" and "custom signage" references removed (services, homepage, mountains)
- ✅ Mountains seasons updated (spring=sporting events, summer=hiking & resort, fall=retreats)
- ✅ Form fields tightened: phone+date required (inquiry form), origin city required (reservation form)
- ✅ 2 new self-hosted images added to `public/images/replacement-assets/`
- ✅ BUG FIX: "or or text" typo in `reservations/page.tsx:50` — fixed

### Phase 2 — Fix Infrastructure (Weeks 3–4)
- ⬜ Set up Google Workspace ($7/user/mo)
- ⬜ Migrate existing email
- ⬜ Enable domain auto-renew and transfer lock
- ⬜ Set up uptime monitoring (UptimeRobot)
- ⬜ Update all business directory listings
- ⬜ Walk John through everything (30-min screen share)

### Phase 3 — Optimize & Document (Weeks 4–6)
- ⬜ Google Business Profile full optimization
- ⬜ Citation building & cleanup (consistent NAP across directories)
- ⬜ Performance audit (Lighthouse 90+ targets)
- ⬜ Create client handoff template
- ⬜ Write case study (before/after, metrics)
- ⬜ Set up $75/mo retainer workflow

### Phase 4 — Productize & Sell (Weeks 6–10)
- ⬜ Name and brand the SMB service offering (under Speed of Now)
- ⬜ Build 1-page service website
- ⬜ Create service playbook / SOP
- ⬜ Set non-family pricing (Starter $3K–$5K, Professional $5K–$8K, Premium $8K–$15K)
- ⬜ Identify 10 target businesses in Franklin, TN
- ⬜ Cold outreach strategy
- ⬜ Join Franklin/Nashville business groups (Chamber, BNI, veteran groups)
- ⬜ Set up business infrastructure (LLC, bank, invoicing)

---

## Open Questions (Waiting on Client)

All tracked in detail in `_context/client-answers.md`. Summary:

- **Domain ownership** — registrar, credentials, email on account (CRITICAL for go-live)
- **Address** — Missouri Ave (BBB) vs Commerce City (Yelp)
- **Fleet** — current vehicles vs old site listing
- **FASTTRAK portal URL** — needed for booking integration
- **Hours** — Nextdoor data unconfirmed
- **Bobby Long as GM** — display on new site?
- **Photos** — none recovered, need from John or plan shoot
- **Google Business Profile** — active? access?
- **Email** — current setup, mailbox count needed

---

## File Conventions

| Folder | Purpose | Rules |
|--------|---------|-------|
| `_context/` | Reference material | Read only. Don't modify unless Bobby says to. |
| `_business/` | Speed of Now planning | Case study, playbook, prospect list. Builds over time. |
| `deliverables/` | Client-facing output | Write for a 60-year-old business owner. No jargon. |
| `site/` | The codebase | Proper git workflow. Feature branches, clean commits. |
| `CLAUDE.md` | This file | Update when milestones complete. |

---

## Rules

- **Don't invent content.** Use `_context/site-recovery.md` as starting point. Tighten and modernize, but don't fabricate services, claims, or details.
- **Flag conflicts.** If sources disagree, note the discrepancy — don't silently pick one.
- **TODO comments in code.** Any unverified business detail should have `// TODO: Verify with client`.
- **Write deliverables for the audience.** John is 60+. Mom is the go-between. No tech jargon in client-facing docs.
- **Don't pad timelines.** Bobby moves fast. Three full-stack apps in three days fast.
- **Git discipline.** Feature branches, meaningful commit messages.
- **Update this file** when major milestones complete.

---

## Change Management Workflow

### Snapshot
- `v1.0-site-complete` tag = Phase 1 site before any client revisions (commit `b420d96`)
- To view: `git checkout v1.0-site-complete`
- To fully reset: `git reset --hard v1.0-site-complete`

### Round 1 History
- PR #3 merged `claude/repo-assessment-lzcl6` → `main` (premature)
- PR #4 reverted PR #3 on `main` (temporary rollback)
- Dev branch continued receiving changes (pink accents, photo swaps, additional fixes)
- Final merge to main via commit `efbc056` — all Round 1 changes + subsequent work now live
- Branch `claude/repo-assessment-lzcl6` is now fully merged and can be cleaned up

### How to Handle Client Change Requests

1. **Collect changes first — don't implement immediately.** When the user has changes to implement, they should provide the full list in **plan mode** (or paste output from a project chat). Claude organizes them into the correct order before any code is touched.

2. **Organize changes: global first, then page-specific.**
   - Global changes (CSS tokens, fonts, header, footer, layout, shared components) affect every page and must be done first.
   - Page-specific changes come after, building on the stable global foundation.
   - This prevents page work from breaking when global styles change later.

3. **One branch per feedback round.** Example: `fix/client-feedback-round-1`
   - Branch off `main` (the live site).
   - All changes for that round go on this one branch.

4. **One commit per change. No bundling.**
   - Each logical change gets its own commit with a detailed message explaining what changed and why.
   - This allows surgical rollback of any individual change without affecting others.
   - Bad: "update homepage and fix fonts and change footer" (one commit)
   - Good: three separate commits, each doing one thing.

5. **Push after each commit.** The Vercel preview URL auto-updates.
   - Live site (`main`): `acustomcoach.vercel.app` — always stable, never touched during changes.
   - Preview (branch): auto-generated Vercel URL — shows the latest state of all changes.
   - Client compares live vs preview side by side.

6. **Rolling back a specific change:**
   - `git revert <commit-hash>` — undoes just that one commit, keeps everything else.
   - Preview URL updates automatically after the revert is pushed.

7. **When client approves all changes:**
   - Merge the branch to `main` (preferably via GitHub pull request for a clean record).
   - Vercel auto-deploys the updated live site within ~60 seconds.

8. **If client rejects everything:** Delete the branch. `main` was never touched.

### Rollback Reference

| Want to... | Do this |
|------------|---------|
| Undo one specific change | `git revert <commit>` on the branch |
| Reject all changes in a round | Delete the branch. `main` untouched. |
| Reset live site to Phase 1 snapshot | `git reset --hard v1.0-site-complete` (destructive) or `git revert` the merge commit (safer) |
