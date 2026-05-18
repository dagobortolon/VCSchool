import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { TRANSLATIONS, COURSES_EN, COURSES_PT, BUNDLES, FAQ_ITEMS, SOCIAL_LINKS } from './constants';

const About = lazy(() => import('./components/About'));
const CourseList = lazy(() => import('./components/CourseList'));
const Mentorship = lazy(() => import('./components/Mentorship'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
    ... 
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#060606] selection:bg-[#EF7722]/10 selection:text-[#EF7722]">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <Suspense fallback={<LoadingFallback />}>
          <About t={t.about} />
          <CourseList 
            t={t.courses} 
            courses={lang === 'en' ? COURSES_EN : COURSES_PT} 
          />
          {/* <BundleList t={t.bundles} bundles={BUNDLES} /> */}
          <Mentorship t={t.mentorship} />
          <Testimonials t={t.testimonials} />
          <FAQ t={t.faq} items={FAQ_ITEMS[lang]} />
          <Contact t={t.contact} />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <Footer t={t.footer} socialLinks={SOCIAL_LINKS} />
      </Suspense>
    </div>
  );
}
