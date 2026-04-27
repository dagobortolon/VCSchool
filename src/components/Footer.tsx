import React from 'react';
import { SocialLink } from '../types';
import { Instagram, Linkedin, Palette, ShoppingBag, Video } from 'lucide-react';

interface FooterProps {
  socialLinks: SocialLink[];
  t: {
    copy: string;
    links: {
      courses: string;
      mentorship: string;
      faq: string;
    };
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
    <footer className="mx-auto max-w-7xl px-4 py-16 text-sm text-black/50 sm:px-6 lg:px-8">
      <div className="border-t border-black/5 pt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <img 
              src="/images/vini_cavalcanti_3d_school_logo.png" 
              alt="Vini Cavalcanti School" 
              className="h-10 w-auto opacity-40 grayscale" 
            />
            <div className="text-left">{t.copy}</div>
          </div>
          
          <div className="flex items-center gap-6 text-black/65">
            {socialLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                aria-label={item.name} 
                className="transition-all hover:text-[#0CA6DF] hover:scale-110"
                title={item.name}
              >
                {getIcon(item.name)}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#courses" className="hover:text-black font-medium">{t.links.courses}</a>
            <a href="#mentorship" className="hover:text-black font-medium">{t.links.mentorship}</a>
            <a href="#faq" className="hover:text-black font-medium">{t.links.faq}</a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-black/[0.03] text-[10px] uppercase tracking-widest text-black/20 text-center">
          Building Digital Legacies through 3D Art
        </div>
      </div>
    </footer>
  );
}
