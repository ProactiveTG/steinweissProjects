"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

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
    company: "",
    buildingType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up form submission (Netlify Forms, Formspree, or API route)
    console.log(formData);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-btn bg-surface border border-white/10 text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#00D4FF] transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs text-[#94A3B8] mb-2 uppercase tracking-wider">Name</label>
        <input
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs text-[#94A3B8] mb-2 uppercase tracking-wider">Company</label>
        <input
          type="text"
          required
          placeholder="Company or property name"
          className={inputClass}
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs text-[#94A3B8] mb-2 uppercase tracking-wider">Building Type</label>
        <select
          className={inputClass}
          value={formData.buildingType}
          onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
        >
          <option value="" disabled>Select building type</option>
          {buildingTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs text-[#94A3B8] mb-2 uppercase tracking-wider">Message</label>
        <textarea
          rows={5}
          placeholder="Tell us about your property and water needs"
          className={`${inputClass} resize-none`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full justify-center">Send Message</Button>
    </form>
  );
}
