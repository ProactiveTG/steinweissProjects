"use client";

import { motion } from "framer-motion";
import StatusBadge from "@/components/ui/StatusBadge";
import { properties } from "@/lib/ruskData";

export default function AdminPropertiesPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Properties</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>{properties.length} registered properties</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {properties.map((p, i) => (
          <motion.div key={p.id} className="card card-hover" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <div>
                <div style={{ fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2 }}>{p.city} · {p.type}</div>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "0.4rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Valves</span>
              <span>{p.valves} sensors</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "0.4rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Uptime (30d)</span>
              <span style={{ color: p.uptime >= 99 ? "#22C55E" : "#FB923C" }}>{p.uptime}%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Contact</span>
              <span>{p.contact}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
