import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  t: {
    title: string;
    subtitle: string;
    items: Array<{ name: string; country: string; course: string; text: string }>;
  };
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-lg text-black/60 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {t.items.map((item) => (
          <div key={item.name} className="flex flex-col rounded-[32px] border border-black/5 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-serif text-[#0CA6DF]/40">“</div>
            <p className="mt-2 text-base leading-relaxed text-black/70 italic flex-grow">
              {item.text}
            </p>
            <div className="mt-8 pt-6 border-t border-black/5">
              <div className="font-semibold text-black">{item.name}</div>
              <div className="text-xs text-black/40 mt-1 uppercase tracking-wider">
                {item.course} • {item.country}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
