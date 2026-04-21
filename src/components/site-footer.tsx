import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/theFabos_logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Image
              src={logo}
              alt="The Fabos"
              width={105}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="font-display text-background mt-6 max-w-sm text-xl leading-tight uppercase">
              Jedno centrum dowodzenia dla wielokanałowego{" "}
              <span className="whitespace-nowrap">e-commerce</span>.
            </p>
          </div>

          <div>
            <p className="text-background/60 text-xs font-semibold tracking-[0.14em] uppercase">
              Kontakt
            </p>
            <p className="text-background mt-4 text-base font-semibold">Bartek Kraśniewski</p>
            <p className="text-background/70 text-sm">E-commerce operations</p>
            <ul className="text-background/80 mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="decoration-accent hover:text-accent underline decoration-2 underline-offset-4"
                  href="mailto:bartek@fabos.pl"
                >
                  bartek@fabos.pl
                </a>
              </li>
              <li>
                <a
                  className="decoration-accent hover:text-accent underline decoration-2 underline-offset-4"
                  href="tel:+48794433282"
                >
                  +48 794 433 282
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-background/60 text-xs font-semibold tracking-[0.14em] uppercase">
              Dane firmy
            </p>
            <address className="text-background/80 mt-4 text-sm leading-relaxed not-italic">
              The Fabos Sp. z o.o.
              <br />
              ul. Pomorska 175 lok. 26
              <br />
              90-236 Łódź
              <br />
              <br />
              NIP 725 236 46 10
              <br />
              KRS 0001226281
              <br />
              REGON 544067052
              <br />
              Kapitał zakładowy 5 000 zł
            </address>
          </div>
        </div>

        <div className="border-background/15 text-background/60 mt-16 flex flex-col gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Fabos Sp. z o.o. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <Link
              href="/polityka-prywatnosci"
              className="decoration-background/30 hover:text-background underline underline-offset-4"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
