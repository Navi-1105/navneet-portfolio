// components/AuroraBackground.tsx
export default function AuroraBackground() {
  const bubbles = [
    // Bottom Left - Large, mostly off-screen
    { size: 600, left: -10, top: 70, delay: 0 }, 
    
    // Top Right - Medium, floating near header
    { size: 400, left: 85, top: 10, delay: 1.5 },
    
    // Bottom Right - Medium-Large
    { size: 500, left: 80, top: 80, delay: 3 },
  ];

  return (
    <>
      <div className="wavy-bg" aria-hidden="true" />
      <div className="bubbles-container">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="iridescent-bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              top: `${b.top}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${15 + i * 2}s`, // Slower movement for glass effect
            }}
          />
        ))}
      </div>
    </>
  );
}

