import { FirebaseEvent } from "@/types/events";
import { format, isSameDay } from "date-fns";
import CalendarDay from "./CalendarDay";

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

        return <CalendarDay index={i} day={day} daysInMonth={daysToDisplay.length} dayEvents={dayEvents} isCurrentMonth={isCurrentMonth} key={i}/>
      })}
    </div>
  );
};

export default CalendarDays;


