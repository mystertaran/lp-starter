import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          aria-label={`${SITE.product} — strona główna`}
          className="font-display text-foreground text-lg tracking-tight uppercase"
        >
          {SITE.product}
        </Link>
        <a
          href="#kontakt"
          className="text-foreground decoration-accent hover:text-accent text-sm font-semibold underline decoration-2 underline-offset-4"
        >
          {SITE.cta.primary}
        </a>
      </div>
    </header>
  );
}
