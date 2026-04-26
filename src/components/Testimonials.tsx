import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  t: {
    title: string;
    subtitle: string;
  };
}

export default function Testimonials({ t }: TestimonialsProps) {
  // Placeholder testimonials as requested in PDF [Fill with real testimonials]
  const placeholderTestimonials = [
    { name: "Lucas M.", country: "Brazil", course: "Character Design", text: "Os cursos me ajudaram a organizar melhor meu processo e elevar bastante a apresentação dos meus projetos." },
    { name: "Marina S.", country: "USA", course: "Grooming", text: "A didática é direta e o visual da escola passa exatamente a sensação de curadoria que eu queria encontrar." },
    { name: "Caio R.", country: "Portugal", course: "Environment", text: "Gostei porque consigo entender rápido o curso, ver o que vou aprender e comprar sem ficar navegando em várias páginas." }
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-lg text-black/60 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {placeholderTestimonials.map((item) => (
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
