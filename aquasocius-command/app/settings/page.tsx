"use client";

import { useState } from "react";
import { User, Bell, Shield } from "lucide-react";

const sections = [
  {
    icon: User,
    label: "Account",
    settings: [
      { label: "Administrator Name", value: "Admin User", type: "text" },
      { label: "Email",              value: "admin@aquasocius.com", type: "email" },
    ],
  },
  {
    icon: Bell,
    label: "Notifications",
    settings: [
      { label: "Critical Alerts",    value: true,  type: "toggle" },
      { label: "Weekly Reports",     value: true,  type: "toggle" },
      { label: "Maintenance Alerts", value: false, type: "toggle" },
    ],
  },
  {
    icon: Shield,
    label: "Security",
    settings: [
      { label: "Two-Factor Auth",     value: false, type: "toggle" },
      { label: "Session Timeout",     value: "30 minutes", type: "text" },
    ],
  },
];

export default function SettingsPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "Critical Alerts":    true,
    "Weekly Reports":     true,
    "Maintenance Alerts": false,
    "Two-Factor Auth":    false,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 700 }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Settings</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          Configure your Command dashboard preferences
        </p>
      </div>

      {sections.map(({ icon: Icon, label, settings }) => (
        <div key={label} className="card">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <Icon size={18} style={{ color: "var(--secondary)" }} />
            <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{label}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {settings.map(s => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{s.label}</label>
                {s.type === "toggle" ? (
                  <button
                    onClick={() => setToggles(t => ({ ...t, [s.label]: !t[s.label] }))}
                    style={{
                      width: 44, height: 24,
                      borderRadius: 12,
                      background: toggles[s.label] ? "var(--secondary)" : "rgba(255,255,255,0.12)",
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      transition: "background 0.2s",
                    }}
                  >
                    <span style={{
                      position: "absolute",
                      top: 3,
                      left: toggles[s.label] ? 23 : 3,
                      width: 18, height: 18,
                      borderRadius: "50%",
                      background: "#fff",
                      transition: "left 0.2s",
                    }} />
                  </button>
                ) : (
                  <input
                    defaultValue={s.value as string}
                    style={{
                      background: "var(--primary)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 6,
                      padding: "0.4rem 0.75rem",
                      color: "#fff",
                      fontSize: "0.85rem",
                      width: 220,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
