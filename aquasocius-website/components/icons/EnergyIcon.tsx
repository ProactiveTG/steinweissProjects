export default function EnergyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Lightning bolt */}
      <path d="M13 2L4.5 13.5H11L11 22L19.5 10.5H13L13 2Z" />
      {/* Circular arrow suggesting efficiency */}
      <path d="M19 6.5A9 9 0 115 17.5" strokeDasharray="2 2" strokeWidth="1" />
    </svg>
  );
}
