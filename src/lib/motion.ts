import { Variants } from 'framer-motion';

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Framer motion variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const polaroidDropVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotate: 0, scale: 0.95 },
  visible: (customRotate: number = 0) => ({
    opacity: 1,
    y: 0,
    rotate: customRotate,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  }),
};

export const curtainVariants: Variants = {
  initial: { y: '0%' },
  animate: { y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: '0%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
};

export const scriptWriteVariants: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: { 
    opacity: 1, 
    clipPath: 'inset(0 0% 0 0)', 
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
  },
};
