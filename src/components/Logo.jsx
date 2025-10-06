export default function Logo({ showWordmark = true, className = '' }) {
  const baseClass = showWordmark ? 'h-9 w-auto' : 'h-9 w-9';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  if (showWordmark) {
    return (
      <img
        src="/brand/plainhive-logo.svg"
        alt="PlainHive logo"
        className={classes}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <img
      src="/brand/plainhive-mark.svg"
      alt="PlainHive mark"
      className={classes}
      loading="lazy"
      decoding="async"
    />
  );
}
