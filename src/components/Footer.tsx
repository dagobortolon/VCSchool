import React from 'react';
import { SocialLink } from '../types';
import { Instagram, Linkedin, Palette, ShoppingBag, Video } from 'lucide-react';

interface FooterProps {
  socialLinks: SocialLink[];
  t: {
    rights: string;
    tagline: string;
    links: string[];
  };
}

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'instagram':
      return <Instagram size={20} />;
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'artstation':
      return <Palette size={20} />;
    case 'gumroad':
      return <ShoppingBag size={20} />;
    case 'tiktok':
      return <Video size={20} />;
    default:
      return null;
  }
};

export default function Footer({ socialLinks, t }: FooterProps) {
  return (
    <footer className="mx-auto max-w-7xl px-4 pt-8 pb-16 text-sm text-black/50 sm:px-6 lg:px-8">
      <div className="border-t border-black/5 pt-8 flex flex-col items-center text-center">
        <img 
          src="https://wp.vinicavalcanti.com/wp-content/uploads/2026/05/logo_vini_cavalcanti_3D.webp" 
          alt="Vini Cavalcanti School" 
          className="h-14 w-auto mb-8" 
        />
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-black/80 font-medium">
          <a href="#courses" id="footer-link-courses" className="btn-footer hover:text-[#EF7722] transition-colors">{t.links[0]}</a>
          <a href="#mentorship" id="footer-link-mentorship" className="btn-footer hover:text-[#EF7722] transition-colors">{t.links[1]}</a>
          <a href="#faq" id="footer-link-faq" className="btn-footer hover:text-[#EF7722] transition-colors">{t.links[2]}</a>
        </div>

        <div className="flex items-center gap-8 mb-12 text-black/40">
          {socialLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              id={`footer-social-${item.name.toLowerCase()}`}
              aria-label={item.name} 
              className="btn-social transition-all hover:text-[#0CA6DF] hover:scale-110"
              title={item.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getIcon(item.name)}
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <div className="text-[11px] uppercase tracking-[0.2em] text-black/30">
            {t.tagline}
          </div>
          <div className="text-[10px] text-black/20">
            {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
