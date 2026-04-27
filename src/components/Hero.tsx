import React from 'react';

interface HeroProps {
  t: {
    badge: string;
    headline: string;
    subheadline: string;
    button: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16 lg:px-8">
      <div>
        <div className="mb-4 inline-flex rounded-full bg-[#EFF8FD] px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-[#0CA6DF]/10">
          {t.badge}
        </div>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {t.headline}
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-black/65 sm:text-lg">
          {t.subheadline}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#courses" className="rounded-full bg-[#EF7722] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#EF7722]/20 transition-all hover:scale-105 hover:bg-[#d96d1f]">
            {t.button} ↓
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-4 top-10 h-32 w-32 rounded-full bg-[#F9A335]/15 blur-3xl" />
        <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[#0CA6DF]/15 blur-3xl" />
        <div className="relative overflow-hidden rounded-[24px] shadow-2xl">
          <img 
            src="/images/hero_image.webp" 
            alt="3D Character Presentation" 
            className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square md:aspect-[16/11]"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1616440893912-2139ad9bf79a?auto=format&fit=crop&q=80&w=1200";
            }}
          />
        </div>
      </div>
    </section>
  );
}
