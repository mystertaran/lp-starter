---
name: revolut-design
description: Design system skill for revolut. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX. Includes ultra-mode visual journey: read references/ANIMATIONS.md, references/LAYOUT.md, references/COMPONENTS.md, and references/INTERACTIONS.md for full motion and layout details.
---

# revolut Design System

You are building UI for **revolut**. Light-themed, cool palette, sans-serif typography (Aeonik Pro), compact density on a 4px grid, flat elevation (no shadows).

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![revolut Homepage](screenshots/homepage.png)

### Scroll Journey (Cinematic Visual States)

> These screenshots capture the website at different scroll depths. The design changes dramatically as you scroll — each frame shows a different cinematic state. Replicate these exact visual transitions.

#### 0% — Hero / Above the fold

![Scroll 0%](screens/scroll/scroll-000.png)

#### 17% — Mid-page at 17% scroll

![Scroll 17%](screens/scroll/scroll-017.png)

#### 33% — Mid-page at 33% scroll

![Scroll 33%](screens/scroll/scroll-033.png)

#### 50% — Mid-page at 50% scroll

![Scroll 50%](screens/scroll/scroll-050.png)

#### 67% — Mid-page at 67% scroll

![Scroll 67%](screens/scroll/scroll-067.png)

#### 83% — Mid-page at 83% scroll

![Scroll 83%](screens/scroll/scroll-083.png)

#### 100% — Footer / End of page

![Scroll 100%](screens/scroll/scroll-100.png)

> Read `references/DESIGN.md` for full token details. Read `references/ANIMATIONS.md` for motion specs. Read `references/LAYOUT.md` for layout structure. Read `references/COMPONENTS.md` for component patterns.

## Ultra Reference Files

This package includes extended documentation. **Read these files before implementing:**

| File | Contents |
|------|----------|
| `references/DESIGN.md` | Full design system tokens, colors, typography, spacing |
| `references/VISUAL_GUIDE.md` | **START HERE** — Master visual guide with all screenshots embedded |
| `references/ANIMATIONS.md` | CSS keyframes, scroll triggers, motion library stack, video specs |
| `references/LAYOUT.md` | Flex/grid containers, page structure, spacing relationships |
| `references/COMPONENTS.md` | DOM component patterns, HTML structure, class fingerprints |
| `references/INTERACTIONS.md` | Hover/focus states with before/after style diffs |
| `screens/scroll/` | 7 scroll journey screenshots showing cinematic states |

## Design Philosophy

- **Solid colors only** — no gradients anywhere. Every surface is a single flat color.
- **Type pairing** — Aeonik Pro for body/UI text, Inter for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **cool palette** — the color temperature runs cool, matching the sans-serif typography.
- **Restrained accent** — `#667dff` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Minimal motion** — prefer instant state changes. Only use transitions for loading and page transitions.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#f4f4f4` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#191c1f` | Headings, body text |
| Text Muted | `--text-muted` | `#8d969e` | Captions, placeholders |
| Accent | `--accent` | `#667dff` | CTAs, links, focus rings |
| Border | `--border` | `#505a63` | Dividers, card borders |

### Extended Palette

- `#000000` — Deep background layer or shadow color
- `#c9c9cd`
- `#818c96`
- `#a1a1a3`
- `#7f84f6`
- `#808080`

### CSS Variable Tokens

```css
--rui-color-channel-accent: 79 85 241;
--rui-color-channel-accent-neutral: 79 85 241;
--rui-color-channel-on-accent: 255 255 255;
--rui-color-channel-on-accent-neutral: 255 255 255;
--rui-color-channel-widget-background: 255 255 255;
--rui-color-channel-foreground: 25 28 31;
--rui-color-channel-background: 237 238 253;
--rui-color-channel-grouped-background: 247 247 247;
--rui-color-channel-layout-background: 247 247 247;
--rui-color-channel-popover-background: 255 255 255;
--rui-color-channel-action-background: 230 240 253;
--rui-color-channel-action-background-neutral: 230 240 253;
--rui-color-accent-neutral: #4f55f1;
--rui-color-accent: #4f55f1;
--rui-color-search-background: #ebebf0;
--rui-color-segmented-background: #ebebf0;
--rui-color-action-photo-header-background: #edeefd;
--rui-color-action-photo-header-background-neutral: #edeefd;
--rui-color-red-action-background: #fef6f5;
--rui-color-on-accent: #fff;
```

## Typography

### Font Stack

- **Aeonik Pro** — Heading 1, Heading 2, Heading 3
- **Inter** — Body, Caption

### Font Sources

