import React from 'react';
import { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-black/50 sm:px-6 lg:px-8">
      <div className="border-t border-black/5 pt-6">
        <div className="grid gap-4 md:grid-cols-3 md:items-center">
          <div className="text-left">© 2026 Vini Cavalcante School</div>
          <div className="flex items-center justify-center gap-4 text-black/65">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} aria-label={item.name} className="hover:text-black">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex justify-start gap-4 md:justify-end">
            <a href="#courses">Cursos</a>
            <a href="#bundles">Combos</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
