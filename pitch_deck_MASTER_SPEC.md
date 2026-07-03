# Graduation Pitch Deck — Master Spec
> From blank canvas → design → assets → content → GitHub Pages

---

## ⚠️ What Would Be Missing Without This Doc

Before any agent touches code, these gaps will kill the final result if not addressed:

| Gap | Why it matters |
|---|---|
| No team name / identity | The deck has no brand anchor — it looks like a school project not a team |
| No sponsor logos | A logos row on the sponsorship slide signals legitimacy to the professor |
| No team photos | The team slide is just names — professors trust faces |
| No GitHub / LinkedIn per member | Public page needs real links or it's a ghost site |
| No university logo | Missing on hero — required for academic credibility |
| No visual per idea | Every idea detail slide has a placeholder — needs real imagery |
| No `back` navigation spec | Idea detail slides need a clean return path to the ideas overview |
| No mobile layout spec | A professor might open this on his phone |
| No repo structure | Can't publish to GitHub Pages without proper file setup |
| No `404` / fallback page | Public site needs one |
| No OG / meta tags | Share link to the professor should show a proper preview card |
| No loading state | Large images will cause blank flashes — need skeleton or lazy load |
| No Dr. Shawky info | His background slide is still a placeholder — weakest slide in the deck |
| StudyX under-specified | Least detailed idea — needs more content before agent writes copy |
| No team email / contact | Last slide CTA has no real destination |

---

## Phase 0 — Gather Before Building Anything

Everything in this phase must be collected **before** the agent writes a single line of code. Missing any of it means placeholders in the final output.

### 0.1 Team Info (per member × 6)

For each team member collect:

```
- Full name
- Major / specialization
- Profile photo (square crop, min 400×400px, clear background preferred)
- GitHub URL
- LinkedIn URL
- 1-line role on this project (e.g. "AI pipeline & backend")
- Notable project or achievement (1 line — optional but strong)
```

Omar's entry (pre-filled):
```
- Name: Omar
- Major: Computer Science
- Photo: [to collect]
- GitHub: https://github.com/4awmy
- LinkedIn: [to collect]
- Role: AI systems, DevOps, project architecture
- Achievement: ClassroomX — university best-project award (computer vision + emotion analytics)
```

### 0.2 Sponsor Logos

Collect official SVG or PNG logos (white/dark variants) for:

- [ ] Siemens
- [ ] Ejada
- [ ] RAYA Tech
- [ ] Microsoft
- [ ] Synapse Analytics (Egypt)

> **Note:** Microsoft and Siemens logos have strict brand usage guidelines. Use the official monochrome versions. Do not stretch, recolor, or add drop shadows.

### 0.3 University Assets

- [ ] University official logo (SVG preferred)
- [ ] Faculty / department name (exact official name for the paper and deck)
- [ ] Academic year string: `2026 – 2027`

### 0.4 Dr. Shawky Info

- [ ] Full academic title
- [ ] Department
- [ ] 2–3 relevant research areas or supervised projects
- [ ] Photo (optional — only if comfortable including)

### 0.5 Idea Visuals (one per idea)

Each idea detail slide needs one hero visual. Options per idea:

| Idea | Recommended visual type |
|---|---|
| Local AI Agent for SMBs | A clean UI mockup of the agent's interview/onboarding flow |
| Sign Language Glove | Photo or render of the glove hardware + sensor layout diagram |
| University RAG Chatbot | Screenshot or mockup of the chatbot UI answering a real university question |
| AI Immune System | Annotated microscope image with bounding boxes on cell types |
| StudyX | Mockup of the student dashboard or a practice question flow |

> Collect or create these **before** the agent inserts them. They go in `/assets/ideas/` in the repo.

### 0.6 StudyX — Missing Content

This idea is the least specified. Answer before the agent writes copy:

- Who is the primary user? (university students? high school? both?)
- What's the core feature? (AI tutor, flashcard gen, exam simulator, all three?)
- What makes it different from Notion AI, ChatGPT, Khan Academy?
- Is it web-only or does it have a mobile app in scope?

---

## Phase 1 — Design System

The agent must use this exact token system. No deviation.

### Colors

```css
--navy:    #0F2351;   /* left panel, hero bg */
--blue:    #2563EB;   /* primary accent, links, active states */
--teal:    #0891B2;   /* education / RAG tag */
--coral:   #E55B4D;   /* hardware / cybersecurity tag */
--green:   #059669;   /* medical tag */
--white:   #FFFFFF;   /* content bg */
--bg:      #F8FAFC;   /* card bg, alternating rows */
--text:    #0F172A;   /* body text */
--mid:     #475569;   /* secondary text */
--muted:   #94A3B8;   /* placeholders, labels */
--border:  #E2E8F0;   /* all borders */
```

### Typography

