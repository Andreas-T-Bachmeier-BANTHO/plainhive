import Logo from '../components/Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-ph-border/60 bg-black/30 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-sm text-ph-muted md:flex-row md:items-center md:justify-between md:px-8">
        <Logo />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-ph-muted/80">Contact</p>
          <p className="text-sm text-white">Andreas T. Bachmeier</p>
          <a href="mailto:andreas.bachmeier@cdi.eu" className="text-sm text-ph-accent transition hover:text-white">
            andreas.bachmeier@cdi.eu
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
        <p className="text-xs text-ph-muted">© {new Date().getFullYear()} PlainHive. Built for trustworthy AI.</p>
      </div>
    </footer>
  );
}
