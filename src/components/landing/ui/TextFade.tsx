import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  splitBy?: "words" | "chars";
  onAnimationComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0.1,
  splitBy = "words",
  onAnimationComplete,
}) => {
  const items = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <span className="inline-block overflow-hidden">
      {items.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: index * delay, ease: "easeOut" }}
          onAnimationComplete={index === items.length - 1 ? onAnimationComplete : undefined}
        >
          {char}
          {"\u00A0"}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
