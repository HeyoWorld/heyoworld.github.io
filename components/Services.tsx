import React from "react";
import { ContentData } from "../types";
export const Services = ({ content }: { content: ContentData["services"] }) => (
  <section id="services" className="services section-pad">
    <div className="container">
      <p className="eyebrow">{content.label}</p>
      <div className="section-heading">
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
      </div>
      <div className="service-grid">
        {content.items.map((item, i) => (
          <article className="service-card" key={item.en}>
            <div className="service-number">
              0{i + 1}
              <span aria-hidden="true">↗</span>
            </div>
            <p className="service-en">{item.en}</p>
            <h3>{item.title}</h3>
            <p className="service-description">{item.description}</p>
            <ul>
              {item.list.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
