import { useState } from 'react';

import wordmarkBase64 from '../data/plainhiveWordmarkBase64';
import glyphBase64 from '../data/plainhiveGlyphBase64';

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

  const src = showWordmark
    ? `data:image/png;base64,${wordmarkBase64}`
    : `data:image/png;base64,${glyphBase64}`;
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
