const GROUPS: ReadonlyArray<{ kicker: string; items: readonly string[] }> = [
  {
    kicker: "Sklep i marketplace",
    items: ["Shopify", "Shoper", "Selly", "Triso Shop", "Allegro", "Amazon", "Empik"],
  },
  {
    kicker: "Fulfillment, kurierzy, zwroty",
    items: [
      "Integriser",
      "W2S",
      "InPost",
      "DPD",
      "DHL",
      "GLS",
      "Wygodne Zwroty",
      "Własny portal zwrotów",
    ],
  },
  {
    kicker: "Księgowość, BOK, marketing",
    items: [
      "Comarch Optima",
      "Subiekt",
      "wFirma",
      "Zowie",
      "Zendesk",
      "Thulium",
      "GetResponse",
      "Edrone",
      "EmailLabs",
      "Meta",
      "Google Merchant Center",
      "Power BI",
      "Google Cloud",
    ],
  },
];

export function Integrations() {
  return (
    <section id="integracje" className="border-border bg-surface border-b">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Integracje
          </p>
          <h2 className="text-display-lg font-display text-foreground uppercase">
            Spinamy to, z czym już pracujesz.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            Bez migracji, bez wymiany kanałów, bez „wszystko od nowa”. Ponad 30 platform już na
            pokładzie, kolejne dokładamy przez API.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {GROUPS.map((group) => (
            <div key={group.kicker} className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:gap-10">
              <p className="text-muted-foreground text-sm font-semibold tracking-[0.14em] uppercase">
                {group.kicker}
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-foreground text-xl uppercase md:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-16 max-w-3xl text-lg md:text-xl">
          Nie ma tu czegoś, z czego korzystasz?{" "}
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
