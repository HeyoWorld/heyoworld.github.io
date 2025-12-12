import React from 'react';
import { ContentData } from '../types';
import { ICONS } from '../constants';
import { Check } from 'lucide-react';

interface ServicesProps {
  content: ContentData['services'];
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">{content.title}</h2>
          <p className="text-lg text-brand-gray font-light max-w-2xl">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Card 1: Visa */}
          <div className="group p-10 bg-white hover:bg-brand-black hover:text-white transition-all duration-500 rounded-none border-l-4 border-brand-orange shadow-sm hover:shadow-2xl">
            <div className="mb-8 p-3 inline-block bg-brand-light group-hover:bg-white/10 rounded-lg transition-colors">
                <div className="text-brand-orange group-hover:text-white">
                    {ICONS.visa}
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{content.visaTitle}</h3>
            <p className="text-brand-gray group-hover:text-gray-300 mb-8 leading-relaxed">
              {content.visaDesc}
            </p>
            <ul className="space-y-4">
              {content.visaList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Card 2: Study */}
          <div className="group p-10 bg-white hover:bg-brand-black hover:text-white transition-all duration-500 rounded-none border-l-4 border-brand-black hover:border-white shadow-sm hover:shadow-2xl">
            <div className="mb-8 p-3 inline-block bg-brand-light group-hover:bg-white/10 rounded-lg transition-colors">
                 <div className="text-brand-black group-hover:text-white">
                    {ICONS.study}
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{content.studyTitle}</h3>
            <p className="text-brand-gray group-hover:text-gray-300 mb-8 leading-relaxed">
              {content.studyDesc}
            </p>
            <ul className="space-y-4">
              {content.studyList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-black group-hover:text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};