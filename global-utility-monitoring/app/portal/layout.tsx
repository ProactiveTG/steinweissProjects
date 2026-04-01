import type { Metadata } from "next";
import PortalNav from "@/components/portal/PortalNav";

export const metadata: Metadata = {
  title: { default: "Rusk Client Portal", template: "%s | Rusk Portal" },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "var(--nav-height)" }}>
      <PortalNav />
      <main>{children}</main>
    </div>
  );
}
