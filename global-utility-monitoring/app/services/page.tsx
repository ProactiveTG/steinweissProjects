"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Bell, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Valve Telemetry Platform",
    price: "From $299/mo",
    features: ["Real-time position, flow, and pressure monitoring", "Up to 50 valve sensors per property", "7-day historical data retention", "Email + SMS alerts"],
  },
  {
    icon: Bell,
    title: "Advanced Alerting & Control",
    price: "From $599/mo",
    features: ["Everything in Telemetry", "Remote valve actuation", "Custom alert thresholds", "30-day data retention", "Priority support SLA"],
    highlight: true,
  },
  {
    icon: Settings,
    title: "Enterprise Fleet Management",
    price: "Custom pricing",
    features: ["Unlimited properties", "Unlimited valve sensors", "1-year data retention", "Dedicated account manager", "On-site training", "API access"],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>Simple, scalable pricing</h1>
        <p style={{ color: "#86EFAC", fontSize: "1.05rem" }}>Choose the plan that fits your fleet size and operational needs.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {services.map(({ icon: Icon, title, price, features, highlight }, i) => (
          <motion.div
            key={title}
            className="card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              border: highlight ? "1px solid rgba(22,163,74,0.45)" : undefined,
              position: "relative",
            }}
          >
            {highlight && (
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #16A34A, #EA580C)",
                borderRadius: 9999,
                padding: "0.2rem 1rem",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#fff",
                whiteSpace: "nowrap",
              }}>MOST POPULAR</div>
            )}
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <Icon size={20} style={{ color: "#22C55E" }} />
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{title}</h3>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#22C55E", marginBottom: "1.5rem" }}>{price}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              {features.map(f => (
                <li key={f} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", color: "#86EFAC" }}>
                  <span style={{ color: "#22C55E", flexShrink: 0, marginTop: 1 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/contact/" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              background: highlight ? "var(--brand-green)" : "transparent",
              color: highlight ? "#fff" : "#22C55E",
              border: highlight ? "none" : "1px solid rgba(34,197,94,0.3)",
              padding: "0.75rem",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.875rem",
            }}>
              Get started <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
