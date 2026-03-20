import React from 'react';
import { Course } from '../types';

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <section id="courses" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-[#EFF8FD] px-3 py-1 text-xs font-medium text-[#0CA6DF] ring-1 ring-[#0CA6DF]/10">
            Featured Courses
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Escolha seu próximo passo no 3D</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-2 overflow-x-auto pb-1 text-sm text-black/65">
            {["All", "Beginner", "Intermediate", "Advanced", "PT", "EN"].map((chip) => (
              <button key={chip} className="whitespace-nowrap rounded-full border border-black/10 bg-white px-3 py-2 shadow-sm">
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, i) => (
          <details key={course.title} className="group overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition open:shadow-md">
            <summary className="list-none cursor-pointer">
              <div className={`aspect-[16/10] ${i % 3 === 0 ? "bg-gradient-to-br from-[#EF7722] to-[#F9A335]" : i % 3 === 1 ? "bg-gradient-to-br from-[#0CA6DF] to-[#7ACEEE]" : "bg-gradient-to-br from-[#111111] to-[#7C877E]"}`} />
              <div className="p-5">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60">{course.level}</span>
                  <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60">{course.lang}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{course.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{course.desc}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold">{course.price}</div>
                  <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm transition group-open:hidden">
                    Ver detalhes
                  </div>
                  <div className="hidden rounded-full border border-black/10 bg-[#F5F5F2] px-4 py-2 text-sm shadow-sm group-open:block">
                    Fechar detalhes
                  </div>
                </div>
              </div>
            </summary>

            <div className="px-5 pb-5">
              <div className="rounded-[22px] bg-[#FAFAF8] p-4 ring-1 ring-black/5">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-black/45">Software</div>
                    <div className="font-medium">{course.software}</div>
                  </div>
                  <div>
                    <div className="text-black/45">Duração</div>
                    <div className="font-medium">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-black/45">Nível</div>
                    <div className="font-medium">{course.level}</div>
                  </div>
                  <div>
                    <div className="text-black/45">Idioma</div>
                    <div className="font-medium">{course.lang}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium">O que você vai aprender</div>
                  <ul className="mt-3 space-y-2 text-sm text-black/65">
                    {course.learn.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0CA6DF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={course.checkout} className="flex-1 rounded-full bg-[#0CA6DF] px-4 py-3 text-center text-sm font-medium text-white shadow-sm">
                    Comprar curso
                  </a>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <details className="group">
          <summary className="list-none cursor-pointer rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-sm">
            <span className="group-open:hidden">Ver mais cursos</span>
            <span className="hidden group-open:inline">Ocultar cursos extras</span>
          </summary>
          <div className="mt-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 3).map((course, i) => (
              <div key={`${course.title}-extra`} className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
                <div className={`aspect-[16/10] ${i % 2 === 0 ? "bg-gradient-to-br from-[#0CA6DF] to-[#7ACEEE]" : "bg-gradient-to-br from-[#EF7722] to-[#F9A335]"}`} />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60">{course.level}</span>
                    <span className="rounded-full bg-[#F5F5F2] px-2.5 py-1 text-black/60">{course.lang}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{course.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{course.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-semibold">{course.price}</div>
                    <a href={course.checkout} className="rounded-full bg-[#0CA6DF] px-4 py-2 text-sm font-medium text-white shadow-sm">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
