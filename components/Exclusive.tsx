import React from 'react';
import { ContentData } from '../types';
import { Waves, ArrowUpRight, Shell } from 'lucide-react';

interface ExclusiveProps {
  content: ContentData['exclusive'];
}

export const Exclusive: React.FC<ExclusiveProps> = ({ content }) => {
  return (
    <section id="exclusive" className="py-32 bg-brand-deep relative overflow-hidden">
      
      {/* Background Whale Tail Graphic (Very Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <svg width="800" height="800" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.5-7.5 7.5 7.5"/></svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-navy to-black text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl">
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                  <div className="flex items-center gap-3 text-blue-400 font-bold tracking-[0.4em] text-xs uppercase">
                      <Waves size={16} />
                      {content.tag}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
                    {content.title}
                  </h2>
                  <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg">
                    {content.description}
                  </p>
                  <div className="pt-4">
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all group">
                       <span className="font-bold uppercase tracking-widest text-xs">{content.cta}</span>
                       <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
              </div>

              <div className="space-y-4">
                 {content.features.map((feature, idx) => (
                    <div key={idx} className="group flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all cursor-default backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping"></div>
                           <span className="text-xl font-medium tracking-tight">{feature}</span>
                        </div>
                        <Shell className="text-blue-500/30 group-hover:text-blue-400 transition-colors" size={24} />
                    </div>
                 ))}
              </div>
           </div>

           {/* Circular Gold/Water symbiosis ornament */}
           <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-blue-500/10 animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
};