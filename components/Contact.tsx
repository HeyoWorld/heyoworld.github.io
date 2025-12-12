import React, { useState } from 'react';
import { ContentData } from '../types';
import { ArrowRight } from 'lucide-react';

interface ContactProps {
  content: ContentData['contact'];
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${formData.name} - heyoworld`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hello@heyoworld.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">{content.title}</h2>
            <p className="text-brand-gray">{content.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                required
                placeholder={content.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 border-b-2 border-gray-200 focus:border-brand-black outline-none transition-colors placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                required
                placeholder={content.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 border-b-2 border-gray-200 focus:border-brand-black outline-none transition-colors placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <textarea
              name="message"
              required
              rows={4}
              placeholder={content.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white border-0 border-b-2 border-gray-200 focus:border-brand-black outline-none transition-colors resize-none placeholder-gray-400"
            />
          </div>

          <div className="pt-8 flex flex-col items-center">
            <button
              type="submit"
              className="flex items-center gap-3 px-12 py-4 bg-brand-black text-white font-medium hover:bg-brand-orange transition-colors duration-300"
            >
              {content.sendButton}
              <ArrowRight size={18} />
            </button>
            <p className="text-xs text-gray-400 mt-6">
              {content.note}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};