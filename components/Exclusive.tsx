import React from "react";
import { ContentData } from "../types";
export const Exclusive = ({
  content,
}: {
  content: ContentData["approach"];
}) => (
  <section id="approach" className="approach container section-pad">
    <div className="approach-copy">
      <p className="eyebrow">{content.label}</p>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <div className="approach-signature" aria-hidden="true">
        hello,
        <br />
        <span>possibilities.</span>
      </div>
    </div>
    <ol className="steps">
      {content.steps.map((step, i) => (
        <li key={step.title}>
          <span className="step-index">0{i + 1}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
