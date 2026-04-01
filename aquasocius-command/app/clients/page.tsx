"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";
import { clients } from "@/lib/mockData";

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = clients.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Clients</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          {clients.length} registered properties
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8, padding: "0.5rem 0.75rem", flex: 1, maxWidth: 320,
        }}>
          <Search size={14} color="var(--text-secondary)" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search clients…"
            style={{ background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: "0.85rem", width: "100%" }}
          />
        </div>
        {["all", "online", "warning", "offline"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background: filter === f ? "rgba(0,212,255,0.12)" : "var(--surface)",
              color: filter === f ? "#00D4FF" : "var(--text-secondary)",
              fontSize: "0.8rem",
              cursor: "pointer",
              textTransform: "capitalize",
              fontWeight: filter === f ? 600 : 400,
            }}
          >{f}</button>
        ))}
      </div>

      {/* Client Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {filtered.map((c, i) => (
          <motion.div
            key={c.id}
            className="card card-hover"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{c.name}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: 2 }}>{c.city} • {c.type}</div>
              </div>
              <StatusBadge status={c.status as "online"|"warning"|"offline"} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Sensors</span>
              <span style={{ fontWeight: 500 }}>{c.sensors} nodes</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginTop: "0.4rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Last seen</span>
              <span style={{ color: c.status === "offline" ? "var(--danger)" : "var(--text-secondary)" }}>{c.lastSeen}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
