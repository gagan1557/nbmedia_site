
import React from 'react';
import { Camera } from 'lucide-react';
import Section from './Section';

const BehindTheScenes: React.FC = () => {
  return (
    <Section>
      <div className="flex items-center justify-center mb-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2s", animationFillMode: "forwards"}}>
        <Camera className="mr-3 text-white" />
        <h2 className="text-2xl md:text-3xl font-bold font-display">Behind The Scenes</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2.2s", animationFillMode: "forwards"}}>
        <div className="relative rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-50 z-10"></div>
          <img 
            src="/lovable-uploads/345c3448-1819-4acb-903c-02a92e6674fa.png" 
            alt="Chocolate Day Fun at Office" 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-bold font-display mb-2">Office Fun</h3>
            <p className="text-nbgray text-sm">Chocolate Day celebrations at our office. We work hard, but also know how to have fun!</p>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7" 
            alt="Content planning" 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-bold font-display mb-2">Content Planning</h3>
            <p className="text-nbgray text-sm">The brainstorming room where viral ideas are born and refined.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BehindTheScenes;
