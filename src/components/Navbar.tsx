
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'py-3 bg-nbdark/80 backdrop-blur-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="cursor-hover">
            <h1 className="text-xl md:text-2xl font-bold font-display">
              <span className="text-gradient">NB</span>Media
            </h1>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 cursor-hover ${
                isActive('/') ? 'text-nborange' : 'text-white hover:text-nborange'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-300 cursor-hover ${
                isActive('/about') ? 'text-nborange' : 'text-white hover:text-nborange'
              }`}
            >
              About
            </Link>
            <Link 
              to="/life-at-nb" 
              className={`transition-colors duration-300 cursor-hover ${
                isActive('/life-at-nb') ? 'text-nborange' : 'text-white hover:text-nborange'
              }`}
            >
              Life at NB
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors duration-300 cursor-hover ${
                isActive('/services') ? 'text-nborange' : 'text-white hover:text-nborange'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors duration-300 cursor-hover ${
                isActive('/careers') ? 'text-nborange' : 'text-white hover:text-nborange'
              }`}
            >
              Careers
            </Link>
            <SocialLinks iconSize={18} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white cursor-hover"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`block absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-6 bg-white transform transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                } top-2`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-30 bg-nbdark transform transition-transform duration-500 pt-20 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <nav className="container mx-auto px-8 py-10 flex flex-col h-full">
          <Link 
            to="/" 
            className={`text-3xl font-display my-4 cursor-hover ${
              isActive('/') ? 'text-gradient' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-3xl font-display my-4 cursor-hover ${
              isActive('/about') ? 'text-gradient' : ''
            }`}
          >
            About
          </Link>
          <Link 
            to="/life-at-nb" 
            className={`text-3xl font-display my-4 cursor-hover ${
              isActive('/life-at-nb') ? 'text-gradient' : ''
            }`}
          >
            Life at NB
          </Link>
          <Link 
            to="/services" 
            className={`text-3xl font-display my-4 cursor-hover ${
              isActive('/services') ? 'text-gradient' : ''
            }`}
          >
            Services
          </Link>
          <Link 
            to="/careers" 
            className={`text-3xl font-display my-4 cursor-hover ${
              isActive('/careers') ? 'text-gradient' : ''
            }`}
          >
            Careers
          </Link>
          <div className="mt-auto mb-8">
            <SocialLinks iconSize={24} className="justify-start" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
