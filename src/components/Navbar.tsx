import React from 'react';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-black/5 bg-[#FCFBF8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="h-7 w-7 rounded-full bg-[#EF7722]" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight">Vini Cavalcante School</div>
            <div className="text-xs text-black/50">3D courses • PT / EN</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm text-black/70 hover:text-black" href="#courses">Cursos</a>
          <a className="text-sm text-black/70 hover:text-black" href="#bundles">Combos</a>
          <button className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm shadow-sm">PT | EN</button>
          <a className="rounded-full bg-[#0CA6DF] px-4 py-2 text-sm font-medium text-white shadow-sm" href="#">
            Área de membros
          </a>
        </div>
      </div>
    </div>
  );
}
