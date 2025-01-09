"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EditForm from "@/components/admin/projects/EditForm";
import BackButton from "@/components/Buttons/BackButton";

export default function projects() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-6xl px-4 sm:px-8 pt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-3xl font-bold">Projects</h1>
          <div className="flex gap-2">
            <BackButton />
            <button className="text-sm sm:text-base rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
              <a href="/dashboard/projects/add">New Project</a>
            </button>
          </div>
        </div>
        <EditForm />
      </div>
    </ProtectedRoute>
  );
}
