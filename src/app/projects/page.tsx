"use client";

import React, { useState } from "react";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080d14] font-Michroma text-white">
      <div
        className="group relative flex flex-col items-center gap-6 rounded-lg border border-white/10 bg-black/20 p-12 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main text */}
        <h1 className="text-center font-Michroma text-4xl font-bold tracking-wider">
          COMING
        </h1>
        <h1 className="text-center font-Michroma text-5xl font-bold tracking-wider text-blue-400">
          SOON!
        </h1>

        {/* Animated underline */}
        <div className="relative mt-2">
          <div
            className={`h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-500 ${
              isHovered ? "w-48" : "w-32"
            }`}
          />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-center text-sm text-gray-400">
          We're building something awesome.
          <br />
          Stay tuned!
        </p>
      </div>
    </div>
  );
}
