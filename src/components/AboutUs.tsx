
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import OptimizedImage from './OptimizedImage';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animateCard, setAnimateCard] = useState<number | null>(null);
  
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

    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPos = window.scrollY;
        const sectionPos = sectionRef.current.offsetTop;
        const distance = scrollPos - sectionPos;
        
        // Apply parallax effect to elements with .parallax class
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach((elem, i) => {
          const htmlElem = elem as HTMLElement;
          const speed = 0.05 + (i * 0.02);
          htmlElem.style.transform = `translateY(${distance * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    { title: "Innovative Vision", description: "We constantly push boundaries and explore new creative territories to stay ahead of digital trends." },
    { title: "Authentic Voice", description: "Our content reflects genuine passion, creating meaningful connections with our audience." },
    { title: "Vibrant Culture", description: "We foster a dynamic, creative environment where talent thrives and innovation flourishes." }
  ];

  // CSS for animation
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
    
    @keyframes scroll {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
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
    
    .feature-card {
      transition: all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1);
      position: relative;
      overflow: hidden;
    }
    
    .feature-card:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, var(--nborange), var(--nbyellow));
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }
    
    .feature-card:hover:before,
    .feature-card.active:before {
      transform: translateX(0);
    }
    
    .feature-card:hover,
    .feature-card.active {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
    
    .image-wrapper {
      position: relative;
      z-index: 1;
    }
    
    .image-wrapper:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(255,122,0,0.3), rgba(255,204,0,0.3));
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .image-wrapper:hover:after {
      opacity: 1;
    }
  `;

  return (
    <Section id="about" className="relative overflow-hidden">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 opacity-0 hidden-element transition-all duration-1000" style={{ transform: 'translateY(40px)' }}>
            The <span className="text-gradient">Visionary</span> Behind NB Media
          </h2>
          
          <div className="space-y-4 opacity-0 hidden-element transition-all duration-1000 delay-300" style={{ transform: 'translateY(40px)' }}>
            <p className="text-lg text-nbgray">
              Founded with a bold vision and an unwavering passion for digital storytelling, NB Media has grown from a one-person YouTube channel to a creative powerhouse reshaping the content creation landscape.
            </p>
            
            <p className="text-lg text-nbgray">
              Our founder's journey from humble beginnings to industry prominence inspires everything we do. We believe in authenticity, creativity, and pushing boundaries to deliver content that resonates with the new generation.
            </p>
            
            <blockquote className="border-l-4 border-nborange pl-4 mt-6 italic parallax">
              "We don't just create content, we craft experiences that inspire and connect with audiences on a deeper level."
            </blockquote>
          </div>
        </div>
        
        <div className="relative aspect-square w-full max-w-md mx-auto md:ml-auto opacity-0 hidden-element transition-all duration-1000 delay-600 float-animation" style={{ transform: 'translateY(40px)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-nborange to-nbyellow opacity-60 rounded-2xl transform rotate-3 float-animation"></div>
          <div className="absolute inset-0 bg-nbdark rounded-2xl overflow-hidden image-wrapper">
            <OptimizedImage 
              src="/lovable-uploads/9e22850f-ecfe-4d86-a563-9fb73cdcd6da.png" 
              alt="Founder working on content" 
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-24 opacity-0 hidden-element transition-all duration-1000 delay-900" style={{ transform: 'translateY(40px)' }}>
        <h3 className="text-2xl md:text-3xl font-bold font-display mb-8">What Sets Us <span className="text-gradient">Apart</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`feature-card bg-white/5 backdrop-blur-sm p-6 rounded-xl transition-all duration-500 ${animateCard === index ? 'active' : ''}`}
              onMouseEnter={() => setAnimateCard(index)}
              onMouseLeave={() => setAnimateCard(null)}
            >
              <h4 className="text-xl font-display font-bold mb-3">{feature.title}</h4>
              <p className="text-nbgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
    </Section>
  );
};

export default AboutUs;
