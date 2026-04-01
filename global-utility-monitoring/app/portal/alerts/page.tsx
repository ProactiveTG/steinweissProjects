"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";
import { portalAlerts } from "@/lib/ruskData";

const iconMap = {
  warning: { icon: AlertTriangle, color: "#FB923C" },
  info:    { icon: Info,           color: "#22C55E" },
  success: { icon: CheckCircle,    color: "#22C55E" },
};

export default function PortalAlertsPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Alerts</h1>
        <p style={{ color: "#86EFAC", fontSize: "0.875rem", marginTop: "0.25rem" }}>{portalAlerts.filter(a => !a.read).length} unread</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <AnimatePresence>
          {portalAlerts.map((alert, i) => {
            const { icon: Icon, color } = iconMap[alert.severity] ?? iconMap.info;
            return (
              <motion.div key={alert.id} className="card" initial={{ opacity: 0, x: -8 }} animate={{ opacity: alert.read ? 0.6 : 1, x: 0 }} transition={{ delay: i * 0.06 }} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.875rem" }}>{alert.message}</div>
                  <div style={{ fontSize: "0.75rem", color: "#86EFAC", marginTop: 4 }}>{alert.time}</div>
                </div>
                {!alert.read && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", marginTop: 6 }} />}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
