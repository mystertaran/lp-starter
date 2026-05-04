---
name: start
description: Bootstrap a new landing project from this lp-starter template. Run a structured intake interview, fill in .impeccable.md and src/lib/site.ts, then guide the user through replacing section copy and (optionally) scaffolding additional routes. Use when the user runs /start, when .impeccable.md still contains {{PLACEHOLDERS}}, or when the user asks to "set up" / "initialize" / "rozkręć" the project.
---

# Start — landing intake

You are the bootstrap agent for a fresh `lp-starter` clone. Goal: take the user from "just cloned the template" to "landing page with their copy, ready for `/impeccable craft` per section, ready to deploy".

## Detect state first

Before asking anything, check what's already filled in:

1. `Read` `.impeccable.md`. If it contains `{{` — full intake needed.
2. `Read` `src/lib/site.ts`. If `product` is `"Acme"` or `domain` is `"https://example.com"` — config needs filling.
3. `Read` `AGENTS.md`. Verify it still has the analytics convention section.

If `.impeccable.md` and `src/lib/site.ts` are already filled in (no placeholders, no defaults), tell the user the project is already initialized and ask what specifically they want — don't re-run the interview.

## Run the interview

Ask in **sequential blocks**, not all at once. After each block, save what you have (in your working memory — you'll write to disk at the end). Keep questions short and concrete; offer one example each so the user can answer in 2 lines.

### Block 1 — Product fundamentals

1. Product name (in prose). Example: *Acme*, *The Fabos*, *Notion*.
2. Wordmark styling — uppercase / lowercase / mixed case. Example: *all-uppercase ACME*.
3. One-sentence description: what is it and who is it for.
4. Domain (production URL). Example: *https://acme.com*.
5. Copy language. Default: Polish. Other options: English, mixed.

### Block 2 — Audience and conversion

1. Primary user — role + scale + situation in one sentence.
2. Decision maker — who actually signs off, what they're skeptical of.
3. Primary conversion: what is the **one** action the page drives? Examples: *contact form*, *Calendly booking*, *signup waitlist*, *download app*.
4. Anti-goals — what the page must NOT compete with as CTAs.

### Block 3 — Voice and visual

1. Three words the brand IS (e.g. *operational, plain-spoken, fast*). Skip *innovative, revolutionary, leader* — those are banned by Impeccable.
2. Three emotional targets for hero (e.g. *power, simplicity, edge-over-competition*).
3. Aesthetic kind — describe in one phrase. Examples: *editorial-operational (FT meets ERP)*, *technical-archival*, *playful-confident*.
4. Theme — light or dark.
5. Accent color — hex or OKLCH. Default: signal orange `#FF4C00` / `oklch(0.66 0.22 38)`.
6. Display font + body font. Defaults already in repo: **Archivo Black** + **Archivo**. If user wants different, remind: NO Inter, DM Sans, Plus Jakarta Sans, Space Grotesk, IBM Plex, Geist — those are AI-default reflexes.
7. **Reference sites (URLs)** — ask for 1–3 actual production URLs whose design feels close to what they want. Examples: *https://revolut.com*, *https://shopify.com*, *https://linear.app*, *https://stripe.com*, *https://notion.so*, *https://ft.com*. **This is the single most important answer in the whole interview** — every later step (shape, craft, audit) leans on these. URLs only — not just brand names — because we will scrape them.
8. Anti-references — name 1–2 competitors or aesthetics the brand is the opposite of.

### Block 4 — Pages

The home page is composed in `src/app/page.tsx` from sections in `src/components/sections/`. Default composition: hero → symptoms → solution → integrations → maturity → closer → contact-form.

Ask:
1. Keep all seven sections, or drop some?
2. Additional routes beyond `/`? Common: `/cennik` (pricing), `/o-nas` (about), a contest/landing variant. For each requested route, capture: route path, headline goal, primary CTA.

### Block 5 — Production

1. Company legal entity — full registered name, address, NIP/KRS/REGON (or local equivalent).
2. Contact person — name, role, email, phone (E.164).
3. Email infra — Resend domain (verified?), `CONTACT_FROM_EMAIL` (sender), `CONTACT_TO_EMAIL` (recipient).
4. Analytics — GA4 measurement ID (`G-…`).

## After the interview — write everything

Run all the file updates. After each, verify the file looks right by re-reading the changed section.

### 1. Rewrite `.impeccable.md`

Replace every `{{PLACEHOLDER}}` with the answers. Keep the file structure — Impeccable skills depend on the section headings staying consistent.

### 2. Rewrite `src/lib/site.ts`

Update the `SITE` object with `product`, `domain`, `tagline`, `company.*`, `contact.*`, `cta.primary`. Use `Edit` per field, not a full rewrite, so you don't drop the JSDoc.

### 3. Update font setup if user picked different fonts

`src/app/layout.tsx` imports fonts via `next/font/google`. If the user wants different fonts, replace the imports and update CSS variables in `src/app/globals.css` (`--font-sans`, `--font-display`). Otherwise leave Archivo Black + Archivo as-is.

### 4. Update accent color if changed

`src/app/globals.css` defines OKLCH tokens at the `:root` level. Change `--accent` and `--ring` to the user's choice. Run a quick contrast sanity check — accent foreground must be AA against the accent background.

### 5. Capture reference site design (Playwright/chrome-devtools)

For every URL the user gave in Block 3 question 7, you must produce a project-local design reference. Steps per URL:

**5a. Check if a matching brand-system skill already exists.**

If the URL is `revolut.com` and a `revolut-design` Skill is listed in the system-reminder — that skill IS the captured reference. Read its `references/DESIGN.md`, `LAYOUT.md`, `COMPONENTS.md`, `INTERACTIONS.md`, `ANIMATIONS.md`. Add a pointer to it in `.impeccable.md` under `### Reference Brands`. Skip 5b for that URL.

Same for `shopify.com` → `shopify-design`. Other brand-system skills may exist; check the system-reminder list.

**5b. For URLs without an existing skill — scrape with chrome-devtools MCP (preferred) or Playwright.**

Save outputs under `references/<sanitized-host>/` (e.g. `references/linear-app/`). Use chrome-devtools MCP tools if available (`mcp__chrome-devtools__new_page`, `evaluate_script`, `take_screenshot`). Fall back to a Node script using the `playwright` package already in `devDependencies` if MCP is not available.

Capture per URL:

1. **Load the page** with desktop viewport `1440x900x2`. Wait for network idle / fonts loaded.
2. **Computed-style sweep** — run an `evaluate_script` that pulls computed styles for representative elements:
   ```js
   () => {
     const get = (sel) => {
       const el = document.querySelector(sel);
       if (!el) return null;
       const cs = getComputedStyle(el);
       const r = el.getBoundingClientRect();
       return {
         tag: el.tagName.toLowerCase(),
         fontFamily: cs.fontFamily,
         fontSize: cs.fontSize,
         fontWeight: cs.fontWeight,
         lineHeight: cs.lineHeight,
         letterSpacing: cs.letterSpacing,
         color: cs.color,
         backgroundColor: cs.backgroundColor,
         padding: cs.padding,
         borderRadius: cs.borderRadius,
         text: (el.innerText || '').slice(0, 80),
         width: Math.round(r.width),
         height: Math.round(r.height),
       };
     };
     return {
       url: location.href,
       viewport: { w: innerWidth, h: innerHeight, dpr: devicePixelRatio },
       html: get('html'),
       body: get('body'),
       h1: get('h1'),
       h2: get('h2'),
       p: get('p'),
       button: get('button, a[role="button"], a[class*="btn" i], a[class*="button" i]'),
       cta: get('a[class*="primary" i], a[class*="cta" i], button[class*="primary" i]'),
       nav: get('nav, header'),
       footer: get('footer'),
     };
   }
   ```
   Save the returned JSON as `references/<host>/styles.json`.
3. **Color palette** — second `evaluate_script` that walks the DOM and counts unique non-transparent `backgroundColor` and `color` values across elements with non-trivial size. Save top 12 of each as `references/<host>/palette.json`.
4. **Spacing rhythm** — measure vertical gaps between top-level `<section>` elements and primary headings. Save as `references/<host>/spacing.json`.
5. **Screenshots** — `take_screenshot` for: viewport (top of page), full-page (`fullPage: true`), and a tightly-cropped hero (the first `<section>` or first 800px). Save as `references/<host>/hero.png`, `full.png`, `viewport.png`.
6. **Synthesize.** Read all the captured JSONs + your impression of the screenshots and write `references/<host>/DESIGN.md` — a tight (under 200-line) brief in the same shape as the existing `revolut-design` and `shopify-design` skills' `references/DESIGN.md`. Cover: typography scale, color tokens (with OKLCH conversions), spacing scale, button / CTA pattern, layout grid + max-width, motion budget. Be specific with numbers, not adjectives.
7. **Add a pointer** in the project's `.impeccable.md` under `### Reference Brands`:
   `- {{site-name}} — see references/<host>/DESIGN.md`.

**5c. Sanity-check.** Show the user the synthesized DESIGN.md for each scraped site and ask "good/edit/skip?" before moving on. They know their references better than the scraper does.

### 6. Section design — from scratch, not search-replace

This is the most important step and the one that's easiest to do badly. The default sections in this template (`hero.tsx`, `symptoms.tsx`, `solution.tsx`, etc.) carry an **opinionated layout** from the FabOS LP they were extracted from — same 7-section flow, same kinetic-words component, same grid in the modules list. If you just rewrite the strings inside, the result will look like a re-skin of FabOS, not a new design system. The user almost certainly does not want that.

**Do NOT just search-replace copy**. Instead:

1. **Load the reference design context.** Read every `references/<host>/DESIGN.md` produced in step 5, plus any matching brand-system skill's `references/*.md`. These are now the authoritative source for tokens, type scale, spacing, components — they override any improvised choice.

2. **Run `/impeccable shape` for the page as a whole.** Inputs: `.impeccable.md`, the Block 3/4 answers, and the captured reference DESIGN.md files. Output: a design brief — which sections, in which order, with which density and motion budget. The brief may include sections that don't exist as files (e.g., a metrics band, a testimonial, a comparison table) and may exclude default sections that don't fit (e.g., kinetic-words has very specific energy that won't fit every brand).

3. **Reconcile against existing files.** Before crafting:
   - Sections in the brief that already exist as files → keep, mark for full rewrite (not Edit).
   - Sections in the brief that don't exist → create new files in `src/components/sections/`.
   - Sections that exist but aren't in the brief → **delete** them (`git rm`). Don't leave dead code.

4. **For each section in brief order, run `/impeccable craft <section-name>`.** Pass the captured references and any brand-system skill in scope. Each craft pass produces 2-3 directions for review before code lands. Wire it as a full new file, not an Edit of the placeholder.

5. **Update `src/app/page.tsx`** to compose the new section order. Remove imports for deleted sections; add imports for new ones.

If the user explicitly says "I trust your judgment, just build it without showing me alternatives" — fine, skip the multi-direction review but keep step 1-4 (still load references, still run shape, still craft from scratch).

What you must NOT do: open the existing `hero.tsx` or `solution.tsx`, change a few strings, and call it done. That produces a copy of FabOS LP with a different brand name, which is the failure mode this section is designed to prevent.

### 7. Additional routes

For each new route from Block 4:
- Create `src/app/<route>/page.tsx`.
- If it has its own form, create `src/app/actions/<route>.ts` mirroring the contact action's Resend + Zod pattern.
- Wire analytics events: add `<route>_form_start`, `<route>_form_submit`, etc. to `AnalyticsEvents` in `src/lib/analytics.ts`. Emit them per the convention in AGENTS.md.

### 8. Privacy policy

`src/app/polityka-prywatnosci/page.tsx` already pulls from `SITE` — verify it reads correctly with the user's company data. Ask the user: do you have a final last-updated date and a lawyer-approved version? Replace `UPDATED_AT` and any clauses that don't match their data flow.

### 9. Production env vars (don't touch — just instruct)

Tell the user to set on Vercel (or their hosting):
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (verified sender on their Resend domain)
- `CONTACT_TO_EMAIL` (lead recipient)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Verify before declaring done

Run, in order:
1. `pnpm typecheck` — must pass.
2. `pnpm lint` — must pass.
3. `pnpm build` (optional but recommended) — catches Next.js misconfig.
4. Grep for leftover placeholders: search the repo for `{{` and for `Acme` and for `example.com`. Anything that survives is a missed step.

Tell the user the next concrete actions:
- `pnpm dev` to view locally.
- Push to a fresh GitHub repo and deploy on Vercel.
- Set env vars.
- Run `/audit` for an accessibility/perf sanity check before launch.

## Style for the interview

- Speak in the user's language (default Polish unless the project is English).
- One question per turn unless they're trivially related.
- Show a reasonable default for every question. Most users want to take the default.
- Don't lecture. If they pick something risky (e.g., banned font), say once "that's an AI-default reflex per .impeccable.md, sure you want it?" — if they confirm, proceed.

## Don't

- Don't rewrite `AGENTS.md` — it's tech rules, not brand context.
- Don't add new dependencies during /start. Stack is fixed.
- Don't run the interview if the user already has filled `.impeccable.md` — instead ask what specifically changed.
- Don't commit. The user commits when they're happy.
