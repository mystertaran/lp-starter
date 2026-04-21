"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function HeroCta() {
  return (
    <Link
      href="#kontakt"
      onClick={() => trackEvent("hero_cta_click", { location: "hero" })}
      className="font-display bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-ring/40 inline-flex h-14 items-center justify-center rounded-md px-8 text-base tracking-wide uppercase transition-[transform,background-color] focus-visible:ring-4 focus-visible:outline-none active:translate-y-px"
    >
      Umów rozmowę
    </Link>
  );
}
