
import React from 'react';
import Section from './Section';

const LifeAtNBHero: React.FC = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-nborange/20 blur-[100px]"></div>
      <div className="absolute bottom-0 -right-64 w-96 h-96 rounded-full bg-nbyellow/10 blur-[100px]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
          Life at <span className="text-gradient">NB Media</span>
        </h1>
        <p className="text-lg md:text-xl text-nbgray mb-12 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
          Where creativity thrives, laughs are constant, and memes are currency.
        </p>
      </div>
    </Section>
  );
};

export default LifeAtNBHero;
