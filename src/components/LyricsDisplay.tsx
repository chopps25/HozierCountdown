import React, { useState, useEffect } from 'react';
import { getRandomLyrics } from '../utils/lyricsData';

const LyricsDisplay: React.FC = () => {
  const [currentLyrics, setCurrentLyrics] = useState(getRandomLyrics());
  
  // Change lyrics every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLyrics(getRandomLyrics());
    }, 20000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-center py-6 px-4">
      <blockquote className="italic text-lg md:text-xl lg:text-2xl font-serif text-charcoal dark:text-cream relative">
        <span className="absolute -left-4 top-0 text-4xl text-gold dark:text-purple">"</span>
        {currentLyrics.text}
        <span className="absolute -right-4 bottom-0 text-4xl text-gold dark:text-purple">"</span>
      </blockquote>
      <p className="mt-4 text-sage dark:text-charcoal font-medium">
        — {currentLyrics.song}
      </p>
    </div>
  );
};

export default LyricsDisplay;