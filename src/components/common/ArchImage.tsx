import React from 'react';
import { PlaceholderImage } from './PlaceholderImage';

interface ArchImageProps {
  src: string;
  alt: string;
  filename: string;
  className?: string;
  aspectRatio?: string;
  overlayText?: string;
  overlaySubtext?: string;
}

export const ArchImage: React.FC<ArchImageProps> = ({
  src,
  alt,
  filename,
  className = '',
  aspectRatio = '3/4',
  overlayText,
  overlaySubtext,
}) => {
  return (
    <div className={`relative group overflow-hidden rounded-arch shadow-lg border border-bronze/20 bg-mocha/10 ${className}`}>
      <PlaceholderImage
        src={src}
        alt={alt}
        filename={filename}
        archMask={true}
        aspectRatio={aspectRatio}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      {(overlayText || overlaySubtext) && (
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex flex-col justify-end p-6 text-cream opacity-90 transition-opacity duration-300 group-hover:opacity-100">
          {overlayText && <h4 className="font-serif text-xl tracking-wide">{overlayText}</h4>}
          {overlaySubtext && <p className="font-sans text-xs tracking-widest text-sand uppercase mt-1">{overlaySubtext}</p>}
        </div>
      )}
    </div>
  );
};
