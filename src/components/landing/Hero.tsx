import React from "react";
import Scene from "./Scene";
import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  return (
    <div className="hero relative pb-28 pt-24 text-[#f1f1f1]">
      <div className="mx-auto flex h-full max-w-7xl flex-row items-center px-4 pb-6 sm:px-10">
        <div className="w-3/4">
          <span className="rounded-full border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-50 px-4 py-1.5 text-xs">
            1000+ Active Members!
          </span>
          <h1 className="pt-5 font-Michroma text-[44px] font-semibold">
            <span className="hidden sm:inline">The</span> Society of PC Building
          </h1>
          <p className="max-w-[620px] pt-3 text-lg font-medium leading-relaxed">
            Join the Society of PC Building at UF—where students passionate
            about hardware and tech connect, innovate, and build custom PCs
            together.
          </p>
          <button className="mt-6 rounded-md border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-80 px-8 py-2 font-medium text-white">
            Join the Club!
          </button>

          <div className="mt-32">
            <p className="text-sm opacity-80">
              Led by a team of officers with experience at:
            </p>
            <div className="-mt-5 hidden h-[103px] items-center gap-6 sm:flex">
              <img src="/landing/logos/roblox.png" alt="" />
              <img src="/landing/logos/nvidia.png" alt="" />
              <img src="/landing/logos/microsoft.png" alt="" />
              <img src="/landing/logos/samsung.png" alt="" className="mt-px" />
              <img src="/landing/logos/ukg.png" alt="" />
              <img src="/landing/logos/meta.png" alt="" className="pb-0.5" />
              <p className="opacity-70">+ More!</p>
            </div>
            <LogoCarousel />
          </div>
        </div>
        <div className="flex h-[280px] w-1/4 cursor-grab items-center">
          <Scene />
        </div>
      </div>
    </div>
  );
}
