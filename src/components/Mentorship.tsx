import React, { useState, useEffect } from 'react';

interface MentorshipProps {
  t: {
    sectionTitle: string;
    badge: string;
    label: string;
    title: string;
    body: string;
    button: string;
    price: string;
    modules: Array<{
      title: string;
      weeks: Array<{ label: string; text: string }>;
    }>;
  };
}

export default function Mentorship({ t }: MentorshipProps) {
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
    <section id="mentorship" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex rounded-full bg-[#0CA6DF]/5 px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-[#0CA6DF]/10">
          {t.badge}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.sectionTitle}
        </h2>
      </div>

      <div className="mx-auto max-w-4xl">
        <details 
          open={isDesktop ? isExpanded : undefined}
          className="group flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-sm transition-all open:shadow-xl"
        >
          <summary 
            onClick={toggle}
            className="flex flex-col list-none cursor-pointer h-full"
          >
            <div className="relative aspect-[21/9] overflow-hidden">
              <img 
                src="/images/vini.png" 
                alt={t.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            <div className="flex flex-col flex-grow p-8 sm:p-10">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-[#0CA6DF]/10 px-3 py-1.5 text-[#0CA6DF] font-bold uppercase tracking-wider">
                  Limited Spots
                </span>
                <span className="rounded-full bg-black/5 px-3 py-1.5 text-black/60 font-bold uppercase tracking-wider">
                  One-on-One
                </span>
              </div>
              
              <h3 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {t.title}
              </h3>
              
              <p className="mt-4 text-lg leading-relaxed text-black/60 line-clamp-2">
                {t.body}
              </p>
              
              <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between gap-3">
                <div className="text-3xl font-bold text-[#EF7722]">
                  {t.price}
                </div>
                <div className="rounded-full border border-black/10 bg-white px-8 py-3 text-base font-semibold shadow-sm transition group-open:hidden hover:bg-black hover:text-white">
                  Ver +
                </div>
                <div className="hidden rounded-full border border-black/10 bg-black px-8 py-3 text-base font-semibold text-white shadow-sm group-open:block">
                  Ver -
                </div>
              </div>
            </div>
          </summary>

          <div className="px-8 pb-8 sm:px-10 sm:pb-10">
            <div className="rounded-[24px] bg-[#FAFAF8] p-8 ring-1 ring-black/5">
              <div className="mb-10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#0CA6DF] mb-4">Sobre a mentoria</div>
                <p className="text-lg text-black/70 leading-relaxed whitespace-pre-wrap italic">
                  {t.body}
                </p>
              </div>

              <div className="space-y-12 mb-10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#0CA6DF]">Grade da Mentoria</div>
                
                {t.modules.map((module) => (
                  <div key={module.title} className="space-y-6">
                    <h4 className="text-xl font-bold text-black border-l-4 border-[#0CA6DF] pl-4">
                      {module.title}
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {module.weeks.map((week) => (
                        <div key={week.label} className="rounded-2xl bg-white p-5 border border-black/5 shadow-sm">
                          <div className="text-xs font-bold text-[#EF7722] uppercase tracking-wider mb-2">
                            {week.label}
                          </div>
                          <p className="text-sm text-black/70 leading-relaxed">
                            {week.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-black/5">
                <a href="#" className="block w-full rounded-2xl bg-[#EF7722] px-6 py-5 text-center text-lg font-bold text-white shadow-xl shadow-[#EF7722]/20 transition-all hover:scale-[1.02] active:scale-95">
                  {t.button}
                </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
