# A Custom Coach — Project State & Build Context

> **This file is the single source of truth for project state.** Update it when milestones complete. Cowork reads this automatically.

---

## Project Overview

Rebuilding acustomcoach.com for A Custom Coach / Boulder Transportation — a Denver/Boulder luxury ground transportation company established in 1988 by John Hafer (Bobby's uncle). The original website went down when the hosting provider (iVenue / Market America) permanently closed. No backups existed.

All site content was recovered from Google's cached index, Wayback Machine, and business directory listings (BBB, Yelp, Nextdoor, LimoHQ). The recovery document in `_context/site-recovery.md` is the content source of truth.

---

## Current Status

| Item | Status |
|------|--------|
| Content recovery | ✅ COMPLETE — all 6 pages + business listings |
| Design direction | ✅ COMPLETE — style tile approved (see Design System below) |
| Repo scaffolding | ✅ COMPLETE — Next.js 16 + TypeScript + Tailwind v4 |
| Homepage | 🟡 STRUCTURED — hero, trust indicators, services preview, CTA band. Needs service cards + imagery |
| About page | 🟡 STUB — header section only |
| Services page | 🟡 STUB — header section only |
| Fleet page | 🟡 STUB — header section only |
| Reservations page | 🟡 STUB — header + DIA pickup instructions |
| Contact page | 🟡 STRUCTURED — contact info layout done, form placeholder |
| Header component | ✅ COMPLETE — responsive, sticky, mobile hamburger, Book Now CTA |
| Footer component | ✅ COMPLETE — 3-column layout, contact info, affiliations |
| Contact/inquiry form | ❌ NOT STARTED |
| FASTTRAK integration | ❌ NOT STARTED — need portal URL from client |
| Domain transfer | ❌ BLOCKED — waiting on client |
| Vercel deployment | ❌ NOT STARTED — deploy after homepage is presentable |
| SEO / schema markup | ❌ NOT STARTED |
| Image assets | ❌ BLOCKED — no photos yet. Wayback Machine not fully scraped |

---

## Design System (APPROVED)

**Concept: "Old Money Meets Modern Convenience"**

This is a 37-year-old business where chauffeurs wear black suits with conservative ties. The design should feel like walking into a high-end hotel lobby — not a tech company landing page.

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `foundation` | `#0F0F0F` | Page background |
| `surface` | `#1A1917` | Card/section backgrounds |
| `elevated` | `#242220` | Elevated surfaces, hover states |
| `gold` | `#C9A84C` | Primary accent, CTAs, labels |
| `gold-light` | `#E2C97E` | Hover states, highlights |
| `gold-muted` | `rgba(201, 168, 76, 0.15)` | Subtle backgrounds |
| `cream` | `#F5F0E8` | Primary text |
| `cream-muted` | `#B8B0A2` | Secondary text |
| `white` | `#FAFAF8` | Headlines, emphasis |
| `border-gold` | `rgba(201, 168, 76, 0.2)` | Accent borders |
| `border-subtle` | `rgba(255, 255, 255, 0.06)` | Structural dividers |

### Typography
- **Headlines:** Playfair Display (serif) — 400/500/600/700
- **Body:** DM Sans (sans-serif) — 300/400/500/600
- Loaded via Google Fonts `<link>` tags in `layout.tsx`

### Type Scale
- H1: 48px Playfair Display
- H2: 32px Playfair Display
- H3: 24px Playfair Display
- Body Large: 18px DM Sans
- Body: 15px DM Sans
- Small: 13px DM Sans
- Label: 10px DM Sans, uppercase, tracked

### Component Patterns
- **Primary button:** Gold gradient (`from-gold to-[#B8942F]`), dark text, uppercase tracking
- **Secondary button:** Transparent with gold border, cream text
- **Cards:** `surface` or `elevated` background, `border-subtle` or `border-gold` border, 10-12px radius
- **Section labels:** 10px gold, uppercase, 0.2em letter-spacing
- **Trust indicators:** Large Playfair Display numbers in gold with small uppercase labels

### Design Principles
- **Photography:** Dark overlays until real photos arrive. No generic stock. Subtle grain on placeholders.
- **Animation:** Restrained. Fade-ups on scroll, smooth hover states. Nothing bouncy — this is a black-car service.
- **Mobile:** Sticky CTA bar with Call and Book buttons. Phone number always one tap away.
- **Spacing:** Generous. Let the dark background breathe. Premium = room to think.

---

## Technical Architecture

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-based config, no tailwind.config.js) |
| Fonts | Google Fonts via `<link>` in layout.tsx |
| Deployment | Vercel (planned) |
| Repo | GitHub — `acustomcoach` |

