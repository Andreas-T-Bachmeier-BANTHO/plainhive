export default function Logo({ showWordmark = true, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img src="/brand/plainhive-mark.svg" alt="PlainHive" className="h-8 w-8" />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">PlainHive</span>
      )}
    </span>
  );
}
