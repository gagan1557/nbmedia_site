  import React, { useEffect, useState } from 'react';

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const updateLinkHoverStatus = () => {
      const hoveredElements = document.querySelectorAll(':hover');
      let isLinkHovered = false;
      
      hoveredElements.forEach((element) => {
        if (element.tagName.toLowerCase() === 'a' || 
            element.tagName.toLowerCase() === 'button' || 
            element.classList.contains('cursor-hover')) {
          isLinkHovered = true;
        }
      });
      
      setLinkHovered(isLinkHovered);
    };

    const onMouseMoveCheckHover = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      updateLinkHoverStatus();
    };

    addEventListeners();
    document.addEventListener('mousemove', onMouseMoveCheckHover);

    return () => {
      removeEventListeners();
      document.removeEventListener('mousemove', onMouseMoveCheckHover);
    };
  }, []);

  const cursorClasses = `pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-100 ease-out ${
    hidden ? 'opacity-0' : 'opacity-100'
  } ${linkHovered ? 'mix-blend-difference' : ''}`;

  const cursorOuterStyle = {
    transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
    width: clicked ? '36px' : linkHovered ? '48px' : '40px',
    height: clicked ? '36px' : linkHovered ? '48px' : '40px',
    boxShadow: linkHovered ? '0 0 16px 4px rgba(255,186,0,0.4)' : '0 2px 8px 0 rgba(255,186,0,0.15)',
    transition: 'box-shadow 0.2s',
  };

  const cursorInnerStyle = {
    transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
    width: clicked ? '8px' : '12px',
    height: clicked ? '8px' : '12px',
    background: linkHovered
      ? 'linear-gradient(90deg, #FFB800 0%, #FF6A00 100%)'
      : 'white',
    boxShadow: clicked ? '0 0 16px 4px #FFB800' : 'none',
  };

  // Spark effect for click
  const sparkStyle = {
    position: 'fixed' as const,
    left: position.x - 24,
    top: position.y - 24,
    width: 48,
    height: 48,
    pointerEvents: 'none' as const,
    zIndex: 51,
    opacity: clicked ? 1 : 0,
    transition: 'opacity 0.2s',
  };

  // Disable custom cursor and use default system cursor
  return null;
};

export default AnimatedCursor;
