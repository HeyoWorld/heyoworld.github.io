import React from 'react';
import { ContentData } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  content: ContentData['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
          alt="Global Connection Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="space-y-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border-b border-brand-orange/50 pb-1">
             <span className="text-brand-orange font-bold text-sm tracking-[0.2em] uppercase">Global Connections</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.05]">
            {content.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
            {content.subtitle}
          </p>
          
          <div className="pt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-black rounded-full font-bold transition-all hover:bg-brand-orange hover:text-white hover:scale-105"
            >
              {content.cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
         </div>
      </div>
    </section>
  );
};