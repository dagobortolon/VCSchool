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
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8 items-center">
      <div className="overflow-hidden rounded-[40px] border border-black/5 bg-white p-[10px] sm:p-[15px] shadow-xl relative w-fit mx-auto md:mx-0 max-w-sm sm:max-w-md md:max-w-none">
        <img 
          src="/images/about_vini_photo.webp" 
          alt="Vini Cavalcanti" 
          className="rounded-[28px] w-full h-auto block md:w-auto"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center text-left">
        <div className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-black/60 ring-1 ring-black/5 sm:text-sm">
          {t.badge}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
          {t.title}
        </h2>
        <div className="mt-6 max-w-2xl text-base leading-relaxed text-black/65 whitespace-pre-wrap sm:text-lg">
          {t.body}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium sm:text-sm text-black/55">
          {t.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#F4F4F1] px-4 py-2 ring-1 ring-black/5">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
