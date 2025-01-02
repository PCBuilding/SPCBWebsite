"use client";
import Calendar from "@/components/events/Calendar";
import MonthlyEvents from "@/components/events/MonthlyEvents";

export default function Events() {
  return (
    <>
      <section className="relative min-h-screen bg-[#050a10]">
        <div className="noise-bg"/>
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-12 text-white">
          <MonthlyEvents />
          <Calendar />
        </div>
      </section>
    </>
  );
}
