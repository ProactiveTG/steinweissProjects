"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Shield, Zap, BarChart3, ArrowRight } from "lucide-react";

const features = [
  { icon: Activity, title: "Real-Time Monitoring",     desc: "Live telemetry from every valve sensor — pressure, flow, and position data streamed continuously." },
  { icon: Shield,   title: "Instant Alerts",           desc: "Anomaly detection triggers alerts before failures become incidents. Your team responds in minutes, not hours." },
  { icon: Zap,      title: "Remote Valve Control",     desc: "Safely open, close, or adjust valve positions from any device with full audit logging." },
  { icon: BarChart3,title: "Performance Analytics",    desc: "Historical trends, uptime reports, and predictive maintenance insights on a single dashboard." },
];

const stats = [
  { value: "99.7%",   label: "Average system uptime"      },
  { value: "3,200+",  label: "Valves monitored"           },
  { value: "48 sec",  label: "Average alert response time"},
  { value: "$2.1M",   label: "Prevented damage (2024)"   },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "calc(100vh - var(--nav-height))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem",
        background: "radial-gradient(ellipse at 50% 0%, rgba(22,163,74,0.12) 0%, transparent 65%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 760, position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(22,163,74,0.1)",
              border: "1px solid rgba(22,163,74,0.25)",
              borderRadius: 9999,
              padding: "0.35rem 1rem",
              fontSize: "0.78rem",
              color: "#22C55E",
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} className="pulse-green" />
            Live monitoring — 3,200+ valves online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}
          >
            Intelligent Valve Monitoring{" "}
            <span style={{
              background: "linear-gradient(135deg, #16A34A, #EA580C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>for Modern Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: "1.1rem", color: "#86EFAC", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: 560, margin: "0 auto 2.5rem" }}
          >
            Rusk gives industrial and municipal operators real-time visibility into every valve across their entire network — with remote control, instant alerts, and predictive analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact/" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--brand-green)",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}>
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/portal/" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "transparent",
              color: "#86EFAC",
              border: "1px solid rgba(34,197,94,0.3)",
              padding: "0.875rem 2rem",
              borderRadius: 8,
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}>
              Client Login
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "3rem 2rem",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#22C55E" }}>{s.value}</div>
              <div style={{ fontSize: "0.82rem", color: "#86EFAC", marginTop: "0.4rem" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "1rem" }}>Everything you need to monitor your network</h2>
          <p style={{ color: "#86EFAC", fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>Built for operators who can&apos;t afford to be surprised.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="card card-hover"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: "rgba(22,163,74,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={22} style={{ color: "#22C55E" }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "#86EFAC", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, rgba(22,163,74,0.1), rgba(234,88,12,0.08))",
        borderTop: "1px solid var(--border)",
        padding: "6rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Ready to take control of your valve network?</h2>
          <p style={{ color: "#86EFAC", marginBottom: "2rem" }}>Join 40+ industrial and municipal operators already using Rusk.</p>
          <Link href="/contact/" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "linear-gradient(135deg, #16A34A, #EA580C)",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "1rem",
          }}>
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
