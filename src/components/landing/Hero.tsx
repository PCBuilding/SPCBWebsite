import React, { useState, useEffect } from "react";
import LogoCarousel from "./LogoCarousel";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialStats from "@/components/MemberCounts/SocialStats";

export default function Hero() {
  const [text, setText] = useState("");
  const [isInitialBlinkComplete, setIsInitialBlinkComplete] = useState(false);
  const fullText = "The Society of PC Building";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Handle initial cursor blink
  useEffect(() => {
    // Wait for 2 full blink cycles (2 seconds) before starting the typing
    const initialBlinkTimeout = setTimeout(() => {
      setIsInitialBlinkComplete(true);
    }, 400); // 2 seconds = 2 full blink cycles at 1s per cycle

    return () => clearTimeout(initialBlinkTimeout);
  }, []);

  // Handle typing animation
  useEffect(() => {
    if (!isInitialBlinkComplete) return; // Don't start typing until initial blink is complete

    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 70); // Adjust typing speed here (milliseconds)

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text, isInitialBlinkComplete, fullText]);

  return (
    <div
      className="relative pb-12 pt-24 font-Michroma text-[#eaeaea] md:pb-32 md:pt-52"
      id="hero"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col-reverse items-center px-6 pb-6 sm:px-10 lg:mt-0 lg:flex-row">
        <div className="flex w-full flex-col items-center text-center lg:w-3/4 lg:items-start lg:text-left">
          <h1 className="font-Michroma text-[22px] font-semibold leading-normal sm:text-4xl lg:text-[44px] lg:leading-normal">
            {text}
            <span className="ml-1 inline-block animate-[blink_1s_infinite]">
              _
            </span>
          </h1>

          <p
            className="max-w-[620px] px-1 pt-3 text-[17px] font-medium leading-relaxed opacity-0 transition-opacity duration-500 sm:px-0 sm:pt-3 sm:text-lg"
            style={{ opacity: isTypingComplete ? 1 : 0 }}
          >
            <span className="hidden sm:inline">
              Join the Society of PC Building at UF—where
            </span>
            <span className="sm:hidden">Where</span> students passionate about
            hardware and tech connect, innovate, and build custom PCs together.
          </p>

          <span
            className="hidden py-1.5 text-xs opacity-0 transition-opacity duration-500 lg:inline"
            style={{ opacity: isTypingComplete ? 1 : 0 }}
          >
            <SocialStats />
          </span>

          <a
            href="https://linktr.ee/pcbuildinguf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 rounded-md border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-80 px-8 py-2 text-base font-medium text-white opacity-0 transition-opacity transition-transform duration-300 duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            style={{ opacity: isTypingComplete ? 1 : 0 }}
          >
            Get Involved!
          </a>

          <div
            className="mt-16 opacity-0 transition-opacity duration-500 lg:mb-12 lg:mt-28"
            style={{ opacity: isTypingComplete ? 1 : 0 }}
          >
            <p className="text-xs opacity-80 sm:text-sm">
              Led by a team of officers with experience at:
            </p>
            <div className="-mt-5 hidden h-[103px] items-center gap-6 md:flex">
              <img src="/landing/logos/roblox.png" alt="" />
              <img src="/landing/logos/nvidia.png" alt="" />
              <img src="/landing/logos/microsoft.png" alt="" />
              <img src="/landing/logos/samsung.png" alt="" className="mt-px" />
              <img src="/landing/logos/ukg.png" alt="" />
              <img src="/landing/logos/meta.png" alt="" className="pb-0.5" />
              <p className="opacity-70">+ More!</p>
            </div>
            <LogoCarousel />
          </div>
        </div>

        <motion.div
          className="relative -mr-6 h-[220px] w-[220px] md:h-[300px] md:w-[300px] lg:-mr-36 lg:h-[600px] lg:w-[600px]"
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: isTypingComplete ? 1 : 0,
            y: isTypingComplete ? 0 : 60,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/landing/logo.png"
            alt="SPCB Logo"
            width={600}
            height={600}
            className="object-contain"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,1))",
            }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
