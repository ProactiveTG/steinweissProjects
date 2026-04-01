"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Bell } from "lucide-react";
import { portalAlerts } from "@/lib/ruskData";

const navItems = [
  { href: "/portal/",          label: "Overview"       },
  { href: "/portal/valves/",   label: "Valves"         },
  { href: "/portal/alerts/",   label: "Alerts"         },
  { href: "/portal/support/",  label: "Support"        },
];

export default function PortalNav() {
  const pathname = usePathname();
  const unread = portalAlerts.filter(a => !a.read).length;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: "var(--nav-height)",
      background: "rgba(13,31,15,0.92)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
      display: "flex", alignItems: "center",
      padding: "0 2rem", gap: "1.5rem", zIndex: 100,
    }}>
      <Link href="/portal/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", marginRight: "0.5rem" }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg, #16A34A, #EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Activity size={15} color="white" />
        </div>
        <span style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.02em" }}>RUSK</span>
        <span style={{ fontSize: "0.65rem", color: "#86EFAC", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 4, padding: "1px 5px" }}>Portal</span>
      </Link>
      <div style={{ display: "flex", gap: "0.25rem", flex: 1 }}>
        {navItems.map(({ href, label }) => {
          const active = pathname === href || (href !== "/portal/" && pathname.startsWith(href));
          return (
            <Link key={href} href={href} style={{
              padding: "0.4rem 0.75rem", borderRadius: 8, fontSize: "0.85rem",
              fontWeight: active ? 600 : 400,
              color: active ? "#22C55E" : "#86EFAC",
              background: active ? "rgba(34,197,94,0.08)" : "transparent",
              textDecoration: "none", transition: "all 0.15s",
            }}>{label}</Link>
          );
        })}
      </div>
      <div style={{ position: "relative", cursor: "pointer" }}>
        <Bell size={18} color="#86EFAC" />
        {unread > 0 && (
          <span style={{ position: "absolute", top: -4, right: -4, width: 15, height: 15, borderRadius: "50%", background: "var(--warning)", fontSize: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff" }}>{unread}</span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #16A34A, #EA580C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, color: "#fff" }}>LW</div>
        <span style={{ fontSize: "0.82rem", color: "#86EFAC" }}>Lakeside Water</span>
      </div>
    </nav>
  );
}
