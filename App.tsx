import React, { useEffect, useState } from "react";
import { Language } from "./types";
import { CONTENT } from "./constants";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Exclusive } from "./components/Exclusive";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles.css";
export default function App() {
  const [lang, setLang] = useState<Language>("zh");
  const content = CONTENT[lang];
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title =
      lang === "zh"
        ? "知游 Heyoworld | 英国升学、学术辅导与留学准备"
        : "Heyoworld | UK applications & academic support";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.hero.subtitle);
  }, [lang, content]);
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        {content.nav.skip}
      </a>
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <main id="main">
        <Hero content={content.hero} />
        <Services content={content.services} />
        <Exclusive content={content.approach} />
        <Contact
          content={content.contact}
          services={content.services.items}
          lang={lang}
        />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
