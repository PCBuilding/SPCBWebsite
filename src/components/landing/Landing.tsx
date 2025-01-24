import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlowingLine from "../decorations/GlowingLine";

export default function Landing() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  return (
    <div className="relative">
      {/* Background Gradients */}
      <div className="absolute left-[10%] top-[20%] h-32 w-96 -rotate-45 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute right-[30%] top-[40%] h-24 w-[32rem] -rotate-12 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="-rotate-30 absolute left-[20%] top-[70%] h-28 w-[28rem] rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute right-[15%] top-[55%] h-20 w-[24rem] rotate-[25deg] rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative min-h-96 w-full py-32">
        {/* Decorative Lines */}
        <GlowingLine
          xPoints={["3", "20"]}
          yPoints={["15", "15"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["5", "23"]}
          yPoints={["18", "18"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["75", "90"]}
          yPoints={["10", "10"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["78", "98"]}
          yPoints={["14", "14"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />

        {/* Content Box */}
        <div className="relative mx-auto max-w-3xl px-4 pt-48">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden rounded-lg p-8"
            style={{
              background:
                "linear-gradient(90deg, #0F1319 0%, #0F1319 50%, rgba(28,42,106,0.7) 100%)",
              boxShadow: `
                0 0 100px 0px rgba(255, 255, 255, 0.1),
                0 0 30px 0px rgba(28, 42, 106, 0.5),
                0 0 15px 0px rgba(255, 255, 255, 0.2)
              `,
            }}
          >
            <div className="text-center">
              <h2 className="mb-6 font-['Michroma'] text-2xl font-bold text-white sm:text-4xl">
                About
              </h2>
              <p className="mb-8 text-base text-gray-300 sm:text-xl">
                The Society of PC Building (SPCB) at the University of Florida
                is a community for students passionate about PC hardware,
                building, and tech. Whether you're a beginner or an expert, SPCB
                offers workshops, live demos, and events to help you learn,
                collaborate, and build custom rigs. Beyond PCs, we foster
                innovation, teamwork, and technical growth, connecting students
                through a shared love for technology.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-white px-4 py-2 font-['Michroma'] text-xs font-medium text-black transition-all duration-200 hover:scale-105 hover:bg-orange-100 sm:px-6 sm:py-3 sm:text-sm"
              >
                Learn More
                <svg
                  className="ml-2 h-3 w-3 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="relative min-h-screen w-full py-16 pt-32">
        {/* Lines */}
        <GlowingLine
          xPoints={["30", "30", "65", "65", "30", "30"]}
          yPoints={["9", "53", "53", "85", "85", "100"]}
          color="#FFA500"
          thickness={3}
          circleSize={8}
        />
        <GlowingLine
          xPoints={[isDesktop ? "29" : "28", isDesktop ? "29" : "28"]}
          yPoints={["0", "13"]}
          color="#FFA500"
          thickness={3}
          circleSize={8}
        />
        <GlowingLine
          xPoints={[isDesktop ? "28" : "26", isDesktop ? "28" : "26"]}
          yPoints={["8", "14"]}
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
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Socials Card */}
          <motion.div
            className="relative left-[10%] mb-32 mt-32 w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/landing/images/socials.png"
                  alt="Socials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#020B24] p-4">
                <h3 className="font-['Michroma'] text-lg font-bold text-white sm:text-2xl">
                  Socials
                </h3>
              </div>
            </div>
          </motion.div>

          {/* GBMs Card */}
          <motion.div
            className="relative left-[55%] mb-32 w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href="/events">
              <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1 transition-transform duration-200 hover:scale-105">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/landing/images/gbms.png"
                    alt="GBMs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#020B24] p-4">
                  <h3 className="font-['Michroma'] text-lg font-bold text-white sm:text-2xl">
                    GBMs
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* PC Builds Card */}
          <motion.div
            className="relative left-[10%] w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href="/projects">
              <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1 transition-transform duration-200 hover:scale-105">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/landing/images/pc-builds.png"
                    alt="PC Builds"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#020B24] p-4">
                  <h3 className="font-['Michroma'] text-lg font-bold text-white sm:text-2xl">
                    PC Builds
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
