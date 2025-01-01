import { FirebaseEvent } from "@/types/events";
import { format, isSameDay } from "date-fns";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

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
              className={`h-32 border-l border-t border-gray-800 bg-[#0F1319] p-2 ${daysToDisplay.length % 7 === 0 ? "border-r" : ""} ${daysToDisplay.length - i <= 7 ? "border-b" : ""}`}
              key={i}
            >
              <div className="flex justify-end">{format(day, "dd")}</div>
              <div className="pt-2">
                {dayEvents.map((_event, i) => (
                  <CalendarEvent _event={_event} key={i} />
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div
              className={`border-l border-t border-gray-800 bg-[#0F1319] ${daysToDisplay.length % 7 === 0 ? "border-r" : ""} ${daysToDisplay.length - i <= 7 ? "border-b" : ""}`}
              key={i}
            ></div>
          );
        }
      })}
    </div>
  );
};

export default CalendarDays;

type CalendarEventProps = {
  _event: FirebaseEvent;
};

const CalendarEvent: React.FC<CalendarEventProps> = ({ _event }) => {
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  const handleEventClick = () => {
    setShowEventModal((prev) => !prev);
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  };

  const time = _event.time.toDate().toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  function formatDateToMMDDYY(date: Date): string {
    const padZero = (num: number): string => num.toString().padStart(2, '0');
    
    const month = padZero(date.getMonth() + 1); // Months are 0-based
    const day = padZero(date.getDate());
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    
    return `${month}/${day}/${year}`;
}

const date = formatDateToMMDDYY(_event.time.toDate())

  

  useEffect(() => {
    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto";
      }
    };
  }, []);
  return (
    <>
      <div
        className="cursor-pointer rounded-sm bg-light-blue p-1 text-xs text-black"
        onClick={handleEventClick}
      >
        {_event.title}
      </div>

      {showEventModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 px-6 backdrop-blur-sm">
          <div className="relative w-full max-w-[400px] rounded-md bg-[#242424] border border-[#404040] px-6 py-10">
            <button
              onClick={handleEventClick}
              className="absolute right-4 top-4 text-2xl"
            >
              <FaXmark />
            </button>
            <p className="text-xl font-medium">{_event.title}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-3">
              <p className="">Location: {_event.location}</p>
              <p className="">Time: {time}</p> <p className="">Date: {date}</p>
            </div>
            <p className="pt-3">{_event.description}</p>
            <div className="flex gap-1.5 pt-4">
          {_event.tags.map((tag, i) => (
            <div
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-sm text-accent-dark ${i % 2 === 0 ? "bg-light-blue" : "bg-light-orange"}`}
              key={tag}
            >
              <span className="inline-block h-2 w-2 rounded-full border border-accent-dark bg-white" />
              {tag}
            </div>
          ))}
        </div>
          </div>
        </div>
      )}
    </>
  );
};
