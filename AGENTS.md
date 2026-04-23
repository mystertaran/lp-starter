<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses **Next.js 16** + **React 19** + **Tailwind v4** + **shadcn/ui (base-nova preset)**. Several conventions diverge from what's in your training data. When in doubt, consult `node_modules/next/dist/docs/` or query context7 (`/vercel/next.js/v16.2.2`) — don't rely on memory.

## Next.js 16 — must-know changes vs. 14/15

- **Turbopack is the default** for `next dev` and `next build`. No `--turbopack` flag needed.
- Config for Turbopack lives at the **top level** of `next.config.ts`: `nextConfig.turbopack = { ... }` — not under `experimental`.
- **Async Request APIs (breaking).** These are now Promises:
  - `cookies()`, `headers()`, `draftMode()` — `await cookies()`, etc.
  - `params` and `searchParams` in Page/Layout/Route props — `await props.params`, `await props.searchParams`.
- **`PageProps<'/route'>` helper** replaces hand-written prop types. Run `npx next typegen` after adding/renaming routes.
- **React 19 required** (minimum). Server Actions, `use()`, `useFormStatus`, `useActionState` all current.
- **Caching defaults in App Router** (unchanged in 16, but often misremembered):
  - `fetch(...)` → `cache: 'force-cache'` by default.
  - Per-request fresh data: `{ cache: 'no-store' }`.
  - Time-based ISR: `{ next: { revalidate: N } }`.
  - DB/ORM calls: wrap with `unstable_cache(fn, keys, { revalidate, tags })` from `next/cache`.
  - Invalidate: `revalidateTag('tag')` in a Server Action or Route Handler.

## Stack-specific decisions in this repo

- **Tailwind CSS v4.** `globals.css` uses `@import "tailwindcss";` (not `@tailwind base/components/utilities`). Design tokens go in `@theme inline { ... }` blocks. Dark mode via `@custom-variant dark (&:is(.dark *));`. Colors use `oklch()`.
- **shadcn/ui preset: `base-nova`** — prymitywy pochodzą z **`@base-ui/react`**, NIE z Radix. Importy typu `@radix-ui/react-*` są błędem.
- **Animations: `motion`** (pakiet `motion`, dawne `framer-motion`). Importuj `import { motion } from "motion/react"` — nie `framer-motion`.
- **Aliases:** `@/*` → `src/*`. Komponenty shadcn w `src/components/ui/`, `cn()` w `src/lib/utils.ts`.
- **Fonts:** Geist + Geist Mono przez `next/font/google`, CSS vars `--font-geist-sans` / `--font-geist-mono`.

## Analytics is part of every feature

Analytics to nie opcjonalny dodatek. Jeśli dodajesz, zmieniasz lub przenosisz stronę, formularz, CTA albo jakąkolwiek interaktywną powierzchnię — **wepnij ją w GA4**. Infra jest gotowa:

- `GoogleAnalytics` jest w root layoucie (`src/app/layout.tsx`) — `page_view` leci automatycznie dla każdego route (w tym nowych jak `/konkurs`). Do tego nie dotykasz.
- Custom eventy emituj **wyłącznie** przez typowany helper `trackEvent(name, params)` z `src/lib/analytics.ts`. Surowego `gtag` / `sendGAEvent` nie wywołujemy — każdy nowy event musi mieć typ w `AnalyticsEvents`, żeby IDE łapał literówki.
- Konwencje nazewnicze (trzymaj się wzorców `contact_form_*`, `konkurs_form_*`, `hero_cta_click`):
  - `*_form_start` — pierwszy `focus` w formularzu (uncontrolled, flaga w `useRef`).
  - `*_form_submit` — odpala się z `useEffect` zależnym od `state.status === "success"` po Server Action.
  - `*_cta_click` — kliknięcie przycisku/linku CTA, z paramem `location` gdy CTA pojawia się w kilku miejscach.
- Czysty `useActionState` gubi dane wejściowe po sukcesie, więc jeśli event submit wymaga parametru z formularza (np. wybrana odpowiedź w `konkurs_form_submit: { answer }`), trzymaj bieżącą wartość w `useRef` aktualizowanym z `onChange` na polu — nie dodawaj `useState` tylko dla analityki.
- Nie emituj eventów „na zapas". Ale nowy formularz albo nowe primary CTA **bez** eventów to bug, nie skrót.

## Tooling

- **Package manager: pnpm** (10.x). `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm format`, `pnpm typecheck`.
- **ESLint 9** flat config (`eslint.config.mjs`) z `eslint-config-next/core-web-vitals` + `/typescript`.
- **Prettier** z `prettier-plugin-tailwindcss` (auto-sort klas).
- **Husky + lint-staged** na pre-commit (hook używa `npx lint-staged` — portable, nie wymaga pnpm w PATH).
- **Line endings:** LF w repo (wymuszone `.gitattributes`).

## Operational notes for AI

- Nie dodawaj trailerów typu `Co-Authored-By: Claude/Anthropic` ani "Generated with Claude Code" do commitów ani PR-ów.
- Commits + PR w języku angielskim, krótkie subject + opisowy body.
- Gdy piszesz/modyfikujesz routing, layouty, server actions lub data fetching — **najpierw** query context7 dla `/vercel/next.js/v16.2.2`, potwierdź API, potem koduj.
- Nie instaluj paczek Radix ani framer-motion — mamy już `@base-ui/react` i `motion`.
<!-- END:nextjs-agent-rules -->
