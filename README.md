# lp-starter

Editorial-operational landing page starter — bring your own brand, run `claude` → `/start`, ship.

## What you get

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with `@theme inline` tokens, OKLCH palette, warm-neutral defaults
- **shadcn/ui** preset `base-nova` (primitives from `@base-ui/react`, not Radix)
- **Motion** (`motion/react`) for purposeful animation
- **Resend** server-action contact form with Zod validation
- **GA4** via `@next/third-parties/google` + Google Consent Mode v2 cookie banner
- **SEO** — sitemap, robots, Open Graph image route, app icon
- **Impeccable** + design skills wired into `.impeccable.md`
- **Husky + lint-staged + ESLint 9 + Prettier** pre-commit pipeline

The home page comes pre-composed with seven sections (hero, symptoms, solution, integrations, maturity, closer, contact-form) — replace the copy via `/start` or by hand.

## Quickstart

```bash
gh repo create my-new-lp --template <your-org>/lp-starter --private --clone
cd my-new-lp
pnpm install
claude            # opens Claude Code in this dir
> /start          # interactive intake — fills .impeccable.md, rewrites copy
pnpm dev          # http://localhost:3000
```

## Manual setup (if you skip /start)

1. Edit `src/lib/site.ts` — product name, domain, contact, company.
2. Edit `.impeccable.md` — replace `{{PLACEHOLDERS}}` with your brand context.
3. Edit each `src/components/sections/*.tsx` — section copy.
4. Set env vars on Vercel:
   - `RESEND_API_KEY` — server action sends the contact form via Resend.
   - `CONTACT_FROM_EMAIL` — verified sender on a domain you own.
   - `CONTACT_TO_EMAIL` — where leads land.
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — `G-XXXXXXXXXX`.

## Scripts

```bash
pnpm dev          # next dev
pnpm build        # next build
pnpm lint         # eslint
pnpm format       # prettier --write .
pnpm typecheck    # tsc --noEmit
```

## Convention

`AGENTS.md` is the technical contract — Next.js 16 quirks, base-nova, motion, analytics expectations. Read it before bigger changes. `.impeccable.md` is the design contract — brand personality, anti-references, fonts, palette.

When you add a new page, form or CTA: wire it through `trackEvent()` in `src/lib/analytics.ts`. The convention is documented in AGENTS.md.
