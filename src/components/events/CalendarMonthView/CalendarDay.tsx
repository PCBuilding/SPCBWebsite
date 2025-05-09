import { FirebaseEvent } from "@/types/events";
import { format, isToday } from "date-fns";
import CalendarEvent from "./CalendarEvent";
import MobileCalendarEvent from "./MobileCalendarEvent";

type CalendarDayProps = {
  dayEvents?: FirebaseEvent[];
  daysInMonth: number;
  isCurrentMonth: boolean;
  index: number;
  day: Date;
};

const CalendarDay: React.FC<CalendarDayProps> = ({
  dayEvents,
  daysInMonth,
  isCurrentMonth,
  index,
  day,
}) => {

  const today = isToday(day);


  if (!isCurrentMonth) {
    return (
      <>
        {/* Desktop Calendar Day not in current month */}
        <div
          className={`hidden border-l border-t border-gray-800 bg-[#0F1319] p-2 text-[#808080] lg:block ${daysInMonth % 7 === 0 ? "border-r" : ""} ${daysInMonth - index <= 7 ? "border-b" : ""}`}
        >
          <p className="flex justify-end">{format(day, "dd")}</p>
        </div>

        {/* Mobile Calendar Day not in current month */}
        <div className="flex justify-center p-2 lg:hidden">
          <div className="p-2 text-[#808080]">{format(day, "dd")}</div>
        </div>
      </>
    );
  }
  return (
    <>
      {/* Desktop Calendar day in current month */}
      <div
        className={`hidden h-32 border-l border-t border-gray-800 bg-[#0F1319] p-2 lg:block  ${daysInMonth % 7 === 0 ? "border-r" : ""} ${daysInMonth - index <= 7 ? "border-b" : ""}`}
      >
        <div className={`flex justify-end `}><span className={`${today ? "bg-light-blue text-black rounded-full px-2" : ""}`}>{format(day, "dd")}</span></div>
        {dayEvents && (
          <div className="pt-2">
            {dayEvents.map((_event, i) => (
              <CalendarEvent _event={_event} key={i} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Calendar day in current month */}

      <div className="flex justify-center pt-2 lg:hidden">
        {dayEvents && dayEvents.length > 0 ? (
         <MobileCalendarEvent day={day} dayEvents={dayEvents}/>
        ) : (
          <div className="p-2">{format(day, "dd")}</div>
        )}
      </div>
    </>
  );
};

export default CalendarDay;
