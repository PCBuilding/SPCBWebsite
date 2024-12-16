import React from "react";

interface GlowingLineProps {
  xPoints: string[];
  yPoints: string[];
  color?: string;
  thickness?: number;
  circleSize?: number;
  className?: string;
}

const GlowingLine: React.FC<GlowingLineProps> = ({
  xPoints,
  yPoints,
  color = "#1E90FF",
  thickness = 3,
  circleSize = 8,
  className = "",
}) => {
  // Create multiple shadow layers with increasing spread
  const createShadowEffect = (color: string) => {
    return `
      0 0 10px ${color},
      0 0 20px ${color},
      0 0 50px ${color},
      0 0 100px ${color},
      0 0 150px ${color},
      0 0 250px ${color}
    `;
  };

  // Create line segments between each pair of points
  const createLineSegments = () => {
    const segments = [];

    for (let i = 0; i < xPoints.length - 1; i++) {
      const x1 = parseFloat(xPoints[i]);
      const y1 = parseFloat(yPoints[i]);
      const x2 = parseFloat(xPoints[i + 1]);
      const y2 = parseFloat(yPoints[i + 1]);

      // For vertical lines
      if (x1 === x2) {
        const height = Math.abs(y2 - y1);
        segments.push(
          <div
            key={i}
            className="absolute"
            style={{
              width: `${thickness}px`,
              height: `${height}%`,
              backgroundColor: color,
              left: `${x1}%`,
              top: `${Math.min(y1, y2)}%`,
              boxShadow: createShadowEffect(color),
            }}
          />,
        );
      }
      // For horizontal lines
      else if (y1 === y2) {
        const width = Math.abs(x2 - x1);
        segments.push(
          <div
            key={i}
            className="absolute"
            style={{
              width: `${width}%`,
              height: `${thickness}px`,
              backgroundColor: color,
              left: `${Math.min(x1, x2)}%`,
              top: `${y1}%`,
              boxShadow: createShadowEffect(color),
            }}
          />,
        );
      }
      // For diagonal lines
      else {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        segments.push(
          <div
            key={i}
            className="absolute origin-left"
            style={{
              width: `${length}%`,
              height: `${thickness}px`,
              backgroundColor: color,
              left: `${x1}%`,
              top: `${y1}%`,
              transform: `rotate(${angle}deg)`,
              boxShadow: createShadowEffect(color),
            }}
          />,
        );
      }
    }
    return segments;
  };

  // Create circle style with enhanced glow
  const circleStyle = {
    position: "absolute" as const,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    backgroundColor: color,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: createShadowEffect(color),
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Line segments */}
      {createLineSegments()}

      {/* Start circle */}
      <div
        style={{
          ...circleStyle,
          left: `${xPoints[0]}%`,
          top: `${yPoints[0]}%`,
        }}
      />

      {/* End circle */}
      <div
        style={{
          ...circleStyle,
          left: `${xPoints[xPoints.length - 1]}%`,
          top: `${yPoints[yPoints.length - 1]}%`,
        }}
      />
    </div>
  );
};

export default GlowingLine;
