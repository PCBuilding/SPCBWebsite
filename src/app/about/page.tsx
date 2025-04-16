//src > app > about > page.tsx
"use client";
import Contact from "@/components/about/Contact";
import Team from "@/components/about/Team";
import GlowingLine from "@/components/decorations/GlowingLine";
import Footer from "@/components/Footer";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function AboutPage() {
      const [screenSize, setScreenSize] = useState("mobile"); // "mobile", "tablet", or "desktop"

        useEffect(() => {
          const checkScreenSize = () => {
            if (window.innerWidth >= 1025) {
              setScreenSize("desktop");
            } else if (window.innerWidth >= 641) {
              setScreenSize("tablet");
            } else {
              setScreenSize("mobile");
            }
          };
          
          checkScreenSize();
          window.addEventListener("resize", checkScreenSize);
          
          return () => window.removeEventListener("resize", checkScreenSize);
        }, []);
        return (
        <>
          <div className={
            screenSize === "desktop" ? "pt-36 pb-12" : 
            screenSize === "tablet" ? "pt-26 pb-12" : 
            "pt-20 pb-12"
          }>
            {screenSize === "desktop" ? (
                // Desktop lines
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
              ) : screenSize === "tablet" ? (
                //Tablet lines
                <>
                  <GlowingLine
                    xPoints={["30", "50"]}
                    yPoints={["60", "60"]}
                    color="#1E90FF"
                    thickness={2}
                    circleSize={6}
                  />
                  <GlowingLine
                    xPoints={["10", "60"]}
                    yPoints={["125", "125"]}
                    color="#1E90FF"
                    thickness={2}
                    circleSize={6}
                  />
                  <GlowingLine
                    xPoints={["60", "180"]}
                    yPoints={["240", "240"]}
                    color="#FFA500"
                    thickness={2}
                    circleSize={6}
                  />
                  <GlowingLine
                    xPoints={["75", "180"]}
                    yPoints={["245", "245"]}
                    color="#FFA500"
                    thickness={2}
                    circleSize={6}
                  />
                </>
              ) : (
                // Mobile lines
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
              )}
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
