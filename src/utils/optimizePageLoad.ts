
/**
 * Utility functions to optimize page loading
 */

// Defer non-critical script loading
export const deferNonCriticalScripts = () => {
  // This function would identify and defer loading of non-critical scripts
  // For demonstration purposes, we're just setting up the pattern
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      // Load non-critical scripts after page is fully loaded
      // Example: Analytics, social media widgets, etc.
      const nonCriticalScripts = [
        // Add paths to non-critical scripts here
      ];
      
      nonCriticalScripts.forEach(scriptSrc => {
        if (scriptSrc) {
          const script = document.createElement('script');
          script.src = scriptSrc;
          script.async = true;
          document.body.appendChild(script);
        }
      });
    }, 1000); // Wait 1s after DOMContentLoaded to load non-critical scripts
  });
};

// Enable content visibility auto for offscreen content
export const optimizeContentVisibility = () => {
  // This would apply content-visibility: auto to offscreen sections
  // For demonstration, this just shows the pattern
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (!isElementInViewport(section)) {
      section.style.contentVisibility = 'auto';
      section.style.containIntrinsicSize = '1000px'; // Estimate of section size
    }
  });
};

// Helper to check if element is in viewport
const isElementInViewport = (el: Element) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Initialize all optimizations
export const initOptimizations = () => {
  // Add this to your main.tsx or App.tsx to enable all optimizations
  deferNonCriticalScripts();
  
  // After initial render, optimize visibility for offscreen content
  setTimeout(() => {
    optimizeContentVisibility();
  }, 100);
};
