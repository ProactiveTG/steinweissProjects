"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface SensorCardProps {
  id: string;
  zone: string;
  metric: string;
  value: number;
  unit: string;
  status: "online" | "warning" | "offline";
  trend: number;
}

export default function SensorCard({ id, zone, metric, value, unit, status, trend }: SensorCardProps) {
  const statusColor = status === "online" ? "var(--success)" : status === "warning" ? "var(--warning)" : "var(--danger)";
  const TrendIcon = trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus;
  const trendColor = trend === 0 ? "var(--text-secondary)" : (metric === "Turbidity" ? (trend > 0 ? "var(--warning)" : "var(--success)") : "var(--text-secondary)");

  return (
    <motion.div
      className="card card-hover"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--text-secondary)", letterSpacing: "0.08em" }}>{id}</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: statusColor, display: "inline-block" }} />
          <span style={{ fontSize: "0.72rem", color: statusColor, fontWeight: 600, textTransform: "capitalize" }}>{status}</span>
        </div>
      </div>

      <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>{zone}</div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>{value}</div>
          <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: 2 }}>{unit}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>{metric}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", justifyContent: "flex-end", color: trendColor, fontSize: "0.75rem" }}>
            <TrendIcon size={13} />
            <span>{trend === 0 ? "Stable" : `${trend > 0 ? "+" : ""}${trend}`}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
