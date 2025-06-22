
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  iconSize = 20, 
  iconColor = "white" 
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://www.instagram.com/nbmediaa/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-nborange transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram size={iconSize} color={iconColor} />
      </a>
      <a 
        href="https://in.linkedin.com/company/nb-productions-pvt-lmt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-nborange transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} color={iconColor} />
      </a>
    </div>
  );
};

export default SocialLinks;
