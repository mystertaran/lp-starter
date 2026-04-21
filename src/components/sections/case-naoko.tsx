const EFFECTS = [
  {
    title: "Większa kontrola",
    description: "Nad każdym etapem zamówienia — od koszyka po korektę księgową.",
  },
  {
    title: "Mniej błędów",
    description: "Między działami i systemami. Jedno źródło prawdy zamiast siedmiu.",
  },
  {
    title: "Szybsza obsługa",
    description: "Klient, zwroty i reklamacje w jednym widoku dla zespołu BOK.",
  },
  {
    title: "Skalowalność bez ludzi",
    description: "Operacje rosną bez dokładania etatów do uzgadniania arkuszy.",
  },
] as const;

export function CaseNaoko() {
  return (
    <section id="case-naoko" className="border-border border-b">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
              Case study
            </p>
            <h2 className="text-display-lg font-display text-foreground uppercase">
              NAOKO Studio.
            </h2>
            <p className="text-muted-foreground mt-7 max-w-xl text-lg leading-relaxed md:text-xl">
              Polska marka modowa. Jedna z pierwszych w Polsce, które połączyły modę ze sztuczną
              inteligencją. Gdy dynamiczny wzrost zaczął tworzyć chaos w operacjach — zbudowaliśmy
              im centrum dowodzenia.
            </p>
          </div>

          <ul className="divide-border divide-y">
            {EFFECTS.map((effect) => (
              <li key={effect.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-display text-foreground text-xl uppercase">{effect.title}</h3>
                <p className="text-muted-foreground mt-2 text-base leading-relaxed md:text-lg">
                  {effect.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
