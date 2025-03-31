import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Image from "next/image";

type Picture = {
  src: string;
};

type ScrollerProps = {
  items: string[];
};

export const Scroller: React.FC<ScrollerProps> = ({ items }) => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const FAST_DURATION = 12;
  const SLOW_DURATION = 100000; // effectively pauses scroller.

  const [duration, setDuration] = useState(FAST_DURATION);
  const scrollerItems: string[] = [...items, ...items];

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 2;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <motion.ul
      className="scroller-width relative z-10 mt-2 flex gap-1 sm:gap-2 md:gap-4"
      ref={ref}
      style={{ x: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {scrollerItems.map((picture, index) => (
        <Item src={picture} key={index} />
      ))}
    </motion.ul>
  );
};

const Item: React.FC<Picture> = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      height={176}
      width={0}
      style={{ height: "176px", width: "auto" }}
      unoptimized
    />
  );
};