```css
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-SemiBold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Aeonik Pro | 48px / 3rem | 700 |
| Heading 2 | Aeonik Pro | 32px / 2rem | 600 |
| Heading 3 | Aeonik Pro | 24px / 1.5rem | 600 |
| Body | Inter | 16px / 1rem | 400 |
| Caption | Inter | 12px / 0.75rem | 400 |

### Typography Rules

- Body/UI: **Aeonik Pro**, Headings: **Inter** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`4, 8, 10, 12, 16, 18, 20, 24, 26, 32, 34, 36` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `12px, 16px, 20px, 22.5px, 22.5px 22.5px 0px 0px`
Default: `20px`

## Component Patterns

### Card

```css
.card {
  background: #f4f4f4;
  border: 1px solid #505a63;
  border-radius: 20px;
  padding: 16px;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #667dff;
  color: #191c1f;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #505a63;
  color: #191c1f;
  border-radius: 20px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #505a63;
  border-radius: 20px;
  padding: 8px 12px;
  color: #191c1f;
  font-size: 14px;
}
.input:focus { border-color: #667dff; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #f4f4f4;
  color: #8d969e;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #f4f4f4;
  border: 1px solid #505a63;
  border-radius: 22.5px 22.5px 0px 0px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #8d969e;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #505a63;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #505a63;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #505a63;
}
.nav-link {
  color: #8d969e;
  padding: 8px 12px;
  border-radius: 20px;
  transition: color 150ms;
}
.nav-link:hover { color: #191c1f; }
.nav-link.active { color: #667dff; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

## Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without calling attention.

### Motion Guidelines

- **Duration:** 150-300ms for micro-interactions, 300-500ms for page transitions
- **Easing:** `ease-out` for enters, `ease-in` for exits
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

This design uses **flat elevation** — no box-shadows anywhere.

### Elevation Strategy

| Level | Technique | Use |
|-------|-----------|-----|
| 0 — Base | Background color | Page background |
| 1 — Raised | Lighter surface + subtle border | Cards, panels |
| 2 — Floating | Even lighter surface + stronger border | Dropdowns, popovers |
| 3 — Overlay | Backdrop + modal surface | Modals, dialogs |

## Anti-Patterns (Never Do)

- **No box-shadow** on any element — use borders and surface colors for depth
- **No gradients** — solid colors only, everywhere
- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Aeonik Pro and Inter are allowed
- **No arbitrary border-radius** — use the scale: 12px, 16px, 20px, 22.5px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Aeonik Pro, Inter only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — flat, surface color shifts only
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Site URL:** `https://www.revolut.com`
- **Brand color:** `#667dff`
- **Brand typeface:** Aeonik Pro

## Quick Reference

```
Background:     #ffffff
Surface:        #f4f4f4
Text:           #191c1f / #8d969e
Accent:         #667dff
Border:         #505a63
Font:           Aeonik Pro
Spacing:        4px grid
Radius:         20px
Components:     0 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for revolut
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "revolut" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# revolut DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 12 · Fonts: 2 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: none

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![revolut Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography pairs **Inter** for display/headings with **Aeonik Pro** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 4, 8, 10, 12, 16, 18, 20, 24px. The palette is predominantly monochromatic with **#667dff** as the single accent color — used sparingly for interactive elements and emphasis.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#ffffff` | background | Page background, darkest surface |
| surface | `#f4f4f4` | surface | Card and panel backgrounds |
| text-primary | `#191c1f` | text-primary | Headings and body text |
| text-muted | `#8d969e` | text-muted | Captions, placeholders, secondary info |
| border | `#505a63` | border | Dividers, card borders, outlines |
| accent | `#667dff` | accent | CTAs, links, focus rings, active states |
| info | `#7f84f6` | info | Informational highlights |
| unknown | `#000000` | unknown | Palette color |
| unknown | `#c9c9cd` | unknown | Palette color |
| unknown | `#818c96` | unknown | Palette color |
| unknown | `#a1a1a3` | unknown | Palette color |
| unknown | `#808080` | unknown | Palette color |

### CSS Variable Tokens

```css
--rui-color-channel-accent: 79 85 241;
--rui-color-channel-accent-neutral: 79 85 241;
--rui-color-channel-on-accent: 255 255 255;
--rui-color-channel-on-accent-neutral: 255 255 255;
--rui-color-channel-widget-background: 255 255 255;
--rui-color-channel-foreground: 25 28 31;
--rui-color-channel-background: 237 238 253;
--rui-color-channel-grouped-background: 247 247 247;
--rui-color-channel-layout-background: 247 247 247;
--rui-color-channel-popover-background: 255 255 255;
--rui-color-channel-action-background: 230 240 253;
--rui-color-channel-action-background-neutral: 230 240 253;
--rui-color-accent-neutral: #4f55f1;
--rui-color-accent: #4f55f1;
--rui-color-search-background: #ebebf0;
--rui-color-segmented-background: #ebebf0;
--rui-color-action-photo-header-background: #edeefd;
--rui-color-action-photo-header-background-neutral: #edeefd;
--rui-color-red-action-background: #fef6f5;
--rui-color-on-accent: #fff;
```


---

## 3. Typography Rules

**Font Stack:**
- **Aeonik Pro** — Heading 1, Heading 2, Heading 3
- **Inter** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-SemiBold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Aeonik Pro | 48px / 3rem | 700 |
| Heading 2 | Aeonik Pro | 32px / 2rem | 600 |
| Heading 3 | Aeonik Pro | 24px / 1.5rem | 600 |
| Body | Inter | 16px / 1rem | 400 |
| Caption | Inter | 12px / 0.75rem | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Aeonik Pro** for body/UI text, **Inter** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 4, 8, 10, 12, 16, 18, 20, 24, 26, 32, 34, 36
- **Border radius:** 12px, 16px, 20px, 22.5px, 22.5px 22.5px 0px 0px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

No box-shadow values detected. The design appears to use a flat visual style.


---

## 8. Do's and Don'ts

### Do's

- Use `#667dff` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Aeonik Pro** (body) with **Inter** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use border and background shifts for elevation — not shadows
- Use border-radius from the scale: 12px, 16px, 20px, 22.5px, 22.5px 22.5px 0px 0px

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Aeonik Pro and Inter
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't add box-shadow — this design system uses flat elevation
- Don't use gradients — the design uses solid colors only
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No box-shadow on any element
- No gradient backgrounds
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

No breakpoints detected. Consider adding responsive breakpoints to the design system.

---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f4f4f4
Border: 1px solid #505a63
Radius: 20px
Padding: 16px
Font: Aeonik Pro
No shadows — use borders and surface colors for depth.
```

### Build a Button

```
Primary: bg #667dff, text white
Ghost: bg transparent, border #505a63
Padding: 8px 16px
Radius: 20px
Hover: opacity 0.9 or lighter shade
Focus: ring with #667dff
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1280px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f4f4f4
Label: #8d969e (muted, 12px, uppercase)
Value: #191c1f (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #505a63
Focus: border-color #667dff
Label: #8d969e 12px
Spacing: 16px between fields
Radius: 20px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Aeonik Pro, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: flat, surface shifts
```

## Visual Guide — Screenshots (VISUAL_GUIDE.md)

# revolut — Visual Guide

> Master visual reference. Study every screenshot carefully before implementing any UI.
> Match colors, layout, typography, spacing, and motion states exactly.

## Scroll Journey

The page has cinematic scroll animations. Each screenshot below shows the exact visual state at that scroll depth.
**Replicate these transitions precisely** — the design changes dramatically as you scroll.

### Hero — Above the fold

*Scroll position: 0px of 7892px total*

![Hero — Above the fold](../screens/scroll/scroll-000.png)

### 17% scroll depth

*Scroll position: 1190px of 7892px total*

![17% scroll depth](../screens/scroll/scroll-017.png)

### 33% scroll depth

*Scroll position: 2307px of 7892px total*

![33% scroll depth](../screens/scroll/scroll-033.png)

### 50% scroll depth

*Scroll position: 3496px of 7892px total*

![50% scroll depth](../screens/scroll/scroll-050.png)

### 67% scroll depth

*Scroll position: 4685px of 7892px total*

![67% scroll depth](../screens/scroll/scroll-067.png)

### 83% scroll depth

*Scroll position: 5803px of 7892px total*

![83% scroll depth](../screens/scroll/scroll-083.png)

### Footer — End of page

*Scroll position: 6992px of 7892px total*

![Footer — End of page](../screens/scroll/scroll-100.png)

## Full Page Screenshots

### Banking & Beyond | Revolut United Kingdom

*URL: `https://www.revolut.com`*

![Banking & Beyond | Revolut United Kingdom](../screens/pages/home.png)

### Business Account | Manage Your Finances | Revolut Business

*URL: `https://www.revolut.com/business/`*

![Business Account | Manage Your Finances | Revolut Business](../screens/pages/business.png)

### About us | Revolut United Kingdom

*URL: `https://www.revolut.com/discover-our-company/`*

![About us | Revolut United Kingdom](../screens/pages/discover-our-company.png)

### Turn Idle Cash Into Interest | Start Saving Online | Revolut United Kingdom

*URL: `https://www.revolut.com/savings/`*

![Turn Idle Cash Into Interest | Start Saving Online | Revolut United Kingdom](../screens/pages/savings.png)

### Is Revolut safe? | How we protect your money | Revolut United Kingdom

*URL: `https://www.revolut.com/how-we-keep-your-money-safe/`*

![Is Revolut safe? | How we protect your money | Revolut United Kingdom](../screens/pages/how-we-keep-your-money-safe.png)

## Section Screenshots

Clipped sections showing individual components in context.

### Section 1 — `section`

*1440×900px*

![Section 1](../screens/sections/home-section-1.png)

### Section 1 — `section`

*1440×900px*

![Section 1](../screens/sections/business-section-1.png)

### Section 2 — `section`

*1000×740px*

![Section 2](../screens/sections/business-section-2.png)

### Section 1 — `section`

*1440×900px*

![Section 1](../screens/sections/discover-our-company-section-1.png)

### Section 2 — `section`

*1000×740px*

![Section 2](../screens/sections/discover-our-company-section-2.png)

### Section 1 — `section`

*1440×900px*

![Section 1](../screens/sections/savings-section-1.png)

### Section 2 — `section`

*1000×740px*

![Section 2](../screens/sections/savings-section-2.png)

### Section 1 — `section`

*1440×900px*

![Section 1](../screens/sections/how-we-keep-your-money-safe-section-1.png)

### Section 2 — `section`

*1000×740px*

![Section 2](../screens/sections/how-we-keep-your-money-safe-section-2.png)

## Animations & Motion (ANIMATIONS.md)

# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

Pure CSS animations — no external animation libraries detected.

## Scroll Journey

The page is **7892px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1190px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 2307px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 3496px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 4685px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 5803px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 6992px

![Scroll 100%](../screens/scroll/scroll-100.png)

## Video Elements

| # | Role | Autoplay | Loop | Muted | Size | First Frame |
|---|------|----------|------|-------|------|-------------|
| 1 | background | — | — | ✓ | 1440×900 | — |
| 2 | background | — | — | ✓ | 1440×900 | — |
| 3 | content | — | — | ✓ | 450×600 | — |
| 4 | background | — | — | ✓ | 1000×431 | — |

- **Source:** `https://assets.revolut.com/published-assets-v3/5b4c4cc6-f5e3-4013-abb9-02ed70191f31/79c359d8-7025-4121-924b-b7880f97bcf4`
- **Source:** `https://assets.revolut.com/published-assets-v3/94a4cf97-5819-45b0-8219-b7b16e94ecac/959ae3c2-0d48-4c3e-a30e-2defda91b1f0`
- **Source:** `https://assets.revolut.com/published-assets-v3/7bf7c951-27c0-4ceb-9021-881e85ca6b25/332f5fdd-c0b9-44be-8dea-fc17b3d6ccdf`
- **Source:** `https://assets.revolut.com/published-assets-v3/a07a910c-0df4-45f5-b0ca-7864377877a3/0da52da5-f59c-4863-a918-d8861c032000`
- **Poster:** `https://assets.revolut.com/published-assets-v3/94150ea7-4f5d-4931-9947-ab0518bea769/07844b11-869f-4b91-a5e5-ae2605f6c1c8`

## Motion Tokens (CSS Variables)

### Duration Tokens

```css
--rui-duration-xs: 100ms;
--rui-duration-sm: 200ms;
--rui-duration-md: 300ms;
--rui-duration-lg: 450ms;
--rui-duration-xl: 900ms;
--rui-duration-skeleton: 1500ms;
```

### Easing Tokens

```css
--rui-timing-sm: var(--rui-duration-sm) var(--rui-easing-default);
--rui-timing-md: var(--rui-duration-md) var(--rui-easing-default);
--rui-timing-lg: var(--rui-duration-lg) var(--rui-easing-default);
--rui-timing-xl: var(--rui-duration-xl) var(--rui-easing-default);
--rui-timing-shadow: var(--rui-duration-sm) var(--rui-easing-shadow);
```

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: background-color var(--rui-timing-md);
transition: inherit;
transition: box-shadow var(--rui-timing-shadow);
transition: outline var(--rui-timing-shadow),outline-offset var(--rui-timing-shadow);
transition: background-color var(--rui-timing-md),color var(--rui-timing-md),opacity var(--rui-timing-md),box-shadow var(--rui-timing-shadow),outline var(--rui-timing-shadow),outline-offset var(--rui-timing-shadow);
transition: color var(--rui-timing-md),background-color var(--rui-timing-md);
transition: background-color 200ms, top 200ms, opacity 300ms;
transition: top 200ms;
transition: color var(--rui-timing-md);
transition: color 0.15s;
transition: 0.3s;
transition: width var(--rui-timing-md), height var(--rui-timing-md), opacity var(--rui-timing-md);
```

## How to Recreate This Motion Design

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 100ms var(--rui-duration-sm) var(--rui-easing-default),
              transform 100ms var(--rui-duration-sm) var(--rui-easing-default);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Video backgrounds** — use `<video autoplay loop muted playsinline>` for background videos. Always include a poster image fallback
- **Duration scale:** `100ms` · `200ms` · `300ms` · `450ms` · `900ms` · `1500ms` · `0.15s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1190px`) → `screens/scroll/scroll-017.png`
- **33%** (`2307px`) → `screens/scroll/scroll-033.png`
- **50%** (`3496px`) → `screens/scroll/scroll-050.png`
- **67%** (`4685px`) → `screens/scroll/scroll-067.png`
- **83%** (`5803px`) → `screens/scroll/scroll-083.png`
- **100%** (`6992px`) → `screens/scroll/scroll-100.png`

## Layout & Grid (LAYOUT.md)

# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `4, 8, 10, 12, 16, 18, 20, 24, 26, 32, 34, 36, 40, 48, 56` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `footer.Box-rui__sc-1g1k12l-0.cQFxcA` | column | — | — | — | 7 |
| `section#d7935e2a-c366-4f3c-b85a-889d6967ad40.Box-rui__sc-1g1` | row | center | — | — | 1 |
| `section#e7a957ad-b891-4afa-bafe-6cb1eea2ec02.Box-rui__sc-1g1` | row | center | — | — | 3 |
| `section#25c59cb0-f8e8-454a-8b59-daa3df89bfee.Box-rui__sc-1g1` | row | center | — | — | 4 |
| `section#f85a3566-de16-46d6-8408-83754f1f5a94.Box-rui__sc-1g1` | row | center | — | — | 1 |
| `section.Box-rui__sc-1g1k12l-0.cQFxcA` | column | center | — | 24px | 2 |
| `section.Box-rui__sc-1g1k12l-0.cQFxcA` | column | center | center | — | 3 |

## Structural Containers

### `<header>` (`header.Box-rui__sc-1g1k12l-0.sc-39771f03-0`)

```
display:          block
children:         1
```

### `<main>` (`main.Box-rui__sc-1g1k12l-0.Position-rui__sc-nh2ik7-0`)

```
display:          block
max-width:        100%
children:         8
```

### `<footer>` (`footer.Box-rui__sc-1g1k12l-0.cQFxcA`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
padding:          40px 220px
children:         7
```

### `<section>` (`section#24b6c305-36ff-4886-aeee-8c47f38a1369.Box-rui__sc-1g1`)

```
display:          block
children:         1
```

### `<section>` (`section#7de98943-92c4-4e70-9e2b-6944c4773cb7.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#555d9fc5-8b62-4cf0-b16a-0f4ad21cfa42.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#d7935e2a-c366-4f3c-b85a-889d6967ad40.Box-rui__sc-1g1`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      —
children:         1
```

### `<section>` (`section#dbfef89c-d350-446d-b9dc-6f86320453f6.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#f3ff6372-53a2-43d5-b3ff-8d1a14f1e5d2.Box-rui__sc-1g1`)

```
display:          block
padding:          0px 0px 120px
max-width:        1000px
children:         1
```

### `<section>` (`section#45f4d4d8-fef6-46c7-b4b7-2fac5beaad69.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#0ccc8c70-b8ff-40f3-ae78-3b0491e47ab4.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#bfac11be-4608-4f98-af14-eb4f8bf585f6.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

## Layout Rules

- **Container max-width:** `100%` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

## Component Patterns (COMPONENTS.md)

# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **ButtonBase  ButtonStateLayer Rui  Sc 1aqanxw 0** | button | 27× | `.ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0`, `.gvbSTM` |
| **Ellipsis  EllipsisBase Rui  Sc 1uis3y5 0** | unknown | 21× | `.Ellipsis__EllipsisBase-rui__sc-1uis3y5-0`, `.ezeIGf` |
| **Button Rui  Sc 1gvtpv4 0** | button | 12× | `.Button-rui__sc-1gvtpv4-0`, `.ButtonBase-rui__sc-1aqanxw-2`, `.ButtonBase__ButtonBaseWrapper-rui__sc-1aqanxw-1` |
| **AspectRatio  Content Rui  Sc 3p9atg 1** | unknown | 9× | `.AspectRatio__Content-rui__sc-3p9atg-1`, `.dBNTQa` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 7× | `.Box-rui__sc-1g1k12l-0`, `.Text-rui__sc-1be7qv6-0`, `.eIJHMl` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 6× | `.Box-rui__sc-1g1k12l-0`, `.Position-rui__sc-nh2ik7-0`, `.Position__Relative-rui__sc-nh2ik7-3` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 6× | `.Box-rui__sc-1g1k12l-0`, `.Flex-rui__sc-p3ay74-0`, `.Stack-rui__sc-1t382g5-0` |
| **AspectRatio  Base Rui  Sc 3p9atg 2** | unknown | 6× | `.AspectRatio__Base-rui__sc-3p9atg-2`, `.Box-rui__sc-1g1k12l-0`, `.hrentu` |
| **AspectRatio  Spacer Rui  Sc 3p9atg 0** | unknown | 6× | `.AspectRatio__Spacer-rui__sc-3p9atg-0`, `.CbkBx` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 6× | `.Box-rui__sc-1g1k12l-0`, `.Text-rui__sc-1be7qv6-0`, `.dbmxWv` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 6× | `.Box-rui__sc-1g1k12l-0`, `.Flex-rui__sc-p3ay74-0`, `.Stack-rui__sc-1t382g5-0` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 5× | `.Box-rui__sc-1g1k12l-0`, `.Position-rui__sc-nh2ik7-0`, `.Position__Absolute-rui__sc-nh2ik7-2` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 4× | `.Box-rui__sc-1g1k12l-0`, `.Position-rui__sc-nh2ik7-0`, `.Position__Relative-rui__sc-nh2ik7-3` |
| **Box Rui  Sc 1g1k12l 0** | list-item | 4× | `.Box-rui__sc-1g1k12l-0`, `.jhQhhc` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 4× | `.Box-rui__sc-1g1k12l-0`, `.Position-rui__sc-nh2ik7-0`, `.Position__Relative-rui__sc-nh2ik7-3` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 4× | `.Box-rui__sc-1g1k12l-0`, `.Position-rui__sc-nh2ik7-0`, `.Position__Relative-rui__sc-nh2ik7-3` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 3× | `.Box-rui__sc-1g1k12l-0`, `.kGgJZR`, `.sc-cb77fa67-2` |
| **A DTKi** | button | 3× | `.A-dTKi`, `.Button-rui__sc-1gvtpv4-0`, `.ButtonBase-rui__sc-1aqanxw-2` |
| **Box Rui  Sc 1g1k12l 0** | unknown | 3× | `.Box-rui__sc-1g1k12l-0`, `.Position-rui__sc-nh2ik7-0`, `.Position__Absolute-rui__sc-nh2ik7-2` |
| **Kagfub** | unknown | 3× | `.kagfub`, `.sc-754e351a-3` |

## List Items

### Box Rui  Sc 1g1k12l 0

**Instances found:** 4

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.jhQhhc`

**HTML structure:**

```html
<li style="list-style:none" class="Box-rui__sc-1g1k12l-0 jhQhhc"><figure class="Box-rui__sc-1g1k12l-0 Flex-rui__sc-p3ay74-0 Stack-rui__sc-1t382g5-0 VStack-rui__sc-e0ymcb-0 eYfAJw ryMWT jZBAfu"><div class="Box-rui__sc-1g1k12l-0 AspectRatio__Base-rui__sc-3p9atg-2 hrentu jnsDTP"><div class="AspectRatio__Content-rui__sc-3p9atg-1 dBNTQa"><picture><source srcset="https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/383f385d-1d05-4010-b9d1-efc8247ac534.png 1080w, https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/93455cc7-bb46-4277-bb80-
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  padding: 4px 0;
  border-bottom: 1px solid #505a63;
}```

## Buttons

### ButtonBase  ButtonStateLayer Rui  Sc 1aqanxw 0

**Instances found:** 27

**CSS classes:** `.ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0` `.gvbSTM`

**HTML structure:**

```html
<span data-rui="state-layer" class="ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0 gvbSTM"></span>
```

**Base styles (from design tokens):**

```css
.ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0 {
  background: #667dff;
  color: #191c1f;
  border-radius: 20px;
  padding: 4px 8px;
  cursor: pointer;
}```

### Button Rui  Sc 1gvtpv4 0

**Instances found:** 12

**CSS classes:** `.Button-rui__sc-1gvtpv4-0` `.ButtonBase-rui__sc-1aqanxw-2` `.ButtonBase__ButtonBaseWrapper-rui__sc-1aqanxw-1` `.ButtonLayout___StyledButtonBase-rui__sc-15pyc45-2` `.cFZUmK` `.ebyqwN`

**HTML structure:**

```html
<a href="https://app.revolut.com/start" class="ButtonBase__ButtonBaseWrapper-rui__sc-1aqanxw-1 ebyqwN ButtonBase-rui__sc-1aqanxw-2 ButtonLayout___StyledButtonBase-rui__sc-15pyc45-2 iHLlRu cFZUmK Button-rui__sc-1gvtpv4-0 sc-581c235-0 ggJDYa hqaCjK" aria-disabled="false"><span data-rui="state-layer" class="ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0 gvbSTM"></span><span class="Ellipsis__EllipsisBase-rui__sc-1uis3y5-0 ezeIGf">Log in</span></a>
```

**Base styles (from design tokens):**

```css
.Button-rui__sc-1gvtpv4-0 {
  background: #667dff;
  color: #191c1f;
  border-radius: 20px;
  padding: 4px 8px;
  cursor: pointer;
}```

### A DTKi

**Instances found:** 3

**CSS classes:** `.A-dTKi` `.Button-rui__sc-1gvtpv4-0` `.ButtonBase-rui__sc-1aqanxw-2` `.ButtonBase__ButtonBaseWrapper-rui__sc-1aqanxw-1` `.ButtonLayout___StyledButtonBase-rui__sc-15pyc45-2` `.cFZUmK`

**HTML structure:**

```html
<a class="ButtonBase__ButtonBaseWrapper-rui__sc-1aqanxw-1 ebyqwN ButtonBase-rui__sc-1aqanxw-2 ButtonLayout___StyledButtonBase-rui__sc-15pyc45-2 iHLlRu cFZUmK Button-rui__sc-1gvtpv4-0 sc-581c235-0 kBYlOz A-dTKi sc-cb77fa67-1 jTAJin" href="/" aria-disabled="false"><span data-rui="state-layer" class="ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0 gvbSTM"></span><span class="Ellipsis__EllipsisBase-rui__sc-1uis3y5-0 ezeIGf">Personal</span></a>
```

**Base styles (from design tokens):**

```css
.A-dTKi {
  background: #667dff;
  color: #191c1f;
  border-radius: 20px;
  padding: 4px 8px;
  cursor: pointer;
}```

## Other Components

### Ellipsis  EllipsisBase Rui  Sc 1uis3y5 0

**Instances found:** 21

**CSS classes:** `.Ellipsis__EllipsisBase-rui__sc-1uis3y5-0` `.ezeIGf`

**HTML structure:**

```html
<span class="Ellipsis__EllipsisBase-rui__sc-1uis3y5-0 ezeIGf">Personal</span>
```

**Base styles (from design tokens):**

```css
.Ellipsis__EllipsisBase-rui__sc-1uis3y5-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### AspectRatio  Content Rui  Sc 3p9atg 1

**Instances found:** 9

**CSS classes:** `.AspectRatio__Content-rui__sc-3p9atg-1` `.dBNTQa`

**HTML structure:**

```html
<div class="AspectRatio__Content-rui__sc-3p9atg-1 dBNTQa"><picture><source srcset="https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/383f385d-1d05-4010-b9d1-efc8247ac534.png 1080w, https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/93455cc7-bb46-4277-bb80-26f45cb66c7d.png 2048w, https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/d82f81eb-d1c3-48c8-908d-d11da9048079.png 3840w" type="image/webp"><img src="https://assets.revolut.com/published-assets-v3/baf74063-c481-431d-85a0-9e5743572f28/91d20a70-
```

**Base styles (from design tokens):**

```css
.AspectRatio__Content-rui__sc-3p9atg-1 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 7

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Text-rui__sc-1be7qv6-0` `.eIJHMl` `.kJKBSN`

**HTML structure:**

```html
<h2 class="Box-rui__sc-1g1k12l-0 Text-rui__sc-1be7qv6-0 kJKBSN eIJHMl">Elevate your spend</h2>
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 6

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Position-rui__sc-nh2ik7-0` `.Position__Relative-rui__sc-nh2ik7-3` `.hfyehJ` `.jkAFIE` `.sPvaq`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 jkAFIE sPvaq hfyehJ" style="transition-timing-function: cubic-bezier(0.35, 0, 0, 1); transition-property: transform, opacity; transform: translateX(-20%); opacity: 0; transition-duration: 0ms; transition-delay: 100ms;"><picture><source srcset="https://assets.revolut.com/published-assets-v3/d6d0bfe6-bc41-44db-8dde-dd3665b3c359/00544e46-b5db-4906-b0ed-87b558057f3f.png 1080w, https://assets.revolut.com/published-assets-v3/d6d0bfe6-bc41-44db-8dde-dd3665b3c359/e306c6b0-8d4e-4b03-ae84-c2e6c4da0904.png 204
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 6

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Flex-rui__sc-p3ay74-0` `.Stack-rui__sc-1t382g5-0` `.VStack-rui__sc-e0ymcb-0` `.eYfAJw` `.jZBAfu`

**HTML structure:**

```html
<figure class="Box-rui__sc-1g1k12l-0 Flex-rui__sc-p3ay74-0 Stack-rui__sc-1t382g5-0 VStack-rui__sc-e0ymcb-0 eYfAJw ryMWT jZBAfu"><div class="Box-rui__sc-1g1k12l-0 AspectRatio__Base-rui__sc-3p9atg-2 hrentu jnsDTP"><div class="AspectRatio__Content-rui__sc-3p9atg-1 dBNTQa"><picture><source srcset="https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/383f385d-1d05-4010-b9d1-efc8247ac534.png 1080w, https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/93455cc7-bb46-4277-bb80-26f45cb66c7d.png 2048w, https://assets.revolut.com/published-asse
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### AspectRatio  Base Rui  Sc 3p9atg 2

**Instances found:** 6

**CSS classes:** `.AspectRatio__Base-rui__sc-3p9atg-2` `.Box-rui__sc-1g1k12l-0` `.hrentu` `.jnsDTP`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 AspectRatio__Base-rui__sc-3p9atg-2 hrentu jnsDTP"><div class="AspectRatio__Content-rui__sc-3p9atg-1 dBNTQa"><picture><source srcset="https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/383f385d-1d05-4010-b9d1-efc8247ac534.png 1080w, https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/93455cc7-bb46-4277-bb80-26f45cb66c7d.png 2048w, https://assets.revolut.com/published-assets-v3/752d54a2-44fe-40b0-acc7-d5abc209f81b/d82f81eb-d1c3-48c8-908d-d11da9048079.png 3840w" type="image/webp"><img src="https://a
```

**Base styles (from design tokens):**

```css
.AspectRatio__Base-rui__sc-3p9atg-2 {
  background: #f4f4f4;
  padding: 4px;
}```

### AspectRatio  Spacer Rui  Sc 3p9atg 0

**Instances found:** 6

**CSS classes:** `.AspectRatio__Spacer-rui__sc-3p9atg-0` `.CbkBx`

**HTML structure:**

```html
<div role="none" class="AspectRatio__Spacer-rui__sc-3p9atg-0 CbkBx"></div>
```

**Base styles (from design tokens):**

```css
.AspectRatio__Spacer-rui__sc-3p9atg-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 6

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Text-rui__sc-1be7qv6-0` `.dbmxWv` `.dcYdBK`

**HTML structure:**

```html
<figcaption class="Box-rui__sc-1g1k12l-0 Text-rui__sc-1be7qv6-0 dcYdBK dbmxWv">#3 most downloaded finance app</figcaption>
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 6

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Flex-rui__sc-p3ay74-0` `.Stack-rui__sc-1t382g5-0` `.VStack-rui__sc-e0ymcb-0` `.ddVUqc` `.ekjHmk`

**HTML structure:**

```html
<span style="visibility:visible" class="Box-rui__sc-1g1k12l-0 Flex-rui__sc-p3ay74-0 Stack-rui__sc-1t382g5-0 VStack-rui__sc-e0ymcb-0 sc-c022ad21-0 ekjHmk fbPNNG jZBAfu ddVUqc"><h2 class="Box-rui__sc-1g1k12l-0 Text-rui__sc-1be7qv6-0 kJKBSN eIJHMl">Elevate your spend</h2><span class="Box-rui__sc-1g1k12l-0 Flex-rui__sc-p3ay74-0 Stack-rui__sc-1t382g5-0 VStack-rui__sc-e0ymcb-0 lhxUeY jnHRQD efjQDA jZBAfu"><span class="Box-rui__sc-1g1k12l-0 Text-rui__sc-1be7qv6-0 kJKBSN ldOCqs">Earn points on your purchases with one o…</span><span class="Box-rui__sc-1g1k12l-0 Text-rui__sc-1be7qv6-0 kJKBSN cyYFIs">Som
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 5

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Position-rui__sc-nh2ik7-0` `.Position__Absolute-rui__sc-nh2ik7-2` `.eMtqZO` `.kFTkQf` `.kGgJZR`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Absolute-rui__sc-nh2ik7-2 sc-60f07a49-0 kGgJZR sPvaq kFTkQf eMtqZO"><div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 bJloqU sPvaq hfyehJ" style="will-change: transform; transform: translateY(0px);"><div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 bJloqU sPvaq hfyehJ"><video muted="" playsinline="" aria-hidden="true" class="sc-298a97af-0 gaaJlJ"><source src="https://assets.revolut.com/published-assets-v3/5b4c4cc6-f5e3-4013-abb9-02ed7
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 4

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Position-rui__sc-nh2ik7-0` `.Position__Relative-rui__sc-nh2ik7-3` `.hfyehJ` `.jkAFIE` `.sPvaq`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 jkAFIE sPvaq hfyehJ"><div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Absolute-rui__sc-nh2ik7-2 jhcWEq dmZmJu kFTkQf" style="transition-timing-function: cubic-bezier(0.35, 0, 0, 1); border-bottom-width: medium; border-bottom-style: none; border-color: var(--rui-color-grey-tone-20); transition-property: border-radius, border-color; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; transition-duration: 0ms; transition-delay: 100ms;"><div class="Box-rui__sc-1g1k12l-0
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 4

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Position-rui__sc-nh2ik7-0` `.Position__Relative-rui__sc-nh2ik7-3` `.bJloqU` `.hfyehJ` `.sPvaq`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 bJloqU sPvaq hfyehJ" style="will-change: transform; transform: translateY(0px);"><div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 bJloqU sPvaq hfyehJ"><video muted="" playsinline="" aria-hidden="true" class="sc-298a97af-0 gaaJlJ"><source src="https://assets.revolut.com/published-assets-v3/5b4c4cc6-f5e3-4013-abb9-02ed70191f31/79c359d8-7025-4121-924b-b7880f97bcf4.mp4" type="video/mp4"></video></div></div>
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 4

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Position-rui__sc-nh2ik7-0` `.Position__Relative-rui__sc-nh2ik7-3` `.bJloqU` `.hfyehJ` `.sPvaq`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 bJloqU sPvaq hfyehJ"><video muted="" playsinline="" aria-hidden="true" class="sc-298a97af-0 gaaJlJ"><source src="https://assets.revolut.com/published-assets-v3/5b4c4cc6-f5e3-4013-abb9-02ed70191f31/79c359d8-7025-4121-924b-b7880f97bcf4.mp4" type="video/mp4"></video></div>
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 3

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.kGgJZR` `.sc-cb77fa67-2`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 sc-cb77fa67-2 kGgJZR"><a class="ButtonBase__ButtonBaseWrapper-rui__sc-1aqanxw-1 ebyqwN ButtonBase-rui__sc-1aqanxw-2 ButtonLayout___StyledButtonBase-rui__sc-15pyc45-2 iHLlRu cFZUmK Button-rui__sc-1gvtpv4-0 sc-581c235-0 kBYlOz A-dTKi sc-cb77fa67-1 jTAJin" href="/" aria-disabled="false"><span data-rui="state-layer" class="ButtonBase__ButtonStateLayer-rui__sc-1aqanxw-0 gvbSTM"></span><span class="Ellipsis__EllipsisBase-rui__sc-1uis3y5-0 ezeIGf">Personal</span></a></div>
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Box Rui  Sc 1g1k12l 0

**Instances found:** 3

**CSS classes:** `.Box-rui__sc-1g1k12l-0` `.Position-rui__sc-nh2ik7-0` `.Position__Absolute-rui__sc-nh2ik7-2` `.dknUhi` `.eMpvDM` `.kFTkQf`

**HTML structure:**

```html
<div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Absolute-rui__sc-nh2ik7-2 sc-ce48d160-0 kGgJZR dknUhi kFTkQf eMpvDM" style="cursor: auto; transition: transform 350ms, opacity 350ms; z-index: -1; transform: translateX(calc(-1 * var(--website-hero-carousel-gap))) translateX(var(--website-hero-carousel-left-translate)) scale(0.9); opacity: 1;"><div class="Box-rui__sc-1g1k12l-0 Position-rui__sc-nh2ik7-0 Position__Relative-rui__sc-nh2ik7-3 jkAFIE sPvaq hfyehJ" style="transition-timing-function: cubic-bezier(0.35, 0, 0, 1); transition-property: transform, opacity; transform: tr
```

**Base styles (from design tokens):**

```css
.Box-rui__sc-1g1k12l-0 {
  background: #f4f4f4;
  padding: 4px;
}```

### Kagfub

**Instances found:** 3

**CSS classes:** `.kagfub` `.sc-754e351a-3`

**HTML structure:**

```html
<img src="https://assets.revolut.com/published-assets-v3/7bdbcc85-da7f-41c5-bf29-6f009513ef63/3e343861-8410-48fc-a6fa-224b4f5e002a.png" srcset="https://assets.revolut.com/published-assets-v3/d6d0bfe6-bc41-44db-8dde-dd3665b3c359/00544e46-b5db-4906-b0ed-87b558057f3f.png 1080w, https://assets.revolut.com/published-assets-v3/d6d0bfe6-bc41-44db-8dde-dd3665b3c359/e306c6b0-8d4e-4b03-ae84-c2e6c4da0904.png 2048w, https://assets.revolut.com/published-assets-v3/d6d0bfe6-bc41-44db-8dde-dd3665b3c359/65411b9a-e95d-4c34-a38e-d3e4fa53fa8d.png 3840w" alt="" loading="lazy" decoding="async" class="sc-754e351a-3 
```

**Base styles (from design tokens):**

```css
.kagfub {
  background: #f4f4f4;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#505a63` for all dividers within components
- Use `#667dff` for all interactive/active states

## Interactions & States (INTERACTIONS.md)

# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
transition: background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), opacity 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6), outline 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6), outline-offset 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
transition: all;
transition: color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1);
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `button`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**Transition:** `box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6)`

