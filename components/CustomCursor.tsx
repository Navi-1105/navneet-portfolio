// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  // 1. Motion Values for high-performance updates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Spring Physics for the "Frosted Glass" trailer (smooth floating feel)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Performance optimization: throttle updates using requestAnimationFrame
    let rafId: number | null = null;
    
    const handleMove = (e: MouseEvent) => {
      // Cancel previous frame if still pending
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      // Schedule update for next frame (throttles to ~60fps)
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        // Reveal cursor only after user interaction
        if (!isVisible) setIsVisible(true);
        rafId = null;
      });
    };

    // 3. Logic to detect clickable/hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for common interactive elements or explicit cursor-pointer style
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Hide on touch devices (where pointer is coarse) or before first move
  if (!isVisible) return null;

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-[9999] overflow-visible">
      {/* Small White Center Dot (Direct Input) */}
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Large Frosted Glass Orb (Physics + Zoom) */}
      <motion.div
        className={`cursor-glass ${isHovering ? 'hovered' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
