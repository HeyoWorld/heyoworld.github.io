import React from 'react';
import { ContentData } from '../types';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface ExclusiveProps {
  content: ContentData['exclusive'];
}

export const Exclusive: React.FC<ExclusiveProps> = ({ content }) => {
  return (
    <section id="exclusive" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="bg-brand-black text-white rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
           {/* Abstract Gold Glow */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600/20 blur-[100px] rounded-full pointer-events-none"></div>

           <div className="relative z-10 flex flex-col md:flex-row justify-between gap-16">
              <div className="md:w-1/2 space-y-8">
                  <div className="flex items-center gap-2 text-yellow-500 font-bold tracking-widest text-xs uppercase">
                      <TrendingUp size={14} />
                      {content.tag}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                    {content.title}
                  </h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                    {content.description}
                  </p>
                  <a href="#contact" className="inline-block border-b border-yellow-500 text-yellow-500 pb-1 hover:text-white hover:border-white transition-colors">
                     {content.cta}
                  </a>
              </div>

              <div className="md:w-1/2 flex flex-col justify-end">
                 <div className="space-y-6">
                    {content.features.map((feature, idx) => (
                        <div key={idx} className="group flex items-center justify-between p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                            <span className="text-xl font-medium">{feature}</span>
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-yellow-500 transition-opacity" />
                        </div>
                    ))}
                 </div>
                 <div className="mt-8 text-right">
                    <span className="text-[120px] font-bold text-white/5 leading-none select-none">
                        SA
                    </span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};