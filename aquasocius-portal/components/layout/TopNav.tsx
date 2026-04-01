"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, Bell, ChevronDown } from "lucide-react";
import { alerts } from "@/lib/portalData";

const navItems = [
  { href: "/",         label: "Overview" },
  { href: "/sensors/", label: "Sensors"  },
  { href: "/alerts/",  label: "Alerts"   },
  { href: "/reports/", label: "Reports"  },
  { href: "/support/", label: "Support"  },
];

export default function TopNav() {
  const pathname = usePathname();
  const unread = alerts.filter(a => !a.read).length;

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      height: "var(--nav-height)",
      background: "rgba(10,22,40,0.92)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem",
      gap: "2rem",
      zIndex: 100,
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Droplets size={17} color="white" />
        </div>
        <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>Aquasocius</span>
        <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4, padding: "1px 6px" }}>Portal</span>
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "0.25rem", flex: 1 }}>
        {navItems.map(({ href, label }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              style={{
                padding: "0.5rem 0.875rem",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: active ? 600 : 400,
                color: active ? "#00D4FF" : "var(--text-secondary)",
                background: active ? "rgba(0,212,255,0.08)" : "transparent",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
            >{label}</Link>
          );
        })}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <Bell size={19} color="var(--text-secondary)" />
          {unread > 0 && (
            <span style={{
              position: "absolute", top: -4, right: -4,
              width: 16, height: 16, borderRadius: "50%",
              background: "var(--warning)",
              fontSize: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, color: "#fff",
            }}>{unread}</span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.75rem", fontWeight: 700, color: "#fff",
          }}>MB</div>
          <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Marina Bay</span>
          <ChevronDown size={14} color="var(--text-secondary)" />
        </div>
      </div>
    </nav>
  );
}
