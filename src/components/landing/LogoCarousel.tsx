import React from 'react';
import { motion } from 'framer-motion';

interface Logo {
  src: string;
  alt: string;
}

const LogoCarousel: React.FC = () => {
  const logos: Logo[] = [
    { src: "/landing/logos/roblox.png", alt: "Roblox" },
    { src: "/landing/logos/nvidia.png", alt: "NVIDIA" },
    { src: "/landing/logos/microsoft.png", alt: "Microsoft" },
    { src: "/landing/logos/samsung.png", alt: "Samsung" },
    { src: "/landing/logos/ukg.png", alt: "UKG" },
    { src: "/landing/logos/meta.png", alt: "Meta" }
  ];

  // Duplicate the logos array to create a seamless infinite effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="sm:hidden w-full overflow-hidden -mt-5 scale-90">
      <motion.div
        className="flex items-center gap-6"
        animate={{
          x: [0, -50 * logos.length],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-auto object-contain"
            />
          </div>
        ))}
        <span className="text-gray-600">+ More!</span>
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
