// addMockData.ts
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const pages = ["/home", "/projects", "/events", "/about"];
const currentWeek = getWeekNumber(new Date());
const prevWeek = currentWeek - 1;
const nextWeek = currentWeek + 1;
const year = new Date().getFullYear();

export default function AddMockDataButton() {
  const addMockData = async () => {
    const weeks = [
      { week: prevWeek, year },
      { week: currentWeek, year },
      { week: nextWeek, year },
    ];

    for (const { week, year } of weeks) {
      for (const page of pages) {
        const viewCount = Math.floor(Math.random() * 20) + 30;
        for (let i = 0; i < viewCount; i++) {
          await addDoc(collection(db, "weeklyViews"), {
            page,
            weekNumber: week,
            year,
            timestamp: serverTimestamp(),
          });
        }
      }
    }
    alert("Mock data added for previous, current and next week");
  };

  return (
    <button
      onClick={addMockData}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      Add Mock Data
    </button>
  );
}
