
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import Section from '../components/Section';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Coffee, Gift, Zap, MapPin, Clock, Monitor, Heart } from 'lucide-react';

const Careers = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // For intersection observer animations
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
    
    // Ensure page loads at the top
    window.scrollTo(0, 0);
    
    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);
  
  const benefits = [{
    icon: Coffee,
    title: "Unlimited Coffee & Snacks",
    description: "Brain food on tap. Plus fridges stocked with your favorite drinks."
  }, {
    icon: Gift,
    title: "Birthday Surprises",
    description: "Day off on your birthday + a gift card to treat yourself."
  }, {
    icon: Zap,
    title: "Creative Freedom",
    description: "20% time to work on your passion projects & creative ideas."
  }, {
    icon: MapPin,
    title: "Flexible Location",
    description: "Work from our cool office or from your couch. Your call."
  }, {
    icon: Clock,
    title: "Flexible Hours",
    description: "Night owl or early bird? Work when your creativity peaks."
  }, {
    icon: Monitor,
    title: "Latest Tech",
    description: "Top-of-the-line equipment for all team members."
  }, {
    icon: Heart,
    title: "Mental Health Days",
    description: "Need a break? Take it. No questions asked."
  }, {
    icon: Gift,
    title: "Learning Budget",
    description: "$1000/year to spend on courses, books, or conferences."
  }];
  
  const faqItems = [{
    question: "What's the interview process like?",
    answer: "Our process is laid-back but thorough. First, a casual video chat to get to know you. Then, a small creative task relevant to the role. Finally, you'll meet the team you'd work with. No trick questions or stress tests – we just want to see how you think and create."
  }, {
    question: "Do I need to have a huge social following to work here?",
    answer: "Not at all! While we appreciate digital savvy, we're more interested in your skills, creativity, and enthusiasm. Some of our best team members had zero social media presence when they joined."
  }, {
    question: "What's a typical day like?",
    answer: "There's no 'typical' day at NB Media – that's what makes it exciting! Depending on your role, you might be brainstorming concepts, filming content, editing videos, analyzing trends, or collaborating with creators. We have core hours for team syncs, but how you structure your creative time is often up to you."
  }, {
    question: "Is there room for growth?",
    answer: "Absolutely! We're growing fast and love promoting from within. Many of our team leads started in entry-level positions. We also support sideways moves if you want to explore different departments."
  }, {
    question: "What's the dress code?",
    answer: "Express yourself! Unless you're on camera or meeting clients, wear whatever makes you comfortable and creative. Yes, that includes pajamas on WFH days."
  }];
  
  return <div className="relative min-h-screen bg-nbdark text-white overflow-hidden hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-nborange/20 blur-[100px]"></div>
          <div className="absolute bottom-0 -right-64 w-96 h-96 rounded-full bg-nbyellow/10 blur-[100px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards"
          }}>
              This isn't a <span className="text-gradient">job</span>.<br />
              It's a content creator's <span className="text-gradient">playground</span>.
            </h1>
            <p className="text-lg md:text-xl text-nbgray mb-12 hidden-element opacity-0 animate-fade-in" style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards"
          }}>
              Join a team where your creativity is celebrated, your ideas matter, and making cool stuff is literally your job.
            </p>
          </div>
        </Section>
        
        {/* Benefits Section */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "0.6s",
          animationFillMode: "forwards"
        }}>
            The <span className="text-gradient">Perks</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <Card key={benefit.title} className={`bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group cursor-pointer transition-all duration-500 ${activeCard === index ? 'border-nborange/50 bg-white/10 transform -translate-y-2' : 'hover:-translate-y-1'}`} onMouseEnter={() => setActiveCard(index)} onMouseLeave={() => setActiveCard(null)}>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-3 rounded-full ${activeCard === index ? 'bg-gradient-to-br from-nborange to-nbyellow' : 'bg-white/10'} transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-nborange group-hover:to-nbyellow`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2">{benefit.title}</h3>
                  <p className="text-nbgray text-center text-sm">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </Section>
        
        {/* Join Us CTA */}
        <Section className="bg-gradient-to-r from-nborange/20 to-nbyellow/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "0.8s",
          animationFillMode: "forwards"
        }}>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Ready to <span className="text-gradient">join</span> the team?
            </h2>
            <p className="text-lg mb-10 text-nbgray">
              Check out our open positions and apply now. We can't wait to see what you'll create with us!
            </p>
            <a href="https://ytmoney.keka.com/careers/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-14 py-8 text-xl rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                Join Now
              </Button>
            </a>
          </div>
        </Section>
        
        {/* FAQ Section */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "1s",
          animationFillMode: "forwards"
        }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="max-w-3xl mx-auto hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "1.2s",
          animationFillMode: "forwards"
        }}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-xl font-medium py-4">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-nbgray pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </Section>
        
        {/* Final CTA */}
        <Section>
          <div className="max-w-xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{
          animationDelay: "1.4s",
          animationFillMode: "forwards"
        }}>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Still have <span className="text-gradient">questions</span>?
            </h3>
            <p className="text-nbgray mb-8">
              Reach out to our team at <a href="mailto:careers@nbmedia.com" className="text-gradient">hello@nbmediaproductions.com</a> and we'll get back to you asap!
            </p>
            <a href="https://ytmoney.keka.com/careers/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-nborange hover:bg-nborange/90 text-white font-medium px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                View All Open Positions
              </Button>
            </a>
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
      `
    }} />
    </div>;
};
export default Careers;
