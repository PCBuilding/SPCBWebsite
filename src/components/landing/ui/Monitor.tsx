import React, { useState, useEffect } from "react";
import motion from "framer-motion";

interface ProcessType {
  name: string;
  cpu: number;
  ram: number;
}

const initialProcesses: ProcessType[] = [
  { name: "spcb.exe", cpu: 2, ram: 2 },
  { name: "events.exe", cpu: 6, ram: 1 },
  { name: "projects.exe", cpu: 4, ram: 4 },
  { name: "about.exe", cpu: 7, ram: 3 },
];

const style = `
  @keyframes fadeValue {
    0% {
      color: #79C7FD;
    }
    100% {
      color: #C1C1C1;
    }
  }

  .animate-value {
    animation: fadeValue 500ms linear forwards;
  }
`;

const Monitor: React.FC = () => {
  const [processes, setProcesses] = useState<ProcessType[]>(initialProcesses);
  const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      // Use the functional update so we have the latest processes
      setProcesses((prevProcesses) => {
        const updatedProcesses = prevProcesses.map((process) => ({
          ...process,
          cpu: Math.floor(Math.random() * 12) + 1,
          ram: Math.floor(Math.random() * 12) + 1,
        }));
        // Trigger animation for all items using the updated processes
        setAnimatingItems(new Set(updatedProcesses.map((p) => p.name)));
        // Clear animation classes after the animation completes
        setTimeout(() => {
          setAnimatingItems(new Set());
        }, 500);
        return updatedProcesses;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{style}</style>
      <div>
        <div className="w-[400px] rounded-xl border border-[#1a2a3d] bg-[#090f1a] bg-opacity-80 p-2 shadow-md">
          <div className="rounded-md border border-[#1a2a3d] p-4">
            <div className="relative h-36 w-full rounded-md border border-[#1a2a3d]">
              <span className="absolute -top-2 left-2 bg-[#090f1a] px-2 text-xs text-gray-400">
                GPU Usage
              </span>
              <div className="flex justify-end px-4">
                <span className="pt-2 text-[10px] text-gray-400">RTX 5090</span>
              </div>
              <AnimatedLineGraph color="#FF804E" />
            </div>

            <div className="relative mt-4 w-full rounded-md border border-[#1a2a3d] text-xs text-gray-400">
              <span className="absolute -top-2 left-2 bg-[#090f1a] px-2 text-xs">
                Processes
              </span>
              <div className="mt-2.5 grid grid-cols-6 border-b border-[#1a2a3d] px-4 py-1 pb-0.5 text-[10px]">
                <span className="col-span-4">NAME</span>
                <span className="flex justify-end">CPU</span>
                <span className="flex justify-end">RAM</span>
              </div>
              {processes.map((process) => (
                <Process
                  key={process.name}
                  process={process}
                  isAnimating={animatingItems.has(process.name)}
                />
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="relative w-full rounded-md border border-[#1a2a3d]">
                <span className="absolute -top-2 left-2 bg-[#090f1a] px-2 text-xs text-gray-400">
                  Temperatures
                </span>
                <div className="grid grid-cols-6 border-b border-[#1a2a3d] px-4 pb-0.5 pt-3.5 text-[10px]">
                  <span className="col-span-4">NAME</span>
                  <span className="col-span-2 flex justify-end">TEMP</span>
                </div>
                <div className="grid grid-cols-6 border-b border-[#1a2a3d] px-4 py-1 text-[10px]">
                  <span className="col-span-4">cpu1_core</span>
                  <span className="col-span-2 flex justify-end">35C</span>
                </div>
                <div className="grid grid-cols-6 border-b border-[#1a2a3d] px-4 py-1 text-[10px]">
                  <span className="col-span-4">gpu_rtx5090</span>
                  <span className="col-span-2 flex justify-end">50C</span>
                </div>
                <div className="grid grid-cols-6 border-b border-[#1a2a3d] px-4 py-1 text-[10px]">
                  <span className="col-span-4">cpu2_core</span>
                  <span className="col-span-2 flex justify-end">38C</span>
                </div>
              </div>

              <div className="relative w-full rounded-md border border-[#1a2a3d]">
                <span className="absolute -top-2 left-2 bg-[#090f1a] px-2 text-xs text-gray-400">
                  CPU Usage
                </span>
                <div className="flex justify-end px-4">
                  <span className="pt-2 text-[10px] text-gray-400">
                    Ryzen 9950X3D
                  </span>
                </div>
                <AnimatedLineGraph color="#79C7FD" />
              </div>
            </div>

            <p className="pt-3 text-xs">SPCB CAM 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitor;

interface ProcessProps {
  process: ProcessType;
  isAnimating: boolean;
}

const Process: React.FC<ProcessProps> = ({ process, isAnimating }) => {
  return (
    <div className="grid grid-cols-6 border-b border-[#1a2a3d] px-4 py-1 text-[12px] last-of-type:border-0">
      <span className="col-span-4">{process.name}</span>
      <span
        className={`flex justify-end ${
          isAnimating ? "animate-value" : "text-gray-400"
        }`}
      >
        {process.cpu}%
      </span>
      <span
        className={`flex justify-end ${
          isAnimating ? "animate-value" : "text-gray-400"
        }`}
      >
        {process.ram}%
      </span>
    </div>
  );
};

interface AnimatedLineGraphProps {
  color: string;
}

const AnimatedLineGraph: React.FC<AnimatedLineGraphProps> = ({ color }) => {
  const width = 300;
  const height = 100;
  const numPoints = 30;
  // Compute spacing so points are evenly distributed.
  const spacing = width / (numPoints - 1);

  // Generate a full set of initial points.
  const generateInitialPoints = (): [number, number][] => {
    const points: [number, number][] = [];
    let lastY = height / 2;
    for (let i = 0; i < numPoints; i++) {
      // Adjust y value with a random walk.
      lastY = lastY + (Math.random() - 0.5) * 20;
      lastY = Math.max(10, Math.min(height - 10, lastY));
      points.push([i * spacing, lastY]);
    }
    return points;
  };

  // Pre-populate the state with the generated points.
  const [points, setPoints] = useState<[number, number][]>(
    generateInitialPoints,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => {
        // Remove the oldest point.
        const newPoints = prevPoints.slice(1);
        // Create a new y value using the last point’s y value.
        const lastY = newPoints[newPoints.length - 1][1];
        let newY = lastY + (Math.random() - 0.5) * 20;
        newY = Math.max(10, Math.min(height - 10, newY));
        // Append the new point at the right edge.
        newPoints.push([width, newY]);

        // Recalculate the x coordinates to keep the points evenly spaced.
        return newPoints.map((point, index) => [index * spacing, point[1]]);
      });
    }, 1000); // Update every 1000ms

    return () => clearInterval(interval);
  }, [spacing, width, height]);

  return (
    <svg
      width="300"
      height="100"
      viewBox="0 0 300 100"
      className="w-full"
      preserveAspectRatio="none"
    >
      <polyline
        points={points.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
