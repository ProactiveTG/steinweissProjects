"use client";

import { motion } from "framer-motion";
import { Sliders, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { valves, flowTrend, portalAlerts, properties } from "@/lib/ruskData";

const property = properties.find(p => p.id === "p3")!;

export default function PortalOverviewPage() {
  const openValves = valves.filter(v => v.status === "open").length;
  const totalFlow = valves.reduce((sum, v) => sum + v.flow, 0);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.1), rgba(234,88,12,0.07))", border: "1px solid rgba(22,163,74,0.2)" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 700 }}>{property.name}</h1>
            <p style={{ color: "#86EFAC", fontSize: "0.85rem", marginTop: 2 }}>{property.city} · {property.type}</p>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#22C55E" }}>{openValves}/{valves.length}</div>
              <div style={{ fontSize: "0.72rem", color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.06em" }}>Valves Open</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FB923C" }}>{totalFlow}</div>
              <div style={{ fontSize: "0.72rem", color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total GPM</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#22C55E" }}>{property.uptime}%</div>
              <div style={{ fontSize: "0.72rem", color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.06em" }}>Uptime</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "1rem" }}>
        {[
          { label: "Open Valves",    value: openValves, icon: Sliders,       color: "#22C55E" },
          { label: "Total Flow",     value: `${totalFlow} GPM`, icon: TrendingUp, color: "#FB923C" },
          { label: "Active Alerts",  value: portalAlerts.filter(a => !a.read).length, icon: AlertTriangle, color: "#EF4444" },
          { label: "System Health",  value: "Good",     icon: CheckCircle,   color: "#22C55E" },
        ].map((kpi, i) => (
          <motion.div key={kpi.label} className="card card-hover" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.7rem", color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.06em" }}>{kpi.label}</span>
              <kpi.icon size={16} style={{ color: kpi.color }} />
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: kpi.color }}>{kpi.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>24-Hour Flow & Pressure Trend</h2>
        <ResponsiveContainer width="100%" height={240}>
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
    </div>
  );
}
