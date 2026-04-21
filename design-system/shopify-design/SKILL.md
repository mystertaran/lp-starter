---
name: shopify-design
description: Design system skill for shopify. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# shopify Design System

You are building UI for **shopify**. Light-themed, cool palette, monospace typography (PolySans), compact density on a 4px grid, expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![shopify Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Single typeface** — PolySans carries all text. Hierarchy comes from size, weight, and color — never font mixing.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **cool palette** — the color temperature runs cool, matching the monospace typography.
- **Restrained accent** — `#0047ff` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#f4f4f5` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#000000` | Headings, body text |
| Text Muted | `--text-muted` | `#71717a` | Captions, placeholders |
| Accent | `--accent` | `#0047ff` | CTAs, links, focus rings |
| Border | `--border` | `#3f3f46` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Success | `#072720` | Confirmations, positive trends |

### Extended Palette

- **color-shade-90:** `#18181b` — Deep background layer or shadow color
- **color-shade-30:** `#d4d4d8`
- **color-shade-40:** `#a1a1aa`
- **color-lime-100:** `#c7f47f`
- **color-cool-gray-850:** `#1a292c`
- **color-shade-20:** `#e4e4e7` — Light surface or highlight color
- **tw-ring-color:** `#751be9`
- **color-teal-950:** `#000a1e` — Deep background layer or shadow color

### CSS Variable Tokens

```css
--color-theme-bg-accent: var(--color-shade-1000);
--color-theme-border: var(--color-black-alpha-200);
--color-theme-border-cta: var(--color-shade-1000);
--color-theme-border-cta-hover: var(--color-shade-700);
--color-theme-border-cta-active: var(--color-shade-500);
--color-theme-border-cta-disabled: var(--color-shade-300);
--color-theme-border-input: var(--color-black-alpha-200);
--color-theme-border-input-hover: var(--color-black-alpha-500);
--color-theme-border-input-disabled: var(--color-black-alpha-100);
--color-theme-border-input-selected: var(--color-shade-1000);
--color-theme-border-input-selected-hover: var(--color-shade-700);
--color-theme-border-input-selected-active: var(--color-shade-500);
--color-theme-border-input-selected-disabled: var(--color-shade-300);
--color-theme-border-utility-success: var(--color-green-500);
--color-theme-border-utility-warning: var(--color-orange-400);
--color-theme-border-utility-error: var(--color-red-500);
--color-theme-border-utility-focus: var(--color-purple-700);
--spacing-global-header-with-border: calc(var(--header-height) + 1px);
--color-component-accordion-border: var(--color-theme-border);
--color-component-accordion-button-border: var(--color-theme-border-cta);
```

## Typography

### Font Stack

- **PolySans** — Heading 1, Heading 2, Heading 3
- **IBMPlexMono** — Body, Caption, Code

### Font Sources

```css
@font-face {
  font-family: "IBMPlexMono";
  src: url("fonts/IBMPlexMono-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "PolySans";
  src: url("fonts/PolySans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "DrukCondSuper";
  src: url("fonts/DrukCondSuper-900.woff2") format("woff2");
  font-weight: 900;
}
@font-face {
  font-family: "DrukTextHeavy";
  src: url("fonts/DrukTextHeavy-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "FT88";
  src: url("fonts/FT88-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Roslindale";
  src: url("fonts/Roslindale-500.woff2") format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Trap";
  src: url("fonts/Trap-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Trap";
  src: url("fonts/Trap-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "FeatureDisplay";
  src: url("fonts/FeatureDisplay-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "FeatureDisplay";
  src: url("fonts/FeatureDisplay-700.otf") format("opentype");
  font-weight: 700;
}
@font-face {
  font-family: "GoodSans";
  src: url("fonts/GoodSans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "GoodSans";
  src: url("fonts/GoodSans-Regular.woff") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "PathwayGothicOne";
  src: url("fonts/PathwayGothicOne-Regular.ttf") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "GraphikCondensed";
  src: url("fonts/GraphikCondensed-600.woff2") format("woff2");
  font-weight: 600;
}
@font-face {
  font-family: "GTSuperDisplay";
  src: url("fonts/GTSuperDisplay-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "GTSuperTextBook";
  src: url("fonts/GTSuperTextBook-300.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "GTSuperText";
  src: url("fonts/GTSuperText-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NaturalMarkerItalic";
  src: url("fonts/NaturalMarkerItalic-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NaturalMarker";
  src: url("fonts/NaturalMarker-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "GaramondNovaProCondensedLight";
  src: url("fonts/GaramondNovaProCondensedLight-300.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "GaramondNovaProCondensedLightItalic";
  src: url("fonts/GaramondNovaProCondensedLightItalic-300.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "GTAmericaMono";
  src: url("fonts/GTAmericaMono-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Inter-Variable";
  src: url("fonts/Inter-Variable-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "ShopifySans";
  src: url("fonts/ShopifySans-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "ShopifySans";
  src: url("fonts/ShopifySans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "NeueHaasGrotesk";
  src: url("fonts/NeueHaasGrotesk-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Noto Sans JP";
  src: url("fonts/NotoSansJP-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Noto Sans JP";
  src: url("fonts/NotoSansJP-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Faktum";
  src: url("fonts/Faktum-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Faktum";
  src: url("fonts/Faktum-700.woff2") format("woff2");
  font-weight: 700;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | PolySans | calc(var(--stat-scale)*18.75rem) | 700 |
| Heading 2 | PolySans | clamp(2rem,17cqw,200px) | 700 |
| Heading 3 | PolySans | clamp(2rem,15cqw,180px) | 700 |
| Body | IBMPlexMono | 13px | 400 |
| Caption | IBMPlexMono | 11px | 400 |
| Code | IBMPlexMono | 14px | 400 |

### Typography Rules

- All text uses **PolySans** — never add another font family
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.25rem, .33cqw, .66cqw, .661cqw, .75rem, 1px, 2rem, 3rem, 3em, 4px, 5px, 8px, 9px, 10px, 12px, 20px, 22px, 30px, 32px, 33px, 38px, 39px, 40px, 44px, 45px, 48px, 100%, 340px, 405px`
Default: `12px`

### Container

Max-width: `1400px`, centered with auto margins.

## Component Patterns

### Card

```css
.card {
  background: #f4f4f5;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 16px;
  box-shadow: inset 1px 1px 1px #fdfbfb9c;
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
  background: #0047ff;
  color: #000000;
  border-radius: 12px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #3f3f46;
  color: #000000;
  border-radius: 12px;
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
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 8px 12px;
  color: #000000;
  font-size: 14px;
}
.input:focus { border-color: #0047ff; outline: none; }
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
  background: #f4f4f5;
  color: #71717a;
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
  background: #f4f4f5;
  border: 1px solid #3f3f46;
  border-radius: 405px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: inset 1px 1px 1px #fdfbfb9c;
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
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #3f3f46;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #3f3f46;
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
  border-bottom: 1px solid #3f3f46;
}
.nav-link {
  color: #71717a;
  padding: 8px 12px;
  border-radius: 12px;
  transition: color 150ms;
}
.nav-link:hover { color: #000000; }
.nav-link.active { color: #0047ff; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Input** (`html`)

**Card** (`html`)
- Variants: `edge`, `gradient`, `local-and-global`, `left`, `button`

**Navigation** (`html`)

**Footer** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (38 items)
- **Hero** — Hero/banner section with headline and CTAs
- **Faq** — FAQ/accordion section
- **Footer** — Page footer with links and info (1 items)
- **Cards** — Grid of 48 card elements (48 items)
- **Testimonials** — Testimonials/reviews section
- **Stats** — Statistics/metrics display

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `pulse`
- `loop`
- `draw`
- `logo-group-marquee`
- `logo-group-marquee-reverse`

### Motion Tokens

- **Duration scale:** `0s`, `0ms`, `.1s`, `.15s`, `.2s`, `.25s`, `.277s`, `.3s`, `.35s`, `.4s`, `.45s`, `.452s`, `.5s`, `.7s`, `1s`, `3s`, `3.75s`, `4s`, `5s`, `7.5s`, `8s`, `11.25s`, `15s`, `18.75s`, `22.5s`, `26.25s`, `30s`, `33.75s`, `37.5s`, `41.25s`, `45s`, `48.75s`, `52.5s`, `56.25s`, `60s`, `63.75s`, `67.5s`, `71.25s`, `75s`, `78.75s`, `82.5s`, `86.25s`, `90s`, `93.75s`, `100ms`, `120ms`, `200ms`, `300ms`, `400ms`, `500ms`, `700ms`, `1000ms`, `9999000ms`
- **Easing functions:** `cubic-bezier(.66,0,.34,1)`, `ease-in-out`, `cubic-bezier(.25,.46,.45,.94)`, `cubic-bezier(.26,1,.48,1)`, `cubic-bezier(.87,0,.13,1)`, `cubic-bezier(.5,0,.5,1)`, `ease-in`, `ease-out`, `cubic-bezier(.215,.61,.355,1)`, `cubic-bezier(.4,0,.2,1)`, `ease`, `linear`, `cubic-bezier(.175,.885,.32,1.275)`, `cubic-bezier(0,0,0,1)`, `cubic-bezier(1,0,1,1)`
- **Animated properties:** `opacity`, `transform`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0s) for micro-interactions, long (9999000ms) for page transitions
- **Easing:** Use `cubic-bezier(.66,0,.34,1)` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Subtle: `inset 1px 1px 1px #fdfbfb9c`

### Z-Index Scale

`0, 1, 5, 10, 20, 21, 30, 40, 45, 50, 70, 100, 101, 102, 999`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only PolySans and IBMPlexMono are allowed
- **No arbitrary border-radius** — use the scale: .25rem, .75rem, 1px, 2rem, 3rem, 3em, 4px, 5px, 8px, 9px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — PolySans, IBMPlexMono only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `https://cdn.shopify.com/shopifycloud/web/assets/v1/favicon-default-6cbad9de243dbae3.ico`
- **Site URL:** `https://www.shopify.com`
- **Brand color:** `#0047ff`
- **Brand typeface:** PolySans

## Quick Reference

```
Background:     #ffffff
Surface:        #f4f4f5
Text:           #000000 / #71717a
Accent:         #0047ff
Border:         #3f3f46
Font:           PolySans
Spacing:        4px grid
Radius:         12px
Components:     10 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for shopify
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "shopify" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# shopify DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 2 · Components: 10
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![shopify Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography uses **PolySans** throughout — a technical, developer-focused choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The palette is predominantly monochromatic with **#0047ff** as the single accent color — used sparingly for interactive elements and emphasis. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| color-shade-10 | `#f4f4f5` | surface | Card and panel backgrounds |
| color-black | `#000000` | text-primary | Headings and body text |
| color-shade-50 | `#71717a` | text-muted | Captions, placeholders, secondary info |
| color-shade-70 | `#3f3f46` | border | Dividers, card borders, outlines |
| accent | `#0047ff` | accent | CTAs, links, focus rings, active states |
| color-forest-green-900 | `#072720` | success | Success states, positive indicators |
| color-teal-950 | `#000a1e` | info | Informational highlights |
| color-shade-90 | `#18181b` | unknown | Palette color |
| color-shade-30 | `#d4d4d8` | unknown | Palette color |
| color-shade-40 | `#a1a1aa` | unknown | Palette color |
| color-lime-100 | `#c7f47f` | unknown | Palette color |
| color-cool-gray-850 | `#1a292c` | unknown | Palette color |
| color-shade-20 | `#e4e4e7` | unknown | Palette color |
| tw-ring-color | `#751be9` | unknown | Palette color |
| color-forest-green-200 | `#98d5c4` | unknown | Palette color |
| color-lavender-30 | `#978de7` | unknown | Palette color |
| color-shade-950 | `#101010` | unknown | Palette color |
| color-mint-200 | `#36f4a4` | unknown | Palette color |
| unknown | `#008060` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--tw-border-style: dashed;
--tw-border-style: none;
--tw-border-style: solid;
--tw-border-style: dashed;
--tw-border-style: none;
--tw-border-style: solid;
--color-theme-bg-accent: var(--color-shade-1000);
--color-theme-border: var(--color-black-alpha-200);
--color-theme-border-cta: var(--color-shade-1000);
--color-theme-border-cta-hover: var(--color-shade-700);
--color-theme-border-cta-active: var(--color-shade-500);
--color-theme-border-cta-disabled: var(--color-shade-300);
--color-theme-border-input: var(--color-black-alpha-200);
--color-theme-border-input-hover: var(--color-black-alpha-500);
--color-theme-border-input-disabled: var(--color-black-alpha-100);
--color-theme-border-input-selected: var(--color-shade-1000);
--color-theme-border-input-selected-hover: var(--color-shade-700);
--color-theme-border-input-selected-active: var(--color-shade-500);
--color-theme-border-input-selected-disabled: var(--color-shade-300);
```


---

## 3. Typography Rules

**Font Stack:**
- **PolySans** — Heading 1, Heading 2, Heading 3
- **IBMPlexMono** — Body, Caption, Code

**Font Sources:**

```css
@font-face {
  font-family: "IBMPlexMono";
  src: url("fonts/IBMPlexMono-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "PolySans";
  src: url("fonts/PolySans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "DrukCondSuper";
  src: url("fonts/DrukCondSuper-900.woff2") format("woff2");
  font-weight: 900;
}
@font-face {
  font-family: "DrukTextHeavy";
  src: url("fonts/DrukTextHeavy-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "FT88";
  src: url("fonts/FT88-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Roslindale";
  src: url("fonts/Roslindale-500.woff2") format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Trap";
  src: url("fonts/Trap-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Trap";
  src: url("fonts/Trap-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "FeatureDisplay";
  src: url("fonts/FeatureDisplay-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "FeatureDisplay";
  src: url("fonts/FeatureDisplay-700.otf") format("opentype");
  font-weight: 700;
}
@font-face {
  font-family: "GoodSans";
  src: url("fonts/GoodSans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "GoodSans";
  src: url("fonts/GoodSans-Regular.woff") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "PathwayGothicOne";
  src: url("fonts/PathwayGothicOne-Regular.ttf") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "GraphikCondensed";
  src: url("fonts/GraphikCondensed-600.woff2") format("woff2");
  font-weight: 600;
}
@font-face {
  font-family: "GTSuperDisplay";
  src: url("fonts/GTSuperDisplay-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "GTSuperTextBook";
  src: url("fonts/GTSuperTextBook-300.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "GTSuperText";
  src: url("fonts/GTSuperText-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NaturalMarkerItalic";
  src: url("fonts/NaturalMarkerItalic-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "NaturalMarker";
  src: url("fonts/NaturalMarker-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "GaramondNovaProCondensedLight";
  src: url("fonts/GaramondNovaProCondensedLight-300.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "GaramondNovaProCondensedLightItalic";
  src: url("fonts/GaramondNovaProCondensedLightItalic-300.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "GTAmericaMono";
  src: url("fonts/GTAmericaMono-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Inter-Variable";
  src: url("fonts/Inter-Variable-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "ShopifySans";
  src: url("fonts/ShopifySans-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "ShopifySans";
  src: url("fonts/ShopifySans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "NeueHaasGrotesk";
  src: url("fonts/NeueHaasGrotesk-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Noto Sans JP";
  src: url("fonts/NotoSansJP-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Noto Sans JP";
  src: url("fonts/NotoSansJP-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Faktum";
  src: url("fonts/Faktum-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Faktum";
  src: url("fonts/Faktum-700.woff2") format("woff2");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | PolySans | calc(var(--stat-scale)*18.75rem) | 700 |
| Heading 2 | PolySans | clamp(2rem,17cqw,200px) | 700 |
| Heading 3 | PolySans | clamp(2rem,15cqw,180px) | 700 |
| Body | IBMPlexMono | 13px | 400 |
| Caption | IBMPlexMono | 11px | 400 |
| Code | IBMPlexMono | 14px | 400 |

**Typographic Rules:**
- Use **PolySans** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Card** — `html`
- Variants: `edge`, `gradient`, `local-and-global`, `left`, `button`

**Badge** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .25rem, .33cqw, .66cqw, .661cqw, .75rem, 1px, 2rem, 3rem, 3em, 4px, 5px, 8px, 9px, 10px, 12px, 20px, 22px, 30px, 32px, 33px, 38px, 39px, 40px, 44px, 45px, 48px, 100%, 340px, 405px
- **Max content width:** 1400px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `inset 1px 1px 1px #fdfbfb9c`

### Z-Index Scale

`0, 1, 5, 10, 20, 21, 30, 40, 45, 50, 70, 100, 101, 102, 999`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes pulse`
- `@keyframes loop`
- `@keyframes draw`
- `@keyframes logo-group-marquee`
- `@keyframes logo-group-marquee-reverse`
- `@keyframes fade-in`
- `@keyframes shimmer`
- `@keyframes scroll-x`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#0047ff` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Use **PolySans** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .25rem, .33cqw, .66cqw, .661cqw, .75rem
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use PolySans consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

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
Background: #f4f4f5
Border: 1px solid #3f3f46
Radius: 12px
Padding: 16px
Font: PolySans
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #0047ff, text white
Ghost: bg transparent, border #3f3f46
Padding: 8px 16px
Radius: 12px
Hover: opacity 0.9 or lighter shade
Focus: ring with #0047ff
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1400px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f4f4f5
Label: #71717a (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #3f3f46
Focus: border-color #0047ff
Label: #71717a 12px
Spacing: 16px between fields
Radius: 12px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: PolySans, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/DrukCondSuper-900.woff2`
- `fonts/DrukTextHeavy-700.woff2`
- `fonts/Faktum-300.woff2`
- `fonts/Faktum-500.woff2`
- `fonts/Faktum-600.woff2`
- `fonts/Faktum-700.woff2`
- `fonts/Faktum-Regular.woff2`
- `fonts/FeatureDisplay-500.otf`
- `fonts/FeatureDisplay-700.otf`
- `fonts/FeatureDisplay-Regular.otf`
- `fonts/FT88-700.woff2`
- `fonts/GaramondNovaProCondensedLight-300.woff2`
- `fonts/GaramondNovaProCondensedLightItalic-300.woff2`
- `fonts/GoodSans-500.woff2`
- `fonts/GoodSans-700.woff2`
- `fonts/GoodSans-Regular.woff`
- `fonts/GraphikCondensed-600.woff2`
- `fonts/GTAmericaMono-Regular.woff2`
- `fonts/GTSuperDisplay-300.woff2`
- `fonts/GTSuperDisplay-500.woff2`
- `fonts/GTSuperDisplay-Regular.woff2`
- `fonts/GTSuperText-500.woff2`
- `fonts/GTSuperText-Regular.woff2`
- `fonts/GTSuperTextBook-300.woff2`
- `fonts/IBMPlexMono-300.woff2`
- `fonts/IBMPlexMono-500.woff2`
- `fonts/IBMPlexMono-600.woff2`
- `fonts/IBMPlexMono-Regular.woff2`
- `fonts/Inter-Variable-Regular.woff2`
- `fonts/NaturalMarker-Regular.woff2`
- `fonts/NaturalMarkerItalic-Regular.woff2`
- `fonts/NeueHaasGrotesk-500.ttf`
- `fonts/NeueHaasGrotesk-500.woff`
- `fonts/NeueHaasGrotesk-500.woff2`
- `fonts/NeueHaasGrotesk-600.ttf`
- `fonts/NeueHaasGrotesk-600.woff`
- `fonts/NeueHaasGrotesk-600.woff2`
- `fonts/NeueHaasGrotesk-Regular.ttf`
- `fonts/NeueHaasGrotesk-Regular.woff`
- `fonts/NeueHaasGrotesk-Regular.woff2`
- `fonts/NotoSansJP-Black.ttf`
- `fonts/NotoSansJP-Bold.ttf`
- `fonts/NotoSansJP-ExtraBold.ttf`
- `fonts/NotoSansJP-ExtraLight.ttf`
- `fonts/NotoSansJP-Light.ttf`
- `fonts/NotoSansJP-Medium.ttf`
- `fonts/NotoSansJP-Regular.ttf`
- `fonts/NotoSansJP-SemiBold.ttf`
- `fonts/NotoSansJP-Thin.ttf`
- `fonts/PathwayGothicOne-Regular.ttf`
- `fonts/PolySans-500.woff2`
- `fonts/PolySans-600.woff2`
- `fonts/PolySans-700.woff2`
- `fonts/Roslindale-500.woff2`
- `fonts/ShopifySans-300.woff2`
- `fonts/ShopifySans-500.woff2`
- `fonts/ShopifySans-700.woff2`
- `fonts/ShopifySans-800.woff2`
- `fonts/ShopifySans-900.woff2`
- `fonts/ShopifySans-Regular.woff2`
- `fonts/Trap-500.woff2`
- `fonts/Trap-700.woff2`
- `fonts/Trap-800.woff2`
- `fonts/Trap-Regular.woff2`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

