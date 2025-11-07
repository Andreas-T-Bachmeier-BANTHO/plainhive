import Section from '../components/Section.jsx';

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let’s collaborate"
      title="Contact PlainHive"
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-20 top-16 hidden h-64 w-64 overflow-hidden rounded-full border border-ph-border/40 bg-black/40 shadow-subtle lg:block">
          <img
            src="/images/graphics/philip-oroni-bCkrMt4ETLo-unsplash.jpg"
            alt="Ambient neon lights representing modern technology"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="absolute -right-10 bottom-0 hidden h-40 w-40 overflow-hidden rounded-3xl border border-ph-border/40 bg-black/40 shadow-subtle md:block">
          <img
            src="/images/graphics/igor-omilaev-IsYT5rUuVcs-unsplash.jpg"
            alt="Abstract colorful light streaks"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="mx-auto max-w-3xl text-lg text-ph-muted">
        We partner with teams who need transparent, multi-agent intelligence. Reach out directly and we’ll schedule time to explore your goals.
      </div>
      <div className="relative mt-10 max-w-xl">
        <div className="rounded-3xl border border-ph-border/80 bg-black/40 p-6 text-sm text-ph-muted shadow-subtle">
          <a
            href="mailto:plainhive@gmail.com"
            className="block text-lg font-semibold text-white transition hover:text-ph-accent"
          >
            plainhive@gmail.com
          </a>
        </div>
      </div>
    </Section>
  );
}
