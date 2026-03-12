# A Custom Coach — Project Hub

> Cowork reads this file automatically. It is the single source of truth for project state, design decisions, architecture, and workflow rules. Update it when milestones complete.

---

## What This Project Is

Rebuilding acustomcoach.com for A Custom Coach / Boulder Transportation — a Denver/Boulder luxury ground transportation company established September 1, 1988 by John Hafer (Bobby's uncle). The original website went down when the hosting provider (iVenue / Market America) permanently closed. No backups existed.

All site content was recovered from Google's cached index, Wayback Machine snapshots, and business directory listings (BBB, Yelp, Nextdoor, LimoHQ). The recovery document in `_context/site-recovery.md` is the content source of truth.

This project also serves as the proof-of-concept for Speed of Now Productions' SMB digital recovery service offering.

---

## Current Status

| Item | Status | Notes |
|------|--------|-------|
| Content recovery | ✅ COMPLETE | All 6 pages + business listings scraped |
| Design direction | ✅ APPROVED | Style tile reviewed, "Old Money Meets Modern Convenience" |
| Repo scaffold | ✅ COMPLETE | Next.js 16 + TS + Tailwind v4, all 6 routes build clean |
| Homepage | ✅ COMPLETE | Hero image, trust indicators, 3-card services preview, fleet highlight, CTA band |
| About page | ✅ COMPLETE | Hero image, company history, vision, John Hafer bio, acquisitions, industry positions, affiliations, CTA band |
| Services page | ✅ COMPLETE | Hero, 6 service cards with photos, chauffeur standards, CTA band |
| Fleet page | ✅ COMPLETE | Hero, 6 vehicle cards with photos (Sedans, SUVs, Stretch Limos, Passenger Vans, Executive Vans, Affiliates), pricing note, CTA band |
| Reservations page | ✅ COMPLETE | Booking form, FASTTRAK callout (URL TBD), DIA pickup instructions, sidebar cards |
| Contact page | ✅ COMPLETE | Hero image, contact info column + 9-field inquiry form (frontend only, backend TODO) |
| Header component | ✅ COMPLETE | Responsive, sticky, mobile hamburger, Book Now CTA, drop shadow |
| Footer component | ✅ COMPLETE | 3-column layout, contact info, affiliations, top shadow |
| Contact/inquiry form | 🟡 FRONTEND DONE | InquiryForm + ReservationForm components built, needs backend (Formspree/Resend/FASTTRAK) |
| FASTTRAK integration | ❌ NOT STARTED | Need portal URL from client |
| Domain transfer | ❌ BLOCKED | Waiting on client — Mom questionnaire sent |
| Vercel deployment | ❌ NOT STARTED | Deploy after homepage is presentable |
| Email migration | ❌ NOT STARTED | Google Workspace planned, waiting on email situation clarity |
| SEO / schema markup | ✅ COMPLETE | LocalBusiness JSON-LD, OG tags all pages, sitemap.xml, robots.txt, canonical URLs |
| Image assets | ✅ PLACEHOLDER | Colorado-specific Unsplash stock photography across all pages. Replace with real fleet/team photos when available |
| Mobile CTA bar | ✅ COMPLETE | Sticky bottom bar on mobile (<md), Call + Book Now buttons, in layout.tsx |
| Design polish | ✅ COMPLETE | Card shadows, gold glow hovers, CTA band lift, form focus rings, bumped border/accent opacity, design feedback pass (warmer gold, brighter text, title case, overlay fix) |
| Mom questionnaire | ✅ SENT | `deliverables/What_Bobby_Needs_From_John.docx` |
| Service scope & pricing | ✅ COMPLETE | `_context/service-scope-pricing.md` |
| Roadmap | ✅ COMPLETE | 5 phases, 34 tasks (see Roadmap section below) |

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
| Toll-free | (800) 671-5466 | All sources | ⚠️ Using on site |
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
| gold | `#D4AF37` | `text-gold`, `bg-gold` | Primary accent, CTAs, labels |
| gold-light | `#E8C95A` | `text-gold-light` | Hover states, highlights |
| gold-muted | `rgba(212,175,55,0.22)` | `bg-gold-muted` | Subtle backgrounds |
| cream | `#F5F0E8` | `text-cream` | Primary text |
| cream-muted | `#CCC5B9` | `text-cream-muted` | Secondary text |
| white | `#FAFAF8` | `text-white` | Headlines, emphasis |
| border-gold | `rgba(212,175,55,0.35)` | `border-border-gold` | Accent borders |
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

- **Primary button:** Gold gradient (`from-gold to-[#B8962E]`), dark text, uppercase, 0.08em tracking, 6px radius
- **Secondary button:** Transparent, gold border, cream text, uppercase
- **Text link button:** Gold text, underline on hover
- **Cards:** `surface` or `elevated` bg, `border-subtle` or `border-gold` border, 10-12px radius
- **Section labels:** 10px gold, uppercase, 0.2em letter-spacing, above headings
- **Trust indicators:** Large Playfair numbers in gold, small uppercase DM Sans labels

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
│   ├── page.tsx              ← Homepage (most built-out)
│   ├── about/page.tsx
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

### Phase 1 — Build the Site (Weeks 2–3) ← IN PROGRESS
- ✅ Next.js repo initialized with proper structure
- ✅ Design system implemented (Tailwind v4 tokens)
- ✅ Header and Footer components built
- ✅ Homepage structured (hero image, trust indicators, services preview, CTA)
- ✅ Build out page bodies (Fleet ✅, Services ✅, About ✅, Contact ✅, Reservations ✅)
- ✅ Write/refine copy from recovered content
- ✅ Reservation form built (FASTTRAK portal URL still needed from client)
- ✅ SEO foundation (LocalBusiness JSON-LD, OG tags, sitemap.xml, robots.txt, canonical URLs)
- ✅ Design polish pass (shadows, gold glow, depth, form focus rings)
- ✅ Stock photography added (Colorado-specific Unsplash — replace with real photos later)
- ✅ Homepage complete (services preview + fleet highlight added)
- ⬜ Deploy to Vercel, connect domain

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
