"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitKonkurs, type KonkursState } from "@/app/actions/konkurs";
import { trackEvent } from "@/lib/analytics";

const ANSWERS = ["NAOKU", "NAOKO STUDIO", "NOOKO"] as const;
type Answer = (typeof ANSWERS)[number];

const INITIAL: KonkursState = { status: "idle" };

const PINK = "oklch(0.68 0.26 355)";
const PINK_DEEP = "oklch(0.6 0.26 355)";

export function KonkursForm() {
  const [state, action, pending] = useActionState<KonkursState, FormData>(submitKonkurs, INITIAL);
  const startedRef = useRef(false);
  const answerRef = useRef<Answer | "">("");

  useEffect(() => {
    if (state.status === "success" && answerRef.current) {
      trackEvent("konkurs_form_submit", { answer: answerRef.current });
    }
  }, [state.status]);

  function onFocusCapture() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("konkurs_form_start", {});
  }

  if (state.status === "success") {
    return (
      <div
        className="mx-auto flex w-full max-w-3xl items-center justify-center px-8 py-24 shadow-2xl md:py-32"
        style={{ backgroundColor: PINK }}
      >
        <p className="font-display text-background text-3xl tracking-[0.08em] uppercase md:text-5xl">
          Dziękujemy
        </p>
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden shadow-2xl md:grid-cols-2">
      <div className="bg-surface text-surface-foreground flex flex-col justify-center p-8 md:p-12 lg:p-14">
        <p className="font-display text-foreground text-2xl tracking-tight uppercase md:text-3xl">
          Konkurs!
        </p>
        <p className="text-foreground mt-6 text-xl leading-[1.25] font-medium md:text-2xl">
          NAOKO wchodzi w nowy etap i zmienia oficjalną nazwę marki. Zgadnij, jak będzie brzmiała
          nowa nazwa! <span aria-hidden="true">👀</span>
        </p>
        <p className="text-muted-foreground mt-6 text-sm leading-relaxed md:text-base">
          Ta sama marka. To samo DNA. Nowy rozdział. Zaznacz swój typ obok — jak będzie brzmiała
          nowa oficjalna nazwa marki.
        </p>
      </div>

      <form
        action={action}
        onFocusCapture={onFocusCapture}
        className="flex flex-col gap-4 p-8 md:p-12 lg:p-14"
        style={{ backgroundColor: PINK }}
        noValidate
      >
        <div>
          <label
            htmlFor="answer"
            className="text-background text-sm font-semibold tracking-[0.12em] uppercase"
          >
            Wybierz odpowiedź
          </label>
          <div className="relative mt-2">
            <select
              id="answer"
              name="answer"
              required
              defaultValue=""
              aria-invalid={fieldErrors.answer ? "true" : undefined}
              onChange={(e) => {
                const v = e.currentTarget.value;
                answerRef.current = (ANSWERS as readonly string[]).includes(v) ? (v as Answer) : "";
              }}
              className="text-foreground block h-12 w-full appearance-none border-0 bg-white pr-12 pl-4 text-base outline-none focus:ring-2 focus:ring-white"
            >
              <option value="" disabled>
                Wybierz odpowiedź
              </option>
              {ANSWERS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="text-foreground pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="5 8 10 13 15 8" />
            </svg>
          </div>
          {fieldErrors.answer ? (
            <p className="text-background mt-2 text-sm font-semibold">{fieldErrors.answer}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="name" className="sr-only">
            Imię
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Imię"
            aria-invalid={fieldErrors.name ? "true" : undefined}
            className="text-foreground placeholder:text-muted-foreground block h-12 w-full border-0 bg-white px-4 text-base outline-none focus:ring-2 focus:ring-white"
          />
          {fieldErrors.name ? (
            <p className="text-background mt-2 text-sm font-semibold">{fieldErrors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            aria-invalid={fieldErrors.email ? "true" : undefined}
            className="text-foreground placeholder:text-muted-foreground block h-12 w-full border-0 bg-white px-4 text-base outline-none focus:ring-2 focus:ring-white"
          />
          {fieldErrors.email ? (
            <p className="text-background mt-2 text-sm font-semibold">{fieldErrors.email}</p>
          ) : null}
        </div>

        {state.status === "error" && !Object.keys(fieldErrors).length ? (
          <p role="alert" className="text-background text-sm font-semibold">
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PINK_DEEP)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          onFocus={(e) => (e.currentTarget.style.backgroundColor = PINK_DEEP)}
          onBlur={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          className="font-display text-background focus-visible:ring-background/60 mt-2 inline-flex h-14 items-center justify-center border-2 border-white bg-transparent text-base tracking-[0.12em] uppercase transition-[background-color,transform] focus-visible:ring-4 focus-visible:outline-none active:translate-y-px disabled:opacity-60"
        >
          {pending ? "Wysyłam..." : "Wyślij"}
        </button>

        <p className="text-background/80 mt-1 text-[11px] leading-snug">
          Wysyłając zgłoszenie akceptujesz przetwarzanie danych w celu przeprowadzenia konkursu.
        </p>
      </form>
    </div>
  );
}
