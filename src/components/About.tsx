import React from 'react';

interface AboutProps {
  t: {
    badge: string;
    title: string;
    body: string;
    tags: string[];
  };
}

export default function About({ t }: AboutProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8 items-center">
      <div className="overflow-hidden rounded-[40px] border border-black/5 bg-white p-6 shadow-xl relative h-[650px] w-full max-w-[480px] mx-auto md:mx-0">
        <img 
          src="/images/about_vini_photo.webp" 
          alt="Vini Cavalcanti" 
          className="h-full w-full object-cover rounded-[24px]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden h-full w-full rounded-[24px] bg-gradient-to-br from-[#EF7722] via-[#F9A335] to-[#0CA6DF]" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-black/60 ring-1 ring-black/5">
          {t.badge}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.title}
        </h2>
        <div className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65 whitespace-pre-wrap sm:text-base">
          {t.body}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-black/55">
          {t.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#F4F4F1] px-3 py-2">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
