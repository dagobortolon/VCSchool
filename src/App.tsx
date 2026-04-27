import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CourseList from './components/CourseList';
import BundleList from './components/BundleList';
import Mentorship from './components/Mentorship';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import { TRANSLATIONS, COURSES_EN, COURSES_PT, BUNDLES, FAQ_ITEMS, SOCIAL_LINKS } from './constants';

export default function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#FCFBF8] pb-24 text-[#060606] md:pb-0 selection:bg-[#EF7722]/10 selection:text-[#EF7722]">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <CourseList 
          t={t.courses} 
          courses={lang === 'en' ? COURSES_EN : COURSES_PT} 
        />
        <BundleList t={t.bundles} bundles={BUNDLES} />
        <Mentorship t={t.mentorship} />
        <Testimonials t={t.testimonials} />
        <FAQ t={t.faq} items={FAQ_ITEMS[lang]} />
      </main>

      <Footer t={t.footer} socialLinks={SOCIAL_LINKS} />
      <MobileBottomBar t={t.sticky} />
    </div>
  );
}
