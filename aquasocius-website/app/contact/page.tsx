import Section from "@/components/ui/Section";
import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aquasocius — schedule a demo or request more information.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-24 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Let&apos;s talk<br /><span className="gradient-text">pure water.</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <ContactForm />

          {/* Info */}
          <div>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">New York</p>
              <p className="text-white font-medium">{/* TODO: Final address */}New York, NY, USA</p>
            </div>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">Switzerland</p>
              <p className="text-white font-medium">{/* TODO: Final address */}Zürich, Switzerland</p>
            </div>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">Schedule a Demo</p>
              {/* TODO: Calendly embed */}
              <div className="rounded-card border border-white/5 bg-surface h-40 flex items-center justify-center">
                <p className="text-[#94A3B8] text-sm">[ Calendly embed ]</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
