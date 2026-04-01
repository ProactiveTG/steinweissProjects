"use client";

import { motion } from "framer-motion";
import {
  CheckCircle, AlertTriangle, Droplets, BarChart2, TrendingUp, DollarSign,
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { property, trendData, savingsHistory, alerts } from "@/lib/portalData";

export default function OverviewPage() {
  const unreadAlerts = alerts.filter(a => !a.read);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Property Header */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(123,97,255,0.08) 100%)",
          border: "1px solid rgba(0,212,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Droplets size={26} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 700 }}>{property.name}</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: 2 }}>{property.address}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#00D4FF" }}>{property.floors}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Floors</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#7B61FF" }}>{property.units}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Units</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#10B981" }}>99.6%</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Uptime</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F59E0B" }}>$4,500</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Saved / Mo</div>
          </div>
        </div>
      </motion.div>

      {/* Status Cards Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "1rem" }}>
        {[
          { label: "System Status",  value: "Online",         color: "var(--success)", icon: CheckCircle    },
          { label: "Flow Rate",      value: "8.4 GPM",        color: "#00D4FF",        icon: Droplets       },
          { label: "Inlet Pressure", value: "58 PSI",         color: "#7B61FF",        icon: BarChart2      },
          { label: "Turbidity",      value: "0.3 NTU",        color: "var(--warning)", icon: AlertTriangle  },
          { label: "pH Level",       value: "7.2",            color: "#10B981",        icon: TrendingUp     },
          { label: "30d Uptime",     value: "99.6%",          color: "#00D4FF",        icon: DollarSign     },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            className="card card-hover"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: item.color }}>{item.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        {/* 24-hour trend */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>24-Hour System Trend</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="time" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#94A3B8", fontSize: "0.8rem" }} />
              <Line type="monotone" dataKey="flow"     name="Flow (GPM)"    stroke="#00D4FF" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="pressure" name="Pressure (PSI)"stroke="#7B61FF" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly savings */}
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Monthly Savings</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={savingsHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} formatter={(v) => [`$${v}`, "Saved"]} />
              <Bar dataKey="saved" name="Savings" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Alerts */}
      {unreadAlerts.length > 0 && (
        <div className="card">
          <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Recent Alerts</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {unreadAlerts.map(alert => (
              <div key={alert.id} style={{
                display: "flex", gap: "0.75rem", alignItems: "flex-start",
                padding: "0.75rem 1rem",
                background: "var(--primary)",
                borderRadius: 8,
                border: `1px solid ${alert.severity === "warning" ? "rgba(245,158,11,0.2)" : "rgba(0,212,255,0.12)"}`,
              }}>
                <AlertTriangle size={16} style={{ color: alert.severity === "warning" ? "var(--warning)" : "var(--secondary)", marginTop: 1 }} />
                <div style={{ flex: 1, fontSize: "0.85rem" }}>{alert.message}</div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Account Info */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Account Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
          {[
            { label: "Property Type",     value: property.type               },
            { label: "System Installed",  value: property.systemInstalled     },
            { label: "Contract Renewal",  value: property.contractRenewal     },
            { label: "Account Manager",   value: property.accountManager      },
            { label: "Support Line",      value: property.phone               },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>{item.label}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
