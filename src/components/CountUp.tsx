
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix = '', duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset count when end value changes
    setCount(0);
    countRef.current = 0;
    startTimeRef.current = null;
    
    // Animate the counting up
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Use easeOutExpo for smooth animation that slows down at the end
      const easeOutExpo = 1 - Math.pow(2, -10 * progressRatio);
      const currentCount = Math.floor(easeOutExpo * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progressRatio < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end at the exact number
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return <span className={className}>{count}{suffix}</span>;
};

export default CountUp;
