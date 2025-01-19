<<<<<<< Updated upstream
"use client";
import React from "react";

const About = () => {
    const glowConfig = {
        width: "750px",
        height: "510px",
        position: {
            right: "0px",     // Adjusted to properly align with image
            top: "70px",
        },
        imageSrc: "/about/glowyboxrevised.png",
    };

    const mainImageConfig = {
        width: "730px",
        height: "450px",
        position: {
            right: "-725px",  // Adjusted to align with glow effect
            top: "-400px",
        },
        imageSrc: "/about/ethan7900xt.jpg",
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0e27] to-[#050a1f] relative">
            <div className="relative mx-auto max-w-[1400px] flex flex-col lg:flex-row items-center gap-12 px-8">
                <div className="text-center lg:text-left flex-1 max-w-lg">
                    <h1 className="text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Michroma', sans-serif" }}>
                        About Us
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Ut vel dolor nibh aliquet blandit.
                        Tristique amet in morbi consectetur cras.
                    </p>
                </div>
                <div
                    className="relative rounded-xl overflow-hidden shadow-lg"
                    style={{
                        width: mainImageConfig.width,
                        height: mainImageConfig.height,
                        position: "absolute",
                        right: mainImageConfig.position.right,
                        top: mainImageConfig.position.top,
                        boxShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                        borderRadius: "0.75rem",
                    }}
                >
                    <img
                        src={glowConfig.imageSrc}
                        alt="Glow Box"
                        className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                        style={{
                            pointerEvents: "none",
                        }}
                    />
                    <img
                        src={mainImageConfig.imageSrc}
                        alt="Event"
                        className="relative z-10 w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
            <div
                className="absolute"
                style={{
                    width: glowConfig.width,
                    height: glowConfig.height,
                    right: glowConfig.position.right,
                    top: glowConfig.position.top,
                    //boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.8), 0 0 15px 5px rgba(255, 255, 255, 0.6)",
                    //borderRadius: "0.75rem",
                }}
            >
                <img
                    src={glowConfig.imageSrc}
                    alt="Glow Box"
                    className="w-full h-full object-cover rounded-lg"
                    style={{
                        pointerEvents: "none",
                    }}
                />
            </div>
        </div>
    );
};

export default About;
=======
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="text-[#eaeaea] pt-36 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl px-6">
        {/* Left Column */}
        <div className="space-y-4 text-left">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ut vel dolor nibh aliquet blandit. Tristique
            amet in morbi consectetur cras.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-[0_0_20px_10px_rgba(255,255,255,0.6)]">
            <Image
              src="/about-images/ethan.jpg"
              alt="Ethan holding the graphics card"
              width={688}
              height={411}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes
