const LEVELS = [
  {
    level: "01",
    title: "Mały sklep",
    scope: "SaaS + gotowe integracje.",
    us: "Tu jeszcze nas nie potrzebujesz.",
    active: false,
  },
  {
    level: "02",
    title: "Rosnący sklep",
    scope: "Centralizacja danych, lekki OMS, eliminacja chaosu. Jeden widok zamówień i magazynu.",
    us: "Zaczynamy tutaj.",
    active: true,
  },
  {
    level: "03",
    title: "Skala",
    scope: "Dedykowana platforma operacyjna. Pełna automatyzacja logiki biznesowej.",
    us: "Idziemy razem dalej.",
    active: true,
  },
] as const;

export function Maturity() {
  return (
    <section id="dojrzalosc" className="border-border bg-surface border-b">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Gdzie jesteś
          </p>
          <h2 className="text-display-lg font-display text-foreground uppercase">
            Trzy poziomy
            <br className="md:hidden" /> dojrzałości
            <br className="md:hidden" /> operacyjnej.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            Pracujemy od poziomu 2. Jeżeli jeszcze nie jesteś gotów — powiemy Ci otwarcie i polecimy
            tańsze rozwiązanie.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:gap-6 lg:grid-cols-3">
          {LEVELS.map((l) => (
            <article
              key={l.level}
              className={
                l.active
                  ? "border-foreground bg-background flex flex-col border-2 p-6 md:p-8"
                  : "border-border bg-background flex flex-col border p-6 md:p-8"
              }
            >
              <span className="font-display text-muted-foreground text-sm">{l.level}</span>
              <h3 className="font-display text-foreground mt-3 text-2xl uppercase">{l.title}</h3>
              <p className="text-muted-foreground mt-4 flex-1 text-base leading-relaxed">
                {l.scope}
              </p>
              <p
                className={
                  l.active
                    ? "border-border text-accent mt-8 border-t pt-4 text-base font-semibold"
                    : "border-border text-muted-foreground mt-8 border-t pt-4 text-base font-semibold"
                }
              >
                {l.us}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
