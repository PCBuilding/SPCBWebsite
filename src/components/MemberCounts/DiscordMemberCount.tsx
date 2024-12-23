import { useState, useEffect } from "react";

const DiscordMemberCount = () => {
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        const response = await fetch("/api/discord-count");

        if (!response.ok) {
          throw new Error("Failed to fetch member count");
        }

        const data = await response.json();

        setMemberCount(data.memberCount);
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to load member count");
      }
    };

    fetchMemberCount();

    //Update count periodically
    const interval = setInterval(fetchMemberCount, 5 * 60 * 1000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <p className="font-['Michroma'] text-base md:text-xl">
        Discord count: Unavailable
      </p>
    );
  }

  return (
    <p className="font-['Michroma'] text-base md:text-xl">
      Discord count:
      {memberCount !== null ? `${memberCount} members` : "Loading..."}
    </p>
  );
};

export default DiscordMemberCount;
