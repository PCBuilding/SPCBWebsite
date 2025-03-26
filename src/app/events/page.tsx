"use client";
import Calendar from "@/components/events/CalendarMonthView/Calendar";
import FiveDayCalendar from "@/components/events/CalendarWeekView/WeekViewCalendar";
import MonthlyEvents from "@/components/events/CalendarListView/MonthlyEvents";
import { FaRegCalendarAlt, FaList } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Clock, Calendar as CalendarIcon, List } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [calendarView, setCalendarView] = useState<"month" | "day" | "list">(
    "month",
  );

  return (
    <>
      <section className="relative min-h-screen bg-[#080d14]">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-28 text-white sm:pt-36 md:px-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Events</h1>
          <h2 className="max-w-2xl sm:text-balance pt-4 text-xl sm:text-2xl text-gray-200">
            Discover everything you need to know about upcoming{" "}
            <span className="text-blue">club events</span> and{" "}
            <span className="text-blue">exclusive opportunities.</span>
          </h2>
          <p className="pt-8 text-lg text-gray-300">Views:</p>

          {/* buttons to change view */}
          <div className="flex gap-2 pt-2 flex-wrap">
          <button
              className={`flex items-center gap-2 rounded-sm border px-4 py-1.5 transition-all ${calendarView === "month" ? "border-gray-600 bg-gray-800" : "border-gray-700 bg-gray-900"}`}
              onClick={() => setCalendarView("month")}
            >
              <span
                className={`flex items-center gap-2 transition-all ${calendarView === "month" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
              >
                Month View <CalendarIcon className="h-5" />
              </span>
            </button>
            <button
              className={`rounded-sm border px-4 py-1.5 transition-all ${calendarView === "day" ? "border-gray-600 bg-gray-800" : "border-gray-700 bg-gray-900"}`}
              onClick={() => setCalendarView("day")}
            >
              <span
                className={`flex items-center gap-2 transition-all ${calendarView === "day" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
              >
                {" "}
                Day View <Clock className="h-5" />
              </span>
            </button>
            <button
              className={`flex items-center gap-2 rounded-sm border px-4 py-1.5 transition-all ${calendarView === "list" ? "border-gray-600 bg-gray-800" : "border-gray-700 bg-gray-900"}`}
              onClick={() => setCalendarView("list")}
            >
              
              <span
                className={`flex items-center gap-2 transition-all ${calendarView === "list" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
              >
                List View <List className="h-5" />
              </span>
            </button>
          </div>
          {/* end buttons */}
          
          {/* Views */}
          {calendarView ===  "day" && <FiveDayCalendar />}
          {calendarView === "month" && <Calendar />}
          {calendarView === "list" &&  <MonthlyEvents />}
         
        </div>
      </section>
      <Footer />
    </>
  );
}
