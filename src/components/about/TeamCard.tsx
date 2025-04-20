// src/components/about/TeamCard.tsx
"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl?: string; // Optional LinkedIn URL
  altText?: string; // Optional alt text for image
};

export const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  linkedinUrl,
  altText,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(121,199,253,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card with image and info */}
      <div className="border border-gray-800 bg-gray-900">
        {/* Image container with fixed aspect ratio */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText || `${name}, ${role}`}
            fill
            className="object-cover transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Info section */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="inline-block rounded-md bg-blue bg-opacity-10 px-3 py-1 text-sm text-blue">
            {role}
          </div>
        </div>
      </div>

      {/* LinkedIn overlay that appears on hover */}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 flex items-end justify-end bg-black bg-opacity-20 p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          aria-label={`View ${name}'s LinkedIn profile`}
        >
          <FaLinkedin className="text-4xl text-blue" />
        </a>
      )}
    </div>
  );
};
