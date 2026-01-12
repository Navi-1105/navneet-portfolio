// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

type Pos = { x: number; y: number };

export default function CustomCursor() {
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerdown', handleEnter);
    window.addEventListener('pointerenter', handleEnter);
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleEnter);
      window.removeEventListener('pointerenter', handleEnter);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden>
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="cursor-trailer"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          opacity: visible ? 0.7 : 0,
        }}
      />
    </div>
  );
}

