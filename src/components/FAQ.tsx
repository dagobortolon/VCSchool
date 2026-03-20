import React from 'react';

export default function FAQ() {
  const questions = [
    "Os cursos estão em português ou inglês?",
    "A compra é feita onde?",
    "O acesso é imediato?",
    "Os cursos servem para iniciantes?",
    "Existem combos com melhor custo?"
  ];

  return (
    <section id="faq" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-[#FFF2E7] px-3 py-1 text-xs font-medium text-[#EF7722] ring-1 ring-[#EF7722]/10">
          FAQ
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Dúvidas rápidas antes da compra</h2>
      </div>
      <div className="mt-8 space-y-3">
        {questions.map((question) => (
          <details key={question} className="rounded-[22px] border border-black/5 bg-white px-5 py-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <div className="font-medium">{question}</div>
              <div className="text-black/35">+</div>
            </summary>
            <p className="pt-3 text-sm leading-6 text-black/60">
              Texto de apoio para responder essa dúvida de forma rápida e objetiva.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
