import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { CookieBanner } from "@/components/cookie-banner";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const DEFAULT_TITLE = `${SITE.product} — ${SITE.tagline}`;
const DEFAULT_DESCRIPTION = SITE.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE.product}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.product,
  authors: [{ name: SITE.company.legal, url: SITE.domain }],
  creator: SITE.company.legal,
  publisher: SITE.company.legal,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.product,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE.domain,
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const rawGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gaId = rawGaId?.startsWith("G-") && !rawGaId.includes("X") ? rawGaId : null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${archivo.variable} ${archivoBlack.variable} h-full antialiased`}>
      <head>
        {/*
         * Google Consent Mode v2 — bootstraps dataLayer and sets every consent
         * signal to 'denied' BEFORE @next/third-parties loads gtag.js. Updated to
         * 'granted' by <CookieBanner /> after the user accepts.
         */}
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'denied','personalization_storage':'denied','security_storage':'granted','wait_for_update':500});`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
