import NavBar from './components/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import SocialProof from './sections/SocialProof.jsx';
import ValueProps from './sections/ValueProps.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Roles from './sections/Roles.jsx';
import Difference from './sections/Difference.jsx';
import UseCases from './sections/UseCases.jsx';
import FeatureStrip from './sections/FeatureStrip.jsx';
import Gallery from './sections/Gallery.jsx';
import Pricing from './sections/Pricing.jsx';
import Contact from './sections/Contact.jsx';
import FAQ from './sections/FAQ.jsx';
import Footer from './sections/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    document.documentElement.dataset.reducedMotion = mq.matches;
    const handler = (event) => {
      document.documentElement.dataset.reducedMotion = event.matches;
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      if (height <= 0) return;
      const depth = doc.scrollTop / height;
      if (depth > 0.5 && !window.__phScrollFired) {
        window.__phScrollFired = true;
        import('./lib/analytics.js').then(({ track }) => {
          track('scroll_depth_50');
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ph-bg text-white">
      <NavBar />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        <HowItWorks />
        <Roles />
        <Difference />
        <UseCases />
        <FeatureStrip />
        <Gallery />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
