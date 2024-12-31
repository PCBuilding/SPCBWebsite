import { useCachedEvents } from "@/hooks/useCachedEvents";
import React, { useState } from "react";
import MonthlyEvent from "./MonthlyEvent";

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
        <h1 className="font-Michroma text-3xl">December Events</h1>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h1 className="font-Michroma text-3xl">December Events</h1>
      <div className="mt-16 grid gap-12">
        {events?.map((_event) => <MonthlyEvent key={_event.id} event={_event} />)}
      </div>
    </div>
  );
}

