import { FirebaseEvent } from "@/types/events";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import MonthlyEvent from "./MonthlyEvent";

type MobileCalendarEventProps = {
  day: Date;
  dayEvents: FirebaseEvent[];
};

const MobileCalendarEvent: React.FC<MobileCalendarEventProps> = ({
  day,
  dayEvents,
}) => {
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  const handleEventClick = () => {
    setShowEventModal((prev) => !prev);
    document.body.style.overflow =
      document.body.style.overflowY === "hidden" ? "auto" : "hidden";
  };

  useEffect(() => {
    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflowY = "auto";
      }
    };
  }, []);

  return (
    <>
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-light-orange" onClick={handleEventClick}>
        {format(day, "dd")}
      </div>
      {showEventModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 px-6 backdrop-blur-sm">
          <div className="relative w-full max-w-[400px] max-h-[400px] overflow-y-auto rounded-md border border-[#242424] bg-[#050a10] px-2 py-10">
            <button
              onClick={handleEventClick}
              className="absolute right-4 top-4 text-2xl"
            >
              <FaXmark />
            </button>
           
            <div className="grid gap-4 mt-6">
                {dayEvents.map((_event, i) => (
                    <MonthlyEvent event={_event} key={i}/>
                ))}
            </div>
            
            
          </div>
        </div>
      )}
    </>
  );
};

export default MobileCalendarEvent;
