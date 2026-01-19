
import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Exclusive } from './components/Exclusive';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [lang, setLang] = useState<Language>('zh'); 
  
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-brand-deep text-gray-100 selection:bg-blue-500/30 selection:text-white">
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <Services content={content.services} />
        <Exclusive content={content.exclusive} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

export default App;