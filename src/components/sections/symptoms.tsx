const SYMPTOMS = [
  {
    kicker: "01",
    text: "Dane leżą w 7 miejscach — żadne nie jest wiarygodne.",
  },
  {
    kicker: "02",
    text: "Zespół każdego dnia uzgadnia stany magazynowe ręcznie.",
  },
  {
    kicker: "03",
    text: "Każdy dział widzi zamówienie inaczej — BOK, magazyn, księgowość.",
  },
  {
    kicker: "04",
    text: "Zwroty rozchodzą się bez centralnej widoczności.",
  },
] as const;

export function Symptoms() {
  return (
    <section id="symptomy" className="border-border bg-surface border-b">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div>
            <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
              Problem
            </p>
            <h2 className="text-display-lg font-display text-foreground uppercase">
              Kiedy narzędzia zaczynają przeszkadzać zamiast pomagać.
            </h2>
          </div>

          <ul className="divide-border divide-y">
            {SYMPTOMS.map((item) => (
              <li key={item.kicker} className="grid grid-cols-[4rem_1fr] gap-8 py-6">
                <span className="font-display text-accent text-2xl">{item.kicker}</span>
                <p className="text-foreground text-lg md:text-xl">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-display text-display-md text-foreground mt-20 max-w-3xl uppercase">
          Im większa sprzedaż, <span className="text-accent">tym większy chaos.</span>
        </p>
      </div>
    </section>
  );
}
