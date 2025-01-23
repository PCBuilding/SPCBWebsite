"use client";
import Calendar from "@/components/events/Calendar";
import MonthlyEvents from "@/components/events/MonthlyEvents";

export default function Events() {
  return (
    <>
      <section className="relative min-h-screen bg-[#080d14]">
        <div className="noise-bg"/>
        <div className="mx-auto max-w-7xl px-4 md:px-10 pt-20 sm:pt-32 pb-12 text-white">
        <Calendar />
          <MonthlyEvents /> 
        </div>
      </section>
    </>
  );
}
