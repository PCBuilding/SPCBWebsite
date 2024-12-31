import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCachedEvents } from "@/hooks/useCachedEvents";
import CalendarDays from "./CalendarDays";
import CalendarSkeleton from "./CalendarSkeleton";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useCachedEvents(currentDate);

  const currentMonthName = format(currentDate, "MMMM");
  const currentYear = format(currentDate, "yyyy");

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));
  const daysToDisplay = eachDayOfInterval({ start: startDate, end: endDate });

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="pt-32 text-white">
      <div className="flex items-end justify-between">
        <p className="font-Michroma text-3xl">
          {currentMonthName} {currentYear}
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-full p-2 hover:bg-light-blue"
            onClick={handlePrevMonth}
          >
            <FaChevronLeft />
          </button>
          <button
            className="rounded-full p-2 hover:bg-light-blue"
            onClick={handleNextMonth}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Days of the Week */}
      <div className="mt-4 grid grid-cols-7 text-center font-semibold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="border border-b-0 border-gray-800 bg-[#0A0E14] p-3 text-xl"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      {events && <CalendarDays daysToDisplay={daysToDisplay} currentDate={currentDate} events={events}/>}
      {isLoading && <CalendarSkeleton daysToDisplay={daysToDisplay} currentDate={currentDate}/>}
    </div>
  );
}



