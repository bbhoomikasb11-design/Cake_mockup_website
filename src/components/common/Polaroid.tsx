import React from 'react';
import { PlaceholderImage } from './PlaceholderImage';
import { motion } from 'framer-motion';

interface PolaroidProps {
  src: string;
  alt: string;
  filename: string;
  caption?: string;
  handwrittenCaption?: string;
  tilt?: string; // e.g. "-rotate-3" or "rotate-2"
  className?: string;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  src,
  alt,
  filename,
  caption,
  handwrittenCaption,
  tilt = 'rotate-1',
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.3 } }}
      className={`relative bg-white p-3 pt-4 pb-6 rounded-sm shadow-polaroid border border-sand/40 ${tilt} transition-all duration-300 ${className}`}
    >
      {/* Washi tape motif on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-sand/60 backdrop-blur border border-bronze/20 shadow-sm opacity-80 transform -rotate-1 pointer-events-none z-10" />

      {/* Photo frame container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-cream/50 mb-3 border border-sand/20">
        <PlaceholderImage
          src={src}
          alt={alt}
          filename={filename}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Handwritten caption */}
      {(handwrittenCaption || caption) && (
        <div className="text-center px-1">
          <p className="font-script text-mocha text-lg md:text-xl leading-tight">
            {handwrittenCaption || caption}
          </p>
        </div>
      )}
    </motion.div>
  );
};
