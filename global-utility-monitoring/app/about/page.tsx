"use client";

import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "5rem 2rem" }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
          Built by operators,{" "}
          <span style={{ background: "linear-gradient(135deg, #16A34A, #EA580C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            for operators
          </span>
        </h1>
        <p style={{ color: "#86EFAC", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
          Rusk was founded in 2021 by a team of industrial engineers who saw firsthand how many valve failures were preventable with better monitoring tools.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
        {[
          { icon: Target, title: "Our Mission",  desc: "Eliminate preventable valve failures and infrastructure incidents through real-time intelligence."                },
          { icon: Users,  title: "The Team",     desc: "40 engineers and field specialists with backgrounds in industrial automation, civil infrastructure, and IoT."  },
          { icon: Award,  title: "Recognition",  desc: "2024 Infrastructure Technology Award — Texas Water Infrastructure Council. Serving 40+ operators since 2022." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} className="card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <Icon size={20} style={{ color: "#22C55E" }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{title}</h3>
            <p style={{ color: "#86EFAC", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="card" style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.08), rgba(234,88,12,0.06))", textAlign: "center", padding: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Headquartered in Austin, TX</h2>
        <p style={{ color: "#86EFAC", lineHeight: 1.6 }}>With field teams across Houston, Dallas, and San Antonio — we&apos;re where your infrastructure is.</p>
      </div>
    </div>
  );
}
