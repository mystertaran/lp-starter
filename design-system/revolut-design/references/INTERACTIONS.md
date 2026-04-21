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

