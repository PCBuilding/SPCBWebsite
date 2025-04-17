import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlowingLine from "../decorations/GlowingLine";
import Link from "next/link";

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
    <div className="relative overflow-x-hidden overflow-y-hidden pb-40 pt-16 sm:pt-28">
      {/* Background Gradients */}

      <h3 className="text-center text-3xl font-medium sm:text-[40px]">
        Popular Events
      </h3>
      <p className="pt-4 text-dull text-center mb-36 text-lg">
          We hope to see you at one soon!
        </p>

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
        {isDesktop && (
          <GlowingLine
            xPoints={["28", "28"]}
            yPoints={["-6", "13"]}
            color="#FFA500"
            thickness={3}
            circleSize={8}
          />
        )}
        <GlowingLine
          xPoints={["26.5", "26.5"]}
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
        {isDesktop && (
          <GlowingLine
            xPoints={["85", "94"]}
            yPoints={["13", "13"]}
            color="#1E90FF"
            thickness={2}
            circleSize={6}
          />
        )}
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
        {isDesktop && (
          <GlowingLine
            xPoints={["0", "7"]}
            yPoints={["61", "61"]}
            color="#1E90FF"
            thickness={2}
            circleSize={6}
          />
        )}

        {/* Content Cards */}
        <div className="relative mx-auto max-w-7xl overflow-hidden px-4">
          {/* Socials Card */}
          <motion.div
            className="relative left-[10%] mb-32 mt-32 w-2/3 sm:w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href={"/events"}>
              <div className="to-blue-900/50 overflow-hidden rounded-lg border border-[#1a2a3d] bg-gradient-to-b from-black transition-transform duration-200 hover:scale-105">
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
            </Link>
          </motion.div>

          {/* GBMs Card */}
          <motion.div
            className="relative left-[35%] mb-32 mt-44 w-2/3 sm:left-[55%] sm:mt-32 sm:w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a href="/events">
              <div className="to-blue-900/50 overflow-hidden rounded-lg border border-[#1a2a3d] bg-gradient-to-b from-black transition-transform duration-200 hover:scale-105">
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
              <div className="to-blue-900/50 overflow-hidden rounded-lg border border-[#1a2a3d] bg-gradient-to-b from-black transition-transform duration-200 hover:scale-105">
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
