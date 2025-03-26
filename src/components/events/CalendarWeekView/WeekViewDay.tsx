import React from "react";
import { format, startOfDay, endOfDay } from "date-fns";
import { FirebaseEvent } from "@/types/events";
import WeekViewEvent from "./WeekViewEvent";

type WeekViewDayProps = {
  day: Date;
  isLoading: boolean;
  error: any;
  getEventsForDay: (day: Date) => FirebaseEvent[];
};

const WeekViewDay: React.FC<WeekViewDayProps> = ({
  day,
  isLoading,
  error,
  getEventsForDay,
}) => {
  // Define 2-hour time slots from 8 AM to 8 PM.
  const timeslots = [
    { startHour: 8, endHour: 10 },
    { startHour: 10, endHour: 12 },
    { startHour: 12, endHour: 14 },
    { startHour: 14, endHour: 16 },
    { startHour: 16, endHour: 18 },
    { startHour: 18, endHour: 20 },
  ];

  return (
    <div className="min-h-[200px] rounded-lg">
      {/* Header for the day */}
      <div className={`mb-2 flex flex-col items-center font-semibold px-2 py-4 ${getEventsForDay(day).length > 0 ? "text-white" : "text-dull"}`}>
        <p className="text-5xl">{format(day, "d")}</p>
        <p className="pt-1 text-lg">{format(day, "EEE")}</p>
        <div className="flex h-10 flex-col items-center gap-1.5 py-1.5">
          <span className="h-full max-h-8 w-0.5 rounded-full bg-gray-700" />
          <span
            className={
              new Date().getTime() >= startOfDay(day).getTime() &&
              new Date().getTime() < endOfDay(day).getTime()
                ? "min-h-2 min-w-2 rounded-full bg-orange"
                : ""
            }
          />
        </div>
        <p className={`text-sm`}>
          {getEventsForDay(day).length} Event(s)
        </p>
      </div>

      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-red-500">Error loading events</div>
      ) : (
        // Map over the defined timeslots.
        timeslots.map(({ startHour, endHour }) => {
          // Create Date objects for the slot boundaries.
          const slotStart = new Date(
            day.getFullYear(),
            day.getMonth(),
            day.getDate(),
            startHour,
            0,
            0
          );
          const slotEnd = new Date(
            day.getFullYear(),
            day.getMonth(),
            day.getDate(),
            endHour,
            0,
            0
          );

          // Filter events for this timeslot:
          // Lower bound is inclusive (>= slotStart) and upper bound is exclusive (< slotEnd)
          const eventsInSlot = getEventsForDay(day).filter((event) => {
            const eventDate = event.time.toDate();
            return (
              eventDate.getTime() >= slotStart.getTime() &&
              eventDate.getTime() < slotEnd.getTime()
            );
          });

          return (
            <div key={`${startHour}-${endHour}`} className="border-b border-gray-800 p-2 my-1">
              <div className={`${eventsInSlot.length > 0 ? "" : "text-dull"} text-sm font-bold mb-1`}>
                {format(slotStart, "h:mm a")} - {format(slotEnd, "h:mm a")}
              </div>
              {eventsInSlot.length > 0 ? (
                eventsInSlot.map((_event) => (
                  <WeekViewEvent _event={_event} key={_event.id}/>
                ))
              ) : (
                <div className="text-xs text-gray-400">No events</div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default WeekViewDay;
