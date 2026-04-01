"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Bell,
  BarChart3,
  Settings,
  Droplets,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/",          label: "Overview",  icon: LayoutDashboard },
  { href: "/clients/",  label: "Clients",   icon: Users           },
  { href: "/alerts/",   label: "Alerts",    icon: Bell            },
  { href: "/analytics/",label: "Analytics", icon: BarChart3       },
  { href: "/settings/", label: "Settings",  icon: Settings        },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar" style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Logo */}
      <div style={{ padding: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "10px",
            background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Droplets size={20} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>Aquasocius</div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Command</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "1rem 0.75rem" }}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.625rem 0.75rem",
                borderRadius: "8px",
                marginBottom: "0.25rem",
                color: active ? "#00D4FF" : "var(--text-secondary)",
                background: active ? "rgba(0,212,255,0.08)" : "transparent",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: active ? 600 : 400,
                transition: "all 0.15s",
                position: "relative",
              }}
            >
              <Icon size={18} />
              <span style={{ flex: 1 }}>{label}</span>
              {active && <ChevronRight size={14} />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem" }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--success)",
            boxShadow: "0 0 6px var(--success)",
          }} className="pulse-dot" />
          <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>All systems operational</span>
        </div>
      </div>
    </aside>
  );
}
