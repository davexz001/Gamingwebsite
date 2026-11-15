import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';

type InquiryTopic = 'Publishing' | 'Co-Development' | 'Porting & Tech' | 'General';

const INQUIRY_TOPICS: InquiryTopic[] = [
  'Publishing',
  'Co-Development',
  'Porting & Tech',
  'General',
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState<InquiryTopic>('Co-Development');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid work or personal email address.';
    }
    if (!message.trim() || message.trim().length < 15) {
      nextErrors.message = 'Please include a short summary of at least 15 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setTopic('Co-Development');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold text-[#1E40AF]">Contact</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-tight text-[#0F172A] [text-wrap:balance]">
            Start a studio conversation
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Reach out regarding co-development availability, publishing conversations for our
            original IP, or technical rendering consultations.
          </p>

          <div className="mt-10 space-y-6 border-t border-slate-900/10 pt-8">
            <div>
              <h2 className="text-xs font-semibold text-slate-500">Direct Email</h2>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${STUDIO_PROFILE.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#1E40AF]"
                >
                  <Mail className="h-4 w-4 text-slate-500" aria-hidden="true" />
                  <span>{STUDIO_PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 whitespace-nowrap transition-colors hover:border-[#0F172A] hover:text-[#0F172A]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#1E40AF]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500">Operating Hours & Region</h2>
              <p className="mt-1.5 text-sm text-slate-700">{STUDIO_PROFILE.location}</p>
              <p className="mt-1 text-xs text-slate-500">
                Typical response time: {STUDIO_PROFILE.responseTime}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 sm:p-10">
            {submitted ? (
              <div className="py-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E40AF]/10 text-[#1E40AF]">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-[#0F172A]">
                  Inquiry recorded for demo preview
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Thanks, <span className="font-semibold text-[#0F172A]">{name}</span>. Your{' '}
                  <span className="font-semibold text-[#0F172A]">{topic}</span> note has been
                  validated in this demo interface. In production, this form connects directly to
                  the studio inbox or CRM endpoint.
                </p>
                <div className="mt-6 rounded-xl bg-[#F4F5F7] p-4 text-xs text-slate-600">
                  <p>
                    <span className="font-semibold text-[#0F172A]">Reply-To:</span> {email}
                  </p>
                  {company && (
                    <p className="mt-1">
                      <span className="font-semibold text-[#0F172A]">Organization:</span> {company}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E40AF]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <span className="block text-xs font-semibold text-slate-700">Inquiry Topic</span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {INQUIRY_TOPICS.map((item) => {
                      const isActive = topic === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTopic(item)}
                          className={`rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                            isActive
                              ? 'bg-[#0F172A] text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0F172A]'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Alex Mercer"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#1E40AF] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="alex@studio.example"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#1E40AF] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Studio or Organization (Optional)
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="Northwind Games"
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Project Scope & Timeline
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us about your engine, milestone timeline, or publishing inquiry..."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#1E40AF] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-500">
                    All demo submissions stay local in your browser.
                  </p>
                  <button
                    type="submit"
                    className="rounded-lg bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
                  >
                    Send inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
