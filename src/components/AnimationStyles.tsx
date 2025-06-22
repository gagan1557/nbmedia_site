
import React from 'react';

interface AnimationStylesProps {
  className?: string;
}

const AnimationStyles: React.FC<AnimationStylesProps> = () => {
  const animationStyles = `
    .hidden-element {
      opacity: 0;
      transform: translateY(40px);
      transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
    }
    
    .hidden-element.show {
      opacity: 1;
      transform: translateY(0);
    }
    
    .insta-post {
      transition: all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1);
    }
    
    .insta-post:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      z-index: 10;
    }
    
    .insta-post.active {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
      z-index: 20;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    .follow-btn {
      position: relative;
      overflow: hidden;
    }
    
    .follow-btn:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255,122,0,0), rgba(255,122,0,0.2), rgba(255,122,0,0));
      transform: translateX(-100%);
      transition: transform 0.6s;
      z-index: -1;
    }
    
    .follow-btn:hover:before {
      transform: translateX(100%);
    }

    .reel-container {
      position: relative;
      aspect-ratio: 9/16;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #000;
    }

    .reel-container:hover {
      transform: scale(1.03);
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }

    .reel-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .reel-container:hover .reel-overlay {
      opacity: 1;
    }

    .instagram-embed {
      width: 100%;
      height: 100%;
      border: 0;
      overflow: hidden;
      background: #000;
      border-radius: 12px;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      opacity: 0.8;
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 5;
    }

    .reel-container:hover .play-button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .reel-container {
        aspect-ratio: 9/16;
      }
      
      .play-button {
        width: 40px;
        height: 40px;
      }
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: animationStyles }} />;
};

export default AnimationStyles;
