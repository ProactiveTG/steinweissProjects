"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
  delta?: string;
  deltaPositive?: boolean;
}

export default function KpiCard({ label, value, icon: Icon, color = "#00D4FF", delta, deltaPositive }: KpiCardProps) {
  return (
    <motion.div
      className="card card-hover"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
        <div style={{
          width: 36, height: 36,
          borderRadius: 8,
          background: `${color}18`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <div style={{ fontSize: "2rem", fontWeight: 700, color: "#fff" }}>{value}</div>
      {delta && (
        <div style={{ fontSize: "0.75rem", color: deltaPositive ? "var(--success)" : "var(--danger)" }}>
          {deltaPositive ? "▲" : "▼"} {delta} vs last month
        </div>
      )}
    </motion.div>
  );
}
