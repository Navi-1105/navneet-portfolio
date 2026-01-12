// AuroraBackground.tsx
export default function AuroraBackground() {
  const bubbles = [
    { size: 600, left: 0, top: 75, delay: 0 },     // Bottom left - largest
    { size: 550, left: 85, top: 78, delay: 1.5 }, // Bottom right - large
    { size: 400, left: 80, top: 5, delay: 3 },    // Top right - prominent
  ];

  return (
    <>
      <div className="wavy-bg" aria-hidden="true" />
      <div className="bubbles-container">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="liquid-bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              top: `${b.top}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${10 + i * 1.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}