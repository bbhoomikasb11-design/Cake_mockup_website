import React from 'react';

interface SectionLabelProps {
  number?: string; // e.g. "01"
  eyebrow: string; // e.g. "THE SPARK"
  dark?: boolean;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  eyebrow,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 tracking-widest-custom uppercase font-sans text-[11px] font-semibold ${dark ? 'text-sand/80' : 'text-mocha/80'} ${className}`}>
      {number && <span className="font-mono text-[12px] opacity-90">{number}</span>}
      {number && <span className="w-8 h-[1px] bg-current opacity-40 inline-block" />}
      <span>{eyebrow}</span>
    </div>
  );
};
