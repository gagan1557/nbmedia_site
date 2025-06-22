
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import Section from '../components/Section';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';

const Services = () => {
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

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Topic & Market Research",
      description: "We begin by identifying the topics that will resonate with your audience and drive views, ensuring every video we produce has the potential to go viral.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Scriptwriting",
      description: "Our expert scriptwriters create compelling, engaging scripts that set the foundation for a successful video.",
      icon: "✍️"
    },
    {
      id: 3,
      title: "Video Editing",
      description: "Our editing teams focus on different stages to ensure your video hits all the right notes, including short-form editing (Reels/Shorts) and long-form editing (Full Video). We focus on storytelling, seamless transitions, and eye-catching effects to maximize audience engagement.",
      icon: "🎬"
    },
    {
      id: 4,
      title: "Thumbnail Design",
      description: "Our design experts create attention-grabbing thumbnails that drive clicks and increase watch time.",
      icon: "🖼️"
    },
    {
      id: 5,
      title: "Channel Management & SEO",
      description: "We manage your channel and optimize it for growth. From SEO to community engagement, we ensure your channel is set up for success.",
      icon: "📈"
    },
    {
      id: 6,
      title: "Consultation",
      description: "Get direct guidance from our strategy team to align your content strategy with the latest trends and best practices.",
      icon: "💡"
    }
  ];

  return (
    <div className="relative min-h-screen bg-nbdark text-white overflow-hidden hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-nborange/20 blur-[100px]"></div>
          <div className="absolute bottom-0 -right-64 w-96 h-96 rounded-full bg-nbyellow/10 blur-[100px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-nbgray mb-12 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              Full-Scale YouTube Production Services That Drive Results
            </p>
          </div>
        </Section>
        
        {/* Services Introduction */}
        <Section spacing="lg">
          <div className="max-w-4xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
            <p className="text-lg text-nbgray mb-8">
              From concept to upload, we provide end-to-end services that take your YouTube channel to the next level. 
              Our process is designed to keep you ahead of the competition, ensuring high engagement, growth, and lasting impact.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hidden-element opacity-0 animate-fade-in"
                style={{animationDelay: `${0.8 + index * 0.2}s`, animationFillMode: "forwards"}}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
                  <p className="text-nbgray">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        
        {/* Process Overview */}
        <Section className="bg-gradient-to-r from-nborange/10 to-nbyellow/10 backdrop-blur-sm" spacing="lg">
          <div className="max-w-4xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "1.8s", animationFillMode: "forwards"}}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-nbgray mb-12">
              We follow a streamlined process to ensure consistently exceptional results for your YouTube channel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Research & Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-nborange mt-1 flex-shrink-0" />
                    <span>Audience analysis and target demographic research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-nborange mt-1 flex-shrink-0" />
                    <span>Competitive channel assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-nborange mt-1 flex-shrink-0" />
                    <span>Trend identification and content calendar creation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Production & Delivery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-nborange mt-1 flex-shrink-0" />
                    <span>Professional editing with custom graphics and effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-nborange mt-1 flex-shrink-0" />
                    <span>SEO optimization for titles, descriptions, and tags</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-nborange mt-1 flex-shrink-0" />
                    <span>Performance tracking and analytics reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section padding="lg" spacing="md">
          <div className="max-w-3xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2.2s", animationFillMode: "forwards"}}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to <span className="text-gradient">Transform</span> Your YouTube Channel?
            </h2>
            <p className="text-nbgray mb-10">
              Get in touch with us today to discuss how our services can help you achieve your YouTube goals.
            </p>
            <div className="inline-flex bg-gradient-to-r from-nborange to-nbyellow p-[2px] rounded-md">
              <button className="bg-nbdark px-8 py-4 rounded-[5px] font-medium hover:bg-transparent transition-colors duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </Section>
      </div>
      
      <Footer />
      
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
      `}} />
    </div>
  );
};

export default Services;