_No visible style changes detected for this element._

### Button 2 — `Poland`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**Transition:** `box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6)`

_No visible style changes detected for this element._

### Button 3 — `Send`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**Transition:** `background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), opacity 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6), outline 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6), outline-offset 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6)`

_No visible style changes detected for this element._

## Link Interactions

### Link 1 — `a`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

### Link 2 — `Personal`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**Transition:** `color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1)`

_No visible style changes detected for this element._

### Link 3 — `Business`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**Transition:** `color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1)`

_No visible style changes detected for this element._

## Interaction Rules

- Accent color `#667dff` is used for focus rings, active states, and hover highlights
- Transition durations in use: `0.2s`, `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

## Design Tokens — JSON Files

### tokens/colors.json
```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "core": {
    "surface": {
      "value": "#f4f4f4",
      "role": "surface"
    },
    "text-primary": {
      "value": "#191c1f",
      "role": "text-primary"
    },
    "background": {
      "value": "#ffffff",
      "role": "background"
    },
    "text-muted": {
      "value": "#8d969e",
      "role": "text-muted"
    },
    "border": {
      "value": "#505a63",
      "role": "border"
    },
    "accent": {
      "value": "#667dff",
      "role": "accent"
    }
  },
  "status": {},
  "extended": {
    "color-000000": {
      "value": "#000000",
      "role": "unknown"
    },
    "color-c9c9cd": {
      "value": "#c9c9cd",
      "role": "unknown"
    },
    "color-818c96": {
      "value": "#818c96",
      "role": "unknown"
    },
    "color-a1a1a3": {
      "value": "#a1a1a3",
      "role": "unknown"
    },
    "color-7f84f6": {
      "value": "#7f84f6",
      "role": "info"
    },
    "color-808080": {
      "value": "#808080",
      "role": "unknown"
    }
  },
  "meta": {
    "theme": "light",
    "extracted": "2026-04-21"
  }
}
```

### tokens/spacing.json
```json
{
  "base": {
    "value": "4px",
    "description": "Grid unit — all spacing must be multiples of this"
  },
  "unit": "px",
  "scale": {
    "xs": {
      "value": "4px",
      "px": 4
    },
    "sm": {
      "value": "8px",
      "px": 8
    },
    "md": {
      "value": "10px",
      "px": 10
    },
    "lg": {
      "value": "12px",
      "px": 12
    },
    "xl": {
      "value": "16px",
      "px": 16
    },
    "2xl": {
      "value": "18px",
      "px": 18
    },
    "3xl": {
      "value": "20px",
      "px": 20
    },
    "4xl": {
      "value": "24px",
      "px": 24
    },
    "5xl": {
      "value": "26px",
      "px": 26
    },
    "6xl": {
      "value": "32px",
      "px": 32
    }
  },
  "multipliers": {
    "1x": {
      "value": "4px",
      "raw": 4
    },
    "2x": {
      "value": "8px",
      "raw": 8
    },
    "3x": {
      "value": "12px",
      "raw": 12
    },
    "4x": {
      "value": "16px",
      "raw": 16
    },
    "5x": {
      "value": "20px",
      "raw": 20
    },
    "6x": {
      "value": "24px",
      "raw": 24
    },
    "7x": {
      "value": "28px",
      "raw": 28
    },
    "8x": {
      "value": "32px",
      "raw": 32
    },
    "9x": {
      "value": "36px",
      "raw": 36
    },
    "10x": {
      "value": "40px",
      "raw": 40
    },
    "11x": {
      "value": "44px",
      "raw": 44
    },
    "12x": {
      "value": "48px",
      "raw": 48
    },
    "13x": {
      "value": "52px",
      "raw": 52
    },
    "14x": {
      "value": "56px",
      "raw": 56
    },
    "15x": {
      "value": "60px",
      "raw": 60
    },
    "16x": {
      "value": "64px",
      "raw": 64
    }
  },
  "meta": {
    "totalValues": 15,
    "min": 4,
    "max": 56
  }
}
```

### tokens/typography.json
```json
{
  "families": [
    "Aeonik Pro",
    "Inter"
  ],
  "scale": {
    "heading-1": {
      "fontFamily": "Aeonik Pro",
      "fontSize": "48px / 3rem",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "computed"
    },
    "heading-2": {
      "fontFamily": "Aeonik Pro",
      "fontSize": "32px / 2rem",
      "fontWeight": "600",
      "lineHeight": null,
      "source": "computed"
    },
    "heading-3": {
      "fontFamily": "Aeonik Pro",
      "fontSize": "24px / 1.5rem",
      "fontWeight": "600",
      "lineHeight": null,
      "source": "computed"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px / 1rem",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "computed"
    },
    "caption": {
      "fontFamily": "Inter",
      "fontSize": "12px / 0.75rem",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "computed"
    }
  },
  "fontFaces": [],
  "rules": {
    "maxSizesPerScreen": 4,
    "headingWeightRange": "600-700",
    "bodyWeight": 400,
    "lineHeightBody": 1.5,
    "lineHeightHeading": 1.2
  }
}
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Inter-Black.ttf`
- `fonts/Inter-Bold.ttf`
- `fonts/Inter-ExtraBold.ttf`
- `fonts/Inter-ExtraLight.ttf`
- `fonts/Inter-Light.ttf`
- `fonts/Inter-Medium.ttf`
- `fonts/Inter-Regular.ttf`
- `fonts/Inter-SemiBold.ttf`
- `fonts/Inter-Thin.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Screenshots Inventory (screens/)

