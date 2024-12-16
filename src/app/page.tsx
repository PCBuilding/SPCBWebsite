// page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import GlowingLine from "@/components/decorations/GlowingLine";
import Link from "next/link";

const Website = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url("/landing/mainBackground.jpg")',
          backgroundSize: "100%", // Changed from "100% auto" to "contain"
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          minHeight: "100vh", // Ensure container is at least full viewport height
          paddingTop: "0px", // Add padding for navbar
        }}
      >
        {/* Hero Content */}
        <div className="relative flex min-h-screen items-center px-4">
          {/* Content Container with Grid */}
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-8 pt-0">
            {/* Logo Section - Left Side */}
            <div className="relative flex items-center justify-center">
              {/* Outer Glow */}
              <div
                className="absolute h-[700px] w-[900px]"
                style={{
                  background: `
                    radial-gradient(circle at center,
                      rgba(255,255,255,0.3) 0%,
                      rgba(255,255,255,0.2) 10%,
                      rgba(255,255,255,0.15) 20%,
                      rgba(255,255,255,0.1) 30%,
                      rgba(255,255,255,0.05) 40%,
                      rgba(255,255,255,0.03) 50%,
                      rgba(255,255,255,0.01) 60%,
                      transparent 100%
                    )
                  `,
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  top: "50%",
                }}
              />
              {/* Inner Glow */}
              <div
                className="absolute h-[1000px] w-[1000px]"
                style={{
                  background: `
                    radial-gradient(circle at center,
                      rgba(255,255,255,0.3) 0%,
                      rgba(255,255,255,0.2) 20%,
                      rgba(255,255,255,0.1) 40%,
                      transparent 50%
                    )
                  `,
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  top: "50%",
                }}
              />
              {/* Logo */}
              <div className="relative h-[600px] w-[600px]">
                <Image
                  src="/landing/logo.png"
                  alt="SPCB Logo"
                  fill
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(255,255,255,1))",
                  }}
                  priority
                />
              </div>
            </div>

            {/* Text Section - Right Side */}
            <div className="flex flex-col items-end space-y-6 text-right">
              <h1 className="text-[40px] font-bold leading-tight text-white">
                The Society of PC Building
              </h1>

              {/* Social Stats */}
              <div className="space-y-3 text-gray-300">
                {/*TODO: Import discord and instagram api to get follower count*/}
                <p className="text-xl">Discord count: 150 members</p>
                <p className="text-xl">Instagram count: 200 followers</p>
              </div>

              {/* Join Button */}
              <button
                className="mt-6 border-2 border-white px-8 py-3 text-white transition-all duration-200 ease-in-out hover:scale-105 hover:border-orange-500 active:scale-100"
                style={{
                  borderRadius: "0.625rem",
                  boxShadow: "0px 4px 80px 40px rgba(135, 198, 252, 0.25)",
                }}
              >
                Join Us
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={64} color="White" />
          </div>
        </div>
      </div>

      {/* About Section */}

      <div className="relative min-h-96 w-full py-16">
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
          xPoints={["65", "95"]}
          yPoints={["30", "30"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["80", "95"]}
          yPoints={["40", "40"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        {/* Content Box */}
        <div className="relative mx-auto max-w-3xl px-4">
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-black via-black to-blue-900/50 p-8 shadow-2xl">
            <div className="text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">About</h2>
              <p className="mb-8 text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur. Ut vel dolor nibh
                aliquet blandit. Tristique amet in morbi consectetur cras.
                Tristique amet in morbi consectetur cras. Tristique amet in
                morbi consectetur cras
              </p>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-gray-100"
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
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="relative min-h-screen w-full py-16">
        {/* Main vertical line */}
        <GlowingLine
          xPoints={["30", "30", "65", "65", "30", "30"]}
          yPoints={["2", "50", "50", "85", "85", "100"]}
          color="#FFA500"
          thickness={3}
          circleSize={8}
        />

        {/* Content Cards */}
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Socials Card - Left */}
          <div className="relative left-[10%] mb-32 w-[35%]">
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/landing/images/socials.png"
                  alt="Socials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#020B24] p-4">
                <h3 className="text-2xl font-bold text-white">Socials</h3>
              </div>
            </div>
          </div>

          {/* GBMs Card - Right */}
          <div className="relative left-[55%] mb-32 w-[35%]">
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/landing/images/gbms.png"
                  alt="GBMs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#020B24] p-4">
                <h3 className="text-2xl font-bold text-white">GBMs</h3>
              </div>
            </div>
          </div>

          {/* PC Builds Card - Left */}
          <div className="relative left-[10%] w-[35%]">
            <div className="overflow-hidden rounded-lg bg-gradient-to-b from-black to-blue-900/50 p-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/landing/images/pc-builds.png"
                  alt="PC Builds"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#020B24] p-4">
                <h3 className="text-2xl font-bold text-white">PC Builds</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <div className="mx-auto max-w-7xl px-4">
          <p>
            &copy; {new Date().getFullYear()} The Society of PC Building. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Website;
