import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Fabos — panuj nad chaosem wielokanałowego e-commerce",
  description:
    "Jedno miejsce do obsługi wielu kanałów sprzedaży, magazynu, zamówień, wysyłek, zwrotów i księgowości.",
};

const rawGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gaId = rawGaId?.startsWith("G-") && !rawGaId.includes("X") ? rawGaId : null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
