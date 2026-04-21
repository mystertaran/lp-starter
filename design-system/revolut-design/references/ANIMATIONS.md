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

