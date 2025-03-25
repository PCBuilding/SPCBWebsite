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
    <li className="grid gap-8 border-b border-[#1a2a3d] py-12 sm:py-16 md:grid-cols-2">
      <div className="flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:items-start md:text-left">
        <p className="balance max-w-[320px] text-3xl leading-[1.2] sm:max-w-[410px] sm:text-4xl lg:text-4xl xl:leading-[1.2]">
          {info.title}
        </p>
        <p className="max-w-[445px] text-balance text-lg text-dull lg:text-xl">
          {info.desc}
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="aspect-square w-full max-w-96 overflow-hidden rounded-xl border border-[#1a2a3d] bg-[#090f1a]">
          {info.children}
        </div>
      </div>
    </li>
  );
};

export default About;
