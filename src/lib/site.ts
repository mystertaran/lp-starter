/**
 * Single source of truth for brand-level constants used across the LP.
 * `/start` rewrites this file based on the intake interview.
 */
export const SITE = {
  product: "Acme",
  domain: "https://example.com",
  tagline: "Jedno miejsce, w którym Twoja firma działa szybciej.",
  company: {
    legal: "Acme Sp. z o.o.",
    address1: "ul. Przykładowa 1",
    address2: "00-000 Warszawa",
    nip: "000-000-00-00",
    krs: "0000000000",
    regon: "000000000",
  },
  contact: {
    name: "Anna Kowalska",
    role: "Founder",
    email: "kontakt@example.com",
    phone: "+48 000 000 000",
    phoneTel: "+48000000000",
  },
  cta: {
    primary: "Umów rozmowę",
  },
} as const;
