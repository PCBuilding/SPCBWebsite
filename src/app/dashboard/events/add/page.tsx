"use client";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EventForm from "@/components/admin/events/EventForm";
import React from "react";
import BackButton from "@/components/Buttons/BackButton";

export default function AddEvent() {
  return (
    <ProtectedRoute>
      <div className="mx-auto w-full max-w-3xl px-4 sm:p-6 pt-8">
        <div className="flex items-end justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold">Create Event</h1>
          <BackButton />
        </div>
        <EventForm mode="create" />
      </div>
    </ProtectedRoute>
  );
}
