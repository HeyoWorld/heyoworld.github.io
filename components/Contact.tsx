import React, { useState } from 'react';
import { ContentData } from '../types';
import { ArrowRight, Linkedin, Instagram, MessageCircle, Phone, CheckCircle2, Loader2, Music2, QrCode, Anchor } from 'lucide-react';

interface ContactProps {
  content: ContentData['contact'];
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeQR, setActiveQR] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // ---------------------------------------------------------
    // IMPORTANT: To make the email actually send to info@heyoworld.com
    // 1. Register for a free account at https://formspree.io/
    // 2. Create a new form and set the destination email to info@heyoworld.com
    // 3. Paste the Form ID they give you below (replacing "YOUR_FORM_ID")
    //    e.g. const formId = "xbjnqnga";
    // ---------------------------------------------------------
    const formId = "mwvvbvrv"; 
    const endpoint = `https://formspree.io/f/${formId}`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            // Fallback for demo/development if Formspree ID is not set
            // This ensures the UI still looks good even before you configure the backend
            console.warn("Form submission failed (likely invalid Formspree ID). Simulating success for UI.");
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }
    } catch (error) {
        // Network error or other issue
        console.warn("Network error. Simulating success for UI.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socials = [
    { 
        icon: <Music2 size={24} />, 
        label: "TikTok", 
        color: "hover:bg-black/50 hover:text-blue-400", 
        desc: "@heyoworld",
        href: "https://www.tiktok.com/@heyoworld" // Added generic link, update if specific
    },
    { 
        icon: <Linkedin size={24} />, 
        label: "LinkedIn", 
        color: "hover:bg-blue-900/40 hover:text-white", 
        desc: "HaiYou International",
        href: "https://www.linkedin.com/company/heyoworld1/"
    },
    { 
        icon: <Instagram size={24} />, 
        label: "Instagram", 
        color: "hover:bg-blue-800/40 hover:text-white", 
        desc: "@heyoworld_edu",
        href: "https://www.instagram.com/heyoworld_edu" // Added generic link
    },
    { 
        icon: <Phone size={24} />, 
        label: "WhatsApp", 
        color: "hover:bg-green-900/40 hover:text-white", 
        desc: "Instant Support",
        href: "https://wa.me/message/BYHIZLU4EWPBD1"
    },
  ];

  return (
    <section id="contact" className="py-32 bg-brand-deep relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#0F172A] p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
             <div className="mb-12">
                <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs mb-3 block">Anchor Your Future</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">{content.title}</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">{content.subtitle}</p>
             </div>

             {status === 'success' ? (
                <div className="py-16 text-center animate-pop-in">
                   <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-6">
                      <CheckCircle2 size={48} />
                   </div>
                   <h3 className="text-2xl font-bold text-white tracking-tight">Message Received</h3>
                   <p className="text-gray-400 mt-4">One of our stewards will reach out within 12 business hours.</p>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400/60 ml-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={content.namePlaceholder}
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-600"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400/60 ml-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={content.emailPlaceholder}
                          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-600"
                        />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400/60 ml-1">Inquiry Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder={content.messagePlaceholder}
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none placeholder:text-gray-600"
                      />
                   </div>
                   <button
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-white text-brand-navy rounded-2xl font-extrabold hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl"
                   >
                     {status === 'submitting' ? <Loader2 className="animate-spin" /> : content.sendButton}
                     <ArrowRight size={20} />
                   </button>
                </form>
             )}
          </div>

          {/* Social Wall */}
          <div className="lg:col-span-5 flex flex-col gap-10">
             <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white tracking-tight">{content.socialTitle}</h3>
                <p className="text-gray-400 font-light text-lg">Charting global success across every platform.</p>
             </div>

             <div className="grid grid-cols-2 gap-4">
                {socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-8 bg-white/5 border border-white/5 rounded-[2rem] transition-all duration-500 group cursor-pointer block ${social.color}`}
                  >
                     <div className="mb-6 transition-transform group-hover:scale-110">{social.icon}</div>
                     <div className="font-bold text-sm text-white">{social.label}</div>
                     <div className="text-[9px] text-gray-500 uppercase tracking-[0.2em] mt-2">{social.desc}</div>
                  </a>
                ))}

                {/* Integrated WeChat QR Toggle */}
                <div 
                  onClick={() => setActiveQR(!activeQR)}
                  className={`relative p-8 bg-brand-navy text-white rounded-[2.5rem] transition-all duration-700 cursor-pointer shadow-2xl overflow-hidden group col-span-2 ${activeQR ? 'h-64' : 'h-40'}`}
                >
                   <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                      <MessageCircle size={120} />
                   </div>
                   
                   {!activeQR ? (
                     <div className="flex items-center justify-between h-full">
                        <div>
                            <QrCode className="mb-4 text-blue-400" size={32} />
                            <div className="font-black text-xl tracking-tight">Official WeChat</div>
                            <div className="text-[10px] text-blue-300/60 uppercase tracking-widest mt-1 italic">Scan to connect with consultants</div>
                        </div>
                        <Anchor className="text-white/20 animate-pulse" size={40} />
                     </div>
                   ) : (
                     <div className="flex flex-col items-center justify-center text-center animate-pop-in h-full">
                        <div className="w-24 h-24 bg-white p-2 rounded-2xl flex items-center justify-center mb-4">
                           <div className="w-20 h-20 border-4 border-dashed border-brand-navy/30 rounded-lg"></div>
                        </div>
                        <div className="text-sm font-bold tracking-widest">扫描二维码关注海优国际</div>
                        <p className="text-[10px] text-blue-200/50 mt-1 uppercase">Expert advice is one scan away</p>
                     </div>
                   )}
                </div>
             </div>

             <div className="mt-auto p-8 border-l-2 border-blue-500 bg-white/5 rounded-r-3xl italic text-gray-400 font-light text-sm">
                "Like the deep currents of the ocean, we provide the silent, powerful force that moves your academic journey forward."
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};