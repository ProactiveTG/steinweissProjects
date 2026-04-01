interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  const align = centered ? "text-center" : "";
  return (
    <div className={`mb-12 ${align}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
