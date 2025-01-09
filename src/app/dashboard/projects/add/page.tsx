"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import AddForm from "@/components/admin/projects/AddForm";
import BackButton from "@/components/Buttons/BackButton";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="mx-auto flex max-w-4xl justify-between px-4 sm:p-6 pt-8 items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">Create Project</h1>
        <BackButton />
      </div>
      <AddForm />
    </ProtectedRoute>
  );
}
