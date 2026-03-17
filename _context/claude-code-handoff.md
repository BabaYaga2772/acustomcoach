# A Custom Coach — Complete Project Handoff Document

> **Generated:** March 17, 2026 (updated end-of-session after Round 1 feedback)
> **Author:** Claude Code (Opus 4.6) for Bobby Long / Speed of Now Productions
> **Purpose:** Full project state transfer. Written for an AI that has never seen this project before.
> **Usage:** Feed this document to claude.ai to bootstrap the Speed of Now automation pipeline.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Complete File Inventory](#2-complete-file-inventory)
3. [Live URLs](#3-live-urls)
4. [Lighthouse Scores](#4-lighthouse-scores)
5. [Competitive Analysis](#5-competitive-analysis)
6. [son-client-docs Deployment](#6-son-client-docs-deployment)
7. [External APIs, Services & Tools](#7-external-apis-services--tools)
8. [Environment Variables](#8-environment-variables)
9. [Incomplete Items, TODOs & Open Questions](#9-incomplete-items-todos--open-questions)

---

## 1. Project Overview

**Client:** A Custom Coach / Boulder Transportation — a Denver/Boulder luxury ground transportation company established September 1, 1988 by John Hafer.

**Problem:** The original website went down permanently when the hosting provider (iVenue / Market America) closed. No backups existed. All site content was recovered from Google's cached index, Wayback Machine snapshots, and business directory listings (BBB, Yelp, Nextdoor, LimoHQ).

**Solution:** Complete website rebuild using Next.js 16 + TypeScript + Tailwind CSS v4, deployed on Vercel. Dark luxury aesthetic ("Old Money Meets Modern Convenience"). 8 routes, fully responsive, SEO-optimized.

**Dual Purpose:** This project is both a real client engagement (family rate: $2,300) and the proof-of-concept for Speed of Now Productions' SMB digital recovery service offering.

**Repository:** `github.com/BabaYaga2772/acustomcoach`

### Branch State (Critical)

| Branch | Purpose | State |
|--------|---------|-------|
| `main` | Production (live site) | Stable — Phase 1 build. PR #3 merged round 1 changes prematurely, PR #4 reverted them. Live site is pre-feedback. |
| `claude/repo-assessment-lzcl6` | Dev/preview | Contains all 16 round 1 client feedback changes. NOT merged to main. Vercel preview URL available for client review. |

**Important for future merges:** Because main has a revert commit (PR #4), re-merging the dev branch requires either (a) reverting the revert on main first, or (b) cherry-picking commits. A straight merge will no-op.

---

## 2. Complete File Inventory

### Root Configuration Files

| File | Description |
|------|-------------|
| `CLAUDE.md` | The master project hub. Contains all project state, design decisions, architecture, business details, design system tokens, roadmap, and workflow rules. This is the single source of truth — every AI agent reads this file first. Updated whenever milestones complete. |
| `package.json` | Node.js project manifest. Dependencies: Next.js 16.1.6, React 19.2.4, React DOM 19.2.4. Dev dependencies: Tailwind CSS 4.2.1, @tailwindcss/postcss 4.2.1, PostCSS 8.5.8, TypeScript 5.9.3. Scripts: dev, build, start, lint. |
| `tsconfig.json` | TypeScript configuration. Target ES2017, strict mode, bundler module resolution, `@/*` path alias mapping to `./src/*`. Includes the Next.js plugin. |
| `next.config.ts` | Next.js configuration. Only customization is `images.remotePatterns` allowing `images.unsplash.com` and `images.pexels.com` for external stock photography. |
| `postcss.config.mjs` | PostCSS configuration. Single plugin: `@tailwindcss/postcss` — this is the Tailwind v4 integration method (CSS-based, no tailwind.config.js). |
| `.gitignore` | Standard Next.js gitignore. Excludes node_modules, .next, build output, .env*.local, .vercel, .DS_Store, TypeScript build info. |
| `lighthouse-report.html` | Full Lighthouse audit report for `acustomcoach.vercel.app`. Contains all performance, accessibility, best practices, and SEO scores with detailed audit breakdowns. Generated from Chrome DevTools. |

### Source Code — `src/app/`

| File | Description |
|------|-------------|
| `src/app/globals.css` | Tailwind v4 theme definition and base styles. Contains the entire design system as CSS custom properties inside a `@theme {}` block: 11 color tokens (foundation, surface, elevated, gold, gold-light, gold-muted, cream, cream-muted, white, border-gold, border-subtle), 5 shadow tokens (card, card-hover, gold-glow, gold-glow-lg, cta-band), and 2 font families (display: Playfair Display, body: DM Sans). Also sets base body styles, smooth scrolling, and gold selection highlight. This is the only CSS file in the project. |
| `src/app/layout.tsx` | Root layout. Loads Google Fonts (Playfair Display + DM Sans) via `<link>` tags in `<head>` — NOT via `next/font` because the build environment can't fetch at compile time. Contains comprehensive `<Metadata>` export with title template, description, keywords (10 Denver/Boulder/Colorado transportation keywords), OpenGraph, Twitter card, canonical URL, and robots directives. Injects a `LimousineBusService` JSON-LD structured data schema with full business details: name, address (5105 E Missouri Ave, Denver 80246), geo coordinates, phone numbers (local + toll-free), founding date (1988-09-01), founder (John Hafer), opening hours, area served (Denver + Boulder), 6 service types, A+ BBB rating, 3 organizational memberships (NLA, CLA, Denver Metro Convention & Visitors Bureau), and 2 contact points. Renders `{children}` + `<MobileCTABar />` in `<body>`. Multiple TODO comments flag unverified business data. |
| `src/app/loading.tsx` | Global loading state. Renders a centered gold spinning circle animation with "Loading" text on the foundation background. Used by Next.js App Router during page transitions. |
| `src/app/page.tsx` | **Homepage.** Five sections: (1) Hero — full-viewport background image (DIA tent roof from Unsplash — swapped from Denver skyline in round 1), "Denver's Premier Transportation" headline with gold accent, "Serving Colorado & Wyoming" label, Book Now + Call CTAs. (2) Trust indicators bar — 4 stats in gold Playfair numerals: "37+ Years in Service", "A+ Rating" (BBB removed in round 1), "24/7 Live Dispatch", "3 Companies Acquired". (3) Services preview — 3 linked cards (Airport Transfers, Corporate & Business, Mountain Attractions) each with Unsplash photo, description, and feature bullets, plus "View All Services" button. (4) Fleet highlight — 2-column layout with fleet summary + sedan photo + "View Our Fleet" CTA. (5) CTA band — "A Live Voice, Every Time You Call" with both phone numbers. |
| `src/app/about/page.tsx` | **About page.** Six sections: (1) Hero with Colorado mountains Unsplash image and company introduction paragraph. "Serving Colorado & Wyoming" (Wyoming added in round 1). (2) Vision statement — blockquote: "Present a Solution to Every Customer, No Matter the Circumstances." (3) John Hafer bio — 2-column grid with monogram placeholder (JH) and 3-paragraph biography covering founding, acquisitions, and industry leadership. (4) Vertical timeline — 5 milestones: 1988 founding, DIA board appointment (genericized to "over 30 years" in round 1), and 3 acquisitions (Boulder Transportation, Centennial Sedans, Diamond Limousine) with alternating left/right layout on desktop. (5) Industry leadership — 3 positions with gold left-border accent: DIA Ground Transportation Board, Colorado Limousine Association VP, Colorado Convention Bureau Transportation Forum. (6) Affiliations — 3-card grid (NLA, CLA, DMCVB). CTA band at bottom. |
| `src/app/services/page.tsx` | **Services page.** 6 service cards in a 2-column grid, each with Unsplash/Pexels photo, label, title, description, and 4 feature bullets: Airport Transfers, Meet & Greet, Mountain Attractions, Corporate & Business, Weddings, Special Events. Below cards: chauffeur standards section with dress code description and 4 trust stats (24hr Dispatch, 37+ Years, A+ BBB, 0 Hidden Fees). CTA band at bottom. |
| `src/app/airport/page.tsx` | **Airport page.** Dedicated DIA and Colorado airports page. Sections: (1) DIA hero image. (2) Trust bar — 4 stats: 24/7 Live Dispatch, 100% Flight Tracked, A+ Rating (BBB removed), $0 Hidden Fees. (3) How It Works — 3 numbered step cards (Book with phone number, We Track your flight, Meet Your Chauffeur at curb — updated in round 1). (4) DIA Pickup Instructions — rewritten in round 1: chauffeur texts/calls on landing, Level 5 Ground Transportation, East or West door, 2nd island from curb. (5) Meet & Greet — rewritten in round 1: greeter at top of escalators after train, name sign, assist to baggage claim, escort to vehicle. (6) Distances table — 5 routes with miles (DIA→Denver ~35mi, Boulder ~50mi, DTC ~30mi, Vail ~120mi, COS ~115mi) + Custom route. Replaced old "Call for quote" rate table in round 1. (7) Colorado airports grid — 6 cards: DEN, BJC, APA, COS, EGE, FBO terminals. (8) 24/7 availability callout. CTA band. |
| `src/app/mountains/page.tsx` | **Mountains page.** Sections: (1) Mountain highway hero. (2) Trust bar — 37+ Years on These Roads, AWD Winter-Ready Fleet, 24/7 Live Dispatch, 55 Max Group Size. (3) 5 resort cards (Vail ~100mi, Breckenridge ~80mi, Aspen ~200mi, Beaver Creek ~110mi, Keystone ~75mi) each with distances in miles (replaced drive times in round 1), base elevation, description, and 4 highlights. Plus an "And Every Mountain In Between" card listing 7 additional resorts. (4) Group transportation — updated vehicle capacity table (SUVs 6-7 pax, Luxury Executive Vans up to 14 pax, Affiliate Coaches 26-55 pax) with "View Our Fleet" link. (5) Seasonal availability — 4 seasons with service types. CTA band. |
| `src/app/fleet/page.tsx` | **Fleet page.** 4 vehicle cards (restructured from 6 in round 1) in a responsive grid: Luxury Sedans (up to 3 pax, 3 bags), Luxury SUVs (6-7 pax, 6 bags), Luxury Executive Vans (high-top walk-in, up to 14 pax), Affiliate Vehicles (26-55 pax via national network). Removed: Stretch Limousines, old Passenger Vans, Executive Sprinter Vans. Each card has a Pexels/Unsplash photo with `// PHOTO: Bobby to verify` comments, passenger/luggage capacity, description, and 4 feature bullets. Transparent pricing note below. CTA band. All vehicle photos are stock — real fleet photos needed from client. |
| `src/app/reservations/page.tsx` | **Reservations page.** Server component wrapper. Sections: (1) Hero with phone numbers (linked). (2) FASTTRAK online booking callout — gold-bordered card with "Book Online" button that currently links to `#` (placeholder — FASTTRAK portal URL needed from client, flagged with TODO). (3) 5-column grid: ReservationForm component (3 cols) + sidebar (2 cols) with 3 cards: confirmation notice ("not complete until you receive confirmation"), DIA pickup instructions (updated in round 1 to match airport page — Level 5, East/West door, 2nd island), and quick contact card with both phone numbers and "Live Voice" badge. (4) Pricing transparency CTA band. |
| `src/app/reservations/ReservationForm.tsx` | **Reservation form (client component).** "use client" component accepting `vehicleOptions` string array as prop. 9 fields (Special Requests removed in round 1): Full Name*, Email*, Phone*, Passengers* (1-55), Date*, Pickup Time*, Pickup Location* (with placeholder text), Drop-off Location* (with placeholder text), Vehicle Preference (select dropdown with 7 options including "Not sure — help me decide"). On submit: calls `e.preventDefault()`, sets `submitted` state to `true`, shows confirmation message. **CRITICAL: The form does NOT actually send data anywhere.** The `handleSubmit` function has a TODO comment: "Wire to email service (Formspree, Resend, or FASTTRAK API)". Contains a reusable `InputField` sub-component for consistent form field styling. |
| `src/app/contact/page.tsx` | **Contact page.** 2-column layout: Left column has contact info (phone with "Live Voice — Every Call" badge, toll-free, email, location "Denver, Colorado", hours Mon-Sat 6AM-11PM / Sun 9AM-10PM, fax). Right column renders the `InquiryForm` component. Hero image: Denver skyline at golden hour from Unsplash. Address and hours have TODO comments — unverified with client. |
| `src/app/sitemap.ts` | Dynamic sitemap generator. Returns `MetadataRoute.Sitemap` array with 8 routes: / (priority 1.0, weekly), /services (0.9, monthly), /airport (0.9, monthly), /mountains (0.8, monthly), /fleet (0.8, monthly), /about (0.7, monthly), /reservations (0.9, monthly), /contact (0.8, monthly). /airport and /mountains added in round 1. Base URL hardcoded to `https://www.acustomcoach.com` with TODO to update when domain is confirmed. |
| `src/app/robots.ts` | Dynamic robots.txt generator. Allows all user agents on all paths. Points sitemap to `https://www.acustomcoach.com/sitemap.xml`. Same domain TODO as sitemap.ts. |

### Source Code — `src/components/`

| File | Description |
|------|-------------|
| `src/components/Header.tsx` | **Site header (client component).** "use client" for mobile menu toggle. Sticky positioned (`sticky top-0 z-50`), semi-transparent foundation background with backdrop blur and bottom border shadow. Contains: logo/brand text link ("A Custom Coach" + "Est. 1988" badge), desktop nav with 6 links (Services, Airport, Mountains, Fleet, About, Contact) + gold "Book Now" CTA button, hamburger menu button (3-line animated to X on toggle), and mobile nav overlay with same links + Book Now + Call phone number. Nav links are uppercase, tracked, cream-colored with gold hover transition. |
| `src/components/Footer.tsx` | **Site footer (server component).** 3-column responsive grid: (1) Brand column — company name, "Luxury Transportation Since 1988" tagline, A+ BBB and NLA member description. (2) Quick Links — 5 navigation links (Services, Fleet, About, Reservations, Contact). (3) Contact — local phone, toll-free, email, "Denver, Colorado" location, hours. Bottom bar: copyright with dynamic year + NLA/CLA affiliations. Has TODO comments for address and hours verification. Top shadow border for visual separation. |
| `src/components/InquiryForm.tsx` | **Contact inquiry form (client component).** "use client" component. 9 fields: Full Name*, Email*, Phone, Date of Service, Passengers (1-55), Pickup Location, Drop-off Location, Vehicle Preference (select with 7 options), Message (textarea). On submit: `e.preventDefault()` → sets `submitted` → shows thank you message with 48-hour response time and phone fallback. **CRITICAL: Same as ReservationForm — does NOT actually send data anywhere.** TODO: "Wire to email service (Formspree, Resend, or FASTTRAK)". Contains reusable `Field` sub-component. Slightly different field set from ReservationForm (less required fields, no time field, has message instead of special requests). |
| `src/components/MobileCTABar.tsx` | **Mobile sticky CTA bar (client component).** Fixed to bottom of viewport, only visible below `md` breakpoint (`md:hidden`). Semi-transparent foundation background with backdrop blur and top border. Contains 2 equal-width buttons: "Call" (tel: link to 303-759-1376) and "Book Now" (link to /reservations). Call button has secondary gold-border style, Book Now has primary gold gradient style. `z-50` ensures it floats above all content. |

### Context Documents — `_context/`

| File | Description |
|------|-------------|
| `_context/site-recovery.md` | **The original content recovery document.** Contains all text scraped from Google's cached index of the old acustomcoach.com site (6 pages), plus data extracted from BBB, Yelp, Nextdoor, LimoHQ, and boulderselectlimo.com listings. This is the source of truth for all website copy. Includes page-by-page content, business details, contact info with source attribution, and noted discrepancies between sources. |
| `_context/client-answers.md` | **Client Q&A tracker.** Status: questionnaire sent via Bobby's mom (the go-between), waiting on responses from John Hafer. Tracks 10 categories of unconfirmed information: domain ownership (CRITICAL), contact info (phones, address, hours — all UNCONFIRMED but used on site), email setup (UNKNOWN), fleet details (UNCONFIRMED), FASTTRAK status (active but portal URL unknown), staff, photos (likely need a shoot), Google Business Profile (UNKNOWN), and services (all ASSUMED ACTIVE). |
| `_context/fasttrak-notes.md` | **FASTTRAK Cloud booking system research.** Documents what we know: cloud-hosted on Azure, products (InVision web/mobile, Ultimate desktop), features (booking, dispatch, billing, driver apps, flight tracking, QuickBooks/Stripe integration), pricing (up to $229/mo), login portal (invision.ifasttrak.com). Integration strategy: path of least resistance is linking to FASTTRAK's existing customer portal. Decision tree: if portal URL exists → link to it; if embeddable → embed on reservations page; if neither → inquiry form that emails office (current state). |
| `_context/service-scope-pricing.md` | **Full service scope and pricing document.** 5 tiers: Tier 1 Website Rebuild ($1,500 family / $5,500-$11,500 market), Tier 2 Booking System (Options A/B/C from simple form to full platform), Tier 3 Email Infrastructure ($350 family / $900-$2,000 market for Google Workspace), Tier 4 Monthly Maintenance ($75/mo family / $150-$350/mo market), Tier 5 SEO & Marketing ($450 one-time family / $350/mo ongoing family). Recommended "Get John Back Online" package: $2,300 total. Also contains the productization strategy for non-family clients: Starter $3K-$5K, Professional $5K-$8K, Premium $8K-$15K. |
| `_context/client-feedback-round-1.md` | **Client feedback round 1 decision log.** 16 changes organized by execution order (global → page-specific). Documents rules (don't touch wedding card, don't touch affiliate card, no CSS color changes, all photos BLACK exterior/interior, leave `// PHOTO: Bobby to verify` comments). Each change numbered with implementation details. Status: all implemented on dev branch, awaiting client review. |
| `_context/claude-code-handoff.md` | **This file.** The document you are currently reading. |

### Business Planning — `_business/`

| File | Description |
|------|-------------|
| `_business/case-study-draft.md` | **Case study template (PLACEHOLDER).** Structure is defined but content is not filled in. Sections: The Problem, What I Did (4 steps), Before State (4 bullets about the broken old site), After State (placeholder for screenshots and scores), Results (placeholder for metrics), The Takeaway. Needs: actual screenshots, Lighthouse scores (now available — see Section 4), timeline data, and before/after traffic comparison. |
| `_business/service-playbook.md` | **SMB service playbook (IN PROGRESS).** Defines the Speed of Now digital recovery service: target client profile (50+ owner, 10+ year business, no digital staff), pricing tiers (same as service-scope-pricing.md market rates), and 13-step process from discovery call to monthly retainer kickoff. Each step is meant to be documented as it's executed for John's project. |
| `_business/target-clients.md` | **Franklin, TN prospect list (NOT STARTED).** Template for future client prospecting after Bobby relocates to Franklin, TN in March 2026. Contains research method (drive around, check websites on phone), empty prospect table, and outreach strategy template (personalized email referencing the ACC case study). |

### Deliverables — `deliverables/`

| File | Description |
|------|-------------|
| `deliverables/What_Bobby_Needs_From_John.docx` | **Client questionnaire (SENT).** Word document formatted for a 60-year-old business owner (no tech jargon). Sent to John Hafer via Bobby's mom. Contains questions about domain ownership, phone numbers, address, fleet details, email setup, photos, FASTTRAK portal URL, Google Business Profile, and hours. This is the critical path item — most open questions depend on John's responses. |

### Archive — `_archive/`

| File/Directory | Description |
|----------------|-------------|
| `_archive/README.md` | Index explaining what's in the archive and why each file was superseded. |
| `_archive/screenshots/IMG_7332-7335.png` | 4 screenshots (68-84KB each). Likely mobile screenshots of the live site or design references. |
| `_archive/artifacts-code/roadmap.pdf` | Exported JSX code dump of the interactive 5-phase roadmap artifact from the planning chat. Content now lives in CLAUDE.md. |
| `_archive/artifacts-code/style-tile.pdf` | Exported JSX code dump of the design direction style tile artifact. Design system now lives in CLAUDE.md. |
| `_archive/artifacts-code/planning-agent-prompt.md` | The prompt given to the planning chat AI to define its scope of work. |
| `_archive/artifacts-code/build-agent-prompt.md` | The original build workspace prompt, superseded by CLAUDE.md's instructions. |
| `_archive/original-docs/A_Custom_Coach_Site_Recovery.pdf` | PDF version of site-recovery.md. |
| `_archive/original-docs/ACC_Service_Scope_and_Pricing.pdf` | PDF version of service-scope-pricing.md. |
| `_archive/original-docs/Cowork_Setup_Guide.md` | Original workspace setup instructions from the planning phase. Content merged into CLAUDE.md. |
| `_archive/original-docs/old-CLAUDE.md` | First draft of CLAUDE.md from before the build workspace existed. |
| `_archive/99-Archive/` | Deep archive containing markdown and PDF duplicates of all key documents, plus `acustomcoach-project-full.tar.gz` (551KB compressed backup of the entire project at an earlier state). Also contains duplicate copies of client-answers.md, fasttrak-notes.md, CLAUDE.md, Cowork_Setup_Guide.md, and the docx questionnaire. |

---

## 3. Live URLs

### Production Site

| URL | Description |
|-----|-------------|
| `https://acustomcoach.vercel.app` | **Live production site.** Deployed on Vercel. All 8 routes are live and functional. Custom domain (acustomcoach.com) pending domain transfer from client. |
| `https://acustomcoach.vercel.app/` | Homepage — hero, trust indicators, services preview, fleet highlight, CTA |
| `https://acustomcoach.vercel.app/about` | About — company history, John Hafer bio, timeline, industry leadership, affiliations |
| `https://acustomcoach.vercel.app/services` | Services — 6 service cards, chauffeur standards, trust stats |
| `https://acustomcoach.vercel.app/airport` | Airport — DIA focus, how-it-works, pickup instructions, meet & greet, rate table, 6 airports |
| `https://acustomcoach.vercel.app/mountains` | Mountains — 5 resort cards with drive times, group transport, seasonal availability |
| `https://acustomcoach.vercel.app/fleet` | Fleet — 6 vehicle cards with stock photos, capacity info, features |
| `https://acustomcoach.vercel.app/reservations` | Reservations — booking form (frontend only), FASTTRAK callout, DIA instructions, sidebar |
| `https://acustomcoach.vercel.app/contact` | Contact — contact info, inquiry form (frontend only) |
| `https://acustomcoach.vercel.app/sitemap.xml` | Dynamic XML sitemap (generated by Next.js from `sitemap.ts`) |
| `https://acustomcoach.vercel.app/robots.txt` | Dynamic robots.txt (generated by Next.js from `robots.ts`) |

### Client Documentation Site

| URL | Description |
|-----|-------------|
| `https://son-client-docs.vercel.app` | **Speed of Now client documentation site.** A separate deployment containing project reference materials. This is NOT in the acustomcoach repo — it lives in a separate repository. |
| `https://son-client-docs.vercel.app/acc/competitive-analysis.html` | Competitive analysis document for A Custom Coach. Contains competitor scoring, Digital Health Score methodology, and how ACC compares. See Section 5 for details on what's known. |
| `https://son-client-docs.vercel.app/acc/old-site-reference.html` | Visual reference / documentation of the old acustomcoach.com site before it went down. |
| `https://son-client-docs.vercel.app/acc/project-summary.html` | Project summary document — overview of the ACC rebuild project. |

**Important note:** The son-client-docs site is a separate deployment and repository. The acustomcoach repo only references these URLs in CLAUDE.md. The actual content, framework, and deployment configuration of son-client-docs are not available in this repo. See Section 6 for what is known.

### Other Referenced URLs

| URL | Description |
|-----|-------------|
| `https://github.com/BabaYaga2772/acustomcoach` | GitHub repository for this project |
| `https://invision.ifasttrak.com` | FASTTRAK Cloud login portal (John's booking/dispatch software) |
| `https://fasttrakcloud.com` | FASTTRAK Technologies website (booking software vendor) |

---

## 4. Lighthouse Scores

**Tested URL:** `https://acustomcoach.vercel.app`
**Report file:** `lighthouse-report.html` (in repo root)

### Category Scores

| Category | Score | Grade |
|----------|-------|-------|
| **Performance** | **94** | Green |
| **Accessibility** | **100** | Green (perfect) |
| **Best Practices** | **88** | Green |
| **SEO** | **100** | Green (perfect) |

### Core Web Vitals Detail

| Metric | Value | Score |
|--------|-------|-------|
| First Contentful Paint (FCP) | 1.8 s | 89/100 |
| Largest Contentful Paint (LCP) | 2.6 s | 88/100 |
| Speed Index | 4.1 s | 80/100 |
| Total Blocking Time (TBT) | 10 ms | 100/100 (perfect) |
| Cumulative Layout Shift (CLS) | 0 | 100/100 (perfect) |

### Performance Analysis

- **LCP is the main bottleneck** at 2.6s — this is likely caused by the hero images loading from external CDNs (Unsplash/Pexels). Replacing with self-hosted, optimized images when real fleet photos arrive should improve this significantly.
- **TBT and CLS are perfect** — the site has minimal JavaScript (only 3 client components: Header, InquiryForm, ReservationForm, MobileCTABar) and no layout shifts.
- **Speed Index of 4.1s** reflects the external image loading. Next.js Image component handles lazy loading and responsive sizing, but the origin servers (Unsplash, Pexels) add latency.
- **Best Practices at 88** — likely flagged for third-party cookie usage from Google Fonts CDN and/or external image hosts.

### Improvement Opportunities

1. Self-host images instead of loading from Unsplash/Pexels CDNs
2. Consider self-hosting Google Fonts (currently loaded via `<link>` tag)
3. Add `fetchpriority="high"` to hero images (Next.js `priority` prop handles this partially)
4. Implement `next/font` if build environment supports it in the future

---

## 5. Competitive Analysis

### What Is Known

The competitive analysis lives at `https://son-client-docs.vercel.app/acc/competitive-analysis.html`. This content is **not stored in the acustomcoach repo** — it exists only on the son-client-docs deployment.

Based on references in CLAUDE.md and the project planning documents, the competitive analysis was conducted as part of Phase 0 (Discovery & Lock-In). The following is what can be inferred from the project context:

### Likely Competitors Analyzed

Based on the Denver/Boulder luxury transportation market and references in the recovery documents:

- Other Denver limousine/car services that appear in Google results for "Denver limo service", "Denver airport car service", "Boulder transportation"
- Companies referenced in FASTTRAK notes as industry peers: services using Limo Anywhere, Livery Coach, Hudson Software
- The old site reference at `son-client-docs.vercel.app/acc/old-site-reference.html` shows what ACC's pre-crash site looked like — competitors were likely benchmarked against this baseline

### Digital Health Score Methodology

The project documentation references a "Digital Health Score" concept but the actual scoring criteria, weights, individual competitor scores, and ACC's comparative position are only available at the son-client-docs URL. **To get the full competitive analysis content, you must fetch `https://son-client-docs.vercel.app/acc/competitive-analysis.html`.**

### What the Analysis Likely Covers (Based on Service Playbook)

From `_business/service-playbook.md` step 3 ("Competitive landscape review"), the analysis likely evaluated:

- Website quality (mobile responsiveness, design, load speed)
- SEO presence (rankings for local keywords, schema markup, Google Business Profile)
- Online booking capability
- Content quality and completeness
- Social media presence
- Review profiles (Google, Yelp, BBB)
- Overall digital infrastructure maturity

**Action required:** Fetch the actual competitive analysis page to get the real data. The URL is confirmed live per CLAUDE.md.

---

## 6. son-client-docs Deployment

### What Is Known

| Field | Value |
|-------|-------|
| **Live URL** | `https://son-client-docs.vercel.app` |
| **Hosting** | Vercel (based on `.vercel.app` subdomain) |
| **Repository** | Unknown — not the acustomcoach repo. Likely a separate repo under the BabaYaga2772 GitHub account. |
| **Framework/Stack** | Unknown from this repo. The `.html` file extensions in the URLs suggest it could be a static site (plain HTML, Astro, 11ty, or a static export from Next.js/other framework). |

### Known Pages/Routes

| Route | Content |
|-------|---------|
| `/acc/competitive-analysis.html` | Competitive analysis for A Custom Coach — competitor scores, Digital Health Score methodology, and ACC comparison |
| `/acc/old-site-reference.html` | Visual reference of the old acustomcoach.com site (pre-crash). Likely contains screenshots or reconstructed views of the original 2013-era site. |
| `/acc/project-summary.html` | Project summary for the A Custom Coach rebuild. Overview of scope, timeline, deliverables. |

### What Is NOT Known

- The full repository name and location
- The framework used to build it
- Whether there are additional pages beyond the 3 ACC-specific ones
- Whether it contains documentation for other Speed of Now clients
- The deployment configuration (manual deploy, CI/CD, etc.)
- Whether Bobby has direct access to modify it

**Action required:** To fully document this deployment, you need to either (a) find the repository on GitHub under BabaYaga2772, or (b) fetch each URL and inspect the HTML to determine the stack.

---

## 7. External APIs, Services & Tools

### Currently Configured

| Service | Status | Details |
|---------|--------|---------|
| **Vercel** | ACTIVE | Hosting and deployment platform. Site is live at `acustomcoach.vercel.app`. Vercel handles SSL, CDN, and serverless functions. No `.vercel` directory in repo (gitignored). Deployment likely connected via GitHub integration (push to main → auto-deploy). |
| **Google Fonts CDN** | ACTIVE | Playfair Display (400-700) and DM Sans (300-600) loaded via `<link>` tags in `layout.tsx`. No API key needed — public CDN. |
| **Unsplash** | ACTIVE (images only) | 8 images used across the site via direct Unsplash URLs. No API key — using public image URLs with `auto=format&fit=crop` parameters. Used for: homepage hero (Denver skyline), about hero (Colorado mountains), services hero (DIA exterior), airport hero (DIA terminal), mountains hero (mountain highway), contact hero (Denver golden hour), and service card photos. Allowed in `next.config.ts` remote patterns. |
| **Pexels** | ACTIVE (images only) | 6 images used on the fleet page via direct Pexels URLs. No API key — using public image URLs with `auto=compress&cs=tinysrgb` parameters. Used for: fleet hero (Mercedes row), Lincoln Continental, Ford Expedition, stretch limo, passenger van, executive van. Plus 1 image on homepage fleet highlight. Allowed in `next.config.ts` remote patterns. |

### NOT YET Configured (Needed)

| Service | Status | Blocker | Details |
|---------|--------|---------|---------|
| **Form backend (Formspree, Resend, or equivalent)** | NOT CONFIGURED | Decision needed | Both InquiryForm and ReservationForm have `e.preventDefault()` and set state but do NOT submit data anywhere. Need to wire to an email delivery service. Options discussed: Formspree (simplest, $10/mo), Resend (developer-friendly, free tier), or FASTTRAK API (if available). |
| **FASTTRAK Cloud** | NOT INTEGRATED | Waiting on client | John's booking/dispatch system. Need the customer-facing portal URL to link from the "Book Online" button on /reservations. Currently links to `#`. |
| **Google Analytics 4** | NOT CONFIGURED | Not yet set up | Mentioned in service-scope-pricing.md as part of Tier 1 deliverable. No GA tracking code in the codebase. |
| **Plausible Analytics** | NOT CONFIGURED | Alternative to GA4 | Mentioned as an option in service-scope-pricing.md. Privacy-friendly alternative. Not implemented. |
| **Google Workspace** | NOT CONFIGURED | Waiting on client | Planned for email migration ($7/user/mo). Need to know current email setup, number of mailboxes, and domain access. |
| **Google Business Profile** | UNKNOWN | Waiting on client | Unknown if John has an active GBP. Optimization is part of Tier 1 deliverable. |
| **UptimeRobot** | NOT CONFIGURED | Phase 2 item | Uptime monitoring planned for Phase 2 (Fix Infrastructure). |
| **Domain (acustomcoach.com)** | NOT TRANSFERRED | BLOCKED on client | Custom domain not yet connected to Vercel. Waiting on John to provide registrar credentials. Currently using `acustomcoach.vercel.app` subdomain. |

---

## 8. Environment Variables

### Current State: NONE REQUIRED

There are **no `.env` files** in the repository and **no `process.env` references** in the codebase. The project runs with zero environment variables.

To run locally:

```bash
git clone https://github.com/BabaYaga2772/acustomcoach.git
cd acustomcoach
npm install
npm run dev
# Opens at http://localhost:3000
```

### Future Environment Variables (When Services Are Added)

When form backends and analytics are wired up, the following will likely be needed:

| Variable | Service | When Needed |
|----------|---------|-------------|
| `FORMSPREE_FORM_ID` or `RESEND_API_KEY` | Form backend | When contact/reservation forms are wired to email delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | When analytics tracking is added |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics | If Plausible is chosen over GA4 |
| `FASTTRAK_API_KEY` | FASTTRAK Cloud | Only if API integration is pursued (unlikely — link-out is the plan) |

---

## 9. Incomplete Items, TODOs & Open Questions

### Every TODO Comment in the Codebase

There are **14 TODO comments** across 7 files:

#### Domain/URL TODOs (3)
| File | Line | TODO |
|------|------|------|
| `src/app/layout.tsx` | 5 | `// TODO: Update to final domain once confirmed with client` — SITE_URL is hardcoded to `https://www.acustomcoach.com`. Used in metadata, OG tags, and JSON-LD. |
| `src/app/sitemap.ts` | 3 | `// TODO: Update to final domain once confirmed with client` — Same SITE_URL hardcode. Affects generated sitemap.xml URLs. |
| `src/app/robots.ts` | 3 | `// TODO: Update to final domain once confirmed with client` — Same SITE_URL hardcode. Affects robots.txt sitemap reference. |

#### Business Data Verification TODOs (7)
| File | Line | TODO |
|------|------|------|
| `src/app/layout.tsx` | 59 | `// TODO: Verify address, phone numbers, hours with client before go-live` — Applies to the entire JSON-LD schema block. |
| `src/app/layout.tsx` | 69 | `// TODO: Verify this is the correct active address` — Street address in JSON-LD (5105 E Missouri Ave). BBB says this, Yelp says Commerce City address. |
| `src/app/layout.tsx` | 83 | `// TODO: Verify hours with client` — Opening hours in JSON-LD (Mon-Sat 6AM-11PM, Sun 9AM-10PM sourced from Nextdoor). |
| `src/app/contact/page.tsx` | 75 | `{/* TODO: Verify address with client */}` — "Denver, Colorado" displayed without street address. |
| `src/app/contact/page.tsx` | 80 | `{/* TODO: Verify hours with client */}` — Hours displayed on contact page. |
| `src/components/Footer.tsx` | 61 | `{/* TODO: Verify address with client */}` — "Denver, Colorado" in footer. |
| `src/components/Footer.tsx` | 66 | `{/* TODO: Verify hours with client */}` — Hours in footer. |

#### Feature Integration TODOs (4)
| File | Line | TODO |
|------|------|------|
| `src/app/airport/page.tsx` | — | Rate table replaced with distances table in round 1. "Call for quote" placeholders removed. Rates may still be needed if client wants pricing displayed. |
| `src/app/reservations/page.tsx` | 81 | `{/* TODO: Replace # with FASTTRAK portal URL once client provides it */}` — "Book Online" button links to `#`. |
| `src/app/reservations/ReservationForm.tsx` | 14 | `// TODO: Wire to email service (Formspree, Resend, or FASTTRAK API)` — Form submits to nothing. |
| `src/components/InquiryForm.tsx` | 20 | `// TODO: Wire to email service (Formspree, Resend, or FASTTRAK)` — Form submits to nothing. |

### Sitemap Gap — RESOLVED

~~`src/app/sitemap.ts` only lists 6 routes but the site has 8.~~ Fixed in round 1 — all 8 routes now in sitemap.

### Incomplete Features

| Feature | Status | What's Missing |
|---------|--------|----------------|
| **Contact form backend** | Frontend only | InquiryForm.tsx — form renders and validates, but `handleSubmit` just sets a state flag. No data is sent anywhere. Need to wire to Formspree, Resend, SendGrid, or similar. |
| **Reservation form backend** | Frontend only | ReservationForm.tsx — same issue. Form captures 10 fields but doesn't submit them. |
| **FASTTRAK integration** | Not started | Need portal URL from John. Current "Book Online" button on /reservations links to `#`. |
| **Airport rate table** | Replaced with distances | Round 1 replaced "Call for quote" rate table with a distances-in-miles table. Rates may be added later if client provides pricing. |
| **Analytics** | Not configured | No GA4 or Plausible tracking code installed. No way to measure traffic. |
| **Real photography** | Stock photos only | All images are from Unsplash (editorial) and Pexels (fleet). Need real fleet photos, driver/team photos, and possibly a professional photo shoot. |
| **Domain transfer** | Blocked on client | Site runs on `acustomcoach.vercel.app`. Need John's registrar credentials to point `acustomcoach.com` to Vercel. |
| **Email migration** | Not started | Google Workspace setup planned but blocked on understanding John's current email situation. |
| **Google Business Profile** | Unknown | Don't know if John has one, if it's active, or who has access. |

### Open Questions Waiting on Client (John Hafer)

All tracked in `_context/client-answers.md`. Full list:

1. **Domain ownership (CRITICAL)** — Who is the registrar? Does John have credentials? What email is the account under? Is auto-renew on?
2. **Phone numbers** — Are (303) 759-1376 (local) and (800) 671-5466 (toll-free) still active? What is (303) 373-5560 (BBB-only number)? Is the fax (303) 373-5251 still used?
3. **Address** — BBB lists 5105 E Missouri Ave, Denver 80246. Yelp lists 6240 E 49th Ave, Commerce City. Which is current? Are both valid?
4. **Hours** — Mon-Sat 6AM-11PM, Sun 9AM-10PM (from Nextdoor). Accurate?
5. **Email** — Is info@acustomcoach.com working? Where does it route? Current provider? Number of mailboxes needed?
6. **Fleet** — What vehicles does he currently operate? Old site data may be outdated.
7. **FASTTRAK portal URL** — Does he use the customer-facing booking portal? What's the URL?
8. **Staff** — Bobby Long as GM confirmed by BBB. Anyone else to list?
9. **Photos** — Any professional vehicle/team photos available? Need to plan a shoot?
10. **Google Business Profile** — Active? Gmail associated? Access credentials?
11. **Airport rates** — Actual pricing for DIA routes needed for the rate table.

### Roadmap Phases Not Yet Started

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 2: Fix Infrastructure | Google Workspace, email migration, domain auto-renew, uptime monitoring, directory listings update, client walkthrough | NOT STARTED — blocked on client responses |
| Phase 3: Optimize & Document | Google Business Profile optimization, citation building, Lighthouse 90+ audit (already achieved), client handoff template, case study, $75/mo retainer setup | NOT STARTED |
| Phase 4: Productize & Sell | Name the Speed of Now service offering, build 1-page service website, create SOP, set non-family pricing, identify 10 Franklin TN targets, cold outreach, join local business groups, set up LLC/bank/invoicing | NOT STARTED |

### Case Study Gaps

`_business/case-study-draft.md` is a template with placeholder brackets:
- `[X] days` — needs actual build timeline
- `[Insert screenshots]` — needs before/after site screenshots
- `[Insert Lighthouse scores]` — **now available: Performance 94, Accessibility 100, Best Practices 88, SEO 100**
- `[Insert before/after traffic data if available]` — no analytics installed yet, so no traffic data exists

---

## End of Handoff Document

This document captures the complete state of the A Custom Coach project as of March 17, 2026. Every file, every URL, every score, every TODO, and every open question has been documented.

To continue this project, the critical path is:
1. **Get client review of round 1 changes** — dev branch `claude/repo-assessment-lzcl6` has a Vercel preview URL. Client compares preview vs live site. Once approved, revert the revert on main and merge.
2. Get client responses to the questionnaire (domain, phones, address, fleet, FASTTRAK URL)
3. Wire form backends (Formspree or Resend — ~30 minutes of work)
4. Add analytics (GA4 or Plausible — ~15 minutes)
5. Connect custom domain once transfer is complete
6. Replace stock photos with real fleet photos when available

### Git Operations for Merging Round 1
When client approves round 1 changes:
```bash
git checkout main
git revert <PR-4-revert-commit-hash>  # Undo the revert
git push origin main
```
Or alternatively, cherry-pick all commits from `7bfc761..fe9d3a8` onto a fresh branch off main.
