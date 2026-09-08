import React from "react";
import { ContentData } from "../types";
import { Logo } from "./Logo";
export const Footer = ({ content }: { content: ContentData["footer"] }) => (
  <footer className="container footer">
    <div className="footer-main">
      <a href="#top" aria-label="Heyoworld 和曜">
        <Logo />
      </a>
      <p>{content.description}</p>
      <a className="back-top" href="#top">
        {content.top} ↑
      </a>
    </div>
    <div className="footer-bottom">
      <span>
        © {new Date().getFullYear()} HEYO WORLD CO., LTD. {content.rights}
      </span>
      <span>和曜 HEYOWORLD</span>
    </div>
  </footer>
);
