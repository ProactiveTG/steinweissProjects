import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "The Aquasocius machine — specs, installation, and interactive 3D model.",
};

const specs = [
  { label: "Flow Rate",          value: "TBD",    unit: "L/min" },
  { label: "Power Consumption",  value: "TBD",    unit: "kW"    },
  { label: "Dimensions",         value: "TBD",    unit: "cm"    },
  { label: "Capacity",           value: "TBD",    unit: "units" },
  { label: "Operating Pressure", value: "TBD",    unit: "bar"   },
  { label: "Installation",       value: "Inline", unit: ""      },
];

export default function ProductPage() {
  return (
    <>
      <section className="pt-32 pb-24 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">The Machine</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Engineered for<br /><span className="gradient-text">scale and precision</span>
          </h1>
        </div>
      </section>

      {/* 3D Model Viewer */}
      <Section className="bg-surface">
        <div className="rounded-card border border-white/5 bg-primary h-[500px] flex items-center justify-center mb-8">
          <div className="text-center">
            <p className="text-[#94A3B8] mb-2">[ Interactive 3D product model ]</p>
            <p className="text-xs text-[#94A3B8]/60">React Three Fiber — orbit controls, hotspot annotations</p>
          </div>
        </div>
      </Section>

      {/* Specs */}
      <Section>
        <SectionHeading eyebrow="Specifications" title="Technical data sheet" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {specs.map((s) => (
            <Card key={s.label}>
              <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-2xl font-mono font-semibold text-[#00D4FF]">
                {s.value}
                {s.unit && <span className="text-sm text-[#94A3B8] ml-1">{s.unit}</span>}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Installation */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Installation"
          title="Designed for integration"
          subtitle="The Aquasocius system installs inline with existing building water infrastructure — no major retrofitting required."
        />
        <div className="rounded-card border border-white/5 bg-primary h-72 flex items-center justify-center">
          <p className="text-[#94A3B8] text-sm">[ Installation diagram ]</p>
        </div>
      </Section>

      {/* Modular */}
      <Section>
        <div className="rounded-card border border-[#7B61FF]/20 bg-gradient-to-br from-[#7B61FF]/5 to-transparent p-12">
          <SectionHeading
            eyebrow="Scalability"
            title="Designed for scale"
            subtitle="Modular architecture means the system grows with your property. Stack units for higher capacity without replacing infrastructure."
          />
          <Button href="/contact">Request a Spec Sheet</Button>
        </div>
      </Section>
    </>
  );
}
