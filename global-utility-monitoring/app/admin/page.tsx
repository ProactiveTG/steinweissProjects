"use client";

import { motion } from "framer-motion";
import { Building2, Wifi, AlertTriangle, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import StatusBadge from "@/components/ui/StatusBadge";
import { adminKpis, properties, adminAlerts, uptimeData } from "@/lib/ruskData";

export default function AdminOverviewPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Fleet Overview</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>All properties and valve sensors across the network</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "1rem" }}>
        {[
          { label: "Properties",    value: adminKpis.totalProperties,    icon: Building2,     color: "#22C55E" },
          { label: "Online",        value: adminKpis.onlineProperties,   icon: Wifi,          color: "#22C55E" },
          { label: "Total Valves",  value: adminKpis.totalValves,        icon: TrendingUp,    color: "#FB923C" },
          { label: "Active Alerts", value: adminKpis.activeAlerts,       icon: AlertTriangle, color: "#EF4444" },
          { label: "Avg Uptime",    value: adminKpis.avgUptime,          icon: TrendingUp,    color: "#22C55E" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="card card-hover"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{kpi.label}</span>
              <kpi.icon size={16} style={{ color: kpi.color }} />
            </div>
            <div style={{ fontSize: "1.75rem", fontWeight: 700, color: kpi.color }}>{kpi.value}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Uptime This Week</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={uptimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,197,94,0.07)" />
              <XAxis dataKey="day" tick={{ fill: "#86EFAC", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[90, 100]} tick={{ fill: "#86EFAC", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip contentStyle={{ background: "#132015", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 8, color: "#F0FDF4" }} formatter={(v) => [`${v}%`, "Uptime"]} />
              <Bar dataKey="uptime" fill="#16A34A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Recent Alerts</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {adminAlerts.map(alert => (
              <div key={alert.id} style={{
                display: "flex", gap: "0.75rem", alignItems: "flex-start",
                padding: "0.6rem", background: "var(--dark)", borderRadius: 8,
                border: "1px solid rgba(34,197,94,0.06)", opacity: alert.resolved ? 0.5 : 1,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.72rem", color: "#86EFAC", marginBottom: 2 }}>{alert.property}</div>
                  <div style={{ fontSize: "0.78rem" }}>{alert.message}</div>
                </div>
                <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Property Status</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Property", "City", "Type", "Valves", "Uptime", "Status"].map(h => (
                <th key={h} style={{ padding: "0.5rem 0.75rem", textAlign: "left", fontSize: "0.7rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id} style={{ borderBottom: "1px solid rgba(34,197,94,0.04)" }}>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem", fontWeight: 500 }}>{p.name}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>{p.city}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>{p.type}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem" }}>{p.valves}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem", color: p.uptime >= 99 ? "#22C55E" : p.uptime >= 95 ? "#FB923C" : "#EF4444" }}>{p.uptime}%</td>
                <td style={{ padding: "0.75rem" }}><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
