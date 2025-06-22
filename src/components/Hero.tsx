
import React, { useEffect, useRef } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const headingElements = heroRef.current.querySelectorAll('.animate-on-mouse');
      
      headingElements.forEach((element, index) => {
        const factor = (index + 1) * 5;
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-8"
    >
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-nborange opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-nbyellow opacity-10 blur-[100px]"></div>
      
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 font-display text-balance max-w-3xl">
        <span className="block animate-on-mouse opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Creating Tomorrow's
        </span>
        <span className="block animate-on-mouse text-gradient opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Digital Experiences
        </span>
        <span className="block animate-on-mouse opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          Today
        </span>
      </h1>
      
      <p className="text-sm md:text-base max-w-xl text-nbgray text-center mt-3 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
        NB Media is the undisputed leader in YouTube content creation with a vibrant, Gen Z-friendly culture.
      </p>
      
      <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>
        <a 
          href="#about" 
          className="cursor-hover rounded-full border-2 border-nborange px-6 py-2 text-white font-medium transition-all duration-300 hover:bg-nborange hover:text-white"
        >
          Discover Our Story
        </a>
      </div>
      
      {/* Futuristic Scroll Indicator - Moved further down */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center">
        <div 
          onClick={handleScrollDown}
          className="group cursor-pointer opacity-0 animate-fade-in" 
          style={{ animationDelay: "1.7s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-nbgray text-xs mb-2">Scroll to explore</p>
            
            {/* Futuristic scroll animation container */}
            <div className="relative flex items-center justify-center w-10 h-20">
              {/* Outer ring */}
              <div className="absolute w-10 h-10 border-2 border-nborange/30 rounded-full animate-pulse"></div>
              
              {/* Middle ring */}
              <div className="absolute w-7 h-7 border-2 border-nborange/50 rounded-full animate-[pulse_2s_infinite_0.5s]"></div>
              
              {/* Inner ring */}
              <div className="absolute w-4 h-4 border-2 border-nborange rounded-full animate-[pulse_2s_infinite_1s]"></div>
              
              {/* Downward arrow line */}
              <div className="absolute h-14 w-px bg-gradient-to-b from-transparent via-nborange to-transparent"></div>
              
              {/* Animated chevron */}
              <ChevronDown className="absolute bottom-0 text-nborange animate-[float_1.5s_ease-in-out_infinite] w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
