"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsEvents = {
  hero_cta_click: { location: "hero" | "nav" | "footer" };
  contact_form_start: Record<string, never>;
  contact_form_submit: { channel_count?: number };
  konkurs_form_start: Record<string, never>;
  konkurs_form_submit: { answer: "NAOKU" | "NAOKO STUDIO" | "NOOKO" };
  scroll_depth: { percent: 25 | 50 | 75 | 100 };
};

export function trackEvent<K extends keyof AnalyticsEvents>(
  name: K,
  params: AnalyticsEvents[K]
): void {
  if (typeof window === "undefined") return;
  sendGAEvent("event", name, params);
}
