import { useState } from 'react';

const WORDMARK_SRC = '/images/logo/Logo_Text_PlainHive_white.png';
const GLYPH_SRC = '/brand/plainhive-mark.svg';

export default function Logo({ showWordmark = true, className = '' }) {
  const [failed, setFailed] = useState(false);
  const baseClass = showWordmark ? 'h-9 w-auto' : 'h-9 w-9';
  const combinedClassName = [baseClass, className].filter(Boolean).join(' ');
  const imageSrc = showWordmark ? WORDMARK_SRC : GLYPH_SRC;
  const altText = showWordmark ? 'PlainHive wordmark' : 'PlainHive mark';

  if (failed) {
    const fallbackClassName = [
      baseClass,
      className,
      'inline-flex items-center justify-center text-lg font-semibold tracking-tight'
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span className={fallbackClassName}>
        PlainHive
      </span>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={altText}
      className={combinedClassName}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
