"use client";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import EditEventsForm from "@/components/admin/events/EditEventsForm";
import React, { useState } from "react";
import BackButton from "@/components/Buttons/BackButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function EditEvents() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (direction: "prev" | "next") => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + (direction === "next" ? 1 : -1));
      return newDate;
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-6xl px-8 pt-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Events</h1>
          <div className="flex gap-2">
            <BackButton />
            <button className="rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
              <a href="/dashboard/events/add">New Event</a>
            </button>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between text-lg">
          <p>
            Showing events for:{" "}
            <span className="font-semibold">{currentMonth} {currentYear}</span>
          </p>
          <div className="flex gap-2">
            <button className="rounded-full p-1 hover:bg-gray-300" onClick={() => changeMonth("prev")}>
              <FaChevronLeft />
            </button>
            <button className="rounded-full p-1 hover:bg-gray-300" onClick={() => changeMonth("next")}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <EditEventsForm month={currentDate}/>
      </div>
    </ProtectedRoute>
  );
}
