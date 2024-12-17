// components/decorations/GlowingLine.tsx
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
              boxShadow: `0 0 150px 7px ${color}`,
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
              boxShadow: `0 0 150px 7px ${color}`,
            }}
          />,
        );
      }
    }
    return segments;
  };

  // Calculate circle position adjustment based on thickness
  const circleOffset = thickness / 2;

  return (
    <div className={`absolute inset-0 ${className}`}>
      {createLineSegments()}

      {/* Start circle */}
      <div
        style={{
          position: "absolute",
          left: `calc(${xPoints[0]}% + ${circleOffset}px)`,
          top: `calc(${yPoints[0]}% + ${circleOffset}px)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          backgroundColor: color,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 150px 7px ${color}`,
        }}
      />

      {/* End circle */}
      <div
        style={{
          position: "absolute",
          left: `calc(${xPoints[xPoints.length - 1]}% + ${circleOffset}px)`,
          top: `calc(${yPoints[yPoints.length - 1]}% + ${circleOffset}px)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          backgroundColor: color,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 150px 7px ${color}`,
        }}
      />
    </div>
  );
};

export default GlowingLine;
