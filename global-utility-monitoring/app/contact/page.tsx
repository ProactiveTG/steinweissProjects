"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "5rem 2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>Get in Touch</h1>
        <p style={{ color: "#86EFAC" }}>Ready to monitor your valve network? We&apos;ll get back to you within one business day.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            { icon: MapPin, label: "Headquarters", value: "700 Lavaca St, Suite 1400\nAustin, TX 78701"   },
            { icon: Phone,  label: "Sales",        value: "(512) 555-0147"                                },
            { icon: Mail,   label: "Email",        value: "sales@rusk.io"                                 },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={18} style={{ color: "#22C55E" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#86EFAC", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>{label}</div>
                <div style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "2rem" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem", color: "#22C55E" }}>✓</div>
              <div style={{ fontWeight: 600 }}>Message received!</div>
              <div style={{ color: "#86EFAC", fontSize: "0.875rem", marginTop: "0.5rem" }}>We&apos;ll be in touch within 1 business day.</div>
            </motion.div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#86EFAC", display: "block", marginBottom: "0.4rem" }}>First name</label>
                  <input required placeholder="John" style={{ width: "100%", background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem" }} />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#86EFAC", display: "block", marginBottom: "0.4rem" }}>Last name</label>
                  <input required placeholder="Smith" style={{ width: "100%", background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem" }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.78rem", color: "#86EFAC", display: "block", marginBottom: "0.4rem" }}>Work email</label>
                <input required type="email" placeholder="john@company.com" style={{ width: "100%", background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.78rem", color: "#86EFAC", display: "block", marginBottom: "0.4rem" }}>Company / Organization</label>
                <input required placeholder="Acme Municipal Water" style={{ width: "100%", background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.78rem", color: "#86EFAC", display: "block", marginBottom: "0.4rem" }}>How can we help?</label>
                <textarea required rows={4} placeholder="Tell us about your valve network and what you're looking for…" style={{ width: "100%", background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#F0FDF4", fontSize: "0.875rem", resize: "vertical" }} />
              </div>
              <button type="submit" style={{ background: "var(--brand-green)", color: "#fff", border: "none", borderRadius: 8, padding: "0.875rem", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
