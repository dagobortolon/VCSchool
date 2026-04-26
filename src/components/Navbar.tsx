import React from 'react';

interface NavbarProps {
  lang: 'en' | 'pt';
  setLang: (lang: 'en' | 'pt') => void;
  t: {
    courses: string;
    mentorship: string;
    members: string;
  };
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  return (
    <div className="sticky top-0 z-30 border-b border-black/5 bg-[#FCFBF8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Vini Cavalcanti School" 
              className="h-12 w-auto" 
            />
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm text-black/70 hover:text-black" href="#courses">{t.courses}</a>
          <a className="text-sm text-black/70 hover:text-black" href="#mentorship">{t.mentorship}</a>
          <button 
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm shadow-sm hover:bg-black/5 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'EN | PT' : 'PT | EN'}
          </button>
          <a className="rounded-full bg-[#0CA6DF] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#0995c9] transition-colors" href="#">
            {t.members}
          </a>
        </div>
      </div>
    </div>
  );
}
