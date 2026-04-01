"use client";

import { useState } from "react";
import { Bell, Shield, Database } from "lucide-react";

export default function AdminSettingsPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "Critical Valve Alerts": true,
    "Property Offline Alerts": true,
    "Weekly Reports": false,
    "Two-Factor Auth": true,
    "API Access": false,
  });

  const sections = [
    { icon: Bell,     label: "Notifications", keys: ["Critical Valve Alerts", "Property Offline Alerts", "Weekly Reports"] },
    { icon: Shield,   label: "Security",      keys: ["Two-Factor Auth"] },
    { icon: Database, label: "Integrations",  keys: ["API Access"] },
  ];

  return (
    <div style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Settings</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>Admin dashboard configuration</p>
      </div>
      {sections.map(({ icon: Icon, label, keys }) => (
        <div key={label} className="card">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <Icon size={18} style={{ color: "#22C55E" }} />
            <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{label}</h2>
          </div>
          {keys.map(k => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.875rem" }}>
              <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{k}</span>
              <button
                onClick={() => setToggles(t => ({ ...t, [k]: !t[k] }))}
                style={{ width: 44, height: 24, borderRadius: 12, background: toggles[k] ? "var(--brand-green)" : "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s" }}
              >
                <span style={{ position: "absolute", top: 3, left: toggles[k] ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
