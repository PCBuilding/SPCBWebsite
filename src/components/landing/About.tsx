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
    <div className="relative mx-auto pl-[400px] pt-16 sm:py-32">
      <h2 className=" text-[40px] font-semibold pl-96">Why SPCB?</h2>
      <p className="text-dull pt-6 pl-52 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet!</p>
      <img src="/frame12.png" alt="" className="w-[1526px] pt-24" loading="lazy"/>
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
