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
