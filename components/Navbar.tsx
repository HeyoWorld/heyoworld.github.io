import React from "react";
import { ContentData, Language } from "../types";
import { Logo } from "./Logo";
export const Navbar = ({
  lang,
  setLang,
  content,
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData["nav"];
}) => (
  <header className="site-header">
    <div className="container header-inner">
      <a href="#top" aria-label="Heyoworld 和曜">
        <Logo />
      </a>
      <nav aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
        <a className="nav-section" href="#services">
          {content.services}
        </a>
        <a className="nav-section" href="#approach">
          {content.approach}
        </a>
        <button
          className="language"
          aria-label={content.language}
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>
        <a className="nav-cta" href="#contact">
          {content.contact}
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>
  </header>
);
