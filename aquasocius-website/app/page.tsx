import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-16">
        {/* TODO: React Three Fiber vortex scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/80 to-[#0A1628]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-6">
            Hydrodynamic Cavitation Technology
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
            Pure Water.
            <br />
            <span className="gradient-text">Zero Chemicals.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
            A vortex-powered purification system engineered between Zürich and New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/product">See the Machine</Button>
            <Button href="/technology" variant="secondary">How It Works</Button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-pill border-2 border-white/20 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-[#00D4FF] rounded-full" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <Section>
        <SectionHeading
          eyebrow="Why Aquasocius"
          title="Water redefined at the molecular level"
          subtitle="Our proprietary cavitation process eliminates contaminants without a single chemical — delivering output so pure, minerals must be reintroduced."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🔬",
              title: "No Chemicals Required",
              desc: "Pure physics does the work. No chlorine, no additives, no byproducts.",
            },
            {
              icon: "💧",
              title: "Mineral-Pure Output",
              desc: "Water so clean, beneficial minerals are added back post-treatment.",
            },
            {
              icon: "⚡",
              title: "Energy Efficient",
              desc: "Cavitation physics requires a fraction of the energy of traditional systems.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-surface" id="how-it-works">
        {/* TODO: GSAP ScrollTrigger parallax sequence */}
        <SectionHeading eyebrow="The Process" title="How cavitation purifies water" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Water Enters",           desc: "Raw water flows into the system through precision-engineered intake." },
            { step: "02", title: "Vortex Forms",            desc: "Hydrodynamic forces create a sustained cavitation vortex inside clear tubing." },
            { step: "03", title: "Contaminants Destroyed",  desc: "Microscopic bubble collapse events destroy pathogens at the molecular level." },
            { step: "04", title: "Minerals Restored",       desc: "Purified water is remineralized for ideal drinking and building use." },
          ].map((item) => (
            <Card key={item.step}>
              <p className="font-mono text-[#00D4FF] text-sm mb-3">{item.step}</p>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Markets Preview */}
      <Section>
        <SectionHeading eyebrow="Solutions" title="Built for premium properties" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Commercial",  desc: "Office towers, mixed-use developments, and corporate campuses." },
            { label: "Residential", desc: "High-rise and large multi-family residential buildings." },
            { label: "Hospitality", desc: "Hotels, resorts, and premium guest experience properties." },
          ].map((m) => (
            <Card key={m.label} className="group cursor-pointer">
              <div className="h-40 rounded-lg bg-gradient-to-br from-[#0F1D2F] to-[#0A1628] mb-4 flex items-center justify-center border border-white/5 group-hover:border-[#00D4FF]/30 transition-colors">
                <span className="text-[#94A3B8] text-sm">[ Image placeholder ]</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{m.label}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{m.desc}</p>
              <a href="/markets" className="text-[#00D4FF] text-sm font-medium hover:underline">
                Explore Solutions →
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trust / Social Proof */}
      <Section className="bg-surface">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-8">
            Trusted by forward-thinking property owners
          </p>
          {/* TODO: Client logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-white/5 rounded animate-pulse" />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            <div className="glass rounded-card px-6 py-3 text-center">
              <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Engineered</p>
              <p className="text-sm font-semibold text-white">Zürich, Switzerland</p>
            </div>
            <div className="glass rounded-card px-6 py-3 text-center">
              <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Innovated</p>
              <p className="text-sm font-semibold text-white">New York, USA</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
