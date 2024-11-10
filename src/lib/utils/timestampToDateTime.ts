import { Timestamp } from "firebase/firestore";

export default function formatTimestampToDateTime(timestamp: Timestamp): {
  date: string;
  time: string;
} {
  const date = timestamp.toDate();
  const formattedDate = date.toISOString().split('T')[0];
  
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

  return {
    date: formattedDate,
    time: formattedTime,
  };
}