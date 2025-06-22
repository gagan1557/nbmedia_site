
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import Section from '../components/Section';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<null | number>(null);

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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Short-Form Video Content",
      excerpt: "As attention spans shrink and platforms evolve, short-form video has become the dominant force in digital content. Here's where we see it heading next.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
      author: "Noah Bennett",
      date: "May 1, 2025",
      readTime: "5 min read",
      category: "Trends"
    },
    {
      id: 2,
      title: "Creating Authentic Content in an AI-Powered World",
      excerpt: "With AI-generated content becoming increasingly prevalent, how can content creators maintain authenticity and build genuine connections with their audience?",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      author: "Emma Rodriguez",
      date: "April 28, 2025",
      readTime: "7 min read",
      category: "Strategy"
    },
    {
      id: 3,
      title: "Behind Our Most Viral Video Ever",
      excerpt: "Our recent video hit 20 million views in just 48 hours. Here's a breakdown of what worked, what didn't, and the lessons we learned along the way.",
      image: "https://images.unsplash.com/photo-1626908013943-df2991bb9f89",
      author: "Jayden Kim",
      date: "April 21, 2025",
      readTime: "8 min read",
      category: "Case Study"
    },
    {
      id: 4,
      title: "The Creator Economy in 2025: Stats and Predictions",
      excerpt: "A deep dive into the current state of the creator economy, with data-backed insights and our predictions for where the industry is heading next.",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      author: "Sophia Chen",
      date: "April 15, 2025",
      readTime: "10 min read",
      category: "Industry"
    },
    {
      id: 5,
      title: "5 Tools Every Content Creator Needs in 2025",
      excerpt: "From AI-powered editing to audience analytics, these are the essential tools that are revolutionizing content creation this year.",
      image: "https://images.unsplash.com/photo-1561883088-039e53143d73",
      author: "Lucas Wright",
      date: "April 8, 2025",
      readTime: "6 min read",
      category: "Tools"
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
              The <span className="text-gradient">NB Media</span> Blog
            </h1>
            <p className="text-lg md:text-xl text-nbgray mb-12 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              Insights, trends, and behind-the-scenes looks at the future of content creation.
            </p>
          </div>
        </Section>
        
        {/* Featured Post */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
            <div className="relative aspect-video rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-50 z-10"></div>
              <img 
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-nborange/80 backdrop-blur-sm">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-nbgray">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {blogPosts[0].category}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold font-display">
                {blogPosts[0].title}
              </h2>
              
              <p className="text-nbgray">
                {blogPosts[0].excerpt}
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-nborange to-nbyellow flex items-center justify-center text-white font-bold">
                  {blogPosts[0].author.charAt(0)}
                </div>
                <span className="font-medium">{blogPosts[0].author}</span>
              </div>
              
              <Button className="bg-nborange hover:bg-nborange/90 mt-2">
                Read Article
              </Button>
            </div>
          </div>
          
          {/* Blog Post Grid */}
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
            Latest <span className="text-gradient">Posts</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id}
                className={`bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hidden-element opacity-0 animate-fade-in ${selectedPost === index ? 'border-nborange/50' : ''}`}
                style={{animationDelay: `${1 + index * 0.2}s`, animationFillMode: "forwards"}}
                onMouseEnter={() => setSelectedPost(index)}
                onMouseLeave={() => setSelectedPost(null)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-sm text-nbgray mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-3">{post.title}</h3>
                  <p className="text-nbgray text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-nborange to-nbyellow flex items-center justify-center text-white font-bold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm">{post.author}</span>
                  </div>
                  
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    Read
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
        
        {/* Newsletter */}
        <Section className="bg-gradient-to-r from-nborange/20 to-nbyellow/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "1.8s", animationFillMode: "forwards"}}>
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Stay <span className="text-gradient">Updated</span>
            </h2>
            <p className="text-nbgray mb-8">
              Get our latest articles, tips, and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-nborange"
              />
              <Button className="bg-gradient-to-r from-nborange to-nbyellow text-white">
                Subscribe
              </Button>
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}} />
    </div>
  );
};

export default Blog;
