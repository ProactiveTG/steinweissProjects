import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ContactForm from "@/components/sections/ContactForm";
import FlagUS from "@/components/icons/FlagUS";
import FlagCH from "@/components/icons/FlagCH";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aquasocius — schedule a demo or request specifications.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" threshold={0.1}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--secondary)" }}
            >
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Let&rsquo;s Talk About<br />
              <span className="gradient-text-animated">Your Water</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Whether you&rsquo;re exploring options or ready to spec a system, we&rsquo;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Split layout */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Form — 3 cols */}
          <ScrollReveal direction="up" threshold={0.1} className="md:col-span-3">
            <ContactForm />
          </ScrollReveal>

          {/* Info — 2 cols */}
          <ScrollReveal direction="up" delay={0.15} threshold={0.1} className="md:col-span-2 flex flex-col gap-8">
            {/* Company blurb */}
            <div>
              <p className="font-bold text-white mb-2 text-lg">Aquasocius</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Pure water technology for premium properties.
              </p>
              <a
                href="mailto:hello@aquasocius.com"
                className="inline-block mt-3 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "var(--secondary)" }}
              >
                hello@aquasocius.com
              </a>
            </div>

            {/* Locations */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FlagUS className="w-7 h-5 rounded-sm flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">New York, NY</p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    US Operations
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FlagCH className="w-5 h-5 rounded-sm flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Zürich, Switzerland</p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Engineering &amp; R&amp;D
                  </p>
                </div>
              </div>
            </div>

            {/* Book a call */}
            <div
              className="glass rounded-card p-6"
              style={{ borderColor: "rgba(0,212,255,0.1)" }}
            >
              <p className="font-semibold text-white mb-2">
                Prefer to schedule directly?
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Book a 30-minute call with our team to discuss your property.
              </p>
              {/* TODO: Replace href with Calendly embed URL when available */}
              <a
                href="#"
                className="inline-flex items-center justify-center w-full py-3 rounded-btn text-sm font-semibold border transition-all duration-200"
                style={{
                  borderColor: "rgba(0,212,255,0.25)",
                  color: "var(--secondary)",
                }}
              >
                Book a Call →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
