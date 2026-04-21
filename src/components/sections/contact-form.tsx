"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { trackEvent } from "@/lib/analytics";

const INITIAL: ContactState = { status: "idle" };

const CHANNELS = [
  "Shopify",
  "WooCommerce",
  "Allegro",
  "Amazon",
  "Empik",
  "Własny sklep",
  "Inne",
] as const;

const VOLUMES: ReadonlyArray<{ value: string; label: string }> = [
  { value: "<100", label: "Do 100 zamówień miesięcznie" },
  { value: "100-1000", label: "100 – 1 000" },
  { value: "1000-10000", label: "1 000 – 10 000" },
  { value: "10000+", label: "Ponad 10 000" },
];

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, INITIAL);
  const startedRef = useRef(false);

  useEffect(() => {
    if (state.status === "success") {
      trackEvent("contact_form_submit", {});
    }
  }, [state.status]);

  function onFocusCapture() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("contact_form_start", {});
  }

  if (state.status === "success") {
    return (
      <section id="kontakt" className="border-border border-b">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="text-accent mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Odebrane
          </p>
          <h2 className="text-display-md font-display text-foreground uppercase">
            Dziękujemy. Bartek odezwie się w ciągu 24 godzin.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Jeśli potrzebujesz nas wcześniej — napisz na{" "}
            <a
              className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
              href="mailto:bartek@fabos.pl"
            >
              bartek@fabos.pl
            </a>{" "}
            albo zadzwoń{" "}
            <a
              className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
              href="tel:+48794433282"
            >
              +48 794 433 282
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  const fieldErrors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  return (
    <section id="kontakt" className="border-border border-b">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </p>
          <h2 className="text-display-lg font-display text-foreground uppercase">
            Umówmy rozmowę.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            30 minut z Bartkiem. Zobaczysz, czy The Fabos pasuje do skali Twoich operacji. Bez
            slajdów sprzedażowych.
          </p>
        </div>

        <form
          action={action}
          onFocusCapture={onFocusCapture}
          className="mt-12 grid gap-6 md:grid-cols-2"
          noValidate
        >
          <Field
            name="name"
            label="Imię i nazwisko"
            required
            autoComplete="name"
            error={fieldErrors.name}
          />
          <Field
            name="company"
            label="Firma / domena sklepu"
            required
            autoComplete="organization"
            error={fieldErrors.company}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            required
            autoComplete="email"
            error={fieldErrors.email}
          />
          <Field
            name="phone"
            label="Telefon (opcjonalnie)"
            type="tel"
            autoComplete="tel"
            error={fieldErrors.phone}
          />

          <div className="md:col-span-2">
            <label
              htmlFor="volume"
              className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase"
            >
              Wolumen zamówień miesięcznie
            </label>
            <select
              id="volume"
              name="volume"
              required
              defaultValue=""
              className="border-border text-foreground focus:border-accent mt-2 block w-full border-b-2 bg-transparent py-3 text-lg transition-colors outline-none"
            >
              <option value="" disabled>
                Wybierz zakres
              </option>
              {VOLUMES.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
            {fieldErrors.volume ? (
              <p className="text-destructive mt-2 text-sm">{fieldErrors.volume}</p>
            ) : null}
          </div>

          <fieldset className="md:col-span-2">
            <legend className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase">
              Główne kanały sprzedaży
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {CHANNELS.map((c) => (
                <label
                  key={c}
                  className="border-border bg-background has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background inline-flex items-center gap-2 border px-4 py-2 text-sm"
                >
                  <input type="checkbox" name="channels" value={c} className="sr-only" />
                  {c}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase"
            >
              Co Cię najbardziej boli? (opcjonalnie)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border-border bg-background text-foreground focus:border-accent mt-2 block w-full border p-4 text-base transition-colors outline-none"
              placeholder="Np. zwroty rozjeżdżają się z księgowością, stany nie zgadzają się między kanałami..."
            />
          </div>

          <label className="text-muted-foreground flex items-start gap-3 text-sm md:col-span-2">
            <input
              type="checkbox"
              name="consent"
              required
              className="border-border mt-1 h-4 w-4 shrink-0 border accent-[var(--accent)]"
            />
            <span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu sprzedażowego.
              Szczegóły:{" "}
              <a
                href="/polityka-prywatnosci"
                className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
              >
                polityka prywatności
              </a>
              .
            </span>
          </label>
          {fieldErrors.consent ? (
            <p className="text-destructive -mt-4 text-sm md:col-span-2">{fieldErrors.consent}</p>
          ) : null}

          {state.status === "error" && !Object.keys(fieldErrors).length ? (
            <p
              role="alert"
              className="bg-destructive/10 text-destructive border-l-0 p-4 text-sm md:col-span-2"
            >
              {state.message}
            </p>
          ) : null}

          <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between md:col-span-2">
            <p className="text-muted-foreground text-xs">
              Twoje dane trafiają tylko do Bartka. Nie zapisujemy Cię do newslettera.
            </p>
            <button
              type="submit"
              disabled={pending}
              className="font-display bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-ring/40 inline-flex h-14 items-center justify-center rounded-md px-8 text-base tracking-wide uppercase transition-[transform,background-color] focus-visible:ring-4 focus-visible:outline-none active:translate-y-px disabled:opacity-60"
            >
              {pending ? "Wysyłam..." : "Wyślij zapytanie"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({ name, label, type = "text", required, autoComplete, error }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        className="border-border text-foreground focus:border-accent aria-[invalid=true]:border-destructive mt-2 block w-full border-b-2 bg-transparent py-3 text-lg transition-colors outline-none"
      />
      {error ? <p className="text-destructive mt-2 text-sm">{error}</p> : null}
    </div>
  );
}
