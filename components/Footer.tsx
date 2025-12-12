import React from 'react';
import { ContentData } from '../types';
import { Logo } from './Logo';

interface FooterProps {
    content: ContentData['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <Logo />
        <div className="flex gap-8 text-sm font-medium text-brand-black">
            <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#exclusive" className="hover:text-brand-orange transition-colors">Exclusive</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
        </div>
        <div className="text-gray-400 text-xs mt-8">
          &copy; {new Date().getFullYear()} heyoworld. {content.rights}
        </div>
      </div>
    </footer>
  );
};