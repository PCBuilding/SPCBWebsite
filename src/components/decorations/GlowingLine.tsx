import React from "react";

interface GlowingLineProps {
  xPoints: (string | number)[];
  yPoints: (string | number)[];
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
    const segments: JSX.Element[] = [];

    for (let i = 0; i < xPoints.length - 1; i++) {
      const x1 = parseFloat(xPoints[i].toString());
      const y1 = parseFloat(yPoints[i].toString());
      const x2 = parseFloat(xPoints[i + 1].toString());
      const y2 = parseFloat(yPoints[i + 1].toString());

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
              backgroundColor: `${color}dd`,
              left: `${x1}%`,
              top: `${Math.min(y1, y2)}%`,
              boxShadow: `0 0 60px 7px ${color}99`,
            }}
          />
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
              backgroundColor: `${color}dd`,
              left: `${Math.min(x1, x2)}%`,
              top: `${y1}%`,
              boxShadow: `0 0 60px 7px ${color}99`,
            }}
          />
        );
      }
    }
    return segments;
  };

  // Calculate circle position adjustment based on thickness.
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
        }}
      />
    </div>
  );
};

export default GlowingLine;
