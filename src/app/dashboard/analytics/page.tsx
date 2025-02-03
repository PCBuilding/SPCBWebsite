"use client";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PageViewData {
  date: string;
  views: number;
}

// AnalyticsDashboard.tsx
interface WeeklyViewData {
  weekLabel: string;
  views: number;
}

export default function AnalyticsDashboard() {
  const [weeklyData, setWeeklyData] = useState<WeeklyViewData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeeklyViews = async () => {
      const yearAgo = new Date();
      yearAgo.setFullYear(yearAgo.getFullYear() - 1);

      const q = query(
        collection(db, "weeklyViews"),
        where("timestamp", ">=", yearAgo),
        orderBy("timestamp", "asc"),
      );

      const snapshot = await getDocs(q);
      const viewsByWeek: { [key: string]: number } = {};

      // Get unique week-year combinations
      snapshot.forEach((doc) => {
        const data = doc.data();
        const key = `${data.year}-${data.weekNumber}`;
        viewsByWeek[key] = (viewsByWeek[key] || 0) + 1;
      });

      // Sort by year and week
      const formattedData = Object.entries(viewsByWeek)
        .map(([key, views]) => {
          const [year, week] = key.split("-");
          return {
            weekLabel: `W${week}-${year}`,
            views,
            sortKey: `${year}${week.padStart(2, "0")}`,
          };
        })
        .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
        .map(({ weekLabel, views }) => ({ weekLabel, views }));

      setWeeklyData(formattedData);
      setLoading(false);
    };

    fetchWeeklyViews();
  }, []);

  if (loading)
    return (
      <div className="flex h-96 items-center justify-center">Loading...</div>
    );

  const totalViews = weeklyData.reduce((sum, week) => sum + week.views, 0);
  const avgViews = Math.round(totalViews / weeklyData.length);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Total Views (in past year)</h3>
          <p className="mt-2 text-2xl font-bold">{totalViews}</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Average Weekly Views</h3>
          <p className="mt-2 text-2xl font-bold">{avgViews}</p>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Weekly Page Views</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="weekLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#8884d8"
                name="Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
