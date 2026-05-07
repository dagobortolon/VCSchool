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
  const renderBody = (text: string) => {
    // Define the highlights for both languages
    const highlights = [
      // Name (Orange)
      { pattern: /Vini Cavalcanti/g, type: 'orange' },
      
      // Bold terms
      { pattern: /Senior 3D Character Artist/g, type: 'bold' },
      { pattern: /E-Line Media/g, type: 'bold' },
      { pattern: /Mestrando \(M\.A\. Cand\.\) em Indústrias Criativas/g, type: 'bold' },
      { pattern: /Master's M\.A\. Cand\. in Creative Industries/g, type: 'bold' },
      { pattern: /Especialista em Game Art \(PG Dip\)/g, type: 'bold' },
      { pattern: /Game Art Specialist \(PG Dip\)/g, type: 'bold' },
      { pattern: /Angel Studios/g, type: 'bold' },
      { pattern: /PUGA Studios/g, type: 'bold' },
      { pattern: /Endstar/g, type: 'bold' },

      // Bold + Italic terms (Years)
      { pattern: /10\+ years of experience/g, type: 'bold-italic' },
      { pattern: /10\+ anos de experiência/g, type: 'bold-italic' },

      // Italic terms (Projects)
      { pattern: /The Wingfeather Saga/g, type: 'italic' },
      { pattern: /Wonderbox/g, type: 'italic' },
      { pattern: /Dice Dreams/g, type: 'italic' },
      { pattern: /visual development/g, type: 'italic' },
      { pattern: /stylized characters/g, type: 'italic' },
      { pattern: /desenvolvimento visual/g, type: 'italic' },
      { pattern: /personagens estilizados/g, type: 'italic' }
    ];

    // Build a single regex to match any of the patterns
    const regexParts = highlights.map(h => `(${h.pattern.source})`);
    const combinedRegex = new RegExp(regexParts.join('|'), 'g');

    const parts = text.split(combinedRegex);
    
    return parts.map((part, i) => {
      if (!part) return null;

      // Find which highlight matches this part
      for (const h of highlights) {
        if (new RegExp(`^${h.pattern.source}$`).test(part)) {
          if (h.type === 'orange') {
            return <span key={i} className="text-[#EF7722] font-extrabold">{part}</span>;
          }
          if (h.type === 'bold') {
            return <strong key={i} className="font-bold text-black/95">{part}</strong>;
          }
          if (h.type === 'bold-italic') {
            return <strong key={i} className="font-bold italic text-black/95 underline decoration-[#EF7722]/30 underline-offset-4">{part}</strong>;
          }
          if (h.type === 'italic') {
            return <em key={i} className="italic text-black/85">{part}</em>;
          }
        }
      }

      return part;
    });
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8 items-center">
      <div className="overflow-hidden rounded-[40px] border border-black/5 bg-white p-[10px] sm:p-[15px] shadow-xl relative w-fit mx-auto md:mx-0 max-w-sm sm:max-w-md md:max-w-none">
        <img 
          src="https://vinicavalcanti.com/images/about_vini_photo.webp" 
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
        <div className="mt-[24px] max-w-[900px] text-[18px] leading-[1.6] text-[#2b2b2b] whitespace-pre-wrap">
          {renderBody(t.body)}
        </div>
        <div className="mt-[24px] flex flex-wrap gap-2 text-xs font-medium sm:text-sm text-black/55">
          {t.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#F4F4F1] px-4 py-2 ring-1 ring-black/5">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
