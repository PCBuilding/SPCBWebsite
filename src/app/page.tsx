"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import Landing from "@/components/landing/Landing";

const Website = () => {
  return (
    <div className="min-h-screen w-full bg-[#080d14]">
      {/* Applied a noise bg to the page for added depth */}
      <div className="noise-bg" />
      <Hero />
      <Landing />
      <Footer />
    </div>
  );
};

export default Website;
