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
