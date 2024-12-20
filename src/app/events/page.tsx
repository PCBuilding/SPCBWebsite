"use client";
import Calendar from "@/components/client-events/Calendar";
import MonthlyEvents from "@/components/client-events/MonthlyEvents";

export default function Events() {
  return (
    <>
      <div className="bg" />
      <section className="relative min-h-screen">
        <div className="mx-auto max-w-7xl px-10 py-8 text-white">
          <MonthlyEvents />
          <Calendar />
        </div>
      </section>
    </>
  );
}
