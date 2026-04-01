export default function BeakerIcon({ className = "" }: { className?: string }) {
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
      {/* Flask body */}
      <path d="M9 3h6M8.5 3v5.5L4 18a1 1 0 00.9 1.5h14.2A1 1 0 0020 18l-4.5-9.5V3" />
      {/* Vortex swirl inside */}
      <path d="M9 14c1-1.5 3-1.5 4 0s3 1.5 4 0" strokeWidth="1" />
      <path d="M9.5 16.5c1-.8 2.5-.8 3.5 0" strokeWidth="1" />
    </svg>
  );
}
