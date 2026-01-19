import React from 'react';
import { ContentData } from '../types';
import { Logo } from './Logo';
import { Linkedin, Instagram, MessageCircle, Phone, Music2, Globe } from 'lucide-react';

interface FooterProps {
    content: ContentData['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  const socials = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/heyoworld1/", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/heyoworld_edu", label: "Instagram" },
    { icon: <Music2 size={18} />, href: "https://www.tiktok.com/@heyoworld", label: "TikTok" },
    { icon: <Globe size={18} />, href: "#", label: "Website" },
    { icon: <MessageCircle size={18} />, href: "#", label: "WeChat" },
    { icon: <Phone size={18} />, href: "https://wa.me/message/BYHIZLU4EWPBD1", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-brand-deep border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="flex flex-col items-start gap-6 max-w-sm">
            {/* Dark background requires light logo */}
            <Logo lightMode={true} />
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              专注于全球精英教育规划与英伦学术辅导。如深海般博大精准，为学子的每一步航行保驾护航。
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-8">
            <div className="flex flex-wrap gap-4">
                {socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl border border-white/5"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
            </div>
            
            <nav className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                <a href="#services" className="hover:text-blue-400 transition-colors">专业领域</a>
                <a href="#exclusive" className="hover:text-blue-400 transition-colors">品牌理念</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">建立联系</a>
            </nav>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase font-bold">
          <div className="text-blue-400/50">
            {content.chineseName} | HEYO WORLD CO., LTD.
          </div>
          <div className="text-gray-600">
            &copy; {new Date().getFullYear()} {content.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};