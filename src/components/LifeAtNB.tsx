
import React, { useEffect, useRef } from 'react';
import Section from './Section';
import SocialLinks from './SocialLinks';
import InstagramReels from './InstagramReels';
import InstagramFeed from './InstagramFeed';
import AnimationStyles from './AnimationStyles';

const LifeAtNB: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <Section id="life" className="bg-nbdark/50">
      <div ref={sectionRef}>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-center opacity-0 hidden-element transition-all duration-1000" style={{ transform: 'translateY(40px)' }}>
          Life at <span className="text-gradient">NB Media</span>
        </h2>
        
        <p className="text-lg text-nbgray text-center max-w-3xl mx-auto mb-12 opacity-0 hidden-element transition-all duration-1000 delay-300" style={{ transform: 'translateY(40px)' }}>
          Get a glimpse into our vibrant culture, creative process, and the amazing team that makes it all happen. We're not just colleagues, we're a family of creators.
        </p>

        {/* Instagram Reels Section */}
        <InstagramReels />
        
        {/* Instagram Feed Section */}
        <InstagramFeed />

        <div className="mt-8 text-center opacity-0 hidden-element transition-all duration-1000 delay-1000" style={{ transform: 'translateY(40px)' }}>
          <SocialLinks className="justify-center" iconSize={24} />
        </div>
      </div>
      
      <AnimationStyles />
    </Section>
  );
};

export default LifeAtNB;
