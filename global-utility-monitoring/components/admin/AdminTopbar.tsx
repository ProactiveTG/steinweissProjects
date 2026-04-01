"use client";

import { Bell, User } from "lucide-react";
import { adminAlerts } from "@/lib/ruskData";

export default function AdminTopbar() {
  const unresolved = adminAlerts.filter(a => !a.resolved).length;
  return (
    <header style={{
      height: 60, borderBottom: "1px solid var(--border)", background: "var(--surface)",
      display: "flex", alignItems: "center", padding: "0 1.5rem", gap: "1rem",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <Bell size={19} color="var(--text-secondary)" />
          {unresolved > 0 && (
            <span style={{ position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: "var(--warning)", fontSize: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff" }}>{unresolved}</span>
          )}
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #16A34A, #EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <User size={16} color="white" />
        </div>
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Admin</span>
      </div>
    </header>
  );
}
