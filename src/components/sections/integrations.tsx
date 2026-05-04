const GROUPS: ReadonlyArray<{ kicker: string; items: readonly string[] }> = [
  {
    kicker: "Grupa pierwsza",
    items: ["Narzędzie A", "Narzędzie B", "Narzędzie C", "Narzędzie D"],
  },
  {
    kicker: "Grupa druga",
    items: ["Narzędzie E", "Narzędzie F", "Narzędzie G"],
  },
  {
    kicker: "Grupa trzecia",
    items: ["Narzędzie H", "Narzędzie I", "Narzędzie J", "Narzędzie K"],
  },
];

export function Integrations() {
  return (
    <section id="integracje" className="border-border bg-surface border-b">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Integracje
          </p>
          <h2 className="text-display-lg font-display text-foreground uppercase">
            Spinamy to, z czym już pracujesz.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            Bez migracji, bez wymiany — gotowe konektory do najpopularniejszych narzędzi, kolejne
            dokładamy przez API.
          </p>
        </div>

        <div className="mt-12 space-y-10 md:mt-16 md:space-y-14">
          {GROUPS.map((group) => (
            <div key={group.kicker} className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:gap-10">
              <p className="text-muted-foreground text-sm font-semibold tracking-[0.14em] uppercase">
                {group.kicker}
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-foreground text-lg uppercase md:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-12 max-w-3xl text-lg md:mt-16 md:text-xl">
          Nie ma tu czegoś, z czego korzystasz?
          <br className="md:hidden" />{" "}
          <a
            href="#kontakt"
            className="text-foreground decoration-accent hover:text-accent font-semibold underline decoration-2 underline-offset-4"
          >
            Spinamy przez API.
          </a>
        </p>
      </div>
    </section>
  );
}
