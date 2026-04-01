import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MarketingNav from "@/components/marketing/MarketingNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Rusk — Intelligent Valve Monitoring", template: "%s | Rusk" },
  description: "Rusk delivers AI-powered valve sensor monitoring for commercial and industrial water systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MarketingNav />
        <main style={{ paddingTop: "var(--nav-height)" }}>
          {children}
        </main>
        <footer style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "3rem 2rem",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "0.85rem",
        }}>
          © {new Date().getFullYear()} Rusk Utility Monitoring · All rights reserved
        </footer>
      </body>
    </html>
  );
}
