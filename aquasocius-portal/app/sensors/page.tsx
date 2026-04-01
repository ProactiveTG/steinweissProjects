"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import SensorCard from "@/components/ui/SensorCard";
import { sensors, trendData } from "@/lib/portalData";

export default function SensorsPage() {
  const [activeZone, setActiveZone] = useState("all");
  const zones = ["all", ...Array.from(new Set(sensors.map(s => s.zone.split("—")[0].trim())))];

  const filtered = activeZone === "all" ? sensors : sensors.filter(s => s.zone.startsWith(activeZone));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Sensor Network</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          {sensors.filter(s => s.status === "online").length}/{sensors.length} sensors online
        </p>
      </div>

      {/* Zone filter */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {zones.map(z => (
          <button
            key={z}
            onClick={() => setActiveZone(z)}
            style={{
              padding: "0.4rem 1rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background: activeZone === z ? "rgba(0,212,255,0.12)" : "var(--surface)",
              color: activeZone === z ? "#00D4FF" : "var(--text-secondary)",
              fontSize: "0.8rem",
              cursor: "pointer",
              fontWeight: activeZone === z ? 600 : 400,
              textTransform: "capitalize",
            }}
          >{z}</button>
        ))}
      </div>

      {/* Sensor Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
        {filtered.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <SensorCard {...s} />
          </motion.div>
        ))}
      </div>

      {/* Trend Chart */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>24-Hour Sensor Trends</h2>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="time" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#0F1D2F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: "0.8rem" }} />
            <Line type="monotone" dataKey="flow"      name="Flow (GPM)"     stroke="#00D4FF" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="pressure"  name="Pressure (PSI)" stroke="#7B61FF" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="turbidity" name="Turbidity (NTU)" stroke="#F59E0B" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
