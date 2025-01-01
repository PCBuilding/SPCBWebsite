import React from "react";
import Scene from "./Scene";
import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  return (
    <div className="sm:hero sm:h-[max(100svh,840px)] relative pb-28 pt-24 text-[#eaeaea]">
      <div className="mx-auto flex-col-reverse lg:flex-row flex h-full max-w-7xl items-center px-6 pb-6 sm:px-10 mt-6 lg:mt-0">
        <div className="w-full lg:w-3/4 text-center lg:text-left flex flex-col items-center lg:items-start pt-8 lg:pt-0">
          <span className="hidden lg:inline rounded-full border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-50 px-4 py-1.5 text-xs">
            1000+ Active Members!
          </span>
          <h1 className="pt-6 font-Michroma text-3xl sm:text-4xl lg:text-[44px] font-semibold">
            The Society of PC Building
          </h1>
          <p className="max-w-[620px] pt-4 sm:pt-6  sm:text-lg font-medium leading-relaxed ">
            <span className="hidden sm:inline">Join the Society of PC Building at UF—where</span><span className="sm:hidden">Where</span> students passionate
            about hardware and tech connect, innovate, and build custom PCs
            together.
          </p>
          <button className="mt-6 rounded-md border border-[#B0B8FF] border-opacity-40 bg-black bg-opacity-80 px-8 py-2 font-medium text-white">
            Join the Club!
          </button>

          <div className="mt-20 lg:mt-32">
            <p className="text-sm opacity-80">
              Led by a team of officers with experience at:
            </p>
            <div className="-mt-5 hidden h-[103px] items-center gap-6 md:flex">
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
        <div className="flex lg:w-1/4 cursor-grab items-center max-h-[220px]">
          <Scene />
        </div>
      </div>\
    </div>
  );
}
