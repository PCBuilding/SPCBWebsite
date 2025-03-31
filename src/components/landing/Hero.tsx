import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedText from "./ui/TextFade";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import useDiscordCount from "@/hooks/useDiscordCount";
import LogoCarousel from "./LogoCarousel";
import { Scroller } from "./ui/Scroller";

export default function Hero() {
  const [contentVisible, setContentVisible] = useState<boolean>(false);

  const imgs: string[] = [
    "/hero/hero1.png",
    "/hero/hero2.png",
    "/hero/hero3.png",
    "/hero/hero4.png",
    "/hero/hero5.png",
    "/hero/hero6.png",
    "/hero/hero7.png",
    "/hero/hero8.png",
  ];
  const discordCount = useDiscordCount();
  return (
    <div className="relative min-h-[960px] overflow-hidden rounded-b-[60px] pb-16 pt-32 text-white sm:pb-24 md:pt-40">
      {/* bg image */}
      <Image
        src="/hero/hero-background.png"
        alt="Lights Background"
        fill
        priority
        sizes="100vw"
        quality={100} // Increase image quality (0-100)
        className="absolute left-0 right-0 top-0 z-[11] object-cover opacity-[0.175]"
      />

      {/* <div className="hero-fade absolute bottom-0 left-0 right-0 z-[13] h-10" /> */}

      <div className="relative z-40 flex flex-col items-center px-6 sm:px-10">
        <div className="mx-auto max-w-7xl flex-col items-center">
          <div className="min-h-9 sm:min-h-14">
            <AnimatePresence>
              {contentVisible && (
                <motion.p
                  className="text-balance pb-2 sm:text-center text-lg text-dull sm:pb-6 sm:text-2xl"
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

          <h1 className="mx-auto max-w-[930px] text-2xl font-semibold sm:text-center sm:text-4xl md:leading-[1.42] xl:text-[40px] xl:leading-[1.3]">
            <AnimatedText
              text={
                "A community for students to build PCs, expand their skills, and form meaningful connections."
              }
              onAnimationComplete={() => setContentVisible(true)}
            />
          </h1>

          {/* Buttons */}
          <div className="h-[60px]">
            <AnimatePresence>
              {contentVisible && (
                <motion.div
                  className="flex flex-col justify-center gap-4 pt-4 text-sm font-medium sm:flex-row sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <a
                    href="https://linktr.ee/pcbuildinguf"
                    target="_blank"
                    className="hero-btn flex items-center justify-center gap-2 rounded-lg bg-blue px-8 py-2.5 text-black transition-all duration-300"
                  >
                    Get Involved <FaArrowRightLong />
                  </a>
                  <a
                    href="https://discord.gg/CmqKbnBDBG"
                    target="_blank"
                    className="flex items-center justify-center gap-3 rounded-lg bg-blue bg-opacity-10 px-8 py-2.5 transition-all hover:bg-opacity-20 sm:bg-opacity-0"
                  >
                    Join {discordCount} on Discord
                    <FaDiscord className="text-lg" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex w-full items-center justify-center overflow-hidden bg-gradient-to-r py-28">
          <Scroller items={imgs} />
        </div>

        {/* Logos Section */}
        <div className="h-[103px]">
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                className="lg:mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-center text-xs text-dull sm:text-base">
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
                <LogoCarousel />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* <HeroImages contentVisible={contentVisible} /> */}
      {/* Image Section */}
    </div>
  );
}
