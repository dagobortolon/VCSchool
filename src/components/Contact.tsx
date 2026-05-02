import React, { useState } from 'react';

interface ContactProps {
  t: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
  };
}

export default function Contact({ t }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxsRamNL8mTpZTn-w8l3dWubU-NKoDDpqACR6mRtmLxYTTxpve944oegRw-IOy_Gus/exec";

    const dados = {
      nome: formData.name,
      email: formData.email,
      mensagem: formData.message
    };

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(dados)
      });

      const json = await res.json();

      if (json.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Server error:", json.erro);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex rounded-full bg-[#EF7722]/5 px-3 py-1 text-xs font-medium text-[#EF7722] ring-1 ring-[#EF7722]/10 sm:text-sm">
          {t.badge}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-black/60 sm:text-lg mx-auto max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm sm:p-10 transition-shadow hover:shadow-md">
          <form id="formulario-contato" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold leading-6 text-black/80">
                {t.name}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="nome"
                  autoComplete="name"
                  required
                  placeholder={t.placeholders.name}
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-2xl border-0 px-4 py-3 text-black/90 shadow-sm ring-1 ring-inset ring-black/10 placeholder:text-black/30 focus:ring-2 focus:ring-inset focus:ring-[#EF7722] sm:text-sm sm:leading-6 transition-all bg-[#FAFAF8]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black/80">
                {t.email}
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder={t.placeholders.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-2xl border-0 px-4 py-3 text-black/90 shadow-sm ring-1 ring-inset ring-black/10 placeholder:text-black/30 focus:ring-2 focus:ring-inset focus:ring-[#EF7722] sm:text-sm sm:leading-6 transition-all bg-[#FAFAF8]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-semibold leading-6 text-black/80">
                {t.message}
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="mensagem"
                  rows={4}
                  required
                  placeholder={t.placeholders.message}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-2xl border-0 px-4 py-3 text-black/90 shadow-sm ring-1 ring-inset ring-black/10 placeholder:text-black/30 focus:ring-2 focus:ring-inset focus:ring-[#EF7722] sm:text-sm sm:leading-6 transition-all resize-none bg-[#FAFAF8]"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                id="contact-submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center rounded-2xl bg-[#EF7722] px-3.5 py-4 text-center text-sm font-bold text-white shadow-lg transition-all hover:bg-[#d9661b] hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.sending}
                  </span>
                ) : t.send}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div id="contact-success" className="mt-6 rounded-2xl bg-green-50 p-4 ring-1 ring-green-600/10 animate-in fade-in slide-in-from-top-1">
              <p className="text-sm font-medium text-green-800 text-center">{t.success}</p>
            </div>
          )}

          {status === 'error' && (
            <div id="contact-error" className="mt-6 rounded-2xl bg-red-50 p-4 ring-1 ring-red-600/10 animate-in fade-in slide-in-from-top-1">
              <p className="text-sm font-medium text-red-800 text-center">{t.error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
