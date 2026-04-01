"use client";

import { useState } from "react";

const buildingTypes = [
  "Commercial Office",
  "Mixed-Use Development",
  "High-Rise Residential",
  "Hotel / Resort",
  "Other",
];

const baseInputStyle: React.CSSProperties = {
  backgroundColor: "var(--surface)",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const focusInputStyle: React.CSSProperties = {
  ...baseInputStyle,
  borderColor: "rgba(0,212,255,0.4)",
  boxShadow: "0 0 0 2px rgba(0,212,255,0.3)",
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    buildingType: "",
    units: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-btn text-white placeholder-[rgba(148,163,184,0.5)] text-sm focus:outline-none";

  const getStyle = (field: string) =>
    focusedField === field ? focusInputStyle : baseInputStyle;

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
            style={getStyle("name")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
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
            style={getStyle("email")}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
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
          style={getStyle("company")}
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          onFocus={() => setFocusedField("company")}
          onBlur={() => setFocusedField(null)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Building Type
          </label>
          <select
            className={inputClass}
            style={getStyle("buildingType")}
            value={formData.buildingType}
            onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
            onFocus={() => setFocusedField("buildingType")}
            onBlur={() => setFocusedField(null)}
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
            style={getStyle("units")}
            value={formData.units}
            onChange={(e) => setFormData({ ...formData, units: e.target.value })}
            onFocus={() => setFocusedField("units")}
            onBlur={() => setFocusedField(null)}
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
          style={getStyle("message")}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
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
