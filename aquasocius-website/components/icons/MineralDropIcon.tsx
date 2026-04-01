export default function MineralDropIcon({ className = "" }: { className?: string }) {
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
      {/* Water droplet */}
      <path d="M12 2C12 2 5 10 5 14.5a7 7 0 0014 0C19 10 12 2 12 2z" />
      {/* Plus sign inside */}
      <line x1="12" y1="11" x2="12" y2="17" strokeWidth="1.25" />
      <line x1="9" y1="14" x2="15" y2="14" strokeWidth="1.25" />
    </svg>
  );
}
