"use client";

import { useState } from "react";

const buildingTypes = [
  "Commercial Office",
  "Mixed-Use Development",
  "High-Rise Residential",
  "Hotel / Resort",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    buildingType: "",
    units: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up form submission (Formspree, Supabase, or API route)
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-btn text-white placeholder-[rgba(148,163,184,0.5)] text-sm focus:outline-none transition-colors duration-200";
  const inputStyle = {
    backgroundColor: "var(--surface)",
    border: "1px solid rgba(255,255,255,0.1)",
  };
  const focusStyle = (field: string) =>
    formData[field as keyof typeof formData]
      ? { ...inputStyle, borderColor: "rgba(0,212,255,0.4)" }
      : inputStyle;

  if (submitted) {
    return (
      <div
        className="glass rounded-card p-10 text-center"
        style={{ borderColor: "rgba(0,212,255,0.2)" }}
      >
        <p className="text-2xl font-bold text-white mb-3">Message Sent</p>
        <p style={{ color: "var(--text-secondary)" }} className="text-sm">
          Thank you — we&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Name <span style={{ color: "var(--secondary)" }}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
            style={focusStyle("name")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Email <span style={{ color: "var(--secondary)" }}>*</span>
          </label>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
            style={focusStyle("email")}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
          Company
        </label>
        <input
          type="text"
          placeholder="Company or property name"
          className={inputClass}
          style={focusStyle("company")}
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Building Type
          </label>
          <select
            className={inputClass}
            style={inputStyle}
            value={formData.buildingType}
            onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
          >
            <option value="" style={{ backgroundColor: "var(--surface)" }}>Select type</option>
            {buildingTypes.map((t) => (
              <option key={t} value={t} style={{ backgroundColor: "var(--surface)" }}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Number of Units
          </label>
          <input
            type="text"
            placeholder="e.g. 250"
            className={inputClass}
            style={focusStyle("units")}
            value={formData.units}
            onChange={(e) => setFormData({ ...formData, units: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your property and water needs"
          className={`${inputClass} resize-none`}
          style={inputStyle}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-btn text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] bg-gradient-water"
      >
        Send Message
      </button>
    </form>
  );
}
