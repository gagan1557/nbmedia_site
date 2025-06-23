
/**
 * Preload critical resources for faster rendering
 */
export const preloadCriticalResources = () => {
  // Preload important fonts
  const fontUrls = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
  ];

  // Preload key images used above the fold
  const imageUrls = [
    '/lovable-uploads/7ce9d1ab-5fc8-4ff4-b24f-69f0fc33d522.jpg'
  ];

  // Create and append preload links for fonts
  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'preload';
    link.as = 'style';
    document.head.appendChild(link);
  });

  // Create and append preload links for critical images
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'preload';
    link.as = 'image';
    document.head.appendChild(link);
  });
};

/**
 * Initialize performance optimizations
 */
export const initializePerformanceOptimizations = () => {
  // Preload critical resources
  preloadCriticalResources();
  
  // Enable native lazy loading for all images
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  });
};
