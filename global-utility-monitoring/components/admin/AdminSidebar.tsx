"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, Bell, Sliders, Settings, Activity, ChevronRight } from "lucide-react";

const navItems = [
  { href: "/admin/",            label: "Overview",   icon: LayoutDashboard },
  { href: "/admin/properties/", label: "Properties", icon: Building2       },
  { href: "/admin/alerts/",     label: "Alerts",     icon: Bell            },
  { href: "/admin/sensors/",    label: "Sensors",    icon: Sliders         },
  { href: "/admin/settings/",   label: "Settings",   icon: Settings        },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar" style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "1.25rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #16A34A, #EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Activity size={17} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.02em" }}>RUSK</div>
            <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Admin</div>
          </div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: "1rem 0.75rem" }}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== "/admin/" && pathname.startsWith(href));
          return (
            <Link key={href} href={href} style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.6rem 0.75rem", borderRadius: 8, marginBottom: "0.2rem",
              color: active ? "#22C55E" : "var(--text-secondary)",
              background: active ? "rgba(34,197,94,0.1)" : "transparent",
              textDecoration: "none", fontSize: "0.875rem", fontWeight: active ? 600 : 400,
              transition: "all 0.15s",
            }}>
              <Icon size={17} />
              <span style={{ flex: 1 }}>{label}</span>
              {active && <ChevronRight size={13} />}
            </Link>
          );
        })}
      </nav>
      <div style={{ padding: "1rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} className="pulse-green" />
          All systems nominal
        </div>
      </div>
    </aside>
  );
}
