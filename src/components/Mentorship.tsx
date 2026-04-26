import React, { useState, useEffect } from 'react';

interface MentorshipProps {
  t: {
    badge: string;
    label: string;
    title: string;
    body: string;
    button: string;
    price: string;
  };
}

export default function Mentorship({ t }: MentorshipProps) {
  return (
    <section id="mentorship" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[40px] bg-[#0CA6DF]/5 p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#0CA6DF]/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-[#0CA6DF]/10">
            {t.badge}
          </div>
          <div className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
            {t.label}
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.title}
          </h2>
          <div className="mt-8 text-lg leading-relaxed text-black/65 whitespace-pre-wrap">
            {t.body}
          </div>
          
          <div className="mt-10 flex items-center gap-6">
            <a href="#" className="rounded-full bg-black px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 active:scale-95">
              {t.button}
            </a>
            <div className="text-2xl font-bold text-[#0CA6DF]">
              {t.price}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
