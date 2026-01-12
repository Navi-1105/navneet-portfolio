// AuroraBackground.tsx
export default function AuroraBackground() {
  const bubbles = [
    { size: 500, left: -5, top: 60, delay: 0 },    // Bottom Left bubble
    { size: 450, left: 85, top: 20, delay: 1.5 },  // Top Right bubble
    { size: 400, left: 75, top: 80, delay: 3 },    // Bottom Right bubble
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
              animationDuration: `${12 + i * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

