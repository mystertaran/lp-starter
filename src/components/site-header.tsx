import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/theFabos_logo.png";

export function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" aria-label="The Fabos — strona główna" className="flex items-center">
          <Image
            src={logo}
            alt="The Fabos"
            width={82}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <Link
          href="#kontakt"
          className="text-foreground decoration-accent hover:text-accent text-sm font-semibold underline decoration-2 underline-offset-4"
        >
          Umów rozmowę
        </Link>
      </div>
    </header>
  );
}
