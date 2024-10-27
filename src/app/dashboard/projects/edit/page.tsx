"use client";


import ProtectedRoute from "@/components/auth/ProtectedRoute";
import EditForm from "@/components/Forms/EditForm";

export default function projects() {
  return (
    <ProtectedRoute>
      <EditForm/>
    </ProtectedRoute>
  );
}
