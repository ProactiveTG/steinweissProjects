import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aquasocius — Pure Water. Zero Chemicals.",
    template: "%s | Aquasocius",
  },
  description:
    "Aquasocius delivers hydrodynamic cavitation water purification for commercial, residential, and hospitality properties — no chemicals required.",
  keywords: [
    "water purification",
    "hydrodynamic cavitation",
    "chemical-free water treatment",
    "commercial water systems",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aquasocius.com",
    siteName: "Aquasocius",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
