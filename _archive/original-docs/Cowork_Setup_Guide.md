# Cowork Setup Guide — A Custom Coach Project

**What this is:** Everything you need to migrate the A Custom Coach website rebuild (and your Speed of Now business planning) into a single Cowork workspace. Follow this in order.

---

## Prerequisites

- Claude Desktop app (macOS or Windows) — download from claude.com/download
- Paid Claude plan (Pro, Max, Team, or Enterprise)
- Your project folder created and populated (instructions below)

---

## Step 1: Create Your Project Folder

Create this folder structure on your local machine. This is the folder you'll point Cowork at.

```
acustomcoach-project/
│
├── _context/                        ← Reference docs Claude reads but doesn't modify
│   ├── site-recovery.md             ← The full recovery doc (all 6 pages of scraped content)
│   ├── service-scope-pricing.md     ← Your pricing structure doc
│   ├── fasttrak-notes.md            ← What you know about John's FASTTRAK setup
│   └── client-answers.md            ← Responses from John (update as they come in)
│
├── _business/                       ← Speed of Now productization work
│   ├── service-playbook.md          ← SOP template (builds over time)
│   ├── case-study-draft.md          ← John project case study
│   └── target-clients.md            ← Franklin TN prospect list
│
├── deliverables/                    ← Client-facing docs Claude generates
│   ├── what-bobby-needs.docx        ← The questionnaire for Mom
│   └── (future invoices, SOWs, etc.)
│
├── site/                            ← The actual Next.js repo (or symlink to it)
│   └── (your repo lives here or you symlink to where it already is)
│
└── CLAUDE.md                        ← Folder instructions (Cowork reads this automatically)
```

**Key decisions:**

- The `_context/` folder is your source of truth. When John confirms a phone number or address, update `client-answers.md` and Claude will reference it on the next task.
- The `site/` folder can be a symlink to wherever your git repo already lives. You don't need to move your repo.
- The `_business/` folder is where Speed of Now productization work accumulates. Claude builds the playbook as you complete the John project.

---

## Step 2: Set Global Instructions

Go to **Settings > Cowork > Global Instructions** in Claude Desktop and paste this:

```
## Who I Am
Bobby Long. Navy veteran (MC1, 8+ years), multimedia production specialist. Building Speed of Now Productions. Finishing MBA in Strategic Marketing. Comfortable with Next.js, React, Tailwind, Vercel, GitHub. I build production apps — treat me like a fellow builder, not a student.

## How I Work
- Be direct. Short answers for simple questions.
- Skip basics. Give me actionable next steps.
- If I need to do something, give me the exact steps — no fluff.
- I move fast. Three full-stack apps in three days fast. Don't pad timelines.
- Flag gotchas before they bite me, especially on git and deployment.

## "Sidebar" Protocol
When I say "sidebar" — pause the current task completely. Address the sidebar topic fully. When I say "back", resume exactly where we left off.

## Current Projects

### A Custom Coach Website Rebuild (Client Project)
- Rebuilding acustomcoach.com for a Denver/Boulder luxury transportation company (est. 1988)
- Owner: John Hafer (my uncle). GM: Bobby Long.
- Old site went down when hosting provider folded. All content recovered from Google cache and business directories.
- Source of truth: _context/site-recovery.md
- Tech: Next.js, React, Tailwind, deployed on Vercel
- Booking software: FASTTRAK Cloud (already in use — check for embeddable portal/API before building custom forms)
- Design tone: Established, professional, premium. NOT startup. This is a 37-year legacy brand with VIP clientele. Think deep navy, gold accents, classic serif headlines.
- Flag any business details that conflict across sources — don't silently pick one.

### Speed of Now Productions (My Business)
- Productizing the A Custom Coach project into a repeatable SMB service offering
- Target market: Established local businesses with outdated/broken web presence
- _business/ folder tracks this work
- Build the playbook and case study as the John project progresses

## File Conventions
- _context/ = reference material (read, don't modify unless I say to)
- _business/ = Speed of Now business planning docs
- deliverables/ = client-facing output
- site/ = the codebase
- CLAUDE.md = you can update this with project state as we go
```

---

## Step 3: Create CLAUDE.md (Folder Instructions)

Create this file at the root of your project folder. Cowork reads it automatically when you select the folder.

```markdown
# A Custom Coach Project — Folder Instructions

## Project Status
- Phase: 0 (Discovery) → transitioning to Phase 1 (Build)
- Site build: IN PROGRESS — design system established, building pages
- Client questionnaire: SENT (waiting on responses via Mom)
- Domain status: UNKNOWN (waiting on John)
- Email migration: NOT STARTED (waiting on email situation clarity)

## What's Been Done
- Full site content recovered from Google cache (all 6 pages)
- Business directory data scraped (BBB, Yelp, Nextdoor, LimoHQ)
- Service scope & pricing doc complete
- Client questionnaire sent to John via Mom
- Design direction established: navy/charcoal, gold accents, serif headlines, premium feel
- Roadmap created (5 phases, 34 tasks)

## Active Decisions / Open Questions
- FASTTRAK integration: Need to determine if their booking portal can be embedded or linked. Check fasttrakcloud.com for API/portal docs.
- Address conflict: BBB says 5105 E Missouri Ave, Denver. Yelp says 6240 E 49th Ave, Commerce City. Waiting on John.
- Fleet: Old site listed sedans, SUVs, stretch limos, passenger vans (14-pax), luxury executive vans (9-pax). Need current confirmation.

## Rules
- When working on site/ code: proper git workflow. Feature branches, clean commits.
- When generating client deliverables: write for a 60-year-old business owner. No jargon.
- When writing site copy: use recovered content as starting point but tighten it up. Don't invent services or claims.
- Update this file's "Project Status" section when major milestones complete.
```

