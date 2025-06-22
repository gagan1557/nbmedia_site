
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import Section from '../components/Section';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import { initializePerformanceOptimizations } from '../utils/preloadResources';

const About = () => {
  // For intersection observer animations
  useEffect(() => {
    // Initialize performance optimizations
    initializePerformanceOptimizations();

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    
    // Use a more efficient selector and batched operations
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(element => observer.observe(element));
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const timelineData = [{
    year: '2020',
    title: 'The Beginning',
    description: 'Started in a small apartment with one camera and a dream.'
  }, {
    year: '2021',
    title: 'First Million',
    description: 'Reached 1 million subscribers and grew to a team of 5.'
  }, {
    year: '2022',
    title: 'First Office',
    description: 'Opened our first real office and doubled our team.'
  }, {
    year: '2023',
    title: 'Global Expansion',
    description: 'Created content in multiple languages and hit 10 million subscribers.'
  }, {
    year: '2024',
    title: 'Chandigarh Headquarters',
    description: 'Built our HQ in Chandigarh with open workspaces and a creative environment.'
  }, {
    year: '2025',
    title: 'Today',
    description: 'Now 90 team members strong, leading India\'s YouTube content creation.'
  }];
  return <div className="relative min-h-screen bg-nbdark text-white overflow-hidden hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-nborange/20 blur-[100px] will-change-transform"></div>
          <div className="absolute bottom-0 -right-64 w-96 h-96 rounded-full bg-nbyellow/10 blur-[100px] will-change-transform"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards"
          }}>
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-nbgray mb-12 hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards"
          }}>
              From humble beginnings to industry leadership, we've been redefining content creation since day one.
            </p>
          </div>
        </Section>
        
        {/* Timeline Section */}
        <Section className="relative">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "0.6s",
          animationFillMode: "forwards"
        }}>
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-nborange to-nbyellow opacity-30"></div>
            
            {/* Timeline events */}
            <div className="space-y-12 md:space-y-24 relative z-10">
              {timelineData.map((item, index) => <div key={item.year} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8 hidden-element opacity-0 animate-fade-in`} style={{
              animationDelay: `${0.8 + index * 0.2}s`,
              animationFillMode: "forwards"
            }}>
                  <div className="w-full md:w-1/2 text-center md:text-right md:pr-8">
                    <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                      <span className="text-gradient font-display text-3xl font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                      <p className="text-nbgray">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-nborange to-nbyellow shadow-glow will-change-transform"></div>
                  
                  <div className="w-full md:w-1/2 md:pl-8">
                    {/* Show specific images for each year with optimized image component */}
                    {index === 0 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src="/lovable-uploads/ab954229-a185-4be5-95b1-8d9a1456d46c.png" 
                          alt="NB Media in 2020 - The Beginning" 
                          className="w-full h-full object-cover rounded-lg"
                          priority={index <= 1} // Only prioritize first two images
                        />
                      </div>
                    ) : index === 1 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src="/lovable-uploads/2339c01b-c8c6-445f-88aa-4b2bfc2a5148.png" 
                          alt="YouTube Play Buttons - First Million" 
                          className="w-full h-full object-cover rounded-lg"
                          priority={index <= 1}
                        />
                      </div>
                    ) : index === 2 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src="/lovable-uploads/2d63caf7-5c54-4e4f-99bd-d626e0523cb8.png" 
                          alt="NB Media Office - First Office" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : index === 3 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src="/lovable-uploads/ff567d46-2f67-4473-bc30-665c08f5db46.png" 
                          alt="NB Media Global Team - Global Expansion" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : index === 4 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src="/lovable-uploads/acee3d0b-7b77-4b17-8a4e-de5415c3f2a0.png" 
                          alt="NB Media Chandigarh Headquarters" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : index === 5 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src="/lovable-uploads/18bb5ad0-b108-4ced-a976-89362974ea1a.png" 
                          alt="NB Media Today - Team Members" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : index % 2 === 0 ? (
                      <div className="h-full w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                        <OptimizedImage 
                          src={`https://images.unsplash.com/photo-${1550000000000 + index * 10000000}`}
                          alt={`NB Media in ${item.year}`} 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="mt-12 text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "2.2s",
          animationFillMode: "forwards"
        }}>
            
          </div>
        </Section>
        
        {/* Founder Story */}
        <Section className="bg-black/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: "1.8s",
            animationFillMode: "forwards"
          }}>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Meet Our <span className="text-gradient">Founder</span>
              </h2>
              <p className="text-nbgray">
                From creating videos in a bedroom to leading an international media company, our founder's journey inspires everything we do at NB Media.
              </p>
              <p className="text-nbgray">
                "I started NB Media because I believed content creation could be different – more authentic, more innovative, and more impactful. Today, that vision drives every video, every post, and every team member who joins our journey."
              </p>
              <p className="italic font-medium text-white">– Nikit Bassi, Founder & CEO</p>
            </div>
            
            <div className="relative hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: "2s",
            animationFillMode: "forwards"
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-nborange to-nbyellow opacity-20 rounded-2xl transform rotate-3 will-change-transform"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <OptimizedImage 
                  src="/lovable-uploads/9e22850f-ecfe-4d86-a563-9fb73cdcd6da.png"
                  alt="NB Media Founder" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </Section>
        
        {/* Values Section */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "2.2s",
          animationFillMode: "forwards"
        }}>
            Our <span className="text-gradient">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: "Pace",
            description: "We move fast, iterate quickly, and stay ahead of trends."
          }, {
            title: "Quality",
            description: "We never compromise on the standard of our content or team."
          }, {
            title: "Win-Win-Win",
            description: "Our audience wins. Our creators win. Our partners win."
          }].map((value, index) => <Card key={value.title} className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group relative hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: `${2.4 + index * 0.2}s`,
            animationFillMode: "forwards"
          }}>
                <div className="absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-nborange to-nbyellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 will-change-transform"></div>
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold font-display mb-3">{value.title}</h3>
                  <p className="text-nbgray">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="mt-16 text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "3s",
          animationFillMode: "forwards"
        }}>
            <Link to="/careers">
              <Button size="lg" className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-8 py-6 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                Join Our Team
              </Button>
            </Link>
          </div>
        </Section>
      </div>
      
      <Footer />
      
      <style dangerouslySetInnerHTML={{
      __html: `
        .hidden-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
        }
        
        .hidden-element.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255, 122, 0, 0.6);
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
        
        /* Add will-change-transform to animations for better rendering performance */
        .animate-fade-in, .transition-transform {
          will-change: opacity, transform;
        }
        
        /* Add GPU acceleration hints to improve animation performance */
        .animate-fade-in, .transition-transform, .hover\:scale-105, .hover\:scale-\[1\.02\] {
          transform: translateZ(0);
        }
      `
    }} />
    </div>;
};
export default About;
