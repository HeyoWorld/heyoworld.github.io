import React from "react";
import { ContentData } from "../types";
export const Hero = ({ content }: { content: ContentData["hero"] }) => (
  <section className="hero container">
    <div className="hero-copy">
      <p className="eyebrow">
        <span className="status-dot" />
        {content.eyebrow}
      </p>
      <h1>
        {content.title.map((line, i) => (
          <span key={line} className={i === 2 ? "blue-text" : ""}>
            {line}
          </span>
        ))}
      </h1>
      <p className="hero-description">{content.subtitle}</p>
      <a href="#contact" className="button">
        {content.cta}
        <span aria-hidden="true">↗</span>
      </a>
      <p className="hero-footnote">
        <span aria-hidden="true">↳</span>
        {content.footnote}
      </p>
    </div>
    <div className="hero-visual">
      <div className="photo-frame">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80"
          alt=""
          width="1000"
          height="1250"
          fetchPriority="high"
        />
        <div className="image-caption">
          <span>LEARNING OPENS DOORS.</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
      <div className="visual-footer">
        <span>{content.caption}</span>
        <span className="visual-index">H / W — 01</span>
      </div>
    </div>
  </section>
);
