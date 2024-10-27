"use client";


import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AddForm from "@/components/Forms/AddForm";

export default function projects() {
  return (
    <ProtectedRoute>
      <AddForm/>
    </ProtectedRoute>
  );
}
