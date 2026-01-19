import React from 'react';
import { ContentData } from '../types';
import { ChevronDown, Waves } from 'lucide-react';

interface HeroProps {
  content: ContentData['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-brand-deep">
      
      {/* Deep Sea/Academic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2670&auto=format&fit=crop" 
          alt="Deep Academic Perspective" 
          className="w-full h-full object-cover grayscale opacity-40 scale-105"
        />
        {/* Deep Navy/Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-brand-navy/60 to-brand-deep"></div>
        
        {/* Animated Water Ripple Effect (CSS) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 0.5px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          <div className="flex items-center gap-4">
             <div className="w-16 h-[1px] bg-blue-500"></div>
             <span className="text-blue-400 font-bold text-xs tracking-[0.5em] uppercase">Professional Stewardship</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.95] text-glow">
            {content.title}
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl leading-relaxed font-light">
            {content.subtitle}
          </p>
          
          <div className="pt-10 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="px-12 py-5 bg-white text-brand-navy rounded-full font-black transition-all hover:bg-blue-500 hover:text-white hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {content.cta}
            </a>
            <a
              href="#services"
              className="px-10 py-5 bg-white/5 text-white backdrop-blur-md border border-white/10 rounded-full font-bold transition-all hover:bg-white/10"
            >
              Discover Deep Insight
            </a>
          </div>
        </div>
      </div>
      
      {/* Maritime Detail (Waves) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[100px] animate-wave-motion fill-white">
             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
      </div>

      {/* Floating whale-like subtle prompt */}
      <div className="absolute bottom-20 right-10 animate-float hidden lg:block opacity-10">
          <Waves size={100} className="text-white" />
      </div>
    </section>
  );
};