import { useState } from 'react';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import { track } from '../lib/analytics.js';

export default function Waitlist() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    if (status === 'loading') return;
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    if (!email) {
      setMessage('Please add your email.');
      return;
    }
    setStatus('loading');
    setMessage('');
    track('waitlist_join', { placement: 'form_attempt' });
    try {
      if (form.action && form.action.startsWith('http')) {
        form.submit();
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setMessage('You’re on the list! We’ll be in touch soon.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Section
      id="waitlist"
      eyebrow="Get early access"
      title="Join the PlainHive waitlist"
    >
      <div className="mx-auto max-w-3xl text-lg text-ph-muted">
        Sign up for the waitlist. We’ll invite batches as we expand capacity.
      </div>
      <form
        className="mx-auto mt-10 grid w-full max-w-3xl gap-4 rounded-3xl border border-ph-border/80 bg-black/30 p-8 shadow-subtle"
        method="post"
        action="/api/waitlist"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div>
          <label htmlFor="email" className="text-sm font-medium text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-ph-border/80 bg-ph-bg px-4 py-3 text-base text-white placeholder:text-ph-muted focus:outline-none focus:ring-2 focus:ring-ph-accent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="role" className="text-sm font-medium text-white">
            Role / Interest
          </label>
          <select
            id="role"
            name="role"
            className="mt-2 w-full rounded-xl border border-ph-border/80 bg-ph-bg px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-ph-accent"
          >
            <option>Consulting</option>
            <option>Legal / Policy</option>
            <option>Research / Strategy</option>
            <option>Other</option>
          </select>
        </div>
        <label className="flex items-start gap-3 text-sm text-ph-muted">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded border-ph-border/80 bg-ph-bg text-ph-accent focus:outline-none focus:ring-2 focus:ring-ph-accent"
          />
          <span>I agree to receive early access updates.</span>
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto"
            onClick={() => track('waitlist_join', { placement: 'cta' })}
          >
            {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
          </Button>
          <p className="text-xs text-ph-muted">No spam. Unsubscribe anytime. We respect your data.</p>
        </div>
        {message && (
          <p className={`text-sm ${status === 'error' ? 'text-rose-300' : 'text-ph-accent'}`}>{message}</p>
        )}
      </form>
    </Section>
  );
}
