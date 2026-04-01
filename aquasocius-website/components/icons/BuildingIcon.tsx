export default function BuildingIcon({ className = "" }: { className?: string }) {
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
      <rect x="8" y="12" width="30" height="48" />
      <rect x="38" y="28" width="18" height="32" />
      {/* Windows */}
      <rect x="14" y="18" width="5" height="5" strokeWidth="1" />
      <rect x="23" y="18" width="5" height="5" strokeWidth="1" />
      <rect x="14" y="28" width="5" height="5" strokeWidth="1" />
      <rect x="23" y="28" width="5" height="5" strokeWidth="1" />
      <rect x="14" y="38" width="5" height="5" strokeWidth="1" />
      <rect x="23" y="38" width="5" height="5" strokeWidth="1" />
      {/* Small building windows */}
      <rect x="43" y="34" width="4" height="4" strokeWidth="1" />
      <rect x="43" y="43" width="4" height="4" strokeWidth="1" />
      {/* Ground */}
      <line x1="4" y1="60" x2="60" y2="60" />
      {/* Door */}
      <rect x="17" y="48" width="8" height="12" strokeWidth="1" />
    </svg>
  );
}
