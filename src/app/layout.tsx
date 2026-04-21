import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const DEFAULT_TITLE = "The Fabos — jedno centrum dowodzenia dla wielokanałowego e-commerce";
const DEFAULT_DESCRIPTION =
  "The Fabos spina zamówienia, magazyn, zwroty i księgowość w jedno źródło prawdy. Zamiast kolejnego narzędzia do tego chaosu.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fabos.pl"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — The Fabos",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "The Fabos",
  authors: [{ name: "The Fabos Sp. z o.o.", url: "https://fabos.pl" }],
  creator: "The Fabos Sp. z o.o.",
  publisher: "The Fabos Sp. z o.o.",
  keywords: [
    "OMS",
    "order management system",
    "platforma operacyjna e-commerce",
    "integracja kanałów sprzedaży",
    "zarządzanie zamówieniami",
    "zarządzanie magazynem",
    "fulfillment",
    "zwroty e-commerce",
    "reklamacje e-commerce",
    "preordery",
    "wielokanałowy e-commerce",
    "Shopify integracja",
    "Allegro integracja",
    "Amazon integracja",
    "księgowość e-commerce",
    "The Fabos",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "The Fabos",
    title: DEFAULT_TITLE,
    description:
      "Spinamy kanały sprzedaży, fulfillment, zwroty i księgowość w jeden system. Bez wymiany, bez migracji.",
    url: "https://fabos.pl",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: "Spinamy kanały sprzedaży, fulfillment, zwroty i księgowość w jeden system.",
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
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
