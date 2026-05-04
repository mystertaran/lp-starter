const SYMPTOMS = [
  { kicker: "01", text: "Dane są w kilku miejscach — żadne nie jest pełne." },
  { kicker: "02", text: "Zespół codziennie godzi te same liczby ręcznie." },
  { kicker: "03", text: "Każdy dział widzi inny stan — i każdy ma rację po swojemu." },
  { kicker: "04", text: "Procesy „gdzieś się rozchodzą” — nikt nie wie gdzie." },
] as const;

export function Symptoms() {
  return (
    <section id="symptomy" className="border-border bg-surface border-b">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
              Problem
            </p>
            <h2 className="text-display-lg font-display text-foreground uppercase">
              Kiedy narzędzia zaczynają przeszkadzać zamiast pomagać.
            </h2>
          </div>

          <ul className="divide-border divide-y">
            {SYMPTOMS.map((item) => (
              <li
                key={item.kicker}
                className="grid grid-cols-[2.5rem_1fr] gap-5 py-5 md:grid-cols-[4rem_1fr] md:gap-8 md:py-6"
              >
                <span className="font-display text-accent text-xl md:text-2xl">{item.kicker}</span>
                <p className="text-foreground text-lg md:text-xl">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-display text-display-md text-foreground mt-14 max-w-3xl uppercase md:mt-20">
          Im większy biznes, <span className="text-accent">tym większy chaos.</span>
        </p>
      </div>
    </section>
  );
}
