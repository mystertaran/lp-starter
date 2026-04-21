"use client";

import { openConsentBanner } from "@/lib/consent";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function CookieSettingsLink({ className, children }: Props) {
  return (
    <button
      type="button"
      onClick={openConsentBanner}
      className={
        className ?? "decoration-background/30 hover:text-background underline underline-offset-4"
      }
    >
      {children}
    </button>
  );
}
