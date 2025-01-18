// Footer.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlowingLine from "@/components/decorations/GlowingLine";

export default function Footer() {
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
    <div className="relative min-h-96 w-full">
      {/* Background SVG */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDesktop && <polygon points="100,0 100,100 0,0 0,100" fill="white" />}
      </svg>

      {/* Decorative Lines */}
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
            <h2 className="my-4 pr-12 text-2xl font-bold text-white md:my-6 md:text-4xl">
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
            <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
              <div className="flex w-full flex-col items-start gap-4 md:flex-col md:items-end">
                <Image
                  src="/iconography/gud-color.png"
                  alt="GUD Logo"
                  width={50}
                  height={50}
                  className="h-[40px] w-[40px] rounded-full md:h-[60px] md:w-[60px]"
                />
                <h2 className="flex-wrap text-xl font-bold text-white md:text-4xl md:text-black">
                  Gator User Design
                </h2>
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

      {/* Copyright Footer */}
      <footer className="mt-0 pb-0 text-right md:mt-16">
        <div className="mx-auto max-w-7xl px-4 pb-8">
          <p className="text-sm text-white transition-colors md:text-black">
            &copy; {new Date().getFullYear()} The Society of PC Building. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
