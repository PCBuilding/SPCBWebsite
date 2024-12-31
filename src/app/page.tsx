"use client";
import Hero from "@/components/landing/Hero";
import LandingAbout from "@/components/landing/LandingAbout";

const Website = () => {
  return (
    <div className="min-h-screen w-full bg-[#04080d]">
      <div className="noise-bg" />
      <Hero />
      <LandingAbout />

      {/* About Section */}
    </div>
  );
};

export default Website;