```
Display (h1, h2, plan names):   Plus Jakarta Sans, 700–800
Body (paragraphs, descriptions): Inter, 400–500
Labels (tags, eyebrows, numbers): DM Mono, 400–500

Google Fonts import:
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800
  &family=Inter:wght@400;500;600
  &family=DM+Mono:wght@400;500
```

### Layout

- Left panel: `26%` width, `--navy` bg, section label + large ghost number
- Right content: `flex:1`, `--white` bg, `padding: 5vh 5.5vw`
- Hero slide: full-width navy, no right panel
- Max content width inside right panel: `780px` for tables, `680px` for timelines, `58ch` for body text

### Interaction rules

- Slide transitions: `opacity + translateY(14px)`, `450ms ease`
- Keyboard: `←` `→` and `Space` navigate main deck
- Idea detail slides: **not** in the main deck flow — rendered separately, shown/hidden by JS
- Back button on detail slides: returns to ideas overview (slide 7), not to slide 1
- Dot nav at bottom: reflects main deck only (9 dots), not detail slides
- `[date]` and `[placeholder]` text: styled `--muted + italic` — easy to spot and replace

---

## Phase 2 — Full Slide Spec

### Main Deck (9 slides)

---

#### Slide 1 — Hero

- Team name (large, white)
- University name + faculty
- Academic year: `2026–2027`
- Tagline: *"Five ideas. Three paths. One supervising professor."*
- University logo (top-left corner, white version)
- Radial blue glow in top-right corner (ambient, not distracting)

---

#### Slide 2 — Agenda

Six agenda items, numbered list style:

```
01  The Team
02  Academic Supervision
03  Sponsorship Landscape
04  Our Plan
05  Our Project Ideas
06  Timeline & Next Steps
```

Each item has a 1-line sub-label explaining what the section covers.

---

#### Slide 3 — The Team

- 3×2 grid of team member cards
- Each card: photo (circle crop) + name + major badge + GitHub icon + LinkedIn icon
- Below grid: one line per member's role on the project
- Omar's card: highlight ClassroomX as achievement

---

#### Slide 4 — Academic Supervision

- Dr. Shawky headline + title
- 2–3 lines on his expertise / relevant supervised work
- Divider
- Two-col: "What we're asking for" + "What stays constant"
  - Left: monthly check-ins (~30 min), methodology review, paper co-authorship
  - Right: full research paper under his name regardless of which plan we land on

---

#### Slide 5 — Sponsorship Landscape

- Headline: *"Who could fund this"*
- Subline: *"One path hands us the idea. The rest ask us to bring our own."*
- Table: Company | What they give | What's needed from us
- Sponsor logo in each company row (left of name)
- Siemens row highlighted (Plan A)

---

#### Slide 6 — Our Plan (A / B / C)

- Headline: *"Three paths, one outcome"*
- Three plan cards side by side
  - Plan A (Siemens) — highlighted border
  - Plan B (Own idea + sponsor)
  - Plan C (Independent)
- Below cards: Constant box — *"Full research paper under Dr. Shawky, regardless of plan."*

---

#### Slide 7 — Our Project Ideas

- Headline: *"Five concepts. Any one of them is buildable."*
- 5 idea cards in a 2+2+1 grid
- Each card: icon + title + 2-line description + domain tag + **"Explore →"** button
- Clicking "Explore →" hides main deck, shows that idea's detail view
- No slide transition — instant show/hide

---

#### Slide 8 — Timeline

Seven milestones. Dates are placeholders, agent uses `[date]` styled in muted italic.

```
[date]  Siemens interview / selection round
[date]  Decision deadline — fall back to Plan B if not selected
[date]  Project idea locked — one of five confirmed
[date]  Sponsor outreach begins (Ejada / RAYA / Microsoft / Synapse)
[date]  Research methodology agreed with Dr. Shawky
[date]  First working prototype / MVP
[date]  Final paper submission + project delivery
```

---

#### Slide 9 — Next Steps / Ask

Four ask items (2×2 grid):

```
Our ask           →  Monthly supervision, paper review, academic guidance
Decision window   →  [date] — we move to Plan B immediately if Siemens doesn't come through
Idea direction    →  We have 5 concepts ready — open to your input on research fit
Contact           →  [team email]
```

Closing line: *"Happy to answer any questions."*

---

### Idea Detail Views (5 — outside main deck flow)

Each detail view replaces the full screen when triggered. Same split-panel layout.

#### Structure (same for all 5):

```
Left panel:    Idea number + idea name + back button ("← Back to Ideas")
Right content:
  [Eyebrow]   Idea 0X — Detail
  [H2]        Idea title
  [Pills]     Tech stack tags

  Block A — Hero visual (placeholder img tag with correct /assets/ideas/ path)

  Block B — Two-col
    Left:   The Problem (1–2 sentences, plain language)
    Right:  What We Build (what the end user experiences)

  Divider

  Block C — Two-col
    Left:   How It Works (tech stack, sensors, model type)
    Right:  Research Angle (what makes it publishable)

  [Idea-specific block — see below]
```

