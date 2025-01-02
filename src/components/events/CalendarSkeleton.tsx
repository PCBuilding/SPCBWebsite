import { format, isSameDay } from "date-fns";
import CalendarDay from "./CalendarDay";

type CalendarSkeletonProps = {
  daysToDisplay: Date[];
  currentDate: Date;
};

const CalendarSkeleton: React.FC<CalendarSkeletonProps> = ({
  daysToDisplay,
  currentDate,
}) => {
  return (
    <div className="grid w-full grid-cols-7">
      {daysToDisplay.map((day, i) => {
        const isCurrentMonth = format(day, "MM") === format(currentDate, "MM");
        return <CalendarDay daysInMonth={daysToDisplay.length} index={i} isCurrentMonth={isCurrentMonth} day={day}/> 
      })}
    </div>
  );
};
export default CalendarSkeleton;
