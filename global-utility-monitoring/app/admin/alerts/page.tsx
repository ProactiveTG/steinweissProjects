"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { adminAlerts } from "@/lib/ruskData";

const iconMap = {
  warning: { icon: AlertTriangle, color: "#FB923C" },
  danger:  { icon: AlertTriangle, color: "#EF4444" },
  info:    { icon: Info,           color: "#22C55E" },
  success: { icon: CheckCircle,    color: "#22C55E" },
};

export default function AdminAlertsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Alerts</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          {adminAlerts.filter(a => !a.resolved).length} active alerts
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {adminAlerts.map((alert, i) => {
          const { icon: Icon, color } = iconMap[alert.severity] ?? iconMap.info;
          return (
            <motion.div key={alert.id} className="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: alert.resolved ? 0.5 : 1, y: 0 }} transition={{ delay: i * 0.06 }} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.78rem", color: "#86EFAC", marginBottom: 3 }}>{alert.property}</div>
                <div style={{ fontSize: "0.875rem" }}>{alert.message}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{alert.time}</div>
                {alert.resolved && <div style={{ fontSize: "0.7rem", color: "#22C55E", fontWeight: 600, marginTop: 2 }}>Resolved</div>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
