"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EditEventsForm from "@/components/admin/events/EditEventsForm";
import React from "react";
import BackButton from "@/components/Buttons/BackButton";

export default function EditEvents() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-6xl px-8 pt-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Edit Events</h1>
          <BackButton />
        </div>
        <EditEventsForm />
      </div>
    </ProtectedRoute>
  );
}
