
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
    transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
    width: clicked ? '28px' : linkHovered ? '40px' : '32px',
    height: clicked ? '28px' : linkHovered ? '40px' : '32px',
  };

  const cursorInnerStyle = {
    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
    width: clicked ? '4px' : '8px',
    height: clicked ? '4px' : '8px',
  };

  // Don't show custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div
        className={`${cursorClasses} rounded-full border border-white transition-all duration-200`}
        style={cursorOuterStyle}
      ></div>
      <div
        className={`${cursorClasses} rounded-full bg-white transition-all duration-200`}
        style={cursorInnerStyle}
      ></div>
    </>
  );
};

export default AnimatedCursor;
