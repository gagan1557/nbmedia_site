
import React from 'react';
import { Coffee, Sparkles, Heart, Users } from 'lucide-react';
import Section from './Section';

const TeamQuotes: React.FC = () => {
  // Fun team quotes
  const teamQuotes = [
    { quote: "Meme breaks > coffee breaks", icon: Coffee },
    { quote: "We don't make content, we make history", icon: Sparkles },
    { quote: "Done is better than perfect, but we still aim for perfect", icon: Heart },
    { quote: "If your idea scares you, it's probably good", icon: Users },
  ];

  return (
    <Section className="bg-black/30">
      <h2 className="text-2xl md:text-3xl font-bold font-display mb-12 text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "1.2s", animationFillMode: "forwards"}}>
        Things We Say <span className="text-gradient">Daily</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamQuotes.map((item, index) => (
          <div 
            key={item.quote} 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 transition-all duration-500 hover:border-nborange/50 hover:bg-white/10 hidden-element opacity-0 animate-fade-in"
            style={{animationDelay: `${1.4 + index * 0.2}s`, animationFillMode: "forwards"}}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-nborange to-nbyellow/70">
                <item.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-lg font-medium">"{item.quote}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamQuotes;
