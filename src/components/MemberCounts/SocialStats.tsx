import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface StatCardProps {
  iconSrc: string;
  label: string;
  value: number | null;
  isLoading: boolean;
  error: string | null;
  bgColor: string;
  glowColor: string;
  href: string;
}

const StatCard: React.FC<StatCardProps> = ({
  iconSrc,
  label,
  value,
  isLoading,
  error,
  bgColor,
  glowColor,
  href,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-transform duration-300 hover:scale-105"
  >
    <div className="group relative mt-6 overflow-hidden rounded-lg border border-[#B0B8FF] border-opacity-40 bg-gradient-to-r from-black/80 to-black/60 p-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 -left-40 -top-40 h-[500px] w-[500px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          transform: "rotate(35deg) translateX(-50%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative flex items-center gap-4">
        <div
          className={`rounded-lg ${bgColor} p-3 transition-all duration-300 group-hover:scale-110`}
          style={{ boxShadow: `0 0 10px ${glowColor}` }}
        >
          <Image
            src={iconSrc}
            alt={label}
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-300">{label}</p>
          <p className="text-xl font-bold text-white">
            {isLoading
              ? "Loading..."
              : error
                ? "Unavailable"
                : value
                  ? `${value.toLocaleString()}`
                  : "Unknown"}
          </p>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg">
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            transform: "rotate(35deg) translateX(-50%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Additional glow effect on the edges */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
    </div>
  </Link>
);

const SocialStats: React.FC = () => {
  const [discordCount, setDiscordCount] = useState<number | null>(null);
  const [discordError, setDiscordError] = useState<string | null>(null);
  const [discordLoading, setDiscordLoading] = useState(true);

  const [instagramCount, setInstagramCount] = useState<number | null>(null);
  const [instagramError, setInstagramError] = useState<string | null>(null);
  const [instagramLoading, setInstagramLoading] = useState(true);

  useEffect(() => {
    const fetchDiscordCount = async () => {
      try {
        const response = await fetch("/api/discord-count");
        if (!response.ok) {
          throw new Error("Failed to fetch Discord count");
        }
        const data = await response.json();
        setDiscordCount(data.memberCount);
        setDiscordError(null);
      } catch (error) {
        console.error("Error:", error);
        setDiscordError("Failed to load count");
      } finally {
        setDiscordLoading(false);
      }
    };

    fetchDiscordCount();
    const interval = setInterval(fetchDiscordCount, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchInstagramCount = async () => {
      try {
        setInstagramLoading(true);
        const response = await fetch("/api/instagram-count");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram count");
        }
        const data = await response.json();
        setInstagramCount(data.followerCount);
        setInstagramError(null);
      } catch (error) {
        console.error("Error:", error);
        setInstagramError("Failed to load count");
      } finally {
        setInstagramLoading(false);
      }
    };

    fetchInstagramCount();
    const interval = setInterval(fetchInstagramCount, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <StatCard
        iconSrc="/landing/discord.png"
        label="Discord Members"
        value={discordCount}
        isLoading={discordLoading}
        error={discordError}
        bgColor="bg-[#5865F2]"
        glowColor="rgba(88, 101, 242, 0.5)"
        href="https://discord.com/invite/jfq9phWqTF"
      />

      {/* Instagram stats are currently not working */}
      {/* <StatCard
        iconSrc="/landing/instagram.png"
        label="Instagram Followers"
        value={instagramCount}
        isLoading={instagramLoading}
        error={instagramError}
        bgColor="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
        glowColor="rgba(221, 42, 123, 0.5)"
        href="https://www.instagram.com/pcbuildinguf/"
      /> */}
    </div>
  );
};

export default SocialStats;
