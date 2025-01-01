import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlowingLine from "../decorations/GlowingLine";

export default function LandingAbout() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkIfDesktop();

    // Add event listener
    window.addEventListener("resize", checkIfDesktop);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);
  return (
    <div className="relative">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1024"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient overlay for radial left */}

        {/* White polygon - using isDesktop state */}
        {isDesktop && (
          <polygon points="1440,810 1440,1024 700,1024 770,915" fill="white" />
        )}
      </svg>

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
              <h2 className="mb-6 font-['Michroma'] text-4xl font-bold text-white">
                About
              </h2>
              <p className="mb-8 text-xl text-gray-300">
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
                className="inline-flex items-center rounded-full bg-white px-6 py-3 font-['Michroma'] text-sm font-medium text-black transition-all duration-200 hover:scale-105 hover:bg-orange-100"
              >
                Learn More
                <svg
                  className="ml-2 h-4 w-4"
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
        {/* Main vertical line */}
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
        {/* Top right Blue Group */}
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
        {/* Middle Left Blue Group */}
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
          {/* Socials Card - Left */}
          <motion.div
            className="relative left-[10%] mb-32 mt-32 w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                <h3 className="font-['Michroma'] text-2xl font-bold text-white">
                  Socials
                </h3>
              </div>
            </div>
          </motion.div>

          {/* GBMs Card - Right */}
          <motion.div
            className="relative left-[55%] mb-32 w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/landing/images/gbms.png"
                  alt="GBMs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#020B24] p-4">
                <h3 className="font-['Michroma'] text-2xl font-bold text-white">
                  GBMs
                </h3>
              </div>
            </div>
          </motion.div>

          {/* PC Builds Card - Left */}
          <motion.div
            className="relative left-[10%] w-[35%]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/landing/images/pc-builds.png"
                  alt="PC Builds"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#020B24] p-4">
                <h3 className="font-['Michroma'] text-2xl font-bold text-white">
                  PC Builds
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Social Links Section */}
      <div className="relative min-h-96 w-full">
        <div className="hidden md:block">
          <GlowingLine
            xPoints={["32", "32", "73", "73"]}
            yPoints={["0", "20", "20", "35"]}
            color="#FFA500"
            thickness={3}
            circleSize={8}
          />
          <GlowingLine
            xPoints={["31", "31"]}
            yPoints={["4", "15"]}
            color="#FFA500"
            thickness={3}
            circleSize={8}
          />
          <GlowingLine
            xPoints={["53", "60"]}
            yPoints={["18", "18"]}
            color="#FFA500"
            thickness={3}
            circleSize={8}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-0 md:py-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Left side */}
            <div className="pt-0 md:pb-0 md:pt-64">
              <div className="flex items-center gap-4">
                <Image
                  src="/navbar/logo.png"
                  alt="SPCB Logo"
                  width={150}
                  height={150}
                  className="h-[100px] w-[100px] rounded-full md:h-[200px] md:w-[200px]"
                />
              </div>
              <h2 className="my-4 text-2xl font-bold text-white md:my-6 md:text-4xl">
                Proudly building PCs.
              </h2>
              {/* Social Media Icons */}
              <div className="flex gap-3 md:gap-4">
                <Link
                  href="https://www.linkedin.com/company/the-society-of-pc-building"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/landing/linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/pcbuildinguf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/landing/instagram.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href="https://discord.com/invite/jfq9phWqTF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/landing/discord.png"
                    alt="Discord"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href="https://linktr.ee/pcbuildinguf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/landing/linktree.png"
                    alt="Linktree"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>

            {/* Right side - GUD section */}
            <div className="w-full pt-8 md:w-auto md:pt-96">
              <div className="flex flex-col items-start gap-4 md:items-end">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <h2 className="order-2 text-2xl font-bold text-white md:order-1 md:text-4xl md:text-black">
                    Gator User Design
                  </h2>
                  <Image
                    src="/iconography/gud-color.png"
                    alt="GUD Logo"
                    width={50}
                    height={50}
                    className="order-1 h-[40px] w-[40px] rounded-full md:order-2 md:h-[60px] md:w-[60px]"
                  />
                </div>
                <Link
                  href="https://www.instagram.com/gatoruserdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline md:text-black"
                >
                  Check us out
                  <svg
                    className="ml-2 h-4 w-4"
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
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="mt-0 pb-0 text-right md:mt-16">
          <div className="mx-auto max-w-7xl px-4 pb-8">
            <p className="text-sm text-white transition-colors md:text-black">
              &copy; {new Date().getFullYear()} The Society of PC Building. All
              rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
