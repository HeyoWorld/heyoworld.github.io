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
    { label: content.exclusive, href: '#exclusive' },
    { label: content.contact, href: '#contact' },
  ];

  // Dynamic Styles based on scroll state
  // Top: Transparent bg, White Text
  // Scrolled: White bg, Black Text
  const navBackground = isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6';
  const textColor = isScrolled || isMobileMenuOpen ? 'text-brand-black' : 'text-white';
  const hoverColor = isScrolled || isMobileMenuOpen ? 'hover:text-brand-orange' : 'hover:text-brand-orange';
  const buttonBorder = isScrolled || isMobileMenuOpen ? 'border-gray-300 text-brand-black' : 'border-white/30 text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="z-50">
          {/* Pass lightMode true when NOT scrolled and NOT mobile menu */}
          <Logo lightMode={!isScrolled && !isMobileMenuOpen} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${textColor} ${hoverColor} text-sm font-medium tracking-wide transition-colors uppercase`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className={`px-4 py-1.5 rounded-full border ${buttonBorder} text-xs font-bold tracking-wider hover:bg-white hover:text-brand-black hover:border-white transition-all`}
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
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-800 hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 px-8 py-3 rounded-full bg-gray-100 text-lg font-semibold"
            >
              {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};