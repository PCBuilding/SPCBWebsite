import React, { useState, useEffect, useRef, MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useInView,
  animate,
  MotionValue,
} from "framer-motion";

// Helper function to join class names.
const cn = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(" ");

// Generates a random string of the given length.
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
};

interface EvervaultCardProps {
  text?: string;
  className?: string;
}

export const EvervaultCard: React.FC<EvervaultCardProps> = ({
  text,
  className,
}) => {
  // Motion values to control the mask’s center.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState<string>("");

  // Ref for the card container.
  const containerRef = useRef<HTMLDivElement>(null);
  // Check if at least 50% of the container is in view.
  const isInView = useInView(containerRef, { amount: 0.5 });

  // Set an initial random string on mount.
  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  // Smoothly animate the mask position on mouse movement.


  // When the container is in view, update the mask's position smoothly at intervals.
  useEffect(() => {
    if (isInView && containerRef.current) {
      const intervalId = setInterval(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const randomX = Math.random() * rect.width;
          const randomY = Math.random() * rect.height;
          animate(mouseX, randomX, { type: "spring", stiffness: 100, damping: 20 });
          animate(mouseY, randomY, { type: "spring", stiffness: 100, damping: 20 });
          // Optionally update the random string as well.
          setRandomString(generateRandomString(1500));
        }
      }, 1000); // Adjust this interval (in ms) as desired.
      return () => clearInterval(intervalId);
    }
  }, [isInView, mouseX, mouseY]);

  return (
    <div
      className={cn(
        "bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        ref={containerRef}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
         
        </div>
      </div>
    </div>
  );
};

interface CardPatternProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
}

export const CardPattern: React.FC<CardPatternProps> = ({
  mouseX,
  mouseY,
  randomString,
}) => {
  // Create a CSS mask using a radial gradient centered on the mouse values.
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] opacity-80 group-hover/card:opacity-50" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange to-blue opacity-02 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-60 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default EvervaultCard;
