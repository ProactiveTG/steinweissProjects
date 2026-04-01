"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import { alerts } from "@/lib/portalData";

const iconMap = {
  warning: { icon: AlertTriangle, color: "#F59E0B" },
  danger:  { icon: XCircle,       color: "#EF4444" },
  info:    { icon: Info,           color: "#00D4FF" },
  success: { icon: CheckCircle,    color: "#10B981" },
};

export default function AlertsPage() {
  const [filter, setFilter] = useState<"all"|"unread"|"read">("all");

  const filtered = alerts.filter(a =>
    filter === "all" ? true : filter === "unread" ? !a.read : a.read
  );

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Alerts & Notifications</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          {alerts.filter(a => !a.read).length} unread notifications
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {(["all", "unread", "read"] as const).map(f => (
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
              fontWeight: filter === f ? 600 : 400,
              textTransform: "capitalize",
            }}
          >{f}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <AnimatePresence>
          {filtered.map(alert => {
            const { icon: Icon, color } = iconMap[alert.severity] ?? iconMap.info;
            return (
              <motion.div
                key={alert.id}
                layout
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: alert.read ? 0.6 : 1, x: 0 }}
                exit={{ opacity: 0 }}
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
                  <div style={{ fontSize: "0.875rem" }}>{alert.message}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: 4 }}>{alert.time}</div>
                </div>
                {!alert.read && (
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--secondary)", marginTop: 6, flexShrink: 0 }} />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
