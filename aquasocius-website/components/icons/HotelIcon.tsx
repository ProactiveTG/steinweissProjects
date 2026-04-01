export default function HotelIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Main building */}
      <rect x="6" y="20" width="52" height="40" />
      {/* Roof / canopy */}
      <path d="M2 20 L32 8 L62 20" />
      {/* Columns */}
      <line x1="16" y1="20" x2="16" y2="60" strokeWidth="1" />
      <line x1="32" y1="20" x2="32" y2="60" strokeWidth="1" />
      <line x1="48" y1="20" x2="48" y2="60" strokeWidth="1" />
      {/* Windows */}
      <rect x="10" y="28" width="8" height="7" strokeWidth="1" />
      <rect x="28" y="28" width="8" height="7" strokeWidth="1" />
      <rect x="46" y="28" width="8" height="7" strokeWidth="1" />
      <rect x="10" y="42" width="8" height="7" strokeWidth="1" />
      <rect x="46" y="42" width="8" height="7" strokeWidth="1" />
      {/* Grand entrance */}
      <rect x="24" y="44" width="16" height="16" strokeWidth="1" />
      {/* Ground */}
      <line x1="0" y1="60" x2="64" y2="60" />
    </svg>
  );
}
