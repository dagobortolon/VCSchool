import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FCFBF8]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/images/logo_vini_cavalcanti_3D.svg" 
              alt="Vini Cavalcanti School" 
              className="h-12 w-auto" 
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm font-medium text-black/70 hover:text-black transition-colors" href="#courses">{t.courses}</a>
          <a className="text-sm font-medium text-black/70 hover:text-black transition-colors" href="#mentorship">{t.mentorship}</a>
          <button 
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm shadow-sm hover:bg-black/5 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'EN | PT' : 'PT | EN'}
          </button>
          <a className="rounded-full bg-[#0CA6DF] px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#0995c9] hover:shadow-lg transition-all" href="#">
            {t.members}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-black/70 hover:bg-black/5 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#FCFBF8] md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 pb-8 pt-2">
              <a 
                href="#courses" 
                onClick={toggleMenu}
                className="text-lg font-medium text-black/80 hover:text-black"
              >
                {t.courses}
              </a>
              <a 
                href="#mentorship" 
                onClick={toggleMenu}
                className="text-lg font-medium text-black/80 hover:text-black"
              >
                {t.mentorship}
              </a>
              <div className="flex pt-2">
                <button 
                  onClick={() => {
                    setLang(lang === 'en' ? 'pt' : 'en');
                    toggleMenu();
                  }}
                  className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-black/5 transition-all"
                >
                  {lang === 'en' ? 'EN | PT' : 'PT | EN'}
                </button>
              </div>
              <a 
                href="#" 
                onClick={toggleMenu}
                className="mt-2 block rounded-full bg-[#0CA6DF] px-6 py-4 text-center text-lg font-semibold text-white shadow-md"
              >
                {t.members}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
