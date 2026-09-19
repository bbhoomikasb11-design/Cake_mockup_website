import React from 'react';

interface RotatingBadgeProps {
  text?: string;
  className?: string;
  size?: number;
}

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({
  text = 'CREAM ON TOP • BESPOKE CAKES • BENGALURU • ',
  className = '',
  size = 110,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Outer rotating text svg */}
      <svg
        className="w-full h-full animate-spin-slow text-bronze"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="none"
        />
        <text className="text-[8.5px] font-sans tracking-[0.25em] uppercase fill-current font-medium">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      
      {/* Center icon or monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-serif italic text-bronze text-base font-semibold">COT</span>
      </div>
    </div>
  );
};
