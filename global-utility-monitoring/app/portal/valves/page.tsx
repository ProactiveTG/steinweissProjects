"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";
import { valves } from "@/lib/ruskData";

export default function PortalValvesPage() {
  const [confirmValve, setConfirmValve] = useState<string | null>(null);
  const [valveStates, setValveStates] = useState<Record<string, "open"|"closed"|"warning">>(
    Object.fromEntries(valves.map(v => [v.id, v.status]))
  );

  const handleToggle = (id: string) => {
    setValveStates(s => ({ ...s, [id]: s[id] === "open" ? "closed" : "open" }));
    setConfirmValve(null);
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Valve Control</h1>
        <p style={{ color: "#86EFAC", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          {valves.length} valves · {valves.filter(v => v.status === "open").length} currently open
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {valves.map((v, i) => {
          const currentStatus = valveStates[v.id];
          return (
            <motion.div key={v.id} className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{v.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#86EFAC", marginTop: 2 }}>{v.zone} · {v.id}</div>
                </div>
                <StatusBadge status={currentStatus === "open" ? "online" : currentStatus === "closed" ? "offline" : "warning"} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                {[
                  { label: "Position", value: `${v.position}%` },
                  { label: "Flow",     value: `${currentStatus === "closed" ? 0 : v.flow} GPM` },
                  { label: "Pressure", value: `${currentStatus === "closed" ? 0 : v.pressure} PSI` },
                ].map(stat => (
                  <div key={stat.label} style={{ background: "var(--dark)", borderRadius: 6, padding: "0.5rem", textAlign: "center" }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{stat.value}</div>
                    <div style={{ fontSize: "0.65rem", color: "#86EFAC", marginTop: 1 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setConfirmValve(v.id)}
                style={{
                  width: "100%", padding: "0.6rem", borderRadius: 8, border: "none", cursor: "pointer",
                  background: currentStatus === "open" ? "rgba(234,88,12,0.15)" : "rgba(22,163,74,0.15)",
                  color: currentStatus === "open" ? "#FB923C" : "#22C55E",
                  fontWeight: 600, fontSize: "0.85rem", transition: "background 0.2s",
                }}
              >
                {currentStatus === "open" ? "Close Valve" : "Open Valve"}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmValve && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 200,
            }}
            onClick={() => setConfirmValve(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "2rem",
                maxWidth: 420,
                width: "90%",
                textAlign: "center",
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(251,146,60,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <AlertTriangle size={24} style={{ color: "#FB923C" }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Confirm Valve Toggle</h3>
              <p style={{ color: "#86EFAC", fontSize: "0.875rem", marginBottom: "1.5rem", lineHeight: 1.5 }}>
                You are about to {valveStates[confirmValve] === "open" ? "close" : "open"} <strong>{valves.find(v => v.id === confirmValve)?.name}</strong>. This action will be logged.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  onClick={() => setConfirmValve(null)}
                  style={{ flex: 1, padding: "0.75rem", borderRadius: 8, border: "1px solid var(--border)", background: "transparent", color: "#86EFAC", cursor: "pointer", fontWeight: 500 }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleToggle(confirmValve)}
                  style={{ flex: 1, padding: "0.75rem", borderRadius: 8, border: "none", background: "var(--brand-green)", color: "#fff", cursor: "pointer", fontWeight: 600 }}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
