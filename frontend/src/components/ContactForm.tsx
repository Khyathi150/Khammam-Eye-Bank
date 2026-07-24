import { FormEvent, useState } from 'react';
import { api } from '@/services/api';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('submitting');
    try {
      await api.submitContact({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        subject: String(data.get('subject') ?? ''),
        message: String(data.get('message') ?? '')
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="card border border-secondary/30 bg-secondary/5">
        <p className="font-semibold text-secondary">Thank you — your message has been received.</p>
        <p className="mt-1 text-sm text-muted">Our team will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 border border-ink/5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm focus-visible:border-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm focus-visible:border-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm focus-visible:border-primary"
        />
      </div>
      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
