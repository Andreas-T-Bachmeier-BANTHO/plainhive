import { useState } from 'react';

const WORDMARK_SRC = '/images/logo/plainhive-wordmark.svg';
const GLYPH_SRC = '/images/logo/plainhive-icon.svg';
const WORDMARK_SRC = '/brand/plainhive-logo.svg';
const GLYPH_SRC = '/brand/plainhive-mark.svg';

export default function Logo({ showWordmark = true, className = '' }) {
  const [failed, setFailed] = useState(false);
  const baseClass = showWordmark ? 'h-9 w-auto' : 'h-9 w-9';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  if (failed) {
    const fallbackClasses = [
      baseClass,
      className,
      'inline-flex items-center justify-center text-lg font-semibold tracking-tight'
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span className={fallbackClasses}>
        PlainHive
      </span>
    );
  }

  const src = showWordmark ? WORDMARK_SRC : GLYPH_SRC;
  const alt = showWordmark ? 'PlainHive wordmark' : 'PlainHive mark';

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
