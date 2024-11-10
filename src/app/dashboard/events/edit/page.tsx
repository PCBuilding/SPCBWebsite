"use client";

import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EditEventsForm from "@/components/admin/events/EditEventsForm";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function EditEvents() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-6xl px-8 pt-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Edit Events</h1>
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
        <EditEventsForm />
      </div>
    </ProtectedRoute>
  );
}
