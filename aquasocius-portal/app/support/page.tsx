"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";
import { faq, property } from "@/lib/portalData";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Support</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
          We&apos;re here to help — reach us anytime
        </p>
      </div>

      {/* Contact Options */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {[
          { icon: Phone,         label: "Phone",   value: property.phone,          action: "Call now"  },
          { icon: Mail,          label: "Email",   value: "support@aquasocius.com",  action: "Send email"},
          { icon: MessageSquare, label: "Chat",    value: "Live chat available",     action: "Start chat"},
        ].map(({ icon: Icon, label, value, action }) => (
          <div key={label} className="card card-hover" style={{ textAlign: "center", cursor: "pointer" }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "rgba(0,212,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 0.75rem",
            }}>
              <Icon size={20} style={{ color: "#00D4FF" }} />
            </div>
            <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{label}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>{value}</div>
            <div style={{ fontSize: "0.78rem", color: "#00D4FF", fontWeight: 500 }}>{action} →</div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Send a Message</h2>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
            <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Message sent!</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>We&apos;ll respond within 4 business hours.</div>
          </motion.div>
        ) : (
          <form
            onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ fontSize: "0.78rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.4rem" }}>Name</label>
                <input required placeholder="Your name" style={{ width: "100%", background: "var(--primary)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#fff", fontSize: "0.875rem" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.78rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.4rem" }}>Email</label>
                <input required type="email" placeholder="your@email.com" style={{ width: "100%", background: "var(--primary)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#fff", fontSize: "0.875rem" }} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: "0.78rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.4rem" }}>Subject</label>
              <input required placeholder="How can we help?" style={{ width: "100%", background: "var(--primary)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#fff", fontSize: "0.875rem" }} />
            </div>
            <div>
              <label style={{ fontSize: "0.78rem", color: "var(--text-secondary)", display: "block", marginBottom: "0.4rem" }}>Message</label>
              <textarea required rows={4} placeholder="Describe your issue or question…" style={{ width: "100%", background: "var(--primary)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.6rem 0.875rem", color: "#fff", fontSize: "0.875rem", resize: "vertical" }} />
            </div>
            <button type="submit" style={{ alignSelf: "flex-start", padding: "0.75rem 2rem", borderRadius: 8, background: "linear-gradient(135deg, #00D4FF, #7B61FF)", border: "none", color: "#fff", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* FAQ Accordion */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {faq.map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 1.25rem",
                  background: openFaq === i ? "rgba(0,212,255,0.06)" : "transparent",
                  border: "none",
                  color: openFaq === i ? "#00D4FF" : "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span>{item.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 1.25rem 1rem", color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {item.a}
                    </div>
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
