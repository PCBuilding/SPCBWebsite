import React, { useState, useEffect } from "react";
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

interface AnalyticsData {
  date: string;
  visitors: number;
  pageViews: number;
}

const AnalyticsDashboard = () => {
  const [visitorData, setVisitorData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const mockData: AnalyticsData[] = [
          { date: "2024-01-01", visitors: 120, pageViews: 350 },
          { date: "2024-01-02", visitors: 150, pageViews: 400 },
        ];
        setVisitorData(mockData);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Total Visitors</h3>
          <p className="mt-2 text-2xl font-bold">
            {visitorData.reduce((sum, day) => sum + day.visitors, 0)}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Total Page Views</h3>
          <p className="mt-2 text-2xl font-bold">
            {visitorData.reduce((sum, day) => sum + day.pageViews, 0)}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Avg. Time on Site</h3>
          <p className="mt-2 text-2xl font-bold">2m 30s</p>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Daily Visitors</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
              <Line type="monotone" dataKey="pageViews" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
