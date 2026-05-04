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
7. Anti-references — name 1–2 competitors or aesthetics the brand is the opposite of.

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

### 5. Section copy

For each section the user kept, **DO NOT rewrite blindly**. Instead:

- Tell the user: "I'll now run `/impeccable craft <section>` for each section. That gives you 2-3 design directions per section before code lands."
- For each section in order, hand off to `/impeccable craft <section-name>` with the relevant context from .impeccable.md.

If the user says "just replace the placeholder copy directly, no design alternatives" — fine, then `Edit` each section file with literal copy that matches the brand voice from .impeccable.md.

### 6. Additional routes

For each new route from Block 4:
- Create `src/app/<route>/page.tsx`.
- If it has its own form, create `src/app/actions/<route>.ts` mirroring the contact action's Resend + Zod pattern.
- Wire analytics events: add `<route>_form_start`, `<route>_form_submit`, etc. to `AnalyticsEvents` in `src/lib/analytics.ts`. Emit them per the convention in AGENTS.md.

### 7. Privacy policy

`src/app/polityka-prywatnosci/page.tsx` already pulls from `SITE` — verify it reads correctly with the user's company data. Ask the user: do you have a final last-updated date and a lawyer-approved version? Replace `UPDATED_AT` and any clauses that don't match their data flow.

### 8. Production env vars (don't touch — just instruct)

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