> Study all screenshots carefully before implementing any UI. Match every visual detail exactly.

### Scroll Journey (screens/scroll/)

*Cinematic scroll states — page visual at each scroll depth*

![scroll-000.png](screens/scroll/scroll-000.png)

![scroll-017.png](screens/scroll/scroll-017.png)

![scroll-033.png](screens/scroll/scroll-033.png)

![scroll-050.png](screens/scroll/scroll-050.png)

![scroll-067.png](screens/scroll/scroll-067.png)

![scroll-083.png](screens/scroll/scroll-083.png)

![scroll-100.png](screens/scroll/scroll-100.png)

### Full Page Screenshots (screens/pages/)

*Full-page screenshots of each crawled URL*

![business.png](screens/pages/business.png)

![discover-our-company.png](screens/pages/discover-our-company.png)

![home.png](screens/pages/home.png)

![how-we-keep-your-money-safe.png](screens/pages/how-we-keep-your-money-safe.png)

![savings.png](screens/pages/savings.png)

### Section Clips (screens/sections/)

*Clipped individual sections and components*

![business-section-1.png](screens/sections/business-section-1.png)

![business-section-2.png](screens/sections/business-section-2.png)

![discover-our-company-section-1.png](screens/sections/discover-our-company-section-1.png)

![discover-our-company-section-2.png](screens/sections/discover-our-company-section-2.png)

