import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "The Fabos — jedno centrum dowodzenia dla wielokanałowego e-commerce",
  description:
    "The Fabos spina zamówienia, magazyn, zwroty i księgowość w jedno źródło prawdy. Zamiast kolejnego narzędzia do tego chaosu.",
  metadataBase: new URL("https://fabos.pl"),
  openGraph: {
    title: "The Fabos — jedno centrum dowodzenia dla wielokanałowego e-commerce",
    description:
      "Spinamy kanały sprzedaży, fulfillment, zwroty i księgowość w jeden system. Bez wymiany, bez migracji.",
    locale: "pl_PL",
    type: "website",
  },
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
      <body className="flex min-h-full flex-col font-sans">{children}</body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
