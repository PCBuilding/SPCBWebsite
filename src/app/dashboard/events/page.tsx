"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function events() {

  return (
    <ProtectedRoute>
      <div>future events here</div>
    </ProtectedRoute>
  );
}
