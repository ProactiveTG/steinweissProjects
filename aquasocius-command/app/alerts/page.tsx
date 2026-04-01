"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { alerts } from "@/lib/mockData";

const iconMap = {
  warning: { icon: AlertTriangle, color: "#F59E0B" },
  danger:  { icon: XCircle,       color: "#EF4444" },
  info:    { icon: Info,           color: "#00D4FF" },
  success: { icon: CheckCircle,    color: "#10B981" },
};

export default function AlertsPage() {
  const [filter, setFilter] = useState<"all"|"active"|"resolved">("all");

  const filtered = alerts.filter(a =>
    filter === "all" ? true : filter === "active" ? !a.resolved : a.resolved
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Alerts</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          {alerts.filter(a => !a.resolved).length} active • {alerts.filter(a => a.resolved).length} resolved
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {(["all", "active", "resolved"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background: filter === f ? "rgba(0,212,255,0.12)" : "var(--surface)",
              color: filter === f ? "#00D4FF" : "var(--text-secondary)",
              fontSize: "0.8rem",
              cursor: "pointer",
              textTransform: "capitalize",
              fontWeight: filter === f ? 600 : 400,
            }}
          >{f}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <AnimatePresence>
          {filtered.map(alert => {
            const { icon: Icon, color } = iconMap[alert.severity as keyof typeof iconMap] ?? iconMap.info;
            return (
              <motion.div
                key={alert.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: alert.resolved ? 0.5 : 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="card"
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{alert.client}</div>
                      <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem", marginTop: 4 }}>{alert.message}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{alert.time}</div>
                      {alert.resolved && (
                        <span style={{ fontSize: "0.7rem", color: "var(--success)", fontWeight: 600 }}>Resolved</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
