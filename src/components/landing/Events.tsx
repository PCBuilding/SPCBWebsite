import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlowingLine from "../decorations/GlowingLine";


const Events: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  return (
    <div className="relative pt-16 sm:pt-28 overflow-x-hidden overflow-y-hidden pb-40">
      {/* Background Gradients */}

      <h3 className="text-center text-[40px] font-medium mb-36">Popular Events</h3>

      {/* Activities Section */}
      <div className="relative min-h-screen w-full">
        {/* Lines */}
        <GlowingLine
          xPoints={["30", "30", "65", "65", "30", "30"]}
          yPoints={["-5", "53", "53", "85", "85", "105"]}
          color="#FFA500"
          thickness={3}
          circleSize={8}
        />
        <GlowingLine
          xPoints={[isDesktop ? "29" : "28", isDesktop ? "29" : "28"]}
          yPoints={["-4", "13"]}
          color="#FFA500"
          thickness={3}
          circleSize={8}
        />
        <GlowingLine
          xPoints={[isDesktop ? "28" : "26", isDesktop ? "28" : "26"]}
          yPoints={["-3", "14"]}
          color="#FFA500"
          thickness={3}
          circleSize={8}
        />
        <GlowingLine
          xPoints={["90", "99"]}
          yPoints={["10", "10"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["80", "99"]}
          yPoints={["12", "12"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["85", "94"]}
          yPoints={["13", "13"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["1", "9"]}
          yPoints={["59", "59"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["2", "20"]}
          yPoints={["60", "60"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["0", "7"]}
          yPoints={["61", "61"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />

        {/* Content Cards */}
        <div className="relative mx-auto max-w-7xl px-4 overflow-hidden">
          {/* Socials Card */}
          <motion.div
            className="relative left-[10%] mb-32 mt-32 w-2/3 sm:w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black border border-[#1a2a3d] to-blue-900/50">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src="/landing/images/socials.jpg"
                  alt="Socials"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-[#080d14] p-4">
                <h3 className="text-lg font-bold text-white sm:text-2xl">
                  Socials
                </h3>
              </div>
            </div>
          </motion.div>

          {/* GBMs Card */}
          <motion.div
            className="relative left-[40%] mt-44 sm:mt-32 sm:left-[55%] mb-32 w-2/3 sm:w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a href="/events">
              <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black border border-[#1a2a3d] to-blue-900/50 transition-transform duration-200 hover:scale-105">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src="/landing/images/gbms.jpg"
                    alt="GBMs"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#080d14] p-4">
                  <h3 className="text-lg font-bold text-white sm:text-2xl">
                    GBMs
                  </h3>
                </div>
              </div>
            </a>
          </motion.div>

          {/* PC Builds Card */}
          <motion.div
            className="relative left-[10%] w-2/3 sm:w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a href="/projects">
              <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black border border-[#1a2a3d] to-blue-900/50 transition-transform duration-200 hover:scale-105">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src="/landing/images/pc-builds.jpg"
                    alt="PC Builds"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#080d14] p-4">
                  <h3 className="text-lg font-bold text-white sm:text-2xl">
                    PC Builds
                  </h3>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
