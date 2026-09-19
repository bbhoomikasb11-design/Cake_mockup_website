import React, { useEffect, useState } from 'react';

export const ScrollProgressLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getChapterNumber = () => {
    if (scrollProgress < 25) return '01';
    if (scrollProgress < 50) return '02';
    if (scrollProgress < 75) return '03';
    return '04';
  };

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-3 pointer-events-none">
      <span className="font-mono text-[10px] text-mocha/70 tracking-wider">
        {getChapterNumber()}
      </span>
      <div className="w-[1.5px] h-24 bg-sand/50 rounded-full relative overflow-hidden">
        <div
          className="w-full bg-bronze transition-all duration-150 ease-out rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <span className="font-mono text-[9px] text-mocha/40 tracking-wider">04</span>
    </div>
  );
};