### Project Structure
```
src/
├── app/
│   ├── globals.css          ← Tailwind v4 @theme with all design tokens
│   ├── layout.tsx           ← Root layout, fonts, metadata
│   ├── page.tsx             ← Homepage (most built-out)
│   ├── about/page.tsx       ← Stub
│   ├── services/page.tsx    ← Stub
│   ├── fleet/page.tsx       ← Stub
│   ├── reservations/page.tsx ← Stub + DIA instructions
│   └── contact/page.tsx     ← Structured layout, form placeholder
├── components/
│   ├── Header.tsx           ← Responsive nav, sticky, mobile menu
│   └── Footer.tsx           ← 3-column, contact + links + affiliations
├── lib/                     ← (empty — for utilities as needed)
└── styles/                  ← (empty — globals.css handles everything)
```

### Tailwind v4 Notes
- Theme defined in `globals.css` using `@theme {}` block — NOT a JS config file
- Custom colors registered as `--color-*` and used as `text-gold`, `bg-surface`, etc.
- Custom fonts registered as `--font-display` and `--font-body`

---

## Key Decisions Made

1. **No landing page phase.** Old site was garbage (copyright 2013, no responsive, no SEO). John's pipeline is referrals, not web leads. Go straight to full build, do it right.
2. **Build first, verify details later.** Don't wait on 60-year-olds finding their GoDaddy password. Use recovered data as-is; phone numbers, addresses, and hours are easy swaps later.
3. **FASTTRAK integration = link, don't rebuild.** FASTTRAK Cloud already handles booking, dispatch, and billing. If they have a customer portal URL, link to it. If not, build a simple inquiry form that emails the office.
4. **Dark premium aesthetic.** Not a startup limo app. This is a legacy business. The design was approved via a style tile artifact.
5. **Portfolio piece.** This project doubles as a Speed of Now Productions portfolio item. Craft matters.

---

## Open Questions (Waiting on Client)

- **Domain:** Who is the registrar? Does John have credentials? Believed to be in John's name but unconfirmed.
- **Address:** BBB says 5105 E Missouri Ave, Denver. Yelp says 6240 E 49th Ave, Commerce City. Which is primary?
- **Fleet:** Old site listed sedans, SUVs, stretch limos, 14-pax vans, 9-pax executive vans. Need current confirmation.
- **FASTTRAK:** Still active? Booking portal URL? Embed or link?
- **Hours:** Nextdoor says Mon-Sat 6AM-11PM, Sun 9AM-10PM. Unconfirmed.
- **Bobby Long as GM:** BBB lists this. Show on new site?
- **Photos:** None recovered. Need new ones or Wayback Machine scrape.
- **Google Business Profile:** Is it still active? Does John have access?
- **Email:** Current setup unknown. Google Workspace migration planned but not started.

---

## Rules for This Build

- **Don't invent content.** Use recovered copy as a starting point. Tighten and modernize, but don't make up services, claims, or details.
- **Flag conflicts.** If sources disagree, note the discrepancy — don't silently pick one.
- **Write for the client.** Deliverables going to John should be written for a 60-year-old business owner. No jargon.
- **Proper git workflow.** Feature branches, clean commit messages.
- **TODO comments.** Any unverified business detail in code should have a `// TODO: Verify with client` comment.
- **Update this file** when major milestones complete.

---

## Workspace Split

This project uses two workspaces:

| Workspace | Purpose |
|-----------|---------|
| **Cowork (this one)** | Code, design, implementation, building pages, writing components |
| **Planning chat (claude.ai project)** | Strategy, roadmap, client deliverables (Mom questionnaire), pricing, Speed of Now productization |

Don't duplicate work across workspaces. If a planning decision affects the build, Bobby will relay it.
