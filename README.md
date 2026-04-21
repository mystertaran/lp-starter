# fabos-lp

Landing page dla **FabOS** — platformy integrującej kanały sprzedaży e-commerce (magazyn, zamówienia, wysyłki, zwroty, reklamacje, księgowość) w jedno miejsce.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **Motion** (framer-motion) dla animacji
- **Prettier** + **ESLint** + **Husky** + **lint-staged**
- Design guidance: Impeccable (anti-AI-slop), SkillUI (design tokens)

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm lint         # ESLint
pnpm format       # Prettier write
```

## Struktura

```
src/
  app/            # App Router — layout, pages, route handlers
  components/     # komponenty (ui/, sections/)
  lib/            # utilities, helpers
design-system/    # design tokens z SkillUI
```
