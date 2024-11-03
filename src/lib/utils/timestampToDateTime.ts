import { Timestamp } from "firebase/firestore";

export default function formatTimestampToDateTime(timestamp: Timestamp): {
  date: string;
  time: string;
} {
  const date = timestamp.toDate();
  const formattedDate = date.toISOString().split("T")[0];
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
}
