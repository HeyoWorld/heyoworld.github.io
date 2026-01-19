import React from 'react';
import { ContentData } from '../types';
import { ICONS } from '../constants';
import { Fish } from 'lucide-react';

interface ServicesProps {
  content: ContentData['services'];
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const sections = [
    {
      id: "study",
      title: content.studyTitle,
      desc: content.studyDesc,
      list: content.studyList,
      icon: ICONS.study,
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2670&auto=format&fit=crop",
      align: "left",
      tag: "Academic Growth"
    },
    {
      id: "tutoring",
      title: content.tutoringTitle,
      desc: content.tutoringDesc,
      list: content.tutoringList,
      icon: ICONS.tutoring,
      // Sophisticated Classical Library
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2670&auto=format&fit=crop",
      align: "right",
      tag: "Curriculum Mastery"
    },
    {
      id: "visa",
      title: content.visaTitle,
      desc: content.visaDesc,
      list: content.visaList,
      icon: ICONS.visa,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
      align: "left",
      tag: "Global Mobility"
    }
  ];

  return (
    <section id="services">
      {sections.map((section) => (
        <div key={section.id} className="min-h-screen relative flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={section.image} alt={section.title} className="w-full h-full object-cover grayscale-[25%]" />
            <div className="absolute inset-0 bg-brand-deep/50"></div>
          </div>

          <div className="container mx-auto relative z-10 flex items-stretch">
            <div className={`w-full flex ${section.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              <div className={`w-full lg:w-[48%] min-h-screen px-8 md:px-24 py-32 flex flex-col justify-center ${section.align === 'left' ? 'glass-panel' : 'glass-panel-right'}`}>
                <div className="space-y-10 animate-fade-in-up">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                          {section.icon}
                      </div>
                      <span className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.5em]">{section.tag}</span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-glow">
                    {section.title}
                  </h2>
                  
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    {section.desc}
                  </p>

                  <ul className="grid gap-5 pt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-5 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
                        <span className="text-gray-200 font-medium tracking-tight text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                     <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-full transition-all backdrop-blur-md uppercase tracking-widest text-[10px]">
                        预约咨询详情
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle decoration */}
          <div className="absolute -bottom-20 right-20 opacity-[0.03] pointer-events-none scale-150 text-white">
             <Fish size={400} />
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-1">
             <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-brand-deep">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
             </svg>
          </div>
        </div>
      ))}
    </section>
  );
};