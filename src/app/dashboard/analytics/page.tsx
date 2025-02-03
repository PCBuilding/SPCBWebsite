"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import AnalyticsDashboard from "@/components/admin/analytics/AnalyticsDashboard";

export default function Analytics() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-16 lg:px-10">
        <h1 className="mb-8 text-2xl sm:text-3xl">Analytics</h1>
        <AnalyticsDashboard />
      </div>
    </ProtectedRoute>
  );
}
