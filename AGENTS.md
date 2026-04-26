<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Diego Siena — Portfolio Design System

> A reference for extending, modifying, or rebuilding parts of [diegosiena.com](https://diegosiena.com).
> Last updated: 2026 · Portfolio v2

This document captures every meaningful design decision behind the site so that future work — by a person or a coding agent — preserves the identity. Read this **before** writing or modifying code, copy, or design.

---

## Table of contents

1. [Identity & voice](#1-identity--voice)
2. [Design philosophy](#2-design-philosophy)
3. [Visual tokens](#3-visual-tokens)
4. [Typography system](#4-typography-system)
5. [Layout & grid](#5-layout--grid)
6. [Component patterns](#6-component-patterns)
7. [Interaction & motion](#7-interaction--motion)
8. [Writing principles](#8-writing-principles)
9. [Anti-patterns — what not to do](#9-anti-patterns--what-not-to-do)

---

## 1. Identity & voice

### Who this site is for

Diego Siena's personal/professional website. A portfolio + CV for a CTO, technology leader, and co-founder. The page exists to:

- Introduce Diego as a senior technology leader (not as an IC engineer, not as Escala.ai)
- Open doors for AI/agent/leadership conversations, advisory roles, partnerships, and opportunities
- Read credibly to a hiring committee, a founder peer, or a journalist in roughly that order of priority

### Identity in one sentence

A typography-driven, technical-spec aesthetic for a tech leader who thinks in systems. Editorial rigor meets engineering precision.

### What it must always feel like

- **Confident, not promotional** — states facts, doesn't sell
- **Editorial, not decorative** — every element earns its space
- **Technical, not nerdy** — references craft without buzzword soup
- **Warm, not cold** — small human moments inside a structured frame
- **Human, not corporate** — second-person addresses, no "we leverage solutions"

### What it must never feel like

- A SaaS landing page
- A generic dev portfolio
- An AI-generated bio
- A LinkedIn profile pasted into HTML
- A spec sheet so cold it forgets there's a person behind it

---

## 2. Design philosophy

### The aesthetic is "technical modernism"

Light warm-paper background, deep ink foreground, electric cobalt accent. Variable-width grotesk display type, IBM Plex sans for body, IBM Plex mono for everything structural. Asymmetric grids, numbered sections (`A.01`, `F.01`), coordinate labels, full-bleed horizontal rules.

Reference: think *Stripe Press / Bloomberg Businessweek / a structural engineering datasheet* — not *Awwwards / Dribbble / agency landing page*.

### Five principles in priority order

1. **Type over decoration.** When a layout choice is between a stronger typographic move and adding a graphic element, choose typography. Almost no decorative imagery, no logo soup, no stock photos.

2. **Structure visible.** Borders, dividers, grid lines, mono coordinate labels (`A.01`, `F.04`, `C.01`) — the page reveals its scaffolding deliberately. The structure *is* the design.

3. **Content density over whitespace luxury.** This site looks more like a magazine spread than an Apple landing page. Generous spacing where it earns the reader's attention; everywhere else, structured density.

4. **One emphasis per moment.** When a section uses a pull quote, the prose around it goes plain. When a card has a bold title, the surrounding cards go quieter. Never two emphasis points fighting for the same eye.

5. **Confident omission.** Better to drop a section than to half-do it. Better to drop a word than to use a soft one. The site says less than most personal sites — that's the point.

---

## 3. Visual tokens

All tokens live in `:root` as CSS custom properties.

### Color palette

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F2EFE8` | Primary background — warm bone/paper |
| `--bg-alt` | `#ECE9E1` | Alt surface for cards, asides |
| `--fg` | `#0F1114` | Primary foreground — near-black ink |
| `--fg-2` | `#1F2126` | Secondary foreground — body text |
| `--fg-muted` | `#6B6D73` | Muted — captions, meta |
| `--fg-subtle` | `#A3A3A0` | Subtle — labels, low-priority |
| `--fg-faint` | `#CFCCC4` | Faint — dividers, decorative marks |
| `--border` | `rgba(15,17,20,0.10)` | Default border |
| `--border-strong` | `rgba(15,17,20,0.22)` | Stronger border (form inputs, buttons) |
| `--grid-line` | `rgba(15,17,20,0.045)` | Background grid lines |
| `--accent` | `#1A3DFF` | **Electric cobalt** — primary accent |
| `--accent-soft` | `rgba(26,61,255,0.08)` | Hover backgrounds, highlight bars |

### Color usage rules

- **`--accent` (cobalt) is rare and intentional.** It marks: section code prefixes (`A.01`), the "now:" or "→" pivot beats in headline copy, the focused state of inputs, hover backgrounds, the pull-quote accent letterforms, the "shipping" state, the submit button hover.
- **`--accent-soft` (washed cobalt) is the highlight medium.** Used as `linear-gradient(to top, var(--accent-soft) 50%, transparent 50%)` to underline-highlight a phrase. Used at full-cell scale for hover states on cards and tiles.
- **Never** introduce additional colors. No green, no yellow, no purple. If a new "type" needs distinguishing, use weight/size/position changes, not new hues.
- **The previous accent-alt red** has been retired. If a future state needs a "warning" or "live" color, fall back to the cobalt accent.

### Spacing scale

Use these `clamp()` values for fluid responsive spacing:

```css
--pad: clamp(1rem, 3vw, 2rem);          /* container side padding */
section padding: clamp(5rem, 10vw, 9rem) 0;    /* section vertical rhythm */
inner gap small: clamp(1.5rem, 3vw, 2.5rem);
inner gap large: clamp(2.5rem, 6vw, 6rem);
```

### Container width

```css
--container: 1440px;
```

Hard cap. Content never goes wider. Centered with `margin: 0 auto` and `--pad` side padding.

### Border radius

The page uses **mostly square corners**. The few exceptions:

- `2px` for buttons and small inputs (just enough to feel intentional vs accidental)
- `50%` for the small dot indicators (e.g. blink-dots)
- Everything else is `0`

Never use `8px`, `12px`, `16px` rounded corners. They feel like SaaS UI.

---

## 4. Typography system

### Font families

```css
--font-display: 'Bricolage Grotesque', sans-serif;  /* variable: opsz 12-96, wght 300-800, wdth 75-150 */
--font-body:    'IBM Plex Sans', system-ui, sans-serif;
--font-mono:    'IBM Plex Mono', ui-monospace, monospace;
```

All three families are loaded from Google Fonts at the top of the document. Bricolage is the **primary expressive tool** of the design — its variable-width axis lets us shift between condensed thin and extended bold within a single line, which is the page's signature typographic move.

### When to use which family

| Family | Use for |
|---|---|
| **Display** (Bricolage) | All headlines, hero statements, big numbers, card titles, pull quotes, large expressive text |
| **Body** (Plex Sans) | Paragraphs, prose, longer descriptions, form input values, longer card descriptions |
| **Mono** (Plex Mono) | Labels, codes, captions, tags, button text, metadata, navigation, table headers, anything structural |

### Type scale

Every type size uses `clamp()` for fluid responsiveness. Reference values:

- **Hero statement**: `clamp(3.25rem, 9vw, 8.5rem)` / weight 400 / line-height 0.96 / letter-spacing -0.035em
- **Section title** (when used): `clamp(1.5rem, 2.6vw, 2.25rem)` / weight 500 / letter-spacing -0.02em
- **Section code** (now used as title): `clamp(0.95rem, 1.1vw, 1.05rem)` / weight 600 / letter-spacing 0.06em / uppercase
- **Card title**: `1.3rem` / weight 500 / letter-spacing -0.015em
- **Body**: `1rem` / line-height 1.6
- **Mono label**: `0.7rem` / weight 500 / letter-spacing 0.06–0.08em / uppercase
- **Mono small**: `0.66rem` / letter-spacing 0.06em / uppercase

### Letter-spacing pattern

- **Display headlines**: tight (`-0.02em` to `-0.035em`)
- **Body**: neutral or slightly tight (`-0.005em` to `0`)
- **Mono labels**: open (`+0.06em` to `+0.08em`)
- **Mono uppercase tags**: most open (`+0.08em`)

### The Bricolage variable trick

The hero statement uses three weight/width settings inside a single sentence to create rhythm:

```css
.w-ext   { font-weight: 700; font-variation-settings: "wdth" 120; }  /* extended bold — the loud beat */
.w-thin  { font-weight: 300; font-variation-settings: "wdth" 90;  color: var(--fg-muted); }  /* compressed light — the quiet beat */
.w-accent{ font-weight: 600; color: var(--accent); }  /* the pivot word(s) */
```

When typesetting a hero or display sentence: identify the loud words, the quiet connectors, and the pivot — apply these classes accordingly. **Do not overuse**: at most 3 emphasis words per sentence.

### Italics — restricted

Italics are reserved for:
- The single accent word in a pull quote (e.g. `not the *point*.` — applies cobalt color too)
- That's it.

Do not italicize for general emphasis. Use weight or color instead.

### Casing rules

- **Display headlines, prose, card titles**: sentence case
- **Mono labels, tags, button text, navigation**: UPPERCASE
- **Numbered codes** (A.01, F.04): always paired with the section name in the same casing — `A.01 ABOUT`, not `A.01 / about`

---

## 5. Layout & grid

### Background grid

Fixed-position `96px × 96px` grid lines at very low opacity (`--grid-line`) mask-faded radially. Visible just enough to feel like graph paper, not a working alignment guide. Don't increase opacity; don't change the size; don't remove it — it's part of the page's identity.

### Section rhythm

Every major section follows the same shape:

```
[ section-head: code+title  ─────  count ]
[ ── full-bleed rule ── ]
[ content ]
```

The rule under the section head is `1px solid var(--fg)` — a strong, full-width division. This is the **only** place the strongest border weight is used routinely. Everything else uses `--border` or `--border-strong`.

### Breakpoints

```css
@media (max-width: 1100px) { /* tablet — multi-column grids drop to 2 or 1 cols */ }
@media (max-width: 900px)  { /* mobile — desktop nav swaps for hamburger; most grids → single column */ }
@media (max-width: 560px)  { /* small mobile — hero statement shrinks, single-column everywhere */ }
```

Do not introduce new breakpoints without good reason. The three above cover desktop, tablet, mobile cleanly.

### Asymmetric proportions

When a layout has two columns of unequal weight, use one of these proportions:

- `1.5fr 1fr` — primary content + secondary panel (e.g. About prose + pull quote)
- `1.6fr 1fr` — form + sidebar (Contact)
- `1fr 1.5fr` — sidebar + primary (when the secondary leads visually)
- Avoid `1fr 1fr` symmetry except for genuinely-equivalent peers (e.g. name + email row in form)

### Sticky panels

Aside columns next to longer prose (pull quote, contact tiles) use `position: sticky; top: 6rem;` so they accompany the reader as they scroll. Always pair with a graceful mobile fallback (`position: static` at <900px).

---

## 6. Component patterns

These are the recurring building blocks. When extending the site, prefer composing these over inventing new patterns.

### 6.1 Section head

```html
<div class="section-head">
  <span class="section-code">
    <span class="scode-prefix">A.0X</span>Section name
  </span>
  <span class="section-count">descriptor or count</span>
</div>
```

- Layout: flexbox `space-between`, baseline-aligned
- Bottom border: `1px solid var(--fg)` (the strong rule)
- The `scode-prefix` is cobalt; the section name is foreground; the count is muted
- All three pieces are mono uppercase
- **Never** add a separate `<h2>` title above or below. The mono code IS the title.

### 6.2 Cell-grid matrix (cards)

Used for `Current focus` and stack columns. Pattern: bordered grid, cells share borders by inheriting from container, no gaps between cells.

```css
.matrix {
  display: grid;
  grid-template-columns: repeat(N, 1fr);
  border: 1px solid var(--border);
}
.matrix-cell {
  padding: 1.75rem 1.5rem;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.matrix-cell:nth-child(Nn) { border-right: none; }       /* last col — no right border */
.matrix-cell:nth-last-child(-n+N) { border-bottom: none; } /* last row — no bottom border */
```

**Card content order** (top to bottom inside each cell):
1. **Axis label** — mono caps, with a small `8×8px` square icon prefix that gains cobalt color on hover
2. **Card title** — Bricolage display, weight 500, ~1.3rem
3. **Card description** — body, muted color, max ~36ch

Hover: the cell background goes to `--accent-soft`. Don't add lift/shadow effects; this is a flat design.

### 6.3 Meta strips

Horizontal bands of label+value cells with full-bleed top and bottom borders. Used in hero (top + bottom of the typographic statement).

```html
<div class="hero-meta">
  <div class="cell">
    <span class="label">Label</span>
    <span class="value">Value</span>
  </div>
  ...
</div>
```

- Each cell has a right-border that's removed on the last cell
- Padding: `1rem 0` vertical, increasing left padding for cells 2+
- Label is mono small uppercase (`0.68rem`)
- Value is mono medium (`0.82rem`) by default; switch to `.value.mixed` (body sans, slightly larger) for longer prose-like values

### 6.4 Contact tile

```html
<a class="contact-tile">
  <span class="tcorner tl"></span><span class="tcorner tr"></span>
  <span class="tcorner bl"></span><span class="tcorner br"></span>
  <div class="tile-head">
    <span class="tile-label">Label</span>
    <span class="tile-arrow">↗</span>
  </div>
  <span class="tile-value">Value</span>
  <span class="tile-meta">Meta line</span>
</a>
```

Signature element: **four corner-marks** (`L`-shaped lines at all four corners) that lighten on hover. Default state: thin border, light corner marks. Hover state: full cobalt fill with cream text and corner marks brightening to a soft cream-on-cobalt.

The fill animation is a child `::before` element translating from `translateY(101%)` to `translateY(0)` — a wipe up from below. Don't change this; it's the tile's signature interaction.

### 6.5 Form inputs

- No background fill — `background: transparent`
- Border-bottom only — `1px solid var(--border-strong)`
- Hover: border becomes `--fg-muted`
- Focus: border becomes 2px `--accent` (with `margin-bottom: -1px` to compensate)
- Mono uppercase label sits above the input with `0.45rem` gap
- Custom select arrow drawn as inline SVG so it matches the palette (cobalt on focus)
- Placeholder uses `--fg-subtle`, never italic

### 6.6 Buttons

Two states only:

- **Default**: black-on-cream (`background: var(--fg)`, `color: var(--bg)`, mono uppercase label, ~`0.74rem`, small `2px` radius)
- **Hover**: cobalt-on-cream (`background: var(--accent)`, `color: var(--bg)`)

Always pair label with a small `↗` arrow that translates `(2px, -2px)` on hover.

### 6.7 Pull quote

Used in About. Composition:

```
[ ● Working principle ]            ← small cobalt mark + mono tag
[                          ]
[ "                        ]       ← cobalt opening quote + display headline
[ Big display quote here   ]
[                          ]
[ ── attribution line       ]      ← thin rule + body sans attribution
```

Sticky positioned. Use sparingly — once per page max.

### 6.8 Navigation overlay (mobile)

Full-bleed take-over when hamburger is tapped. Inherits the page's grid background, color palette, type system. Items animate in with a staggered cascade (50ms increments, capped at 6). Closes on link click, X button, or Escape key. Body scroll locks via `body.nav-locked` class.

### 6.9 Other recurring patterns

- **Numbered list with notes** (Off hours): grid with `40px 1fr auto` columns — `n` mono code, name in display type, mono note
- **Timeline Gantt** (Career): 8-column scale grid; rows have a sticky-positioned text label and an absolutely-positioned cobalt bar; current role gets a pulsing red dot extension. Detail panel below swaps on click via JS.
- **Stack matrix with proficiency bars**: 3 column groups, each row is `name + 72px proficiency bar`. Bar fills animate from 0 to value on viewport entry. Don't change the bar widths frivolously — they imply self-assessment and should be honest.

---

## 7. Interaction & motion

### Easing

```css
--ease: cubic-bezier(0.2, 0.9, 0.2, 1);
```

Single easing curve. Sharp acceleration, gentle settle. Used for *every* transition on the page. Don't introduce additional easings — consistency of motion language matters.

### Duration

- **Quick states** (hover, focus, color change): `0.2s` to `0.25s`
- **Element transitions** (reveal, slide, scale): `0.3s` to `0.45s`
- **Sequenced reveals** (scroll reveal, overlay open): `0.7s` to `0.9s`

Never go above `1s` for a single transition. Never use `linear` easing.

### Scroll reveal

Elements with `[data-reveal]` start at `opacity: 0; transform: translateY(14px)` and animate to `in-view` when intersecting the viewport. Stagger via `data-reveal-delay="1|2|3"` (each step is `0.08s`).

```javascript
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
```

This is the *only* scroll-driven motion on the page. No parallax, no scroll-linked animations, no progress bars.

### Hover patterns

- **Cards/cells**: background fills with `--accent-soft`
- **Contact tiles**: full cobalt wipe-up via `::before` element
- **Links/nav**: color shifts to `--fg`, with a thin underline expanding from 0 to 100% width
- **Buttons**: background swap from `--fg` to `--accent`, arrow translates `(2px, -2px)`
- **Stack tags**: border color shifts to `--accent`

Never use scale transforms above `1.02`. Never use shadow lifts. Never use rotation hovers. Movement is restrained.

### Disabled / preferred-reduced-motion

All transitions should be removable via `@media (prefers-reduced-motion: reduce)`. Currently the site doesn't ship this — adding it is a recommended next step. Pattern:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Writing principles

The page's voice is as designed as its visuals. Follow these rules when writing or modifying copy.

### Voice rules

1. **Confident, not promotional.** State facts. Don't sell.
   - ✅ *"Sixteen years of shipping software."*
   - ❌ *"Bringing 16+ years of cutting-edge expertise."*

2. **Address the reader, not yourself.** Open with what *they* might bring or be doing.
   - ✅ *"If you're building AI products, leading engineering, or thinking about either — say hi."*
   - ❌ *"I'm open to conversations about my areas of expertise."*

3. **Use the "X. Now Y." pivot.** This is the page's signature sentence structure for separating durable credentials from current focus.
   - ✅ *"Sixteen years of shipping software. Now building AI products."*
   - ❌ *"Sixteen years of shipping AI products."* (false conflation)

4. **Plain prose over bolded clauses.** When something needs emphasis, prefer pulling it into a separate visual moment (pull quote, headline) over bolding inline. One emphasis per moment.

5. **Avoid AI-tells.** No em-dashes used in the way LLMs overuse them (most em-dashes on this page have been replaced with periods or commas). No "leverage", "synergize", "ecosystem of", "in today's fast-paced world", "delve into", "tapestry of", "navigate the complexities of", "robust solutions", "cutting-edge", "innovative", "transformative". If a word feels like it could open any LinkedIn post, it doesn't belong here.

6. **Specific over abstract.** "Conversational AI agents that meet users where they already work — chat, WhatsApp, email, voice" beats "AI-powered communication solutions."

7. **Honest scope.** Never claim more credentials, years, or expertise than is true. Specifically: 16 years of *technology/software*, not 16 years of *AI*. The pivot pattern handles this.

### Forbidden words and phrases

These patterns must not appear on the site:

- "passionate about" / "passion for"
- "expertise in cutting-edge"
- "thought leader" / "thought leadership"
- "synergy" / "synergize"
- "leverage" *as a verb* (it's fine as a noun: "technology as leverage")
- "ecosystem" (unless literally a software ecosystem)
- "transformative" / "innovative"
- "world-class"
- "bringing X+ years of"
- "delve into"
- "navigate the complexities of"
- "in today's fast-paced [anything]"
- "robust solutions" / "scalable solutions"

### Punctuation and dash conventions

- **Em-dash (—)** — used sparingly, primarily inside structured contexts (date ranges like "2022 — 2025", attribution lines)
- **En-dash (–)** — not used; default to em-dash or periods
- **Period over em-dash** for sentence breaks. The site's voice is direct; full stops carry the rhythm better than em-dashes.
- **Middle dot (·)** — used as a visual separator in dense metadata strings ("PT-BR · EN", "Remote · Hybrid", "Primary · fastest reply"). Always with a space on each side.

### Capitalization in prose

- Section names and card titles: sentence case (`Current focus`, not `Current Focus`)
- Tags and labels: UPPERCASE in mono; sentence case in body
- Tech proper nouns: as the project styles itself (`tRPC`, not `TRPC`; `Next.js`, not `NextJS`)

### Tense

- Hero, About: present tense ("I work across...", "These days almost everything I do...")
- Past roles in timeline: past tense ("Designed and developed scalable...")
- Current role in timeline: present tense ("Leading the full technical journey...")
- Capability cards: gerund or imperative ("Ideating, building, and shipping...", "Mapping the AI landscape")

### Section count copy

Each section head's right-side `section-count` should be:

- **Specific and informative** when the count adds info ("05 recent · 2019 — present", "08 areas")
- **Categorical** when it's a label not a count ("profile", "current · 2026")
- **Combined** when the section has multiple parts ("form + 03 endpoints")

Don't pad with fake-technical labels like "v1.0" or "spec.A" — they read as theatrical.

---

## 9. Anti-patterns — what not to do

### Visual

- **Don't add icons next to contact methods** (LinkedIn/GitHub/email logos). The page is intentionally typography-driven; brand logos pollute personal sites and dilute identity.
- **Don't use rounded corners larger than 2px**. SaaS UI vibes.
- **Don't use shadows for elevation**. The site is flat. Hierarchy is achieved with borders, color, and weight.
- **Don't add gradient backgrounds** anywhere except the existing `--accent-soft` highlight bars on `<strong>` text.
- **Don't introduce new colors**. Cobalt, cream, ink, muted greys — that's the entire palette.
- **Don't break the grid background**. It's part of the identity.

### Typographic

- **Don't bold inline text inside prose** when there's a pull quote or headline already doing the emphasis. One emphasis per moment.
- **Don't use italics** outside the single allowed case (pull quote accent word).
- **Don't add new fonts**. Three families is the system. Don't introduce serif, mono variant, or display alternative.
- **Don't widow/orphan headlines**. Use `<br>` in headlines to control line breaks deliberately.
- **Don't auto-capitalize all section names**. Sentence case for display text, UPPERCASE for mono labels — never mix.

### Structural

- **Don't add `<h2>` section titles back**. The mono section-code is the title. Adding a serif title alongside is the redundancy we already removed.
- **Don't add status indicators with blinking dots** (e.g. "● Online · Shipping"). They were removed for being theatrical.
- **Don't add fake-spec metadata** (e.g. "file.id — 001", "version 2.4", "build #") unless it carries real information. Most don't.
- **Don't make the hero supporting paragraph come back**. The hero is now identity strip → typographic statement → context strip. Don't add a fourth layer of paragraph beneath.
- **Don't add the DS signature stamp back**. Your name appears in the hero meta strip. Repeating it as a giant signature is vanity.

### Copy

- **Don't conflate the 16-year credential with AI experience.** Always use the "X. Now Y." pivot to separate durable claims from current claims.
- **Don't write in the third person** ("Diego is a CTO with..."). The site is in first person.
- **Don't write Escala as "the company" or "we"**. It's a current role, not the page's identity. The page is about Diego.
- **Don't repeat the same claim across multiple sections.** If something is in the meta strip, don't restate it in the prose. If something is in a card, don't re-summarize it in the section intro.
- **Don't use "passionate", "innovative", "transformative", "cutting-edge"** — see forbidden list.

### Interaction

- **Don't add scroll-linked animations** beyond the existing reveal. No parallax, no rotating elements on scroll, no progress bars, no scroll-jacking.
- **Don't add hover sounds, cursor effects, or custom cursors.**
- **Don't add a chatbot, tour modal, or "what's new" popup**.
- **Don't add a dark mode toggle**. The light theme is the design. Dark mode would require a complete re-skin and is not the site's intent.

---

## 10. Extension guidelines

When adding a new section or feature:

1. **Re-read sections 1, 2, and 8 first.** Most extension work fails because someone forgot the voice or aesthetic.
2. **Compose from existing patterns** (section 6) before inventing new ones.
3. **Use the existing color and type tokens** (sections 3 and 4). Don't create new ones.
4. **Honor the section rhythm** (section 5). Every section starts with a `section-head`.
5. **Test at all three breakpoints** (1100px, 900px, 560px).
6. **Run the copy through section 8's voice rules** before shipping.
7. **Check against section 9's anti-patterns** before shipping.

When in doubt, ask: *"Would this look at home in a Stripe Press monograph or a Bloomberg Businessweek feature?"* If yes, it probably fits. If it would look at home on a SaaS landing page or a typical dev portfolio, it probably doesn't.

---

*This document is the source of truth for the site's design intent. If you're a coding agent, consume it before suggesting changes. If you're a human collaborator, consume it before approving them.*
