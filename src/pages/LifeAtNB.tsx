
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import LifeAtNBHero from '../components/LifeAtNBHero';
import InstagramFeedSection from '../components/InstagramFeedSection';
import TeamQuotes from '../components/TeamQuotes';
import BehindTheScenes from '../components/BehindTheScenes';
import LifeAtNBCTA from '../components/LifeAtNBCTA';
import LifeAtNBStyles from '../components/LifeAtNBStyles';

const LifeAtNBPage: React.FC = () => {
  // For intersection observer animations
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
    
    // Ensure page loads at the top
    window.scrollTo(0, 0);
    
    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-nbdark text-white overflow-hidden hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <LifeAtNBHero />
        
        {/* Instagram Feed */}
        <InstagramFeedSection />
        
        {/* Team Quotes */}
        <TeamQuotes />
        
        {/* Behind The Scenes */}
        <BehindTheScenes />
        
        {/* CTA Section */}
        <LifeAtNBCTA />
      </div>
      
      <Footer />
      <LifeAtNBStyles />
    </div>
  );
};

export default LifeAtNBPage;
