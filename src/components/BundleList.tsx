import React, { useState, useEffect } from 'react';
import { Bundle } from '../types';

interface BundleListProps {
  bundles: Bundle[];
  t: {
    badge: string;
    title: string;
    subtitle: string;
    buy: string;
    details: string;
    close: string;
    priceLabel: string;
    includedTitle: string;
    comboLabel: string;
  };
}

export default function BundleList({ bundles, t }: BundleListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="bundles" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
      <div className="rounded-[34px] bg-[#F4FAFD] p-6 sm:p-10 lg:p-16">
        <div className="max-w-2xl text-left md:text-left">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-black/5 sm:text-sm">
            {t.badge}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-black/65 sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 items-start sm:grid-cols-2">
          {bundles.map((bundle, i) => (
            <div 
              key={bundle.title} 
              className={`group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition-all duration-300 ${expandedId === bundle.title ? 'shadow-md ring-1 ring-black/5' : ''}`}
            >
              <div 
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a')) return;
                  setExpandedId(expandedId === bundle.title ? null : bundle.title);
                }}
                className="flex flex-col cursor-pointer h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={bundle.image} 
                    alt={bundle.title} 
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="450"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className={`hidden h-full w-full ${i === 0 ? "bg-gradient-to-br from-[#EF7722] to-[#F9A335]" : "bg-gradient-to-br from-[#0CA6DF] to-[#7ACEEE]"}`} />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60 font-medium">{t.comboLabel}</span>
                    <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60 font-medium">{bundle.includes.length} {t.badge}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{bundle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60 line-clamp-3 min-h-[4.5rem]">{bundle.desc}</p>
                  
                  <div className="mt-auto flex items-center justify-between gap-5 border-t border-black/5 pt-6">
                    <div className="flex items-center">
                      <div className={`rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-black hover:text-white whitespace-nowrap ${expandedId === bundle.title ? 'hidden' : 'bg-white'}`}>
                        {t.details}
                      </div>
                      <div className={`rounded-full border border-black/10 bg-[#F5F5F2] px-5 py-2.5 text-sm font-semibold shadow-sm whitespace-nowrap ${expandedId === bundle.title ? 'block' : 'hidden'}`}>
                        {t.close}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <a 
                        href={bundle.checkout}
                        id={`bundle-buy-top-${bundle.title.toLowerCase().replace(/\s+/g, '-')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-compra rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:scale-105 active:scale-95 ${expandedId === bundle.title ? 'hidden' : (i === 0 ? "bg-[#EF7722] hover:bg-[#d9661b]" : "bg-[#0CA6DF] hover:bg-[#0995c9]")}`}
                      >
                        {t.buy}
                      </a>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-wider text-black/30 font-bold leading-none mb-1">{t.priceLabel}</span>
                        <div className="text-xl font-bold text-[#EF7722]">{bundle.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {expandedId === bundle.title && (
                <div className="px-6 pb-6">
                  <div className="rounded-[22px] bg-[#FAFAF8] p-5 ring-1 ring-black/5">
                    <div className="mb-4">
                      <div className="text-sm font-medium">{t.includedTitle}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {bundle.includes.map((inc) => (
                          <span key={inc} className="rounded-full bg-white border border-black/5 px-3 py-2 text-xs font-medium text-black/70 shadow-sm">
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <a 
                        href={bundle.checkout} 
                        id={`bundle-buy-bottom-${bundle.title.toLowerCase().replace(/\s+/g, '-')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-compra block w-full rounded-xl bg-black px-4 py-4 text-center text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
                      >
                        {t.buy}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
