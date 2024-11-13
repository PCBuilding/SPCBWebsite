"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Circuit line points
    const circuits = [
      { x: 100, y: 100, length: 200, angle: 0, color: "#0ea5e9" },
      {
        x: canvas.width - 300,
        y: 100,
        length: 200,
        angle: 0,
        color: "#0ea5e9",
      },
      {
        x: 150,
        y: canvas.height - 300,
        length: 200,
        angle: 90,
        color: "#f97316",
      },
      {
        x: canvas.width - 250,
        y: canvas.height - 300,
        length: 200,
        angle: 90,
        color: "#f97316",
      },
    ];

    // Animation
    let offset = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circuits.forEach((circuit) => {
        ctx.beginPath();
        ctx.strokeStyle = circuit.color;
        ctx.lineWidth = 2;

        // Draw main line
        const radians = (circuit.angle * Math.PI) / 180;
        const endX = circuit.x + Math.cos(radians) * circuit.length;
        const endY = circuit.y + Math.sin(radians) * circuit.length;
        ctx.moveTo(circuit.x, circuit.y);
        ctx.lineTo(endX, endY);

        // Draw glowing effect
        ctx.shadowColor = circuit.color;
        ctx.shadowBlur = 15;
        ctx.stroke();

        // Draw moving light point
        const pointX =
          circuit.x +
          ((Math.cos(radians) * ((offset % circuit.length) + circuit.length)) %
            circuit.length);
        const pointY =
          circuit.y +
          ((Math.sin(radians) * ((offset % circuit.length) + circuit.length)) %
            circuit.length);

        ctx.beginPath();
        ctx.arc(pointX, pointY, 3, 0, Math.PI * 2);
        ctx.fillStyle = circuit.color;
        ctx.fill();
      });

      offset += 2;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0118]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: "blur(1px)" }}
      />
      <div>hi</div>
    </div>
  );
}
