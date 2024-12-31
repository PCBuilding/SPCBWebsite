import { format, isSameDay } from "date-fns";

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

        if (isCurrentMonth) {
          return (
            <div
              className={`h-32 border-l border-t border-gray-800 bg-[#0F1319] p-2 ${daysToDisplay.length % 7 === 0 ? "border-r" : ""} ${daysToDisplay.length - i <= 7 ? "border-b" : ""}`}
              key={i}
            >
              <div className="flex justify-end">{format(day, "dd")}</div>
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
export default CalendarSkeleton;
