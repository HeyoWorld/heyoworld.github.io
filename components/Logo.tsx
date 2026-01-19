import React from 'react';

interface LogoProps {
  lightMode?: boolean; 
  showChinese?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ lightMode = true, showChinese = true }) => {
  return (
    <div className="flex items-center select-none cursor-pointer group">
      <div className="flex items-baseline">
        <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${lightMode ? 'text-white' : 'text-brand-navy'}`}>
          HEYO
        </span>
        <span className={`text-2xl font-light tracking-widest transition-colors duration-300 ${lightMode ? 'text-white' : 'text-brand-navy'}`}>
          WORLD
        </span>
        {/* Blue Dot: Represents Water and Stability */}
        <span className="w-2 h-2 ml-1 rounded-full bg-blue-500 mb-1 shadow-[0_0_12px_rgba(59,130,246,1)] animate-pulse"></span>
      </div>
      
      {showChinese && (
        <div className={`ml-4 pl-4 border-l py-1 hidden sm:block ${lightMode ? 'border-white/20' : 'border-brand-navy/20'}`}>
           <span className={`text-lg font-bold tracking-widest transition-colors duration-300 ${lightMode ? 'text-white/90' : 'text-brand-navy/80'}`}>
            海优国际
          </span>
        </div>
      )}
    </div>
  );
};