![home-section-1.png](screens/sections/home-section-1.png)

![how-we-keep-your-money-safe-section-1.png](screens/sections/how-we-keep-your-money-safe-section-1.png)

![how-we-keep-your-money-safe-section-2.png](screens/sections/how-we-keep-your-money-safe-section-2.png)

![savings-section-1.png](screens/sections/savings-section-1.png)

![savings-section-2.png](screens/sections/savings-section-2.png)

### Interaction States (screens/states/)

*Hover, focus, and active state captures*

![button-1-default.png](screens/states/button-1-default.png)

![button-1-focus.png](screens/states/button-1-focus.png)

![button-1-hover.png](screens/states/button-1-hover.png)

![button-2-default.png](screens/states/button-2-default.png)

![button-2-focus.png](screens/states/button-2-focus.png)

![button-2-hover.png](screens/states/button-2-hover.png)

![button-3-default.png](screens/states/button-3-default.png)

![button-3-focus.png](screens/states/button-3-focus.png)

![button-3-hover.png](screens/states/button-3-hover.png)

![link-1-default.png](screens/states/link-1-default.png)

![link-1-focus.png](screens/states/link-1-focus.png)

![link-1-hover.png](screens/states/link-1-hover.png)

![link-2-default.png](screens/states/link-2-default.png)

