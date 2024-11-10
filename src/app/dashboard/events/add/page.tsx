"use client";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EventForm from "@/components/admin/events/EventForm";
import AddEventForm from "@/components/admin/events/EventForm";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AddEvent() {


  return (
    <ProtectedRoute>
      <div className="mx-auto w-full max-w-3xl p-6 pt-8">
        <div className="flex items-end justify-between">
          <h1 className="text-2xl font-semibold">Create Event</h1>
          <Link
            href={"/dashboard"}
            className="flex items-center gap-2 underline"
          >
            Back To Dashboard{" "}
            <span className="text-lg">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>
        <EventForm mode="create"/>
      </div>
    </ProtectedRoute>
  );
}
