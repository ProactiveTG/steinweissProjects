"use client";

import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from "recharts";
import { savingsData, uptimeData } from "@/lib/mockData";

export default function AnalyticsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Analytics</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          Fleet-wide performance metrics and trends
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {/* Savings Chart */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Chemical Savings — 7 Month Trend</h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={savingsData}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#EF4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v}`} />
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#94A3B8", fontSize: "0.8rem" }} />
              <Area type="monotone" dataKey="chemical" name="Projected Chemical Cost" stroke="#EF4444" fill="url(#g1)" strokeWidth={2} />
              <Area type="monotone" dataKey="saved"    name="Aquasocius Cost"         stroke="#10B981" fill="url(#g2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Uptime Chart */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Fleet Uptime — This Week</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={uptimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[95, 100]} tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}%`} />
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} formatter={(v) => [`${v}%`, "Uptime"]} />
              <Bar dataKey="uptime" name="Uptime" fill="#00D4FF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {[
          { label: "Avg Weekly Uptime",  value: "99.4%",   color: "#10B981" },
          { label: "Total Cost Saved",   value: "$31,600",  color: "#00D4FF" },
          { label: "Sensors Reporting",  value: "62 / 62",  color: "#7B61FF" },
          { label: "Alerts This Month",  value: "4 active", color: "#F59E0B" },
        ].map(stat => (
          <div key={stat.label} className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 700, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
