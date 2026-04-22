const MODULES = [
  {
    title: "Zamówienia",
    description: "Widok wszystkich kanałów sprzedaży w jednym ekranie.",
  },
  {
    title: "Magazyn i preordery",
    description: "Stany magazynowe synchronizowane w czasie rzeczywistym.",
  },
  {
    title: "Zwroty i reklamacje",
    description: "Od zgłoszenia klienta po korektę księgową.",
  },
  {
    title: "Faktury i korekty",
    description: "W obiegu z systemem księgowym — bez ręcznego przepisywania.",
  },
  {
    title: "Strefa BOK",
    description: "Pełna ścieżka zamówienia w jednym widoku dla obsługi klienta.",
  },
  {
    title: "Feed produktowy",
    description: "Automatyczna dystrybucja oferty do marketplace'ów i reklam.",
  },
  {
    title: "Automatyzacje",
    description: "Reguły biznesowe zamiast powtarzalnej ręcznej pracy.",
  },
] as const;

export function Solution() {
  return (
    <section id="rozwiazanie" className="border-border border-b">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Rozwiązanie
          </p>
          <h2 className="text-display-lg font-display text-foreground uppercase">
            {"Nie kolejna in­te­gra­cja. "}
            <span className="text-accent">Ar­chi­tek­tura.</span>
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            Zamiast łatać dziury kolejnymi narzędziami — jedno centrum operacyjne, które staje się
            jedynym źródłem prawdy o zamówieniach, magazynie i finansach.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:mt-16 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 lg:gap-y-14">
          {MODULES.map((mod, i) => (
            <article key={mod.title} className="flex gap-5">
              <span className="font-display text-muted-foreground mt-1 shrink-0 text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-foreground text-xl uppercase">{mod.title}</h3>
                <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
