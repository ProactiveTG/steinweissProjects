export default function HighRiseIcon({ className = "" }: { className?: string }) {
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
      {/* Tall tower */}
      <rect x="18" y="4" width="28" height="56" />
      {/* Penthouse top */}
      <rect x="22" y="4" width="20" height="6" />
      {/* Window grid */}
      {[10, 17, 24, 31, 38, 45].map((y) => (
        <>
          <rect key={`w1-${y}`} x="23" y={y} width="5" height="4" strokeWidth="1" />
          <rect key={`w2-${y}`} x="32" y={y} width="5" height="4" strokeWidth="1" />
        </>
      ))}
      {/* Ground line */}
      <line x1="4" y1="60" x2="60" y2="60" />
      {/* Door */}
      <rect x="27" y="50" width="10" height="10" strokeWidth="1" />
    </svg>
  );
}
