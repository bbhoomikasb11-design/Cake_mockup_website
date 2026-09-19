import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target has data-cursor attribute or is inside an image card
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setIsHovered(true);
        setHoverText(cursorTarget.getAttribute('data-cursor') || 'View');
      } else if (target.closest('a, button')) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center font-sans uppercase tracking-widest text-[9px] font-semibold transition-colors duration-300 ${
          isHovered
            ? 'bg-bronze/90 text-cream backdrop-blur-sm border border-cream/40 shadow-glow-bronze'
            : 'bg-bronze w-3 h-3 -mt-1.5 -ml-1.5'
        }`}
        animate={{
          x: position.x,
          y: position.y,
          width: isHovered ? (hoverText ? 64 : 24) : 12,
          height: isHovered ? (hoverText ? 64 : 24) : 12,
          marginLeft: isHovered ? (hoverText ? -32 : -12) : -6,
          marginTop: isHovered ? (hoverText ? -32 : -12) : -6,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
      >
        {isHovered && hoverText && <span>{hoverText}</span>}
      </motion.div>
    </div>
  );
};
