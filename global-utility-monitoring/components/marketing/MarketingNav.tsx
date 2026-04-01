"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity } from "lucide-react";

const navItems = [
  { href: "/",         label: "Home"     },
  { href: "/about/",   label: "About"    },
  { href: "/services/",label: "Services" },
  { href: "/contact/", label: "Contact"  },
];

export default function MarketingNav() {
  const pathname = usePathname();
  // Only show on marketing pages (not /admin or /portal)
  if (pathname.startsWith("/admin") || pathname.startsWith("/portal")) return null;

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      height: "var(--nav-height)",
      background: "rgba(13,31,15,0.92)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      padding: "0 3rem",
      gap: "2rem",
      zIndex: 100,
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", marginRight: "1rem" }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: "linear-gradient(135deg, #16A34A, #EA580C)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Activity size={17} color="white" />
        </div>
        <span style={{ fontWeight: 800, fontSize: "1rem", color: "#F0FDF4", letterSpacing: "-0.02em" }}>RUSK</span>
      </Link>

      <div style={{ display: "flex", gap: "0.25rem", flex: 1 }}>
        {navItems.map(({ href, label }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link key={href} href={href} style={{
              padding: "0.5rem 0.875rem",
              borderRadius: 8,
              fontSize: "0.875rem",
              fontWeight: active ? 600 : 400,
              color: active ? "#22C55E" : "#86EFAC",
              background: active ? "rgba(34,197,94,0.08)" : "transparent",
              textDecoration: "none",
              transition: "all 0.15s",
            }}>{label}</Link>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Link href="/portal/" className="btn-outline" style={{
          padding: "0.5rem 1.25rem",
          fontSize: "0.85rem",
          borderRadius: 8,
          textDecoration: "none",
          color: "#22C55E",
          border: "1px solid rgba(34,197,94,0.35)",
          fontWeight: 500,
        }}>Client Portal</Link>
        <Link href="/admin/" className="btn-primary" style={{
          padding: "0.5rem 1.25rem",
          fontSize: "0.85rem",
          borderRadius: 8,
          textDecoration: "none",
          background: "var(--brand-green)",
          color: "#fff",
          fontWeight: 600,
        }}>Admin →</Link>
      </div>
    </nav>
  );
}
