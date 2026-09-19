import React, { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline-pill' | 'filled-bronze' | 'text-link' | 'dark-pill';
  href?: string;
  onClick?: () => void;
  isWhatsApp?: boolean;
  cakeName?: string;
  className?: string;
  icon?: 'arrow-up-right' | 'arrow-right' | 'none';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'outline-pill',
  href,
  onClick,
  isWhatsApp = false,
  cakeName,
  className = '',
  icon = 'arrow-right',
}) => {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const targetHref = isWhatsApp ? getWhatsAppLink(cakeName) : href;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || window.innerWidth < 768) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const RenderIcon = () => {
    if (icon === 'none') return null;
    return (
      <span className="w-6 h-6 rounded-full bg-current/10 border border-current/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105">
        {icon === 'arrow-up-right' ? (
          <ArrowUpRight className="w-3.5 h-3.5" />
        ) : (
          <ArrowRight className="w-3.5 h-3.5" />
        )}
      </span>
    );
  };

  let baseStyles = 'inline-flex items-center justify-center gap-2.5 transition-all duration-300 font-sans tracking-wider text-xs uppercase font-medium group select-none cursor-pointer';
  let variantStyles = '';

  if (variant === 'outline-pill') {
    variantStyles = 'px-5 py-2.5 rounded-full border border-mocha/40 text-mocha hover:bg-mocha hover:text-cream hover:border-mocha shadow-sm';
  } else if (variant === 'filled-bronze') {
    variantStyles = 'px-6 py-3 rounded-full bg-bronze text-cream hover:bg-mocha shadow-md hover:shadow-glow-bronze';
  } else if (variant === 'dark-pill') {
    variantStyles = 'px-5 py-2.5 rounded-full bg-espresso text-cream hover:bg-mocha border border-bronze/30 shadow-md';
  } else if (variant === 'text-link') {
    variantStyles = 'relative py-1 text-mocha hover:text-bronze tracking-widest uppercase font-mono text-[11px] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-bronze hover:after:w-full after:transition-all after:duration-300';
  }

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;
  const motionStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  if (targetHref) {
    return (
      <a
        ref={buttonRef}
        href={targetHref}
        target={targetHref.startsWith('http') ? '_blank' : undefined}
        rel={targetHref.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={motionStyle}
        className={combinedStyles}
      >
        <span>{children}</span>
        <RenderIcon />
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={motionStyle}
      className={combinedStyles}
    >
      <span>{children}</span>
      <RenderIcon />
    </button>
  );
};
