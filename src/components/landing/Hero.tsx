import React from 'react'
import Scene from './Scene'
import LogoCarousel from './LogoCarousel'

export default function Hero() {
  return (
    <div className="relative hero pt-24 pb-28 text-[#f1f1f1]">
        <div className="flex-row flex items-center max-w-7xl mx-auto h-full px-4 sm:px-10 pb-6">
          <div className="w-3/4">
            <span className="bg-black text-xs px-4 py-1.5 rounded-full bg-opacity-50 border border-[#B0B8FF] border-opacity-40">
              1000+ Active Members!
            </span>
            <h1 className="font-Michroma text-[44px] font-semibold pt-5">
              <span className='hidden sm:inline'>The</span> Society of PC Building
            </h1>
            <p className="text-xl max-w-[620px] pt-3 leading-normal font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              aliquam officia perferendis rerum fuga voluptas unde.
            </p>
            <button className="mt-6 bg-black bg-opacity-80 py-2 px-8 rounded-md font-medium text-white border border-[#B0B8FF] border-opacity-40 ">
              Join the Club!
            </button>

            <div className="mt-32">
              <p className="text-sm opacity-80">
                Led by a team of officers with experience at:
              </p>
              <div className="hidden sm:flex items-center gap-6 -mt-5 h-[103px]">
                <img src="/landing/logos/roblox.png" alt="" />
                <img src="/landing/logos/nvidia.png" alt="" />
                <img src="/landing/logos/microsoft.png" alt="" />
                <img src="/landing/logos/samsung.png" alt="" className="mt-px" />
                <img src="/landing/logos/ukg.png" alt="" />
                <img src="/landing/logos/meta.png" alt="" className="pb-0.5" />
                <p className="opacity-70">+ More!</p>
              </div>
              <LogoCarousel/>
            </div>
          </div>
          <div className="w-1/4 h-[280px] cursor-grab flex items-center">
            <Scene />
          </div>
        </div>
      </div>
  )
}
