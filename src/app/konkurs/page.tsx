import type { Metadata } from "next";
import Image from "next/image";
import { KonkursForm } from "./konkurs-form";

export const metadata: Metadata = {
  title: "Konkurs NAOKO — zgadnij nową nazwę marki",
  description:
    "NAOKO zmienia oficjalną nazwę marki. Zgadnij, jak będzie brzmieć i weź udział w konkursie.",
  alternates: { canonical: "/konkurs" },
  robots: { index: false, follow: false },
};

export default function KonkursPage() {
  return (
    <main className="relative flex min-h-[100svh] flex-1 items-center justify-center overflow-hidden px-4 py-12 md:px-8 md:py-16">
      <Image
        src="/background-lp.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="bg-foreground/45 absolute inset-0" />
      <div className="relative w-full">
        <KonkursForm />
      </div>
    </main>
  );
}
