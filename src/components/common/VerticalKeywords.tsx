import React from 'react';

interface VerticalKeywordsProps {
  keywords?: string[];
  dark?: boolean;
  className?: string;
}

const defaultKeywords = ['CAKES', 'PEOPLE', 'STORIES', 'HAPPINESS', 'YOU'];

export const VerticalKeywords: React.FC<VerticalKeywordsProps> = ({
  keywords = defaultKeywords,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`hidden lg:flex flex-col space-y-2 text-[10px] font-sans tracking-widest-custom uppercase ${dark ? 'text-sand/60' : 'text-mocha/60'} ${className}`}>
      {keywords.map((kw, idx) => (
        <span key={idx} className="block leading-relaxed">
          {kw}
        </span>
      ))}
      <div className={`w-6 h-[1px] mt-2 ${dark ? 'bg-sand/40' : 'bg-mocha/40'}`} />
    </div>
  );
};