#### Idea-specific extra blocks:

| Idea | Extra block |
|---|---|
| Local AI Agent | **Deployment options** — list the 3 hardware tiers the agent supports |
| Sign Glove | **Social Impact** — accessibility angle, EALS dataset contribution |
| University RAG | **Why the university benefits** — privacy, cost, data sovereignty |
| Immune System AI | **Data Strategy** — where training data comes from, hospital partnership angle |
| StudyX | **Differentiation** — vs. Notion AI, Khan Academy, ChatGPT |

---

## Phase 3 — Repo Structure

```
grad-pitch/
├── index.html              ← main deck (9 slides + 5 detail views)
├── 404.html                ← simple redirect to index
├── README.md               ← project description + team credits
├── assets/
│   ├── team/
│   │   ├── omar.jpg
│   │   ├── member2.jpg
│   │   └── ...             ← 6 total, square crop, ≤200KB each
│   ├── sponsors/
│   │   ├── siemens.svg
│   │   ├── ejada.svg
│   │   ├── raya.svg
│   │   ├── microsoft.svg
│   │   └── synapse.svg
│   ├── ideas/
│   │   ├── ai-agent.jpg
│   │   ├── glove.jpg
│   │   ├── rag.jpg
│   │   ├── immune.jpg
│   │   └── studyx.jpg
│   └── university-logo.svg
└── .github/
    └── workflows/
        └── pages.yml       ← GitHub Actions deploy config
```

---

## Phase 4 — GitHub Pages Setup

### Step 1 — Create repo

```
Repo name:    grad-pitch          (or team-name-pitch)
Visibility:   Public
Initialize:   with README
```

### Step 2 — GitHub Actions workflow

```yaml
# .github/workflows/pages.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - uses: actions/deploy-pages@v4
```

### Step 3 — Enable Pages in repo settings

```
Settings → Pages → Source → GitHub Actions
```

### Step 4 — Final URL

```
https://[github-username].github.io/grad-pitch/
```

This is the URL you send to Dr. Shawky and potential sponsors.

---

## Phase 5 — Meta / OG Tags

Add to `<head>` so the shared link has a proper preview card:

```html
<title>Graduation Project Pitch — Team [Name] · 2026–2027</title>
<meta name="description" content="Five AI project concepts by a six-person team at [University]. Supervised by Dr. Mahmoud Shawky.">

<!-- Open Graph -->
<meta property="og:title" content="Graduation Project Pitch — Team [Name]">
<meta property="og:description" content="Five AI project concepts. Three sponsorship paths. One supervising professor.">
<meta property="og:image" content="https://[username].github.io/grad-pitch/assets/og-cover.jpg">
<meta property="og:url" content="https://[username].github.io/grad-pitch/">
<meta property="og:type" content="website">

<!-- Twitter card -->
<meta name="twitter:card" content="summary_large_image">
```

> **OG image:** Create a `1200×630px` static image (navy bg, team name, tagline) and save to `/assets/og-cover.jpg`. This is what shows when you paste the link in WhatsApp, email, or LinkedIn.

---

## Agent Prompt (hand this to the agent)

```
You are building a single-file HTML pitch deck for a graduation project.
Read the full spec in MASTER_SPEC.md before writing any code.

Constraints:
- Single file: index.html — all CSS and JS inline, no external files except Google Fonts and assets
- Assets referenced via relative paths under /assets/
- 9 main slides in a linear deck with ← → keyboard and click navigation
- 5 idea detail views outside the main deck flow, triggered by "Explore →" buttons on slide 7
- Each detail view has a "← Back to Ideas" button that returns to slide 7
- Dot nav at bottom tracks main deck only (9 dots)
- Design system: exact colors, fonts, and layout rules from Phase 1 of the spec
- All placeholder content marked with [brackets] and styled muted+italic
- Fully responsive down to 375px width
- Respects prefers-reduced-motion

Build in this order:
1. HTML structure + CSS design system
2. Main deck slides 1–9
3. Idea detail views D1–D5
4. Navigation JS (main deck + detail view toggling)
5. Meta/OG tags in <head>
6. README.md as a second file

Do not invent content. Use [placeholder] for anything not in the spec.
```

---

## Checklist — Before Publishing

- [ ] All 6 team photos collected and optimized (≤200KB each)
- [ ] All 5 sponsor logos collected (SVG preferred)
- [ ] University logo added
- [ ] Dr. Shawky's section filled in
- [ ] All timeline dates replaced
- [ ] StudyX detail filled in
- [ ] All 5 idea visuals added to `/assets/ideas/`
- [ ] OG cover image created (`1200×630px`)
- [ ] Team email added to slide 9
- [ ] GitHub repo created and Pages enabled
- [ ] Link tested on mobile
- [ ] Link sent to Dr. Shawky and shared with team
