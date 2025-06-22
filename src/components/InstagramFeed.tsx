
import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
}

interface InstagramFeedProps {
  className?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Simulating Instagram feed images
  const instagramPosts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      caption: 'Team brainstorming session! #creativity #nbmedia',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      caption: 'Behind the scenes of our latest production. #contentcreation',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      caption: "Tech setup for today's shoot! #production #tech",
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      caption: 'Coding the future of content. #developers #tech',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      caption: 'Office views that inspire. #workspace #creativity',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      caption: 'Creative minds at work! #teamwork #nbmedia',
    },
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 opacity-0 hidden-element transition-all duration-1000 delay-600" style={{ transform: 'translateY(40px)' }}>
        {instagramPosts.map((post, index) => (
          <div 
            key={post.id}
            className={`insta-post bg-white/5 rounded-xl overflow-hidden transition-all duration-300 cursor-hover relative ${activeIndex === index ? 'active' : ''}`}
            style={{ animationDelay: `${0.1 * index}s` }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={post.imageUrl}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-nbgray">{post.caption}</p>
            </div>
            <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 opacity-0 hidden-element transition-all duration-1000 delay-900" style={{ transform: 'translateY(40px)' }}>
        <a 
          href="https://www.instagram.com/nbmediaa/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="follow-btn inline-flex items-center gap-2 text-gradient font-medium cursor-hover px-6 py-3 rounded-full border border-nborange/50 hover:border-nborange transition-all duration-300"
        >
          Follow us on Instagram
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
