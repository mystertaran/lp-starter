import Link from "next/link";
import { CookieSettingsLink } from "@/components/cookie-settings-link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-display text-background text-2xl tracking-tight uppercase">
              {SITE.product}
            </p>
            <p className="font-display text-background mt-6 max-w-sm text-xl leading-tight uppercase">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <p className="text-background/60 text-xs font-semibold tracking-[0.14em] uppercase">
              Kontakt
            </p>
            <p className="text-background mt-4 text-base font-semibold">{SITE.contact.name}</p>
            <p className="text-background/70 text-sm">{SITE.contact.role}</p>
            <ul className="text-background/80 mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="decoration-accent hover:text-accent underline decoration-2 underline-offset-4"
                  href={`mailto:${SITE.contact.email}`}
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="decoration-accent hover:text-accent underline decoration-2 underline-offset-4"
                  href={`tel:${SITE.contact.phoneTel}`}
                >
                  <span className="whitespace-nowrap">{SITE.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-background/60 text-xs font-semibold tracking-[0.14em] uppercase">
              Dane firmy
            </p>
            <address className="text-background/80 mt-4 text-sm leading-relaxed not-italic">
              {SITE.company.legal}
              <br />
              {SITE.company.address1}
              <br />
              {SITE.company.address2}
              <br />
              <br />
              NIP {SITE.company.nip}
              <br />
              KRS {SITE.company.krs}
              <br />
              REGON {SITE.company.regon}
            </address>
          </div>
        </div>

        <div className="border-background/15 text-background/60 mt-16 flex flex-col gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.company.legal}. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/polityka-prywatnosci"
              className="decoration-background/30 hover:text-background underline underline-offset-4"
            >
              Polityka prywatności
            </Link>
            <CookieSettingsLink>Zarządzaj cookies</CookieSettingsLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