![link-2-focus.png](screens/states/link-2-focus.png)

![link-2-hover.png](screens/states/link-2-hover.png)

![link-3-default.png](screens/states/link-3-default.png)

![link-3-focus.png](screens/states/link-3-focus.png)

![link-3-hover.png](screens/states/link-3-hover.png)

### Screenshot Index (screens/INDEX.md)

# Screenshot Index

## Scroll Journey

> Shows the cinematic state at each point of the page

| Scroll | Y Position | File |
|--------|-----------|------|
| 0% | 0px | `screens/scroll/scroll-000.png` |
| 17% | 1190px | `screens/scroll/scroll-017.png` |
| 33% | 2307px | `screens/scroll/scroll-033.png` |
| 50% | 3496px | `screens/scroll/scroll-050.png` |
| 67% | 4685px | `screens/scroll/scroll-067.png` |
| 83% | 5803px | `screens/scroll/scroll-083.png` |
| 100% | 6992px | `screens/scroll/scroll-100.png` |

## Pages

| Page | URL | File |
|------|-----|------|
| Banking & Beyond | Revolut United Kingdom | `https://www.revolut.com` | `screens/pages/home.png` |
| Business Account | Manage Your Finances | Revolut Business | `https://www.revolut.com/business/` | `screens/pages/business.png` |
| About us | Revolut United Kingdom | `https://www.revolut.com/discover-our-company/` | `screens/pages/discover-our-company.png` |
| Turn Idle Cash Into Interest | Start Saving Online | Revolut United Kingdom | `https://www.revolut.com/savings/` | `screens/pages/savings.png` |
| Is Revolut safe? | How we protect your money | Revolut United Kingdom | `https://www.revolut.com/how-we-keep-your-money-safe/` | `screens/pages/how-we-keep-your-money-safe.png` |

## Sections

| Page | Section | File |
|------|---------|------|
| home | #1 (section) | `screens/sections/home-section-1.png` |
| business | #1 (section) | `screens/sections/business-section-1.png` |
| business | #2 (section) | `screens/sections/business-section-2.png` |
| discover-our-company | #1 (section) | `screens/sections/discover-our-company-section-1.png` |
| discover-our-company | #2 (section) | `screens/sections/discover-our-company-section-2.png` |
| savings | #1 (section) | `screens/sections/savings-section-1.png` |
| savings | #2 (section) | `screens/sections/savings-section-2.png` |
| how-we-keep-your-money-safe | #1 (section) | `screens/sections/how-we-keep-your-money-safe-section-1.png` |
| how-we-keep-your-money-safe | #2 (section) | `screens/sections/how-we-keep-your-money-safe-section-2.png` |

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

