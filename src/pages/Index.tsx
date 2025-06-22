import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import CountUp from '@/components/CountUp';
import FAQ from '@/components/FAQ';
import Section from '@/components/Section';
import OptimizedImage from '@/components/OptimizedImage';
const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Ensure page loads at the top
    window.scrollTo(0, 0);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(element => observer.observe(element));
    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Mouse parallax for hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        left,
        top,
        width,
        height
      } = heroSection.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      const elements = document.querySelectorAll('.parallax-element');
      elements.forEach((el, index) => {
        const factor = (index + 1) * 15;
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <div className="relative min-h-screen bg-nbdark text-white hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center pt-20 px-4 md:px-8 overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-nborange opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-nbyellow opacity-10 blur-[100px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 font-display text-balance">
            <div className="overflow-hidden mb-2">
              <span className="inline-block parallax-element opacity-0 animate-fade-in" style={{
              animationDelay: "0.4s",
              animationFillMode: "forwards"
            }}>
                We don't just
              </span>
            </div>
            <div className="overflow-hidden mb-2">
              <span className="inline-block parallax-element text-gradient opacity-0 animate-fade-in" style={{
              animationDelay: "0.8s",
              animationFillMode: "forwards"
            }}>
                create content.
              </span>
            </div>
            <div className="overflow-hidden mb-2">
              <span className="inline-block parallax-element opacity-0 animate-fade-in" style={{
              animationDelay: "1.2s",
              animationFillMode: "forwards"
            }}>
                We create the
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="inline-block parallax-element text-gradient opacity-0 animate-fade-in" style={{
              animationDelay: "1.6s",
              animationFillMode: "forwards"
            }}>
                future of YouTube.
              </span>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-nbgray max-w-2xl mx-auto text-center mt-8 opacity-0 animate-fade-in" style={{
          animationDelay: "2s",
          animationFillMode: "forwards"
        }}>
            NB Media is the undisputed leader in YouTube content creation with a vibrant, Gen Z-friendly culture.
          </p>
          
          <div className="flex justify-center mt-12 opacity-0 animate-fade-in" style={{
          animationDelay: "2.4s",
          animationFillMode: "forwards"
        }}>
            <Link to="/careers" className="w-auto">
              <Button size="lg" className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-8 py-6 rounded-md transition-all duration-500 hover:shadow-glow hover:scale-105">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <Section id="about" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 hidden-element">
            <h2 className="text-3xl font-bold font-display md:text-4xl">
              Creating Tomorrow's <span className="text-gradient">Digital Experiences</span> Today
            </h2>
            <p className="text-nbgray text-lg">
              NB Media is more than just a content creation company. We're pioneers in digital storytelling, crafting experiences that captivate Gen Z and beyond.
            </p>
            <p className="text-nbgray text-lg">
              With millions of views across multiple platforms, we've redefined what it means to create engaging, authentic content that resonates with today's audience.
            </p>
            <div className="pt-6">
              <Link to="/about" className="inline-flex items-center text-gradient font-medium hover:underline">
                Learn more about us 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 hidden-element">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="/lovable-uploads/62735034-729d-42a0-b187-75b7055634d7.jpg" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden translate-y-8">
              <img alt="Content planning" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="/lovable-uploads/e910660d-46fb-4ba2-a505-e463f7bc0cc7.png" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden -translate-y-8">
              <img alt="Video production" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="/lovable-uploads/56914e69-e5d4-4c14-8655-02dca619bdae.jpg" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img alt="Equipment setup" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="/lovable-uploads/b16f164a-d784-45dd-ab2c-789efd190844.jpg" />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 hidden-element">
          {[{
          number: 600,
          suffix: "M+",
          label: "Views"
        }, {
          number: 90,
          suffix: "+",
          label: "Team Members"
        }, {
          number: 2000,
          suffix: "+",
          label: "Videos Produced"
        }, {
          number: 5,
          suffix: "+",
          label: "Years of Growth"
        }].map(stat => <div key={stat.label} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} className="text-gradient" />
                </h3>
                <p className="text-nbgray">{stat.label}</p>
              </div>)}
        </div>
      </Section>
      
      {/* Life at NB Teaser */}
      <Section id="life-teaser" className="bg-black/30 relative overflow-hidden" padding="lg">
        <div className="text-center mb-16 hidden-element">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Life at <span className="text-gradient">NB Media</span>
          </h2>
          <p className="text-nbgray text-lg max-w-2xl mx-auto">
            From brainstorming sessions to launch celebrations, get a glimpse of what it's like to be part of our creative family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hidden-element">
          <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent z-10"></div>
            <OptimizedImage src="/lovable-uploads/1d043cdc-673c-4c86-980f-888c5cd030c3.png" alt="NB Media team culture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-bold mb-2">Team Culture</h3>
              <p className="text-nbgray text-sm">Where creativity meets collaboration in a dynamic environment.</p>
            </div>
          </div>
          
          <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" alt="NB Media office" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-bold mb-2">Behind the scene</h3>
              <p className="text-nbgray text-sm">Peek behind the scenes — where deadlines meet dance breaks.</p>
            </div>
          </div>
          
          <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0" alt="NB Media studio" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-bold mb-2">Studio Magic</h3>
              <p className="text-nbgray text-sm">State-of-the-art equipment for top-tier content production.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center hidden-element">
          <Link to="/life-at-nb">
            <Button size="lg" className="border border-nborange text-white bg-transparent hover:bg-nborange/20 transition-all duration-300 px-8 py-4">
              Explore Life at NB
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* CTA Careers */}
      <Section id="careers-teaser" className="relative overflow-hidden" padding="lg">
        <div className="absolute inset-0 bg-gradient-to-r from-nborange/20 to-nbyellow/20"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center hidden-element">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to <span className="text-gradient">Create</span> With Us?
          </h2>
          <p className="text-lg text-nbgray mb-10">
            Join our team of creators, dreamers, and innovators who are redefining the content landscape.
          </p>
          <Link to="/careers">
            <Button size="lg" className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-10 py-6 rounded-md transition-all duration-300 hover:shadow-glow hover:scale-105 text-xl">
              View Open Positions
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* FAQs Section */}
      <FAQ />
      
      {/* Join Our Team Button - Moved from Footer */}
      <Section padding="sm" maxWidth="7xl" className="text-center">
        <Link to="/careers">
          <Button size="lg" className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-8 py-6 rounded-md transition-all duration-500 hover:shadow-glow hover:scale-105 flex items-center gap-2">
            <BriefcaseBusiness className="w-5 h-5" />
            Join Our Team
          </Button>
        </Link>
      </Section>
      
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
        
        @keyframes scroll {
          0% {
            top: -100%;
          }
          100% {
            top: 100%;
          }
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 0 25px rgba(255, 122, 0, 0.6);
        }
      `
    }} />
    </div>;
};
export default Index;