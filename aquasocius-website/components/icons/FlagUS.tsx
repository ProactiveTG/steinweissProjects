export default function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-label="US Flag">
      <rect width="24" height="16" fill="#B22234" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} x="0" y={y} width="24" height="1.23" fill="#FFFFFF" />
      ))}
      <rect width="10" height="8" fill="#3C3B6E" />
    </svg>
  );
}
