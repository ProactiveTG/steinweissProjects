import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The founding story of Aquasocius — Swiss precision meets New York innovation.",
};

const team = [
  { name: "Founder Name", role: "Co-Founder & CEO" },
  { name: "Founder Name", role: "Co-Founder & CTO" },
  { name: "Founder Name", role: "Co-Founder & COO" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Swiss precision.<br /><span className="gradient-text">New York drive.</span>
          </h1>
        </div>
      </section>

      {/* Founding Narrative */}
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Origin" title="How Aquasocius was born" />
          <div className="space-y-6 text-[#94A3B8] leading-relaxed">
            <p>
              {/* TODO: Final copy */}
              Aquasocius was founded by a small team of engineers, entrepreneurs, and innovators who believed that water purification didn&apos;t need chemicals — it needed physics.
            </p>
            <p>
              {/* TODO: Final copy */}
              The team developed their proprietary machine across two cities: the precision of Zürich and the urgency of New York. Hands-on R&amp;D led to a breakthrough in hydrodynamic cavitation — a vortex that purifies water without a single additive.
            </p>
            <p>
              {/* TODO: Final copy */}
              Today, Aquasocius is bringing that technology to commercial, residential, and hospitality properties across the US and Europe.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeading eyebrow="Journey" title="Zürich to New York" centered />
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/10" />
          {[
            { year: "Year 1", city: "Zürich",    desc: "R&D begins. Early cavitation experiments in Swiss engineering labs." },
            { year: "Year 2", city: "New York",  desc: "Team expands. Market validation across US commercial property owners." },
            { year: "Year 3", city: "Both",      desc: "First prototype installed. Results exceed expectations." },
            { year: "Today",  city: "Global",    desc: "Scaling across US and mid-market Europe." },
          ].map((item, i) => (
            <div key={item.year} className={`relative flex gap-8 mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className="w-1/2" />
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00D4FF] top-1" />
              <Card className="w-1/2">
                <p className="font-mono text-[#00D4FF] text-xs mb-1">{item.year}</p>
                <p className="font-semibold text-white text-sm mb-1">{item.city}</p>
                <p className="text-[#94A3B8] text-xs">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="Team" title="The people behind the machine" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {team.map((member, i) => (
            <Card key={i} className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-water mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{member.name[0]}</span>
              </div>
              <p className="font-semibold text-white mb-1">{member.name}</p>
              <p className="text-[#94A3B8] text-sm">{member.role}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="rounded-card border border-[#00D4FF]/20 bg-gradient-to-br from-[#00D4FF]/5 to-[#7B61FF]/5 p-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-4">Mission</p>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
            {/* TODO: Final copy */}
            &ldquo;To make chemical-free water purification the global standard for premium buildings.&rdquo;
          </p>
        </div>
      </Section>
    </>
  );
}
