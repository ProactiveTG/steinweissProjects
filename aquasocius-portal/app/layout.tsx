import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Aquasocius Portal — Property Dashboard", template: "%s | Portal" },
  description: "Monitor your Aquasocius water purification system in real time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <TopNav />
        <main style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
