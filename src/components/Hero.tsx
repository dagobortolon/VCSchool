import React from 'react';

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16 lg:px-8">
      <div>
        <div className="mb-4 inline-flex rounded-full bg-[#EFF8FD] px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-[#0CA6DF]/10">
          3D Education by Vini Cavalcante
        </div>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Cursos de 3D com uma visão autoral, prática e feita para evolução real.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-black/65 sm:text-lg">
          Aprenda com conteúdos em português e inglês, com foco em qualidade visual, processo de produção e uma experiência simples para escolher, entender e comprar sem atrito.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#courses" className="rounded-full bg-[#0CA6DF] px-5 py-3 text-sm font-medium text-white shadow-sm">
            Explorar Cursos
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-2 top-4 h-24 w-24 rounded-full bg-[#F9A335]/20 blur-2xl" />
        <div className="absolute -right-2 bottom-6 h-24 w-24 rounded-full bg-[#0CA6DF]/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
          <div className="aspect-[16/11] overflow-hidden rounded-[24px] bg-[#F4F4F1] ring-1 ring-black/5">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FFF2E7] via-white to-[#EEF8FC]">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                  <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#0CA6DF]" />
                </div>
                <div className="mt-4 text-sm font-medium text-black/70">Área reservada para vídeo de apresentação</div>
                <div className="mt-1 text-xs text-black/45">Professor se apresentando ou showcase de trabalhos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
