
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Section from './Section';

const LifeAtNBCTA: React.FC = () => {
  return (
    <Section className="bg-gradient-to-r from-nborange/20 to-nbyellow/20 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2.4s", animationFillMode: "forwards"}}>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
          Think you'd <span className="text-gradient">vibe</span> with us?
        </h2>
        <p className="text-lg mb-8 text-nbgray">
          We're always looking for creative minds to join our team. If you're passionate about content creation and want to work in a fun, fast-paced environment, we want to hear from you!
        </p>
        <Link to="/careers">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-12 py-6 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default LifeAtNBCTA;
