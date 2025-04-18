"use client";
import Contact from "@/components/about/Contact";
import Team from "@/components/about/Team";
import GlowingLine from "@/components/decorations/GlowingLine";
import Footer from "@/components/Footer";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Create wrapper components specifically for each view
const DesktopLines = () => (
  <>
    <GlowingLine
      xPoints={["40", "70"]}
      yPoints={["22", "22"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["3", "22"]}
      yPoints={["70", "70"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["-5", "30"]}
      yPoints={["75", "75"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["200", "300"]}
      yPoints={["400", "400"]}
      color="#FFA500"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["220", "320"]}
      yPoints={["410", "410"]}
      color="#FFA500"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["45", "150"]}
      yPoints={["205", "205"]}
      color="#FFA500"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["60", "150"]}
      yPoints={["208", "208"]}
      color="#FFA500"
      thickness={2}
      circleSize={6}
    />
  </>
);

const TabletLines = () => (
    <>
    <GlowingLine
      xPoints={["8", "24"]}
      yPoints={["37", "37"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["-1", "30"]}
      yPoints={["40", "40"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["55", "101"]}
      yPoints={["102", "102"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["68", "101"]}
      yPoints={["106", "106"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
  </>
  
);

const MobileLines = () => (
  <>
    <GlowingLine
      xPoints={["-1", "55"]}
      yPoints={["91", "91"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["-1", "35"]}
      yPoints={["94", "94"]}
      color="#1E90FF"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["45", "150"]}
      yPoints={["205", "205"]}
      color="#FFA500"
      thickness={2}
      circleSize={6}
    />
    <GlowingLine
      xPoints={["60", "150"]}
      yPoints={["208", "208"]}
      color="#FFA500"
      thickness={2}
      circleSize={6}
    />
  </>
);

export default function AboutPage() {
  // Use a string for device type
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    function checkDeviceType() {
      const width = window.innerWidth;
      let newDeviceType;
      
      if (width >= 1368) {
        newDeviceType = "desktop";
      } else if (width >= 640 && width <= 1367) {
        newDeviceType = "tablet";
      } else {
        newDeviceType = "mobile";
      }
      
      // Log for debugging
      console.log(`Width: ${width}px, Device type: ${newDeviceType}`);
      setDeviceType(newDeviceType);
    }
    
    // Initial check
    checkDeviceType();
    
    // Add listener
    window.addEventListener('resize', checkDeviceType);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Determine which lines to show
  let LinesComponent = null;
  if (deviceType === "desktop") {
    LinesComponent = DesktopLines;
  } else if (deviceType === "tablet") {
    LinesComponent = TabletLines;
  } else if (deviceType === "mobile") {
    LinesComponent = MobileLines;
  }

  return (
    <>
      <div className={
        deviceType === "desktop" ? "pt-36 pb-12" : 
        deviceType === "tablet" ? "pt-32 pb-8" : 
        "pt-16 pb-12"
      }>
        {/* We always render LinesComponent since we now have one for each device type */}
        {LinesComponent && <LinesComponent />}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 md:grid-cols-2 text-white">
        <div className="space-y-4 text-left">
          <h1 className="text-3xl font-bold sm:text-4xl">
            About Us
          </h1>
          <p className="text-balance pt-1 text-lg leading-relaxed">
            The Society of PC Building helps students learn to build PCs,
            regardless of experience, through hands-on workshops and events,
            fostering knowledge and confidence among its members.
          </p>
        </div>

        <div className="about-bg relative flex justify-center rounded-md bg-black translate-x-4 sm:translate-x-0">
          <div className="-translate-x-7 -translate-y-6 overflow-hidden rounded-lg shadow-[0_0_15px_6px_rgba(255,255,255,0.3)] sm:-translate-x-10 sm:-translate-y-10">
            <Image
              src="/about-images/ethan.jpg"
              alt="Ethan holding the graphics card"
              width={600}
              height={358}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Team />
      <Contact />
      <Footer />
    </>
  );
}