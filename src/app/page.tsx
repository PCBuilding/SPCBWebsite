"use client";
import Footer from "@/components/Footer";
import About from "@/components/landing/About";
import Events from "@/components/landing/Events";
import Faq from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";


const Website = () => {
  return (
    <div className="min-h-screen w-full bg-[#080d14] text-white">
      <Hero />
      <About/>
      <Events/>
      <Faq/>
      <Footer />
    </div>
  );
};

export default Website;
