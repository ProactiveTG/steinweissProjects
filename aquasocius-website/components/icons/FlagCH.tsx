export default function FlagCH({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Swiss Flag">
      <rect width="24" height="24" fill="#FF0000" />
      <rect x="10" y="4" width="4" height="16" fill="#FFFFFF" />
      <rect x="4" y="10" width="16" height="4" fill="#FFFFFF" />
    </svg>
  );
}
