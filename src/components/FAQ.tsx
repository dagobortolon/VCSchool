import React from 'react';

interface FAQProps {
  t: {
    badge: string;
    title: string;
    subtitle: string;
  };
  items: Array<{ q: string; a: string }>;
}

export default function FAQ({ t, items }: FAQProps) {
  return (
    <section id="faq" className="mx-auto max-w-5xl scroll-mt-24 px-4 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-14 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex rounded-full bg-[#FFF2E7] px-3 py-1 text-xs font-medium text-[#EF7722] ring-1 ring-[#EF7722]/10">
          {t.badge}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-lg text-black/60 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details key={item.q} className="group rounded-[28px] border border-black/5 bg-white px-6 py-5 shadow-sm transition-all open:shadow-md">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <div className="font-semibold text-black/80">{item.q}</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xl font-light text-black transition-transform group-open:rotate-45">
                +
              </div>
            </summary>
            <div className="mt-5 border-t border-black/5 pt-5">
              <p className="text-base leading-relaxed text-black/60">
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
