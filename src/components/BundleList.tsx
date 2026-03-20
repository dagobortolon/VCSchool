import React from 'react';
import { Bundle } from '../types';

interface BundleListProps {
  bundles: Bundle[];
}

export default function BundleList({ bundles }: BundleListProps) {
  return (
    <section id="bundles" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[34px] bg-[#F4FAFD] p-6 sm:p-8">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-black/5">
            Bundles
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Combos pensados para acelerar a escolha</h2>
          <p className="mt-3 text-base leading-7 text-black/65">
            Trilha mais organizada para quem quer comprar com mais clareza e aproveitar melhor a progressão dos conteúdos.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {bundles.map((bundle, i) => (
            <div key={bundle.title} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
              <div className={`mb-5 h-40 rounded-[22px] ${i === 0 ? "bg-gradient-to-br from-[#EF7722] to-[#F9A335]" : "bg-gradient-to-br from-[#0CA6DF] to-[#7ACEEE]"}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{bundle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{bundle.desc}</p>
                </div>
                <div className="rounded-full bg-[#FFF2E7] px-3 py-1 text-sm font-medium text-[#EF7722]">
                  {bundle.price}
                </div>
              </div>
              <div className="mt-5">
                <div className="text-sm font-medium">Inclui</div>
                <div className="mt-3 flex flex-wrap gap-2 text-sm text-black/60">
                  {bundle.includes.map((inc) => (
                    <span key={inc} className="rounded-full bg-[#F5F5F2] px-3 py-2">{inc}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={bundle.checkout} className="flex-1 rounded-full bg-[#0CA6DF] px-4 py-3 text-center text-sm font-medium text-white shadow-sm">
                  Comprar combo
                </a>
                <button className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm shadow-sm">Ver detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
