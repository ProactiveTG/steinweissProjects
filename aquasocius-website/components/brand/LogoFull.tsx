import VortexLogo from "./VortexLogo";

type LogoSize = "sm" | "md" | "lg";

const sizes: Record<LogoSize, { mark: number; text: string; gap: string }> = {
  sm: { mark: 28, text: "text-base",   gap: "gap-2"   },
  md: { mark: 36, text: "text-lg",     gap: "gap-2.5" },
  lg: { mark: 56, text: "text-2xl",    gap: "gap-3"   },
};

interface LogoFullProps {
  size?: LogoSize;
  animate?: boolean;
  className?: string;
}

export default function LogoFull({ size = "md", animate = true, className = "" }: LogoFullProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <VortexLogo size={s.mark} animate={animate} />
      <span
        className={`${s.text} font-bold text-white`}
        style={{ letterSpacing: "-0.02em", fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        Aquasocius
      </span>
    </div>
  );
}
