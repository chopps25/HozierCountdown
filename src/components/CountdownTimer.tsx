import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/dateUtils';

type CountdownTimerProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft(targetDate));
    
    // Set up interval for updating the countdown
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
    }, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full">
      <h3 className="text-center text-lg md:text-xl font-medium text-sage dark:text-charcoal mb-6">
        COUNTDOWN TO THE CONCERT
      </h3>
      
      <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="relative">
            <div className="flex flex-col items-center">
              <div className="bg-cream dark:bg-deepPurple w-16 md:w-24 lg:w-32 h-20 md:h-28 lg:h-32 rounded-lg shadow-md flex items-center justify-center mb-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-paper-texture dark:bg-parchment-texture opacity-20"></div>
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-cream relative z-10 transition-all duration-300">
                  {unit.value}
                </span>
              </div>
              <span className="text-xs md:text-sm text-sage dark:text-charcoal font-medium tracking-widest">
                {unit.label}
              </span>
            </div>
            
            {/* Separators between time units */}
            {index < timeUnits.length - 1 && (
              <span className="hidden md:block absolute -right-6 top-1/3 text-2xl text-gold dark:text-purple font-light">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;