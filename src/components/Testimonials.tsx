import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';

interface TestimonialsProps {
  t: {
    title: string;
    subtitle: string;
    items: Array<{ name: string; country: string; course: string; text: string }>;
  };
}

export default function Testimonials({ t }: TestimonialsProps) {
  // Multiply items to create infinite loop effect
  const duplicatedItems = [...t.items, ...t.items, ...t.items, ...t.items];
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-25%"],
        transition: {
          duration: 12,
          ease: "linear",
          repeat: Infinity
        }
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section id="testimonials" className="py-24 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-black/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <div className="relative group cursor-grab active:cursor-grabbing">
        {/* Gradient overlays for smooth fading at edges - Hidden on mobile to avoid blocking tap targets, useful on desktop */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FCFBF8] to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FCFBF8] to-transparent pointer-events-none" />

        <motion.div 
          className="flex gap-6 px-4"
          animate={controls}
          drag="x"
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          whileTap={{ cursor: "grabbing" }}
          dragConstraints={{ left: -2000, right: 2000 }} // Large constraints to allow free movement before snap
        >
          {duplicatedItems.map((item, idx) => (
            <div 
              key={`${item.name}-${idx}`} 
              className="flex w-[300px] sm:w-[350px] shrink-0 flex-col rounded-[32px] border border-black/5 bg-white p-8 shadow-sm transition-shadow pointer-events-none"
            >
              <div className="text-4xl font-serif text-[#0CA6DF]/40">“</div>
              <p className="mt-2 text-base leading-relaxed text-black/70 italic flex-grow">
                {item.text}
              </p>
              <div className="mt-8 pt-6 border-t border-black/5">
                <div className="font-semibold text-black">{item.name}</div>
                <div className="text-xs text-black/40 mt-1 uppercase tracking-wider">
                  {item.course}{item.country ? ` • ${item.country}` : ''}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
