import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedText from "./ui/TextFade";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import useDiscordCount from "@/hooks/useDiscordCount";
import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  const [contentVisible, setContentVisible] = useState<boolean>(false);
  const discordCount = useDiscordCount();
  return (
    <div className="relative min-h-[920px] overflow-hidden pb-16 sm:pb-24 pt-32 md:pt-44 text-white">
      <Image
        src="/hero/lights.png"
        alt="Lights Background"
        fill
        className="absolute left-0 right-0 top-0 z-[11] opacity-70"
      />
      <Image
        src="/hero/mobo.svg"
        alt="Mobo Background"
        fill
        className="absolute left-0 top-0 z-[12] object-cover opacity-[0.012]"
      />
      <div className="hero-fade absolute bottom-0 left-0 right-0 z-[13] h-10" />
      <div className="relative mx-auto flex flex-col lg:grid max-w-7xl px-6 sm:px-10 lg:grid-cols-5 w-full">
        <div className="relative z-40 col-span-3">
          <div className="min-h-9 sm:min-h-12">
            <AnimatePresence>
              {contentVisible && (
                <motion.p
                  className="text-lg sm:text-2xl text-dull text-balance pb-2 sm:pb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  Welcome to the Society of PC Building!
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <h1 className="text-2xl sm:text-4xl xl:text-[40px] font-semibold md:leading-[1.42] xl:leading-[1.42]">
            <AnimatedText
              text={
                "A community for students to build PCs, expand their skills, and form meaningful connections."
              }
              onAnimationComplete={() => setContentVisible(true)}
            />
          </h1>

          {/* Buttons */}
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4 font-medium text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <button className="flex items-center gap-2 rounded-lg bg-blue px-8 py-2.5 text-black justify-center hero-btn transition-all duration-300">
                  Get Involved <FaArrowRightLong />
                </button>
                <a
                  href="https://discord.gg/CmqKbnBDBG"
                  target="_blank"
                  className="flex items-center gap-3 rounded-lg px-8 py-2.5 transition-all bg-blue hover:bg-opacity-20 justify-center bg-opacity-20 sm:bg-opacity-0"
                >
                  Join {discordCount} Discord Members{" "}
                  <FaDiscord className="text-lg" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logos Section */}
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                className="mt-16 lg:mb-12 lg:mt-48"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-xs text-dull sm:text-base">
                  Led by a team of officers with experience at:
                </p>
                <div className="-mt-5 hidden h-[103px] items-center gap-6 opacity-80 md:flex">
                  <img src="/landing/logos/roblox.png" alt="" />
                  <img src="/landing/logos/nvidia.png" alt="" />
                  <img src="/landing/logos/microsoft.png" alt="" />
                  <img
                    src="/landing/logos/samsung.png"
                    alt=""
                    className="mt-px"
                  />
                  <img src="/landing/logos/ukg.png" alt="" />
                  <img
                    src="/landing/logos/meta.png"
                    alt=""
                    className="pb-0.5"
                  />
                  <p className="opacity-70">+ More!</p>
                </div>
                <LogoCarousel/>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <HeroImages contentVisible={contentVisible} />
        {/* Image Section */}
      </div>
    </div>
  );
}

type HeroImagesProps = {
  contentVisible: boolean;
};

const HeroImages: React.FC<HeroImagesProps> = ({ contentVisible }) => {
  return (
    <>
      <AnimatePresence>
        {contentVisible && (
          <motion.div
            className="relative z-40 col-span-2 sm:hidden flex-col items-end pt-6 lg:flex"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4 flex gap-2 sm:gap-4 justify-center lg:justify-start ">
              <motion.img
                src="/hero/h1.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.img
                src="/hero/h2.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <div className="mb-4 flex gap-2 sm:gap-4 justify-center lg:justify-start">
              <motion.img
                src="/hero/h3.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>
            <div className="flex gap-2 sm:gap-4 justify-center lg:justify-start">
              <motion.img
                src="/hero/h4.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.img
                src="/hero/h5.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full">
        <AnimatePresence>
          {contentVisible && (
            <motion.div
              className="relative z-40  w-full flex-wrap gap-4 pt-6 hidden sm:flex lg:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.img
                src="/hero/h1.png"
                className="h-[152px]"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.img
                src="/hero/h2.png"
                className="h-[152px]"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.img
                src="/hero/h3.png"
                className="h-[152px]"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.img
                src="/hero/h4.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.img
                src="/hero/h5.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
