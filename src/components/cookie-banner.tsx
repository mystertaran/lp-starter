"use client";

/* eslint-disable react-hooks/set-state-in-effect --
   The banner visibility is intentionally derived from an external system
   (localStorage) that is only available on the client. Setting state in a
   mount-effect is the canonical way to sync with such a system. Same for
   the custom DOM event that reopens the banner from the footer. */

import { useEffect, useState } from "react";
import { CONSENT_OPEN_EVENT, applyConsent, readConsent, writeConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      applyConsent(existing.analytics);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  function accept() {
    writeConsent({ analytics: "granted", timestamp: Date.now() });
    applyConsent("granted");
    setVisible(false);
  }

  function reject() {
    writeConsent({ analytics: "denied", timestamp: Date.now() });
    applyConsent("denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 lg:px-6 lg:pb-6"
    >
      <div className="bg-background border-border mx-auto max-w-4xl border p-6 shadow-[0_-8px_32px_rgba(10,10,10,0.08)] lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div className="min-w-0">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
              Cookies
            </p>
            <p className="text-foreground mt-3 text-sm leading-relaxed">
              Używamy niezbędnych plików cookies, żeby strona działała, oraz{" "}
              <strong className="font-semibold">analitycznych</strong> (Google Analytics 4) — tylko
              jeśli wyrazisz zgodę. Zgodę możesz w każdej chwili zmienić z poziomu stopki. Szczegóły
              w{" "}
              <a
                href="/polityka-prywatnosci"
                className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
              >
                polityce prywatności
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:justify-end">
            <button
              type="button"
              onClick={reject}
              className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-ring/40 inline-flex h-11 items-center justify-center border px-5 text-sm font-semibold transition-colors focus-visible:ring-4 focus-visible:outline-none"
            >
              Tylko niezbędne
            </button>
            <button
              type="button"
              onClick={accept}
              className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-ring/40 inline-flex h-11 items-center justify-center px-5 text-sm font-semibold transition-colors focus-visible:ring-4 focus-visible:outline-none"
            >
              Akceptuj wszystko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
