import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_CARDS = 5;

type Card = {
  bg: string;
  border: [string, string];
  icon: string;
  title: string;
  desc: string;
};

const cards: Card[] = [
  {
    bg: "/landing/cards/blue.png",
    border: ["353F57", "191A23"],
    icon: "/landing/card-icons/social.png",
    title: "Connect with hundreds of tech enthusiasts.",
    desc: "Meet like-minded individuals with industry experience in Computer Science & Engineering.",
  },
  {
    bg: "/landing/cards/orange.png",
    border: ["4D402B", "1E1A19"],
    icon: "/landing/card-icons/pc-parts.png",
    title: "Hands-on experience with the latest tech.",
    desc: "Build PCs, demo the latest technology, and learn new skills, all for free.",
  },
  {
    bg: "/landing/cards/green.png",
    border: ["35533D", "415D48"],
    icon: "/landing/card-icons/money.png",
    title: "Highest funded student org at UF.",
    desc: "We use these fund to fully cater our GBM's and regulary get the latest tech.",
  },
  {
    bg: "/landing/cards/purple.png",
    border: ["363048", "18171E"],
    icon: "/landing/card-icons/events.png",
    title: "Experience engaging and unique events",
    desc: "Build PCs, demo the latest technology, and learn new skills, all for free.",
  },
  {
    bg: "/landing/cards/red.png",
    border: ["9E3A50", "640D20"],
    icon: "/landing/card-icons/officer.png",
    title: "Become an officer for valuable experience",
    desc: "We offer numerous positions that expose officers to leadership and relevent technology.",
  },
];

const About: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const controls = useAnimation();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate drag constraints based on container width
  const calculateConstraints = () => {
    const maxDrag = (TOTAL_CARDS - 1) * (isMobile ? 324 : 424);
    return {
      right: 0,
      left: -maxDrag,
    };
  };

  const handleDragEnd = (
    event: any,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const offsetX = info.offset.x;
    const velocity = info.velocity.x;

    // Determine direction based on drag distance and velocity
    if ((offsetX < -50 || velocity < -500) && sliderIndex < TOTAL_CARDS - 1) {
      const newIndex = sliderIndex + 1;
      setSliderIndex(newIndex);
      controls.start({ x: -(isMobile ? 324 : 424) * newIndex });
    } else if ((offsetX > 50 || velocity > 500) && sliderIndex > 0) {
      const newIndex = sliderIndex - 1;
      setSliderIndex(newIndex);
      controls.start({ x: -(isMobile ? 324 : 424) * newIndex });
    } else {
      // Reset to current position if drag wasn't decisive
      controls.start({ x: -(isMobile ? 324 : 424) * sliderIndex });
    }
  };

  // Handle button navigation
  const navigateSlider = (direction: "prev" | "next") => {
    let newIndex = sliderIndex;

    if (direction === "prev" && sliderIndex > 0) {
      newIndex = sliderIndex - 1;
    } else if (direction === "next" && sliderIndex < TOTAL_CARDS - 1) {
      newIndex = sliderIndex + 1;
    }

    setSliderIndex(newIndex);
    controls.start({ x: -(isMobile ? 324 : 424) * newIndex });
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pt-16 text-center sm:px-10 sm:py-28">
        <h2 className="text-[40px] font-semibold">Why SPCB?</h2>
        <p className="pt-4 text-dull">
          Discover some of the many reasons to join the Society of PC Building
        </p>

        {/* Slider */}
        <div className="mt-14" ref={containerRef}>
          <motion.div
            className="flex cursor-grab flex-nowrap gap-4 sm:gap-16 active:cursor-grabbing"
            drag="x"
            // Removed the dragControls prop
            dragConstraints={calculateConstraints()}
            dragElastic={0.1}
            dragMomentum={true}
            onDragEnd={handleDragEnd}
            animate={controls}
            initial={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cards.map((card) => (
              <CardComponent card={card} key={card.bg} />
            ))}
          </motion.div>
        </div>

        <div className="flex gap-4 pt-12 pb-2">
          <button
            onClick={() => navigateSlider("prev")}
            disabled={sliderIndex === 0}
            className="rounded-full bg-gray-800 p-3 text-white disabled:opacity-50 hover:shadow-white-glow transition-all duration-200 disabled:shadow-none"
          >
            <ChevronLeft className="mr-px"/>
          </button>
          <button
            onClick={() => navigateSlider("next")}
            disabled={sliderIndex === TOTAL_CARDS - 1}
            className="rounded-full bg-gray-800 p-3 text-white disabled:opacity-50 hover:shadow-white-glow transition-all duration-200 disabled:shadow-none"
          >
            <ChevronRight className="ml-px"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

type CardProps = {
  card: Card;

};

const CardComponent: React.FC<CardProps> = ({ card }) => {
  return (
    <div
      className="rounded-[18px] p-px"
      style={{
        background: `linear-gradient(45deg, #${card.border[0]}, #${card.border[1]})`,
      }}
    >
      <div className="relative h-[431px] sm:h-[500px] min-w-[310px] max-w-[320px] sm:max-w-[360px] overflow-hidden rounded-[18px] p-px sm:min-w-[360px]">
        <img
          src={card.bg}
          alt=""
          className="absolute top-0 left-0 bottom-0 right-0 z-0 select-none object-cover"
          draggable="false"
        />
        <div className="relative z-10 w-full px-6 sm:px-8 py-8 sm:py-10">
          <div className="border-b border-[#ffffff17] pb-1.5 sm:pb-[18px]">
            <p className="text-balance text-xl sm:text-2xl font-medium">{card.title}</p>
            <p className="text-balance pt-3 text-dull">{card.desc}</p>
          </div>
          <div className="flex justify-center pt-8 sm:pt-12">
            <Image
              src={card.icon}
              alt=""
              height={210}
              width={210}
              quality={100}
              className="select-none w-48 sm:w-[210px] h-48 sm:h-[210px]"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
