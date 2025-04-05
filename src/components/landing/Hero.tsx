import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedText from "./ui/TextFade";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import useDiscordCount from "@/hooks/useDiscordCount";
import { Scroller } from "./ui/Scroller";


const imgs: string[] = [
  "/hero/hero1.png",
  "/hero/hero2.png",
  "/hero/hero3.png",
  "/hero/hero4.png",
  "/hero/hero5.png",
  "/hero/hero6.png",
  "/hero/hero7.png",
  "/hero/hero8.png",
  "/hero/hero9.png",
];

const logos: string[] = [
  "/landing/logos/roblox.png",
  "/landing/logos/nvidia.png",
  "/landing/logos/microsoft.png",
  "/landing/logos/samsung.png",
  "/landing/logos/ukg.png",
  "/landing/logos/meta.png"
];



export default function Hero() {
  const [contentVisible, setContentVisible] = useState<boolean>(false);


  const discordCount = useDiscordCount();
  return (
    <div className="relative sm:min-h-[960px] overflow-hidden rounded-b-[60px] pb-16 pt-32 text-white sm:pb-24 md:pt-40">
      {/* bg image */}
      <Image
        src="/hero/hero-background.png"
        alt="Lights Background"
        fill
        priority
        sizes="100vw"
        quality={100} // Increase image quality (0-100)
        className="absolute left-0 right-0 top-0 z-[11] object-cover opacity-[0.15] sm:opacity-[0.175]"
      />

      <div className="relative z-40 flex flex-col items-center px-6 sm:px-10">
        <div className="mx-auto max-w-7xl flex-col items-center">
          <div className="min-h-8 sm:min-h-14">
            <AnimatePresence>
              {contentVisible && (
                <motion.p
                  className="text-balance pb-2 text-base text-dull sm:pb-6 sm:text-center sm:text-2xl"
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

          <h1 className="mx-auto max-w-[930px] text-2xl font-semibold sm:text-center sm:text-4xl md:leading-[1.42] xl:text-[40px] xl:leading-[1.25]">
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
                    className="cta-btn flex items-center justify-center gap-2 rounded-lg bg-blue px-8 py-2.5 text-black transition-all duration-300"
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

        {/* Image carousel */}
        <div className="pb-16 sm:pb-28 pt-28">
          <div className="h-44">
            <AnimatePresence>
              {contentVisible && (
                <motion.div
                  className="flex w-full items-center justify-center overflow-hidden bg-gradient-to-r"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Scroller items={imgs} maxHeight={176}/>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Officer Experience Logos*/}
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
                <p className="text-center text-sm sm:text-base text-dull pb-5">
                  Led by a team of officers with experience at:
                </p>
                <div className="hidden items-center gap-6 opacity-70 md:flex">
                  <img className="h-5" src="/landing/logos/roblox.png" alt="" />
                  <img className="h-5" src="/landing/logos/nvidia.png" alt="" />
                  <img className="h-5" src="/landing/logos/microsoft.png" alt="" />
                  <img
                    className="h-5" src="/landing/logos/samsung.png"
                    alt=""
                   
                  />
                  <img className="h-5" src="/landing/logos/ukg.png" alt="" />
                  <img
                    className="h-5" src="/landing/logos/meta.png"
                    alt=""
                  
                  />
                  <p className="pt-1">+ More!</p>
                </div>
                <div className="sm:hidden opacity-70">
                <Scroller items={logos} maxHeight={18}/>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
