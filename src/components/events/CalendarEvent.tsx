"use client"
import { FirebaseEvent } from "@/types/events";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

type CalendarEventProps = {
  _event: FirebaseEvent;
};

const CalendarEvent: React.FC<CalendarEventProps> = ({ _event }) => {
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  const handleEventClick = () => {
    setShowEventModal((prev) => !prev);
    document.body.style.overflowY =
      document.body.style.overflowY === "hidden" ? "auto" : "hidden";
  };

  const time = _event.time.toDate().toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  function formatDateToMMDDYY(date: Date): string {
    const padZero = (num: number): string => num.toString().padStart(2, "0");

    const month = padZero(date.getMonth() + 1); // Months are 0-based
    const day = padZero(date.getDate());
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    return `${month}/${day}/${year}`;
  }

  const date = formatDateToMMDDYY(_event.time.toDate());

  useEffect(() => {
    return () => {
      if (document.body.style.overflowY === "hidden") {
        document.body.style.overflowY = "auto";
      }
    };
  }, []);
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.2, ease: easeInOut }}
          className="cursor-pointer rounded-sm bg-light-blue p-1 text-xs text-black"
          onClick={handleEventClick}
        >
          {_event.title}
        </motion.div>

        {showEventModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 px-6 backdrop-blur-sm" onClick={handleEventClick}>
            <div className="relative w-full max-w-[400px] rounded-md border border-[#242424] bg-[#0a0e18] px-6 py-10" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleEventClick}
                className="absolute right-4 top-4 text-2xl"
              >
                <FaXmark />
              </button>
              <p className="text-xl font-medium">{_event.title}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-3">
                <p className="">Location: {_event.location}</p>
                <p className="">Time: {time}</p>{" "}
                <p className="">Date: {date}</p>
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
      </AnimatePresence>
    </>
  );
};

export default CalendarEvent;
