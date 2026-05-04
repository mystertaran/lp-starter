"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { trackEvent } from "@/lib/analytics";
import { SITE } from "@/lib/site";

const INITIAL: ContactState = { status: "idle" };

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
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24 lg:px-10 lg:py-32">
          <p className="text-accent mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Odebrane
          </p>
          <h2 className="text-display-md font-display text-foreground uppercase">
            Dziękujemy. Odezwiemy się w ciągu 24 godzin.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Jeśli potrzebujesz nas wcześniej — napisz na{" "}
            <a
              className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
              href={`mailto:${SITE.contact.email}`}
            >
              {SITE.contact.email}
            </a>{" "}
            albo zadzwoń{" "}
            <a
              className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
              href={`tel:${SITE.contact.phoneTel}`}
            >
              <span className="whitespace-nowrap">{SITE.contact.phone}</span>
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
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </p>
          <h2 className="text-display-lg font-display text-foreground uppercase">
            Umówmy rozmowę.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            30 minut. Zobaczysz, czy {SITE.product} pasuje do skali Twojego biznesu. Bez slajdów
            sprzedażowych.
          </p>
        </div>

        <form
          action={action}
          onFocusCapture={onFocusCapture}
          className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2"
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
            label="Firma"
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
              htmlFor="message"
              className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase"
            >
              Co Cię interesuje? (opcjonalnie)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border-border bg-background text-foreground focus:border-accent mt-2 block w-full border p-4 text-base transition-colors outline-none"
              placeholder="Powiedz krótko, na czym Ci zależy..."
            />
          </div>

          <label className="text-muted-foreground flex items-center gap-3 text-sm md:col-span-2">
            <input
              type="checkbox"
              name="consent"
              required
              className="border-border h-4 w-4 shrink-0 border accent-[var(--accent)]"
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
              Twoje dane trafiają tylko do nas. Nie zapisujemy Cię do newslettera.
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
