"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LogoFull from "@/components/brand/LogoFull";

const navLinks = [
  { href: "/technology/", label: "Technology" },
  { href: "/product/",    label: "Product"    },
  { href: "/markets/",    label: "Markets"    },
  { href: "/about/",      label: "About"      },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,22,40,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoFull size="sm" />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                style={{
                  position: "relative",
                  padding: "0.5rem 0.875rem",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: active ? "#fff" : "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: 4, left: "0.875rem", right: "0.875rem",
                      height: 2,
                      background: "var(--gradient-water)",
                      borderRadius: 1,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link
            href="/contact/"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "0.5rem 1.25rem",
              borderRadius: 8,
              fontSize: "0.875rem",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
              color: "#fff",
              textDecoration: "none",
            }}
            className="hidden md:block btn-shimmer"
          >
            Get a Demo
          </Link>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", padding: "0.5rem" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(10,22,40,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}
          >
            <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", fontSize: "1rem", color: "var(--text-secondary)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {label}
                </Link>
              ))}
              <Link href="/contact/" onClick={() => setMenuOpen(false)} style={{ marginTop: "0.5rem", padding: "0.875rem", textAlign: "center", background: "linear-gradient(135deg, #00D4FF, #7B61FF)", borderRadius: 8, color: "#fff", fontWeight: 600, textDecoration: "none" }}>
                Get a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
