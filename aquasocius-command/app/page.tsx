"use client";

import { motion } from "framer-motion";
import {
  Users, Wifi, AlertTriangle, TrendingUp, DollarSign, Cpu,
} from "lucide-react";
import {
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import KpiCard from "@/components/ui/KpiCard";
import StatusBadge from "@/components/ui/StatusBadge";
import { kpis, alerts, clients, savingsData } from "@/lib/mockData";

const COLORS = ["#10B981", "#F59E0B", "#EF4444"];

const statusDistribution = [
  { name: "Online",  value: clients.filter(c => c.status === "online").length  },
  { name: "Warning", value: clients.filter(c => c.status === "warning").length },
  { name: "Offline", value: clients.filter(c => c.status === "offline").length },
];

export default function OverviewPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Fleet Overview</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          Real-time status across all Aquasocius deployments
        </p>
      </div>

      {/* KPI Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
        <KpiCard label="Total Clients"    value={kpis.totalClients}    icon={Users}         color="#00D4FF" />
        <KpiCard label="Online Units"     value={kpis.onlineUnits}     icon={Wifi}          color="#10B981" delta="1 unit" deltaPositive />
        <KpiCard label="Active Alerts"    value={kpis.activeAlerts}    icon={AlertTriangle} color="#F59E0B" />
        <KpiCard label="Avg Uptime"       value={kpis.avgUptime}       icon={TrendingUp}    color="#7B61FF" delta="0.2%" deltaPositive />
        <KpiCard label="Chem. Savings"    value={kpis.chemicalSavings} icon={DollarSign}    color="#10B981" delta="$2,400" deltaPositive />
        <KpiCard label="Total Sensors"    value={kpis.totalSensors}    icon={Cpu}           color="#00D4FF" />
      </div>

      {/* Charts Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "1rem" }}>
        {/* Savings Area Chart */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Chemical Savings vs Projected Cost</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={savingsData}>
              <defs>
                <linearGradient id="chemGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#EF4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}   />
                </linearGradient>
                <linearGradient id="savedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v}`} />
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} formatter={(v) => [`$${v}`, ""]} />
              <Legend wrapperStyle={{ color: "#94A3B8", fontSize: "0.8rem" }} />
              <Area type="monotone" dataKey="chemical" name="Projected Chemical Cost" stroke="#EF4444" fill="url(#chemGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="saved"    name="Aquasocius Cost"          stroke="#10B981" fill="url(#savedGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Fleet Status</h2>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={statusDistribution} dataKey="value" cx="50%" cy="50%" outerRadius={60} innerRadius={35}>
                {statusDistribution.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.75rem" }}>
            {statusDistribution.map((d, i) => (
              <div key={d.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem" }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: COLORS[i], display: "inline-block" }} />
                <span style={{ color: "var(--text-secondary)", flex: 1 }}>{d.name}</span>
                <span style={{ fontWeight: 600 }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Feed + Client Table */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {/* Recent Alerts */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Recent Alerts</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {alerts.slice(0, 5).map(alert => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  padding: "0.75rem",
                  background: "var(--primary)",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.04)",
                  opacity: alert.resolved ? 0.5 : 1,
                }}
              >
                <StatusBadge status={alert.severity as "warning" | "danger" | "info" | "success"} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>{alert.client}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: 2 }}>{alert.message}</div>
                </div>
                <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{alert.time}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Summary */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Client Overview</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Property", "Type", "Sensors", "Status"].map(h => (
                  <th key={h} style={{ padding: "0.5rem 0.75rem", textAlign: "left", fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients.slice(0, 6).map(c => (
                <tr key={c.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                  <td style={{ padding: "0.625rem 0.75rem", fontSize: "0.8rem" }}>{c.name}</td>
                  <td style={{ padding: "0.625rem 0.75rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>{c.type}</td>
                  <td style={{ padding: "0.625rem 0.75rem", fontSize: "0.8rem" }}>{c.sensors}</td>
                  <td style={{ padding: "0.625rem 0.75rem" }}><StatusBadge status={c.status as "online"|"warning"|"offline"} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
