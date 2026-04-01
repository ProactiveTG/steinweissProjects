"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";
import { reports, savingsHistory } from "@/lib/portalData";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const typeColors: Record<string, string> = {
  monthly:   "#00D4FF",
  quarterly: "#7B61FF",
  annual:    "#10B981",
};

export default function ReportsPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Reports</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          Performance reports and water quality analyses for {new Date().getFullYear()}
        </p>
      </div>

      {/* Savings trend */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>7-Month Savings Summary</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: "2rem", alignItems: "center" }}>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={savingsHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
              <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} formatter={(v) => [`$${v}`, "Saved"]} />
              <Bar dataKey="saved" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "#10B981" }}>$28,600</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Total 7-month savings</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#00D4FF" }}>$4,085</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Average monthly savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>Available Reports</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {reports.map((report, i) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                background: "var(--primary)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${typeColors[report.type] ?? "#00D4FF"}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <FileText size={18} style={{ color: typeColors[report.type] ?? "#00D4FF" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: "0.875rem" }}>{report.title}</div>
                <div style={{ display: "flex", gap: "1rem", marginTop: 3 }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <Calendar size={11} /> {report.date}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>{report.size}</span>
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
                    color: typeColors[report.type],
                    background: `${typeColors[report.type]}18`,
                    padding: "1px 6px", borderRadius: 4,
                  }}>{report.type}</span>
                </div>
              </div>
              <Download size={16} color="var(--text-secondary)" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
