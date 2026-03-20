import React from 'react';

export default function About() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="overflow-hidden rounded-[30px] border border-black/5 bg-[#FFF6EE] p-5 shadow-sm">
        <div className="aspect-[4/4.3] rounded-[24px] bg-gradient-to-br from-[#EF7722] via-[#F9A335] to-[#0CA6DF]" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-black/60 ring-1 ring-black/5">
          About Vini
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Uma escola construída com curadoria, processo e direção visual.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
          A Vini Cavalcante School nasce para transformar a experiência de compra e aprendizado em algo mais claro, bonito e direto. Menos navegação, mais entendimento do que cada curso entrega, com foco em 3D, estética refinada e tomada de decisão rápida no mobile.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-black/55">
          <span className="rounded-full bg-[#F4F4F1] px-3 py-2">Curadoria autoral</span>
          <span className="rounded-full bg-[#F4F4F1] px-3 py-2">Qualidade visual</span>
          <span className="rounded-full bg-[#F4F4F1] px-3 py-2">Fluxo simples</span>
        </div>
      </div>
    </section>
  );
}
