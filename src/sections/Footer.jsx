import Logo from '../components/Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-ph-border/60 bg-black/30 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-sm text-ph-muted md:flex-row md:items-center md:justify-between md:px-8">
        <Logo />
        <nav className="flex flex-wrap items-center gap-6">
          <a href="mailto:hello@plainhive.ai" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
        <p className="text-xs text-ph-muted">© {new Date().getFullYear()} PlainHive. Built for trustworthy AI.</p>
      </div>
    </footer>
  );
}
