import Section from '../components/Section.jsx';

const CONTACT_EMAIL = {
  label: 'Email',
  value: 'plainhive@gmail.com',
  href: 'mailto:plainhive@gmail.com'
};

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
      <div className="relative mt-10 flex justify-center">
        <div className="w-full max-w-md rounded-3xl border border-ph-border/80 bg-black/40 p-6 text-center text-sm text-ph-muted shadow-subtle">
          <p className="text-xs uppercase tracking-[0.2em] text-ph-muted/80">{CONTACT_EMAIL.label}</p>
          <a
            href={CONTACT_EMAIL.href}
            className="mt-4 block text-lg font-semibold text-white transition hover:text-ph-accent"
          >
            {CONTACT_EMAIL.value}
          </a>
        </div>
      </div>
    </Section>
  );
}
