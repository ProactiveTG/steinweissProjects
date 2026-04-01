"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import StatusBadge from "@/components/ui/StatusBadge";
import { valves, flowTrend } from "@/lib/ruskData";

export default function AdminSensorsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Sensors & Valves</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          Valve telemetry for Lakeside Water Treatment
        </p>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>24-Hour Flow & Pressure</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={flowTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,197,94,0.07)" />
            <XAxis dataKey="time" tick={{ fill: "#86EFAC", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#86EFAC", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#132015", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 8, color: "#F0FDF4" }} />
            <Legend wrapperStyle={{ color: "#86EFAC", fontSize: "0.8rem" }} />
            <Line type="monotone" dataKey="flow"     name="Flow (GPM)"    stroke="#22C55E" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="pressure" name="Pressure (PSI)"stroke="#FB923C" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Valve Status</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Valve ID", "Name", "Zone", "Position", "Flow (GPM)", "Pressure (PSI)", "Status"].map(h => (
                <th key={h} style={{ padding: "0.5rem 0.75rem", textAlign: "left", fontSize: "0.7rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {valves.map((v, i) => (
              <motion.tr key={v.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} style={{ borderBottom: "1px solid rgba(34,197,94,0.04)" }}>
                <td style={{ padding: "0.75rem", fontSize: "0.78rem", fontFamily: "monospace", color: "#86EFAC" }}>{v.id}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem", fontWeight: 500 }}>{v.name}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>{v.zone}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem" }}>{v.position}%</td>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem" }}>{v.flow}</td>
                <td style={{ padding: "0.75rem", fontSize: "0.85rem" }}>{v.pressure}</td>
                <td style={{ padding: "0.75rem" }}><StatusBadge status={v.status === "open" ? "online" : v.status === "closed" ? "offline" : "warning"} /></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
