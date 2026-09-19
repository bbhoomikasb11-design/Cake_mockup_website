import React from 'react';

interface WaxSealProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-[9px]',
    md: 'w-16 h-16 text-[10px]',
    lg: 'w-20 h-20 text-[11px]',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-burgundy shadow-wax-seal border-2 border-rose/30 text-sand ${sizeClasses} ${className}`}
    >
      {/* Wax drip organic edges simulation */}
      <div className="absolute inset-0 rounded-full border border-sand/20 scale-90" />
      
      {/* Embossed inner content */}
      <div className="relative z-10 text-center font-serif flex flex-col items-center justify-center leading-none">
        <svg className="w-5 h-5 text-blush/80 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" />
        </svg>
        <span className="font-semibold tracking-wider text-cream/90 uppercase text-[9px]">COT</span>
      </div>
    </div>
  );
};
