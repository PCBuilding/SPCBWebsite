import { useState, useEffect } from "react";

export default function useDiscordCount(): number | string {
  const [count, setCount] = useState<number | string>(0);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch("/api/discord-count");
        if (!response.ok) {
          throw new Error("Failed to fetch Discord count");
        }
        const data = await response.json();
        setCount(data.memberCount);
      } catch (error) {
        setCount("err")
        console.error("Error fetching Discord count:", error);
      }
    }

    fetchCount();
    const interval = setInterval(fetchCount, 5 * 60 * 1000); // refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return count;
}
