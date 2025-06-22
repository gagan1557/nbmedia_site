
import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Heart, Play, Volume, VolumeOff, Pause } from 'lucide-react';
import Section from './Section';
import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const InstagramFeedSection: React.FC = () => {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [videoErrors, setVideoErrors] = useState<{[key: number]: boolean}>({});

  // Instagram post mockups - videos with alternative sources
  const instagramPosts = [
    {
      id: 1,
      type: 'video',
      videoUrl: '/videos/nbmedia_video1.mp4',
      fallbackUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Fallback to a sample video if local one fails
      thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      caption: 'Team brainstorming session! #creativity #nbmedia',
    },
    {
      id: 2,
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      caption: 'When the coffee kicks in ☕ #mondaymotivation',
    },
    {
      id: 3,
      type: 'video',
      videoUrl: '/videos/nbmedia_video2.mp4',
      fallbackUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', // Fallback to a sample video if local one fails
      thumbnailUrl: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42',
      caption: 'Friday celebrations are a must! #weekendvibes',
    },
    {
      id: 4,
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      caption: 'Planning our next viral hit 📈 #contentcreation',
    },
    {
      id: 5,
      type: 'video',
      videoUrl: '/videos/nbmedia_video3.mp4',
      fallbackUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', // Fallback to a sample video if local one fails
      thumbnailUrl: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f',
      caption: 'When you find the perfect lighting ✨ #behindthescenes',
    },
    {
      id: 6,
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      caption: 'Our new office space is 🔥 #nbmedia',
    },
  ];

  // Handle video error and switch to fallback if available
  const handleVideoError = (index: number) => {
    console.log(`Error loading video at index ${index}`);
    setVideoErrors(prev => ({...prev, [index]: true}));
    
    // Try to load the fallback URL if available
    const post = instagramPosts.find((_, i) => i === index);
    if (post?.type === 'video' && 'fallbackUrl' in post && videoRefs.current[index]) {
      console.log(`Trying fallback URL for video ${index}`);
      videoRefs.current[index]!.src = post.fallbackUrl;
      videoRefs.current[index]!.load();
    }
  };

  const toggleVideoPlayback = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[index];
    
    if (!video) return;
    
    if (playingVideo === index) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
      }
      
      // Try to play and handle any errors
      video.play().catch(err => {
        console.error('Error playing video:', err);
        handleVideoError(index);
      });
      setPlayingVideo(index);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(prev => !prev);

    // Update all video elements
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = !isMuted;
      }
    });
  };

  // Debug helper - log when component mounts
  useEffect(() => {
    console.log('InstagramFeedSection mounted');
    console.log('Video refs initialized:', videoRefs.current);
    
    return () => {
      console.log('InstagramFeedSection unmounted');
    };
  }, []);

  return (
    <Section>
      <div className="flex items-center justify-center mb-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
        <Instagram className="mr-3 text-white" />
        <h2 className="text-2xl md:text-3xl font-bold font-display">Our Instagram Feed</h2>
      </div>
      
      {/* YouTube Short Featured Content */}
      <div className="mb-12 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.7s", animationFillMode: "forwards"}}>
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-display text-gradient">Featured Short</h3>
          <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/cCcZryjDTjg" 
              title="NB Media YouTube Short" 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
        {instagramPosts.map((post, index) => (
          <div 
            key={post.id}
            className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2"
            onMouseEnter={() => setActivePost(index)}
            onMouseLeave={() => setActivePost(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-${activePost === index ? '90' : '50'} transition-opacity duration-300 z-10`}></div>
            
            {post.type === 'image' ? (
              <img 
                src={post.imageUrl} 
                alt={`Instagram post ${post.id}`}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full aspect-square relative">
                <div className={`absolute inset-0 flex items-center justify-center z-20 ${playingVideo === index ? 'opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-300`}>
                  <div className="bg-black/30 rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => toggleVideoPlayback(index, e)}
                    className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-colors"
                  >
                    {playingVideo === index ? 
                      <Pause className="w-4 h-4 text-white" /> : 
                      <Play className="w-4 h-4 text-white" />
                    }
                  </button>
                  
                  <button 
                    onClick={toggleMute}
                    className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-colors"
                  >
                    {isMuted ? 
                      <VolumeOff className="w-4 h-4 text-white" /> : 
                      <Volume className="w-4 h-4 text-white" />
                    }
                  </button>
                </div>
                
                <video 
                  className="w-full h-full object-cover"
                  src={videoErrors[index] && 'fallbackUrl' in post ? (post as any).fallbackUrl : post.videoUrl}
                  poster={post.thumbnailUrl}
                  muted={isMuted}
                  loop
                  playsInline
                  ref={el => videoRefs.current[index] = el}
                  onClick={(e) => toggleVideoPlayback(index, e)}
                  onError={() => handleVideoError(index)}
                  onMouseEnter={(e) => {
                    // Only auto-play if no other video is currently playing
                    if (playingVideo === null) {
                      const video = e.currentTarget;
                      video.play().catch(err => {
                        console.error('Error auto-playing on hover:', err);
                        handleVideoError(index);
                      });
                      setPlayingVideo(index);
                    }
                  }}
                  onMouseLeave={(e) => {
                    // Only pause if this video is playing and user isn't actively controlling it
                    if (playingVideo === index && !e.currentTarget.paused) {
                      const video = e.currentTarget;
                      video.pause();
                      setPlayingVideo(null);
                    }
                  }}
                ></video>
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {post.caption}
              </p>
            </div>
            
            <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "1s", animationFillMode: "forwards"}}>
        <a 
          href="https://www.instagram.com/nbmediaa/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gradient font-medium cursor-hover px-6 py-3 rounded-full border border-nborange/50 hover:border-nborange transition-all duration-300"
        >
          Follow us on Instagram
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
};

export default InstagramFeedSection;
