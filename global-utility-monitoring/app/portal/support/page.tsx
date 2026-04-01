"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail } from "lucide-react";

const faq = [
  { q: "How do I safely toggle a valve?", a: "Navigate to the Valves tab, locate the valve you want to adjust, and click 'Open Valve' or 'Close Valve'. A confirmation dialog will appear before any action is taken — all operations are logged with timestamp and user ID." },
  { q: "What does a Warning status mean?", a: "A Warning status means the valve sensor has detected a reading outside normal parameters but not yet at critical levels. Our team is automatically notified. You don't need to take immediate action unless you see a Danger alert." },
  { q: "How often is sensor data updated?", a: "Sensor readings update every 30 seconds under normal conditions. During an active alert, polling frequency increases to every 5 seconds for the affected valves." },
  { q: "Who should I call for emergencies?", a: "For emergency valve failures or complete system outages, call our 24/7 operations line at (512) 555-0199. For non-emergency inquiries, use the form below and we'll respond within 4 business hours." },
];

export default function PortalSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Support</h1>
        <p style={{ color: "#86EFAC", fontSize: "0.875rem", marginTop: "0.25rem" }}>Get help with your Rusk system</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {[
          { icon: Phone, label: "24/7 Emergency", value: "(512) 555-0199" },
          { icon: Mail,  label: "Support Email",  value: "support@rusk.io" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="card card-hover" style={{ display: "flex", gap: "1rem", alignItems: "center", cursor: "pointer" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={18} style={{ color: "#22C55E" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, marginTop: 2 }}>{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Send a Message</h2>
        {submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "2rem", color: "#22C55E", marginBottom: "0.75rem" }}>✓</div>
            <div style={{ fontWeight: 600 }}>Message sent!</div>
            <div style={{ color: "#86EFAC", fontSize: "0.875rem", marginTop: "0.4rem" }}>We&apos;ll respond within 4 business hours.</div>
          </motion.div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input required placeholder="Subject" style={{ background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem" }} />
            <textarea required rows={4} placeholder="Describe your issue…" style={{ background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem", resize: "vertical" }} />
            <button type="submit" style={{ background: "var(--brand-green)", color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem", fontWeight: 600, cursor: "pointer" }}>Send</button>
          </form>
        )}
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {faq.map((item, i) => (
            <div key={i} style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1rem", background: openFaq === i ? "rgba(22,163,74,0.06)" : "transparent", border: "none", color: openFaq === i ? "#22C55E" : "#F0FDF4", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", textAlign: "left", gap: "1rem" }}
              >
                <span>{item.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={15} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                    <div style={{ padding: "0 1rem 0.875rem", color: "#86EFAC", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
