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
          <h1 className="text-3xl font-bold">Edit Events</h1>
          <div className="flex gap-2">
            <BackButton />
            <button className="rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
              <a href="/dashboard/events/add">New Event</a>
            </button>
          </div>
        </div>
        <EditEventsForm />
      </div>
    </ProtectedRoute>
  );
}
