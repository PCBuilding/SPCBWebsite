import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EvervaultCard from "./ui/evervault-card";
import Terminal from "./ui/Connect";
import AnimatedCountUp from "./ui/Counter";

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
    title: "Highest funded student org at UF.",
    desc: "We fully cater our GBM's and regulary get the latest tech.",
    children: <AnimatedCountUp />,
  },
  {
    title: "Connect with hundreds of tech enthusiasts.",
    desc: "Meet like-minded individuals with industry experience in Computer Science & Engineering.",
    children: <Terminal />,
  },
];

const About: React.FC = () => {
  // Type the ref for the heading element.
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(h3Ref, { once: true });

  return (
    <div className="pb-20 pt-16 sm:pt-32 max-w-7xl mx-auto px-10 overflow-hidden relative">
      <div className="about-fade absolute left-0 right-0 top-0 h-10 z-20" />
      <motion.img
        src="/landing/tube.png"
        alt=""
        className={`hidden sm:block absolute -top-48 z-0 left-1/2 -translate-x-1/2 overflow-hidden transition-all ${
          isInView ? "scale-x-100" : "scale-x-[0.25]"
        } duration-1000`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.2 : 0 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10">
        <h3 ref={h3Ref} className="text-[40px] font-medium pb-6 sm:pb-10 text-center">
          Why SPCB?
        </h3>
        <ul>
          {listItems.map((info) => (
            <AboutItem key={info.title} info={info} />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface AboutItemProps {
  info: ListItem;
}

const AboutItem: React.FC<AboutItemProps> = ({ info }) => {
  return (
    <li className="py-12 sm:py-16 border-b border-[#1a2a3d] gap-8 grid md:grid-cols-2">
      <div className="flex flex-col items-center text-center md:text-left md:items-start justify-between gap-3 sm:gap-4">
        <p className="text-3xl sm:text-4xl lg:text-4xl leading-[1.2] xl:leading-[1.2] balance max-w-[320px] sm:max-w-[410px]">
          {info.title}
        </p>
        <p className="text-lg lg:text-xl text-dull max-w-[445px] text-balance">
          {info.desc}
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="bg-[#090f1a] border border-[#1a2a3d] rounded-xl w-full max-w-96 aspect-square overflow-hidden">
          {info.children}
        </div>
      </div>
    </li>
  );
};

export default About;
