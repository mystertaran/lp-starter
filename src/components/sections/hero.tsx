import { KineticWords } from "./kinetic-words";
import { HeroCta } from "./hero-cta";

export function Hero() {
  return (
    <section className="border-border relative overflow-hidden border-b">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-muted-foreground mb-5 font-sans text-sm font-semibold tracking-[0.14em] uppercase">
            Operations platform · wielokanałowy{" "}
            <span className="whitespace-nowrap">e-commerce</span>
          </p>
          <h1 className="text-display-xl font-display text-foreground uppercase">
            {"Jedno centrum do­wo­dze­nia dla Twojego "}
            <span className="whitespace-nowrap">e-commerce.</span>
          </h1>
          <p className="text-muted-foreground mt-7 max-w-xl font-sans text-lg leading-relaxed md:text-xl">
            The Fabos spina kanały sprzedaży, fulfillment, zwroty i księgowość w jedno źródło
            prawdy. Zamiast kolejnego narzędzia do tego chaosu.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <HeroCta />
            <a
              href="#case-naoko"
              className="text-foreground hover:text-accent text-sm font-semibold underline decoration-2 underline-offset-4"
            >
              Zobacz, jak zrobiliśmy to dla NAOKO →
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <KineticWords />
        </div>
      </div>
    </section>
  );
}
