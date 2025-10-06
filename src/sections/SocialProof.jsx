export default function SocialProof() {
  const badges = [
    'Explainable by design',
    'User-in-the-loop',
    'Blackboard multi-agent architecture'
  ];

  return (
    <section className="border-y border-ph-border/60 bg-black/20 py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6 text-xs uppercase tracking-[0.35em] text-ph-muted md:text-sm">
        {badges.map((badge) => (
          <span key={badge} className="rounded-full border border-ph-border/80 px-5 py-2">
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
