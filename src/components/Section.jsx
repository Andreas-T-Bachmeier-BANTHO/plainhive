export default function Section({ id, title, eyebrow, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-3xl">
            {eyebrow && <p className="text-sm uppercase tracking-[0.3em] text-ph-muted">{eyebrow}</p>}
            {title && (
              <h2 id={id ? `${id}-title` : undefined} className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
