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
      <div className="mt-16">
        <h1 className="font-Michroma text-3xl">{format(currentDate, 'MMMM')}Events</h1>
        <div className="h-52 w-full flex items-center justify-center">
          <span className="text-3xl animate-spin"><FaSpinner/></span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h1 className="font-Michroma text-4xl">{format(currentDate, 'MMMM')} Events</h1>
      <div className="mt-12 grid gap-12">
        {events?.map((_event) => <MonthlyEvent key={_event.id} event={_event} />)}
      </div>
    </div>
  );
}

