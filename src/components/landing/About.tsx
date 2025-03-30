import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import EvervaultCard from "./ui/evervault-card";
import Terminal from "./ui/Connect";
import AnimatedCountUp from "./ui/Counter";
import GlowingLine from "@/components/decorations/GlowingLine";

// Define an interface for the list items.
interface ListItem {
  title: string;
  desc: string;
  children: React.ReactNode;
}

// Create the list of items using the ListItem interface.
const listItems: ListItem[] = [
  {
    title: "Hands-on experience with the latest tech.",
    desc: "Build PCs, demo the latest technology, and learn new skills, all for free.",
    children: <EvervaultCard />,
  },
  {
    title: "Connect with hundreds of tech enthusiasts.",
    desc: "Meet like-minded individuals with industry experience in Computer Science & Engineering.",
    children: <Terminal />,
  },
  {
    title: "Highest funded student org at UF.",
    desc: "We fully cater our GBM's and regulary get the latest tech.",
    children: <AnimatedCountUp />,
  },
];

const About: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Type the ref for the heading element.
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(h3Ref, { once: true });

  // Check if desktop for responsive lines
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-10 pt-16 sm:pt-32">
      <motion.img
        src="/landing/tube.png"
        alt=""
        className={`absolute -top-64 left-1/2 z-0 hidden -translate-x-1/2 overflow-hidden transition-all sm:block ${
          isInView ? "scale-x-100" : "scale-x-[0.25]"
        } duration-1000`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.2 : 0 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10">
        <h3
          ref={h3Ref}
          className="pb-6 text-center text-[40px] font-medium sm:pb-10"
        >
          Why SPCB?
        </h3>

        {/* Desktop Main Lines - Only show on desktop */}
        {isDesktop ? (
          <>
            <GlowingLine
              xPoints={["50", "50", "16", "16"]}
              yPoints={["5", "17", "17", "29"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
            <GlowingLine
              xPoints={["14", "14", "82", "82"]}
              yPoints={["35", "50", "50", "58"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
            <GlowingLine
              xPoints={["86", "86", "12", "12"]}
              yPoints={["67", "81", "81", "90"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />

            {/* Main line decorators - Desktop only */}
            <GlowingLine
              xPoints={["35", "43"]}
              yPoints={["16", "16"]}
              color="#FFA500"
              thickness={3}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["30", "45"]}
              yPoints={["19", "19"]}
              color="#FFA500"
              thickness={3}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["83", "83"]}
              yPoints={["52", "55"]}
              color="#FFA500"
              thickness={3}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["30", "45"]}
              yPoints={["80", "80"]}
              color="#FFA500"
              thickness={3}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["34", "46"]}
              yPoints={["82", "82"]}
              color="#FFA500"
              thickness={3}
              circleSize={6}
            />

            {/* Blue decorative lines Group1 - Desktop only */}
            <GlowingLine
              xPoints={["4", "10"]}
              yPoints={["4", "4"]}
              color="#1E90FF"
              thickness={2}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["0", "16"]}
              yPoints={["6", "6"]}
              color="#1E90FF"
              thickness={2}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["2", "11"]}
              yPoints={["7", "7"]}
              color="#1E90FF"
              thickness={2}
              circleSize={6}
            />

            {/* Blue decorative lines AT TOP - Desktop only */}
            <GlowingLine
              xPoints={["28", "71"]}
              yPoints={["-7.75", "-7.75"]}
              color="#1E90FF"
              thickness={3}
              circleSize={6}
            />
            {/* <GlowingLine
              xPoints={["27", "72"]}
              yPoints={["-6.5", "-6.5"]}
              color="#1E90FF"
              thickness={3}
              circleSize={6}
            /> */}

            {/* Blue decorative lines Group3 - Desktop only */}
            <GlowingLine
              xPoints={["12", "20"]}
              yPoints={["67", "67"]}
              color="#1E90FF"
              thickness={2}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["8", "22"]}
              yPoints={["68", "68"]}
              color="#1E90FF"
              thickness={2}
              circleSize={6}
            />
            <GlowingLine
              xPoints={["9", "14"]}
              yPoints={["70", "70"]}
              color="#1E90FF"
              thickness={2}
              circleSize={6}
            />
          </>
        ) : (
          // Mobile Main Line - Vertical line through the middle
          <>
            <GlowingLine
              xPoints={["58", "58"]}
              yPoints={["16", "37"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
            <GlowingLine
              xPoints={["36", "36"]}
              yPoints={["49", "70"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
            <GlowingLine
              xPoints={["70", "70"]}
              yPoints={["79.5", "99"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
            {/* Mobile Main Line decorations */}
            <GlowingLine
              xPoints={["55", "55"]}
              yPoints={["25", "36"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
            <GlowingLine
              xPoints={["39", "39"]}
              yPoints={["60", "69"]}
              color="#FFA500"
              thickness={3}
              circleSize={8}
            />
          </>
        )}

        <ul className="relative z-10">
          {listItems.map((info, index) => (
            <AboutItem key={info.title} info={info} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface AboutItemProps {
  info: ListItem;
  index: number;
}

const AboutItem: React.FC<AboutItemProps> = ({ info, index }) => {
  const isEven = index % 2 === 0;
  return (
    <li className="grid gap-8 py-12 sm:py-16 md:grid-cols-2">
      {isEven ? (
        <>
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:items-start md:text-left">
            <p className="balance max-w-[320px] text-center text-3xl leading-[1.2] sm:max-w-[410px] sm:text-4xl lg:text-4xl xl:leading-[1.2]">
              {info.title}
            </p>
            <p className="max-w-[445px] text-balance text-center text-lg text-dull lg:text-xl">
              {info.desc}
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="aspect-square w-full max-w-96 overflow-hidden rounded-xl border border-[#1a2a3d] bg-[#090f1a]">
              {info.children}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="order-last flex justify-center md:order-first md:justify-start">
            <div className="aspect-square w-full max-w-96 overflow-hidden rounded-xl border border-[#1a2a3d] bg-[#090f1a]">
              {info.children}
            </div>
          </div>

          <div className="order-first flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:order-last md:items-end md:text-right">
            <p className="balance max-w-[320px] text-center text-3xl leading-[1.2] sm:max-w-[410px] sm:text-4xl lg:text-4xl xl:leading-[1.2]">
              {info.title}
            </p>
            <p className="max-w-[445px] text-balance text-center text-lg text-dull lg:text-xl">
              {info.desc}
            </p>
          </div>
        </>
      )}
    </li>
  );
};

export default About;
