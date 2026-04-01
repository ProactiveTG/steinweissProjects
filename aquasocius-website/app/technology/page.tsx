import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description: "Deep dive into hydrodynamic cavitation — how Aquasocius purifies water without chemicals.",
};

export default function TechnologyPage() {
  return (
    <>
      <section className="pt-32 pb-24 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">The Science</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            The physics of<br /><span className="gradient-text">pure water</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl">
            {/* TODO: Final copy */}
            Hydrodynamic cavitation is a natural phenomenon we&apos;ve engineered into a precision purification system. No chemicals. Just physics.
          </p>
          <div className="mt-12 rounded-card border border-white/5 bg-surface h-96 flex items-center justify-center">
            <p className="text-[#94A3B8]">[ 3D cavitation scene — React Three Fiber ]</p>
          </div>
        </div>
      </section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How It Works" title="Cavitation explained" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[#94A3B8] leading-relaxed">
              {/* TODO: Final copy */}
              Hydrodynamic cavitation occurs when a liquid rapidly changes pressure, forming micro-bubbles that violently collapse — releasing intense localized energy.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              {/* TODO: Final copy */}
              Aquasocius engineers this phenomenon within a precision-designed vortex chamber. The resulting energy destroys pathogens, bacteria, and contaminants at the molecular level.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              {/* TODO: Final copy */}
              The output is so thoroughly purified that beneficial minerals must be reintroduced — a testament to the system&apos;s effectiveness.
            </p>
          </div>
          <div className="rounded-card border border-white/5 bg-primary h-72 flex items-center justify-center">
            <p className="text-[#94A3B8] text-sm">[ Animated pressure diagram ]</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Comparison" title="Cavitation vs. conventional treatment" centered />
        <div className="overflow-x-auto mt-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-[#94A3B8] font-medium">Method</th>
                <th className="text-center py-4 px-4 text-[#00D4FF] font-semibold">Aquasocius</th>
                <th className="text-center py-4 px-4 text-[#94A3B8] font-medium">Chemical</th>
                <th className="text-center py-4 px-4 text-[#94A3B8] font-medium">UV</th>
                <th className="text-center py-4 px-4 text-[#94A3B8] font-medium">Reverse Osmosis</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Chemical-free",       aq: "✓", chem: "✗", uv: "✓", ro: "✓" },
                { label: "Kills all pathogens", aq: "✓", chem: "✓", uv: "✓", ro: "~" },
                { label: "No byproducts",        aq: "✓", chem: "✗", uv: "✓", ro: "✓" },
                { label: "Scalable",             aq: "✓", chem: "✓", uv: "~", ro: "~" },
                { label: "Energy efficient",     aq: "✓", chem: "✓", uv: "~", ro: "✗" },
                { label: "Mineral-preserving",   aq: "✓", chem: "~", uv: "✓", ro: "✗" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 text-white">{row.label}</td>
                  <td className="py-4 px-4 text-center text-[#00D4FF] font-semibold">{row.aq}</td>
                  <td className="py-4 px-4 text-center text-[#94A3B8]">{row.chem}</td>
                  <td className="py-4 px-4 text-center text-[#94A3B8]">{row.uv}</td>
                  <td className="py-4 px-4 text-center text-[#94A3B8]">{row.ro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="rounded-card border border-[#00D4FF]/20 bg-gradient-to-br from-[#00D4FF]/5 to-[#7B61FF]/5 p-12 text-center">
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">&ldquo;So pure, we add minerals back.&rdquo;</p>
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            {/* TODO: Final copy */}
            Our output exceeds drinking water standards — proving the system&apos;s effectiveness through its own thoroughness.
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Button href="/product">See the Machine</Button>
        </div>
      </Section>
    </>
  );
}
