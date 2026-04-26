import React, { useState, useEffect } from 'react';
import { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  t: {
    title: string;
    filters: {
      all: string;
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    duration: string;
    software: string;
    details: string;
    close: string;
    buy: string;
    loadMore: string;
  };
}

export default function CourseList({ courses, t }: CourseListProps) {
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const toggleMain = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsMainExpanded(!isMainExpanded);
    }
  };

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(c => c.level.includes(activeFilter) || c.lang.includes(activeFilter));

  const filterOptions = [
    { label: t.filters.all, value: 'All' },
    { label: t.filters.beginner, value: 'Beginner' },
    { label: t.filters.intermediate, value: 'Intermediate' },
    { label: t.filters.advanced, value: 'Advanced' },
    { label: 'PT', value: 'PT' },
    { label: 'EN', value: 'EN' }
  ];

  return (
    <section id="courses" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-2 overflow-x-auto pb-1 text-sm text-black/65 scrollbar-hide">
            {filterOptions.map((opt) => (
              <button 
                key={opt.value} 
                onClick={() => setActiveFilter(opt.value)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 shadow-sm transition-all ${activeFilter === opt.value ? 'bg-black text-white border-black' : 'bg-white border-black/10'}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course, i) => (
          <details 
            key={course.title} 
            open={isDesktop ? isMainExpanded : undefined}
            className="group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition open:shadow-md"
          >
            <summary 
              onClick={toggleMain}
              className="flex flex-col list-none cursor-pointer h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className={`hidden h-full w-full ${i % 3 === 0 ? "bg-gradient-to-br from-[#EF7722] to-[#F9A335]" : i % 3 === 1 ? "bg-gradient-to-br from-[#0CA6DF] to-[#7ACEEE]" : "bg-gradient-to-br from-[#111111] to-[#7C877E]"}`} />
              </div>
              <div className="flex flex-col flex-grow p-5">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60 font-medium">{course.level}</span>
                  <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60 font-medium">{course.lang}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight leading-tight">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60 line-clamp-2">{course.desc}</p>
                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold text-[#EF7722]">{course.price}</div>
                  <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm transition group-open:hidden hover:bg-black/5">
                    {t.details} +
                  </div>
                  <div className="hidden rounded-full border border-black/10 bg-[#F5F5F2] px-4 py-2 text-sm shadow-sm group-open:block">
                    {t.close} -
                  </div>
                </div>
              </div>
            </summary>

            <div className="px-5 pb-5">
              <div className="rounded-[22px] bg-[#FAFAF8] p-4 ring-1 ring-black/5">
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <div className="text-black/45 text-xs uppercase tracking-wider mb-1">{t.software}</div>
                    <div className="font-semibold text-black/80">{course.software}</div>
                  </div>
                  <div>
                    <div className="text-black/45 text-xs uppercase tracking-wider mb-1">{t.duration}</div>
                    <div className="font-semibold text-black/80">{course.duration}</div>
                  </div>
                </div>
                
                {course.expandedDesc && (
                  <div className="mb-6">
                     <p className="text-sm text-black/70 leading-relaxed italic border-l-2 border-[#EF7722]/30 pl-3">
                      {course.expandedDesc}
                    </p>
                  </div>
                )}

                <div className="mt-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#EF7722]">Lessons included</div>
                  <ul className="mt-4 space-y-3 text-sm text-black/75">
                    {course.learn.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF7722]/50" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a href={course.checkout} className="block w-full rounded-xl bg-black px-4 py-4 text-center text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95">
                    {t.buy}
                  </a>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-semibold text-black/70 shadow-sm transition-all hover:bg-black hover:text-white">
          {t.loadMore}
        </button>
      </div>
    </section>
  );
}
