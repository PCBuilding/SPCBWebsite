import React from "react";
import LogoCarousel from "./LogoCarousel";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative pb-12 pt-24 text-[#eaeaea] lg:h-[max(100svh,840px)] lg:pt-24" id="hero">
      {/* Flex-row on desktop devices but flex-col-reverse for devices lg and smaller */}
      <div className="mx-auto flex h-full max-w-7xl flex-col-reverse items-center px-6 pb-6 sm:px-10 lg:mt-0 lg:flex-row">
        <div className="flex w-full flex-col items-center text-center lg:w-3/4 lg:items-start lg:text-left">
        {/* Hidden on mobile */}
          <span className="hidden rounded-full border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-50 px-4 py-1.5 text-xs lg:inline">
            1000+ Active Members!
          </span>
          <h1 className="pt-4 font-Michroma text-[26px] font-semibold leading-normal sm:text-4xl lg:text-[44px] lg:leading-normal">
            The Society <br className="inline sm:hidden" />
            of PC Building
          </h1>

          {/* On mobile devices shorten the description to limit text-length */}
          <p className="max-w-[620px] pt-4 text-[17px] font-medium leading-relaxed sm:pt-3 sm:text-lg">
            <span className="hidden sm:inline">
              Join the Society of PC Building at UF—where
            </span>
            <span className="sm:hidden">Where</span> students passionate about
            hardware and tech connect, innovate, and build custom PCs together.
          </p>


          <button className="mt-6 rounded-md border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-80 px-8 py-2 font-medium text-white sm:text-base">
            Join the Club!
          </button>


          {/* On mobile devices show the infinite carousel but on desktop static list */}
          <div className="mt-20 lg:mt-32">
            <p className="text-sm opacity-80">
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

        {/* Animate SPCB logo upwards. Applied negative margin to center logo better */}
        <motion.div
          className="relative -mr-6 h-[240px] w-[240px] md:h-[300px] md:w-[300px] lg:-mr-12 lg:h-[460px] lg:w-[460px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/landing/logo.png"
            alt="SPCB Logo"
            width={460}
            height={460}
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
