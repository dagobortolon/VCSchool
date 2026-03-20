import React from 'react';

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-[#FCFBF8]/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a href="#courses" className="flex-1 rounded-full border border-black/10 bg-white px-4 py-3 text-center text-sm font-medium shadow-sm">
          Ver Cursos
        </a>
        <a href="#" className="flex-1 rounded-full bg-[#0CA6DF] px-4 py-3 text-center text-sm font-medium text-white shadow-sm">
          Área de membros
        </a>
      </div>
    </div>
  );
}
