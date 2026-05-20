'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECT_TYPES, PROJECT_TYPE_LABELS, type QuoteInput } from '@/lib/validation';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteInput>({
    defaultValues: { name: '', email: '', phone: '', projectType: 'lawn-mowing', message: '', honeypot: '' },
  });

  const onSubmit = async (data: QuoteInput) => {
    setStatus('submitting');
    setServerError(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        const msg =
          json?.errors?.[0]?.message ||
          (res.status === 429
            ? 'Too many submissions. Please try again in a few minutes.'
            : 'Something went wrong. Please try again or email us directly.');
        setServerError(msg);
        setStatus('error');
        return;
      }
      setSubmittedName(data.name.split(' ')[0] || data.name);
      setStatus('success');
      reset();
    } catch {
      setServerError('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-dune p-10 lg:p-14 rounded-sm"
        >
          <div className="eyebrow mb-4">Received</div>
          <p className="font-serif italic text-3xl md:text-4xl leading-tight tracking-tighter2 text-balance">
            Thanks, {submittedName}. We&rsquo;ll be in touch within 24 hours.
          </p>
          <p className="mt-6 text-sm text-charcoal/70 max-w-md">
            We read every enquiry ourselves. If we are not the right fit, we will tell you upfront and recommend someone good.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-8"
        >
          {/* Honeypot */}
          <div className="absolute -left-[10000px]" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
            </label>
          </div>

          <Field label="Name" id="name" error={errors.name?.message}>
            <input id="name" type="text" autoComplete="name" {...register('name', { required: 'Please enter your name' })} className="field-input" placeholder="Your full name" />
          </Field>

          <div className="grid sm:grid-cols-2 gap-8">
            <Field label="Email" id="email" error={errors.email?.message}>
              <input id="email" type="email" autoComplete="email" {...register('email', { required: 'Enter your email' })} className="field-input" placeholder="you@example.com" />
            </Field>
            <Field label="Phone" id="phone" error={errors.phone?.message}>
              <input id="phone" type="tel" autoComplete="tel" {...register('phone', { required: 'Enter a phone number' })} className="field-input" placeholder="04XX XXX XXX" />
            </Field>
          </div>

          <Field label="What do you need?" id="projectType" error={errors.projectType?.message}>
            <select
              id="projectType"
              {...register('projectType')}
              className="field-input appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22 fill=%22none%22 stroke=%22%231A1D1F%22 stroke-width=%221.5%22><path d=%22M2 4l4 4 4-4%22/></svg>')] bg-no-repeat bg-[right_0_center] pr-8"
            >
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>{PROJECT_TYPE_LABELS[t]}</option>
              ))}
            </select>
          </Field>

          <Field label="Tell us about the job" id="message" error={errors.message?.message}>
            <textarea id="message" rows={6} {...register('message', { required: 'Tell us about the job' })} className="field-input resize-none" placeholder="Property size, suburb, what you need done." />
          </Field>

          {serverError && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-5 py-3.5 rounded-sm">{serverError}</div>
          )}

          <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-6">
            <button type="submit" disabled={status === 'submitting'} className="btn-copper disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'submitting' ? 'Sending...' : 'Book a free quote'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-[11px] text-charcoal/60 max-w-xs leading-relaxed">
              We only use your details to reply to this enquiry. No marketing, no list.
            </p>
          </div>

          <style jsx>{`
            .field-input {
              width: 100%;
              background: transparent;
              border: 0;
              border-bottom: 1.5px solid #1A1D1F;
              padding: 16px 0;
              font-size: 16px;
              color: #1A1D1F;
              outline: none;
              transition: border-color 300ms cubic-bezier(0.16, 1, 0.3, 1);
              letter-spacing: -0.005em;
            }
            .field-input::placeholder { color: #6b6860; }
            .field-input:focus { border-bottom-color: #C4784A; }
            textarea.field-input { border: 1.5px solid #1A1D1F; padding: 16px 18px; border-radius: 2px; }
            textarea.field-input:focus { border-color: #C4784A; }
            select.field-input { background-color: transparent; cursor: pointer; }
          `}</style>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-[0.25em] text-charcoal/70 mb-2 font-medium">{label}</label>
      {children}
      {error && <p className="mt-2 text-[12px] text-red-700">{error}</p>}
    </div>
  );
}
