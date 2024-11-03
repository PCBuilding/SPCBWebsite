"use client";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";

export default function inventory() {

  return (
    <ProtectedRoute>
      <div>future inventory here</div>
    </ProtectedRoute>
  );
}
