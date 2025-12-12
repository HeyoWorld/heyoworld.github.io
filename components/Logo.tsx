import React from 'react';

interface LogoProps {
  lightMode?: boolean; // If true, text is white (for dark backgrounds)
}

export const Logo: React.FC<LogoProps> = ({ lightMode = false }) => {
  return (
    <div className="flex items-baseline select-none cursor-pointer group">
      {/* 
        Design Rationale:
        - All Caps ensures a perfectly straight baseline (removes descender of 'y').
        - Mixed weights (ExtraBold + Light) creates a premium aesthetic.
      */}
      <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${lightMode ? 'text-white' : 'text-brand-black'}`}>
        HEYO
      </span>
      <span className={`text-2xl font-light tracking-widest transition-colors duration-300 ${lightMode ? 'text-white' : 'text-brand-black'}`}>
        WORLD
      </span>
      <span className="w-1.5 h-1.5 ml-1 rounded-full bg-brand-orange mb-1 animate-pulse"></span>
    </div>
  );
};