---

## Step 4: Populate _context/ Files

### _context/site-recovery.md
Copy the full recovery document from this chat (the one with all 6 pages of content, business directory data, and rebuild recommendations). This is your source of truth for all site content.

### _context/service-scope-pricing.md
Copy the service scope & pricing document from this chat.

### _context/fasttrak-notes.md
Create this with what you know:

```markdown
# FASTTRAK Notes

## What We Know
- John uses FASTTRAK Cloud for booking and dispatch
- FASTTRAK is cloud-hosted on Microsoft Azure
- Features: booking, dispatch, billing, driver apps, flight tracking, QuickBooks integration
- They offer a customer-facing online booking portal
- They have an API (developer API mentioned on their site)
- Pricing: plans up to $229/mo for 2,000 bookings/month

## What We Need to Find Out
- What plan is John on?
- Does he use the customer booking portal? If so, what's the URL?
- Can we embed or iframe the portal on the new site?
- Is there an API we can hit for availability/booking?
- Or do we just link out to his FASTTRAK portal from a "Book Now" button?

## Integration Strategy
Path of least resistance: Link to FASTTRAK's existing customer portal from the new site.
If portal URL exists → prominent "Book Online" button linking to it.
If no portal → build a simple inquiry form that emails the office.
Don't rebuild what FASTTRAK already does.
```

### _context/client-answers.md
Start with this and update as answers come in:

```markdown
# Client Answers from John

Last updated: [DATE]
Status: Questionnaire sent via Mom. Waiting on responses.

## Domain (CRITICAL)
- Who is the registrar? UNKNOWN
- Does John have login credentials? UNKNOWN
- What email is the account under? UNKNOWN

## Contact Info
- (303) 759-1376 — Local: UNCONFIRMED
- (800) 671-5466 — Toll-free: UNCONFIRMED
- (303) 373-5560 — Other: UNKNOWN PURPOSE
- (303) 373-5251 — Fax: UNCONFIRMED
- Primary address: UNCONFIRMED (Missouri Ave vs Commerce City)
- Hours: UNCONFIRMED

## Email
- Current email setup: UNKNOWN
- Number of mailboxes needed: UNKNOWN

## Fleet
- Current vehicles: UNCONFIRMED (building with old site data for now)

## FASTTRAK
- Still active: ASSUMED YES
- Booking portal URL: UNKNOWN

## Other
- Staff to list on site: UNCONFIRMED
- Photos available: UNKNOWN
- Google Business Profile access: UNKNOWN
```

---

## Step 5: Initial Task Queue

Once you're in Cowork with the folder selected, here's your opening sequence. You can queue these up and let Claude work through them:

**Task 1 — Orient**
"Read everything in _context/ and CLAUDE.md. Summarize what you know, what's missing, and what's ready to build. Don't start building yet."

**Task 2 — FASTTRAK Research**
"Research FASTTRAK Cloud's customer booking portal. Check fasttrakcloud.com for documentation on their online booking portal, API access, and embed options. Save findings to _context/fasttrak-notes.md."

**Task 3 — Resume the Build**
"Look at the current state of site/ and continue building. [Give specific direction based on where you left off in the other chat — e.g., 'Build the Services page using content from _context/site-recovery.md, following the design system already established.']"

**Task 4 — Start the Case Study**
"Create a draft case study in _business/case-study-draft.md. Frame: 37-year-old transportation company's website disappeared overnight when hosting provider folded. I recovered all content from internet archives and rebuilt the site in [X] days. Include before state (Wayback screenshots description), what I did, and placeholder for results metrics."

---

## Tips for Your Workflow

**Queue tasks, don't babysit.** You can drop multiple tasks and let Claude work through them. Check back when you see progress indicators finish.

**Update client-answers.md as a living document.** When Mom texts you that John's address is Missouri Ave, update that file. Next time Claude touches anything site-related, it'll pull the correct info.

**Use CLAUDE.md as project state.** Tell Claude to update it when milestones complete. This replaces the roadmap tracking you were doing across two chat windows.

**Reserve chat for quick questions.** If you just need a fast answer that doesn't require file access, use regular Chat mode. Save Cowork for tasks that touch files.

**Watch your usage.** Cowork burns through tokens faster than chat because of the agentic execution. Batch related work into single sessions when possible.
