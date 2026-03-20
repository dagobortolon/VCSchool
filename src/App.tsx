import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CourseList from './components/CourseList';
import BundleList from './components/BundleList';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import { COURSES, BUNDLES, TESTIMONIALS, SOCIAL_LINKS } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFBF8] pb-24 text-[#060606] md:pb-0">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <CourseList courses={COURSES} />
        <BundleList bundles={BUNDLES} />
        <Testimonials testimonials={TESTIMONIALS} />
        <FAQ />
      </main>

      <Footer socialLinks={SOCIAL_LINKS} />
      <MobileBottomBar />
    </div>
  );
}
