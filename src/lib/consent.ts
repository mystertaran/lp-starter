"use client";

/**
 * Google Consent Mode v2 wiring for The Fabos.
 *
 * Before any consent decision:
 *   - the inline script in the root layout pushes `gtag('consent', 'default', { ... 'denied' })`
 *     into dataLayer, so gtag.js boots in restricted mode the moment it's loaded by
 *     @next/third-parties/google.
 *
 * After the user interacts with the banner:
 *   - {@link applyConsent} is called, which pushes `gtag('consent', 'update', ...)` and
 *     persists the choice in localStorage so future visits skip the banner.
 */

export type ConsentChoice = "granted" | "denied";

export type ConsentState = {
  analytics: ConsentChoice;
  timestamp: number;
};

export const CONSENT_STORAGE_KEY = "thefabos_consent_v1";
export const CONSENT_OPEN_EVENT = "fabos:open-consent";

type GtagWindow = {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

function gtag(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as GtagWindow;
  if (typeof w.gtag === "function") {
    w.gtag(...args);
    return;
  }
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push(args);
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.analytics !== "granted" && parsed.analytics !== "denied") return null;
    return {
      analytics: parsed.analytics,
      timestamp: typeof parsed.timestamp === "number" ? parsed.timestamp : Date.now(),
    };
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — best effort */
  }
}

export function applyConsent(analytics: ConsentChoice): void {
  gtag("consent", "update", {
    analytics_storage: analytics,
    // We do not run ads; keep ad-related consents denied regardless of analytics choice.
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

/** Trigger the banner to re-open from anywhere (e.g. the footer link). */
export function openConsentBanner(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}
