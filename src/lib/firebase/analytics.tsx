// analytics.ts
import { db } from "@/lib/firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

export const getPageViews = async (startDate: Date, endDate: Date) => {
  const q = query(
    collection(db, "pageViews"),
    where("timestamp", ">=", startDate),
    where("timestamp", "<=", endDate),
  );
  return await getDocs(q);
};

function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

export const trackPageView = async (page: string) => {
  const now = new Date();
  const weekNumber = getWeekNumber(now);
  const year = now.getFullYear();

  await addDoc(collection(db, "weeklyViews"), {
    page,
    weekNumber,
    year,
    timestamp: serverTimestamp(),
  });
};
