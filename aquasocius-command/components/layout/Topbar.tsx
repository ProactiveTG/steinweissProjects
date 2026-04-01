"use client";

import { Bell, Search, User } from "lucide-react";
import { alerts } from "@/lib/mockData";

export default function Topbar() {
  const unresolved = alerts.filter(a => !a.resolved).length;

  return (
    <header style={{
      height: 60,
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "var(--surface)",
      display: "flex",
      alignItems: "center",
      padding: "0 1.5rem",
      gap: "1rem",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}>
      {/* Search */}
      <div style={{
        flex: 1,
        maxWidth: 400,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "var(--primary)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "0.5rem 0.75rem",
      }}>
        <Search size={14} color="var(--text-secondary)" />
        <input
          placeholder="Search clients, alerts, sensors…"
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--text-primary)",
            fontSize: "0.8rem",
            width: "100%",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "auto" }}>
        {/* Alerts bell */}
        <div style={{ position: "relative", cursor: "pointer" }}>
          <Bell size={20} color="var(--text-secondary)" />
          {unresolved > 0 && (
            <span style={{
              position: "absolute",
              top: -4, right: -4,
              width: 16, height: 16,
              borderRadius: "50%",
              background: "var(--danger)",
              fontSize: "0.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "#fff",
            }}>{unresolved}</span>
          )}
        </div>

        {/* Avatar */}
        <div style={{
          width: 32, height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}>
          <User size={16} color="white" />
        </div>
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Admin</span>
      </div>
    </header>
  );
}
