import { FirebaseEvent } from "@/types/events";
import { format, isSameDay } from "date-fns";

type CalendarDaysProps = {
  daysToDisplay: Date[];
  currentDate: Date;
  events: FirebaseEvent[];
};

const CalendarDays: React.FC<CalendarDaysProps> = ({
  daysToDisplay,
  currentDate,
  events,
}) => {
  return (
    <div className="grid w-full grid-cols-7">
      {daysToDisplay.map((day, i) => {
        const isCurrentMonth = format(day, "MM") === format(currentDate, "MM");

        const dayEvents = events.filter((event) => {
          const eventDate = event.time.toDate();
          return isCurrentMonth && isSameDay(eventDate, day);
        });

        if (isCurrentMonth) {
          return (
            <div
              className={`h-32 border-l border-t border-gray-500 p-2 ${daysToDisplay.length % 7 === 0 ? "border-r" : ""} ${daysToDisplay.length - i <= 7 ? "border-b" : ""}`}
              key={i}
            >
              <div className="flex justify-end">{format(day, "dd")}</div>
              <div className="pt-2">
                {dayEvents.map((_event,i) => (
                    <div className="bg-light-blue text-black text-xs p-1 rounded-sm cursor-pointer" key={i}>{_event.title}</div>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div
              className={`border-l border-t border-gray-500 ${daysToDisplay.length % 7 === 0 ? "border-r" : ""} ${daysToDisplay.length - i <= 7 ? "border-b" : ""}`}
              key={i}
            ></div>
          );
        }
      })}
    </div>
  );
};

export default CalendarDays;
