import { useAnimationFrame } from 'framer-motion';
import { useMemo, useRef, useState, useEffect } from 'react';

const COLORS = [
  ['#6366f1', '#22d3ee'],
  ['#8b5cf6', '#22d3ee'],
  ['#22d3ee', '#6366f1'],
  ['#8b5cf6', '#6366f1'],
  ['#22d3ee', '#8b5cf6'],
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function generateLinePoints(width, height) {
  // 5 Kontrollpunkte über die Breite verteilt
  return Array.from({ length: 5 }, (_, i) => ({
    x: (i / 4) * width,
    baseY: randomBetween(0.2, 0.8) * height,
    amplitude: randomBetween(18, 48),
    speed: randomBetween(0.15, 0.35),
    phase: randomBetween(0, Math.PI * 2),
  }));
}

const NUM_LINES = 12;

export default function AnimatedBackground() {
  const [_, setRerender] = useState(0); // for animation frame
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle window resize
  useEffect(() => {
    const onResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Generiere NUM_LINES Linien, gleichmäßig verteilt
  const lines = useMemo(() => {
    return Array.from({ length: NUM_LINES }, (_, i) => {
      const colorPair = COLORS[Math.floor(Math.random() * COLORS.length)];
      const height = randomBetween(2, 5) * 12;
      // Gleichmäßige Verteilung von oben nach unten
      const top = (i + 0.5) * (dimensions.height / NUM_LINES);
      return {
        top,
        color1: colorPair[0],
        color2: colorPair[1],
        opacity: randomBetween(0.10, 0.22),
        height,
        points: generateLinePoints(dimensions.width, height),
        key: i + '-' + Math.random().toString(36).slice(2, 8),
      };
    });
    // eslint-disable-next-line
  }, [dimensions.width, dimensions.height]);

  // Animation Frame für dauerhafte Bewegung
  const frame = useRef(0);
  useAnimationFrame((t) => {
    frame.current = t / 1000;
    setRerender((v) => v + 1); // force rerender
  });

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {lines.map((line, idx) => {
          // Kontrollpunkte animieren
          const yOffset = line.top;
          const d = [
            `M0,${yOffset + line.points[0].baseY + Math.sin(frame.current * line.points[0].speed + line.points[0].phase) * line.points[0].amplitude}`,
            ...line.points.slice(1).map((pt, i) =>
              `Q${(line.points[i].x + pt.x) / 2},${
                yOffset +
                (line.points[i].baseY + Math.sin(frame.current * line.points[i].speed + line.points[i].phase) * line.points[i].amplitude +
                  pt.baseY + Math.sin(frame.current * pt.speed + pt.phase) * pt.amplitude) /
                2
              } ${pt.x},${yOffset + pt.baseY + Math.sin(frame.current * pt.speed + pt.phase) * pt.amplitude}`
            ),
          ].join(' ');
          return (
            <>
              <path
                key={line.key}
                fill="none"
                stroke={`url(#line-gradient-${line.key})`}
                strokeWidth={line.height / 6}
                d={d}
                opacity={line.opacity}
                style={{ filter: 'blur(2.5px)' }}
              />
              <defs>
                <linearGradient id={`line-gradient-${line.key}`} x1="0" y1="0" x2={dimensions.width} y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor={line.color1} />
                  <stop offset="100%" stopColor={line.color2} />
                </linearGradient>
              </defs>
            </>
          );
        })}
      </svg>
    </div>
  );
} 