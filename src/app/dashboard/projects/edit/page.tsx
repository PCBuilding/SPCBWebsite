"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EditForm from "@/components/admin/projects/EditForm";
import BackButton from "@/components/Buttons/BackButton";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="mx-auto mt-10 max-w-6xl px-10">
        <div className="flex justify-between px-4 pt-6">
          <h1 className="text-2xl font-medium">Edit Projects</h1>
          <BackButton />
        </div>
        <EditForm />
      </div>
    </ProtectedRoute>
  );
}
