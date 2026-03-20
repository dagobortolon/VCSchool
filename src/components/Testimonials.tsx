import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl leading-none text-[#0CA6DF]">“</div>
            <p className="mt-3 text-sm leading-7 text-black/65">{item.text}</p>
            <div className="mt-5 text-sm font-medium">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
