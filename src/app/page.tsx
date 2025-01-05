"use client";
import Hero from "@/components/landing/Hero";
import LandingAbout from "@/components/landing/LandingAbout";

const Website = () => {
  return (
    <div className="min-h-screen w-full bg-[#050a10]">
      {/* Applied a noise bg to the page for added depth */}
      <div className="noise-bg" />
      <Hero />
      <LandingAbout />
    </div>
  );
};

export default Website;
