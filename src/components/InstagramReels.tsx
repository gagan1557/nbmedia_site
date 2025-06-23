
import React from 'react';
import { Instagram, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface InstagramReel {
  id: string;
  caption: string;
  type: string;
}

interface InstagramReelsProps {
  className?: string;
}

const InstagramReels: React.FC<InstagramReelsProps> = ({ className = "" }) => {
  // Instagram Reels with the provided links
  const instagramReels = [
    {
      id: 'DH-_3RqIAzj',
      caption: 'Coco Reel',
      type: 'reel',
    },
    {
      id: 'DI_WpxWSPZL',
      caption: 'Maggie Reel',
      type: 'reel',
    },
    {
      id: 'DJEe8ZySpOm',
      caption: 'Dance Reel',
      type: 'reel',
    },
    {
      id: 'DG0lwYYyJS5',
      caption: 'Kerala Retreat Reel',
      type: 'reel',
    },
    {
      id: 'DIyi2AiSp9Y',
      caption: '1 Sec of Office Moments',
      type: 'reel',
    },
    {
      id: 'DJB_QN5yNBq',
      caption: 'I like you but I don\'t like it when...',
      type: 'reel',
    },
  ];

  return (
    <div className={`mb-16 opacity-0 hidden-element transition-all duration-1000 delay-400 ${className}`} style={{ transform: 'translateY(40px)' }}>
      <div className="flex items-center justify-center mb-8">
        <Instagram className="mr-2 text-white" />
        <h3 className="text-2xl font-bold font-display">Our Instagram Reels</h3>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {instagramReels.map((reel) => (
            <CarouselItem key={reel.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
              <div className="reel-container">
                <iframe
                  className="instagram-embed"
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  title={`Instagram ${reel.type}: ${reel.caption}`}
                  loading="lazy"
                  allowTransparency={true}
                  allowFullScreen={true}
                ></iframe>
                <div className="reel-overlay">
                  <p className="text-sm">{reel.caption}</p>
                  <div className="mt-2 flex items-center text-xs text-white/70">
                    <span>@nbmediaa</span>
                  </div>
                </div>
                <div className="play-button">
                  <Play className="h-6 w-6" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative inset-auto mx-1" />
          <CarouselNext className="relative inset-auto mx-1" />
        </div>
      </Carousel>
    </div>
  );
};

export default InstagramReels;
