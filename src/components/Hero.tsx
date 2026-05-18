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
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20 lg:px-8">
      <div className="text-left md:text-left z-10">
        <div className="mb-4 inline-flex rounded-full bg-[#EFF8FD] px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-[#0CA6DF]/10 sm:text-sm">
          {t.badge}
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl break-normal">
          {t.headline}
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-black/65 sm:text-lg lg:text-xl">
          {t.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a 
            href="#courses" 
            id="hero-cta-courses"
            className="btn-nav w-full sm:w-auto rounded-full bg-[#EF7722] px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-[#EF7722]/20 transition-all hover:scale-105 active:scale-95 hover:bg-[#d96d1f]"
          >
            {t.button} ↓
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-4 top-10 h-32 w-32 rounded-full bg-[#EF7722]/10 blur-3xl opacity-50" />
        <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[#0CA6DF]/10 blur-3xl opacity-50" />
        
        <div id="hero-mosaic" className="relative grid grid-cols-12 grid-rows-12 gap-2 sm:gap-3 p-1 aspect-square w-full">
          {[
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-boardinsta01-3.webp",
              className: "col-span-6 row-span-6",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-vinicius-cavalcanti-puga-studios-puga-studios-puga-wonderbox-thenovice-0-1_1x.webp",
              className: "col-span-3 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-tbrender-005-1_1x.webp",
              className: "col-span-3 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-foxboard1-1_1x.webp",
              className: "col-span-4 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-board1-1_1x.webp",
              className: "col-span-2 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-vinicavalcantirender2-1_1x.webp",
              className: "col-span-6 row-span-6",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-warden3-1_1x.webp",
              className: "col-span-3 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-vinicius-cavalcanti-puga-studios-puga-studios-puga-slide-stars-thumb-2-1_1x.webp",
              className: "col-span-3 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-wip12112-1_1x.webp",
              className: "col-span-4 row-span-3",
            },
            {
              src: "https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/vinicius-cavalcanti-vinicius-cavalcanti-puga-studios-puga-studios-puga-wonderbox-thewarrior-0-1_1x.webp",
              className: "col-span-2 row-span-3",
            },
          ].map((image, index) => {
            return (
              <a
                key={index}
                href="https://www.artstation.com/viniciuscavalcanti"
                target="_blank"
                rel="noopener noreferrer"
                className={`${image.className} group relative overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block`}
              >
              <img
                src={image.src}
                alt={`Portfolio piece ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                referrerPolicy="no-referrer"
                decoding={index === 0 ? "sync" : "async"}
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
