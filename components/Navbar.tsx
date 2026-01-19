import React, { useState, useEffect } from 'react';
import { Language, ContentData } from '../types';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { label: content.services, href: '#services' },
    { label: content.contact, href: '#contact' },
  ];

  const navBackground = isScrolled || isMobileMenuOpen ? 'bg-brand-deep/90 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-6';
  const textColor = 'text-white';
  const hoverColor = 'hover:text-blue-400';
  const buttonBorder = 'border-white/20 text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${navBackground}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="z-50">
          <Logo lightMode={true} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${textColor} ${hoverColor} text-xs font-bold tracking-[0.2em] transition-all uppercase`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className={`px-4 py-1.5 rounded-full border ${buttonBorder} text-[10px] font-black tracking-widest hover:bg-white hover:text-brand-navy transition-all`}
          >
            {lang === 'en' ? 'CN' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-brand-deep flex flex-col items-center justify-center gap-12 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-white hover:text-blue-400 tracking-tighter"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white text-lg font-bold"
            >
              {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};