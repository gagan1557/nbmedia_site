
import React from 'react';

const LifeAtNBStyles: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .hidden-element {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
      }
      
      .hidden-element.show {
        opacity: 1;
        transform: translateY(0);
      }
      
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
      }
      
      .pulse-animation {
        animation: pulse 4s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .float-animation {
        animation: float 5s ease-in-out infinite;
      }
    `}} />
  );
};

export default LifeAtNBStyles;
