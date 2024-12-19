//Events page.tsx
"use client";
import Calendar from "@/components/client-events/Calendar";
import MonthlyEvents from "@/components/client-events/MonthlyEvents";

export default function Events() {
  return (
    <section id="events" className="in-h-screen pt-20">
      <div className="bg" />
      <div className="relative mx-auto max-w-7xl px-10 text-white">
        <MonthlyEvents />
        <Calendar />
      </div>
    </section>
  );
}
