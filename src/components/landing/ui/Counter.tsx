import React, { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

const AnimatedCountUp: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { amount: 0.5 });
  
  const animationControlRef = useRef<ReturnType<typeof animate> | null>(null);

  const runAnimation = () => {
    setCount(0);

    if (animationControlRef.current) {
      animationControlRef.current.stop();
    }

    animationControlRef.current = animate(0, 10000000, {
      duration: 5,
      ease: "linear",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
  };

  useEffect(() => {
    let intervalId: number;

    if (isInView) {
      runAnimation();

      intervalId = window.setInterval(() => {
        runAnimation();
      }, 10000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (animationControlRef.current) animationControlRef.current.stop();
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-full text-dull p-4"
    >
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
        className="m text-green-400 text-4xl sm:text-5xl"
      >
        ${count.toLocaleString()}
      </div>
      <div className="text-xl pt-3 text-balance text-center">
        Just kidding... but we are still #1
      </div>
    </div>
  );
};

export default AnimatedCountUp;
