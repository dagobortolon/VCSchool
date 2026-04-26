import React, { useState, useEffect } from 'react';
import { Bundle } from '../types';

interface BundleListProps {
  bundles: Bundle[];
  t: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export default function BundleList({ bundles, t }: BundleListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const toggle = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <section id="bundles" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[34px] bg-[#F4FAFD] p-6 sm:p-8">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-black/5">
            {t.badge}
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="mt-3 text-base leading-7 text-black/65">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {bundles.map((bundle, i) => (
            <details 
              key={bundle.title} 
              open={isDesktop ? isExpanded : undefined}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition open:shadow-md"
            >
              <summary 
                onClick={toggle}
                className="flex flex-col list-none cursor-pointer h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={bundle.image} 
                    alt={bundle.title} 
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className={`hidden h-full w-full ${i === 0 ? "bg-gradient-to-br from-[#EF7722] to-[#F9A335]" : "bg-gradient-to-br from-[#0CA6DF] to-[#7ACEEE]"}`} />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60 font-medium">Combo</span>
                    <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60 font-medium">{bundle.includes.length} {t.badge}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{bundle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{bundle.desc}</p>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                    <div className="text-xl font-semibold text-[#EF7722]">{bundle.price}</div>
                    <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm transition group-open:hidden hover:bg-black/5">
                      Ver +
                    </div>
                    <div className="hidden rounded-full border border-black/10 bg-[#F5F5F2] px-4 py-2 text-sm shadow-sm group-open:block">
                      Ver -
                    </div>
                  </div>
                </div>
              </summary>

              <div className="px-6 pb-6">
                <div className="rounded-[22px] bg-[#FAFAF8] p-5 ring-1 ring-black/5">
                  <div className="mb-4">
                    <div className="text-sm font-medium">Cursos inclusos</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {bundle.includes.map((inc) => (
                        <span key={inc} className="rounded-full bg-white border border-black/5 px-3 py-2 text-xs font-medium text-black/70 shadow-sm">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <a href={bundle.checkout} className="block w-full rounded-xl bg-black px-4 py-4 text-center text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95">
                      Comprar combo
                    </a>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
