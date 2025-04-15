import { useCachedEvents } from "@/hooks/useCachedEvents";
import React, { useState } from "react";
import MonthlyEvent from "./MonthlyEvent";
import { format } from "date-fns";
import { FaSpinner } from "react-icons/fa";

export default function MonthlyEvents() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const {
      data: events,
      isLoading,
      isError,
      error,
    } = useCachedEvents(currentDate);

  if (isError) {
    return (
      <div className="">
        Error occured while fetching data. Please contact us on discord.
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl md:text-3xl">{format(currentDate, 'MMMM')} Events</h1>
        <p className="md:hidden pt-3 text-[#cacaca] text-sm">Click an event for more details.</p>
        <div className="h-52 w-full flex items-center justify-center">
          <span className="text-3xl animate-spin"><FaSpinner/></span>
        </div>
      </div>
    );
  }

 

  return (
    <div className="mt-10 md:mt-24">
      
      <h1 className="text-2xl md:text-3xl">{format(currentDate, 'MMMM')} Events</h1>
      
      <p className="md:hidden pt-3 text-[#cacaca] text-sm">Click an event for more details.</p>
      <div className="mt-8 md:mt-12 grid gap-4 md:gap-12">
        {events?.map((_event) => <MonthlyEvent key={_event.id} event={_event} />)}
      </div>
    </div>
  );
}

