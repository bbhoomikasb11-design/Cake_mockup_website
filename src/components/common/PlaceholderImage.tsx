import React, { useState } from 'react';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  filename: string;
  className?: string;
  archMask?: boolean;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt,
  filename,
  className = '',
  archMask = false,
  aspectRatio,
  objectFit = 'cover',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const archClass = archMask ? 'rounded-arch' : '';

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-sand via-blush/30 to-cream border border-bronze/20 flex flex-col items-center justify-center p-6 text-center shadow-inner ${archClass} ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {/* Subtle decorative motif background */}
        <div className="absolute inset-0 bg-[radial-gradient(#B98A5B_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        {/* Soft glowing orb */}
        <div className="w-16 h-16 rounded-full bg-rose/20 blur-xl absolute" />

        <div className="relative z-10 flex flex-col items-center space-y-2">
          {/* Subtle cake/art icon */}
          <div className="w-10 h-10 rounded-full bg-cream/80 backdrop-blur border border-bronze/30 flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <p className="font-serif italic text-mocha text-sm">{alt}</p>
          
          <div className="inline-block px-2.5 py-1 rounded bg-espresso/5 backdrop-blur border border-bronze/20 text-[10px] font-mono tracking-wider text-mocha uppercase">
            {filename}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${archClass} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-blush/20 to-cream animate-pulse-subtle z-0" />
      )}
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-${objectFit} transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};
