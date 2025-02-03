"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsDashboard() {
  return (
    <ProtectedRoute>
      <Analytics />
    </ProtectedRoute>
  );
}
