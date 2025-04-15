import { FirebaseEvent } from "@/types/events";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type MonthlyEventProps = {
  event: FirebaseEvent;
};

const MonthlyEvent: React.FC<MonthlyEventProps> = ({ event }) => {
  const [expandMobileEvent, setExpandMobileEvent] = useState<boolean>(false);
  function parseDateTime(dateTime: Date): {
    timeString: string;
    dayOfMonth: string;
    dayOfWeek: string;
  } {
    const timeString = dateTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const dayOfMonth = dateTime.getDate().toString();

    const dayOfWeek = dateTime
      .toLocaleString("en-US", {
        weekday: "short",
      })
      .toUpperCase();

    return { timeString, dayOfMonth, dayOfWeek };
  }

  const {
    timeString: time,
    dayOfMonth,
    dayOfWeek,
  } = parseDateTime(event.time.toDate());

  return (
    <>
      {/* Desktop version */}
      <div className="hidden grid-cols-10 md:grid">
        <div className="col-span-2 flex flex-col justify-center gap-2 text-3xl">
          <p>{dayOfWeek}</p>
          <p>{dayOfMonth}</p>
        </div>
        <div className="monthly-event col-span-8 w-full rounded-md p-5 px-7">
          <p className="text-xl font-semibold">{event.title}</p>
          <div className="flex gap-3 pt-2">
            <p>
              Location: <span className="font-semibold">{event.location}</span>
            </p>
            <p>
              Time: <span className="font-semibold">{time}</span>
            </p>
          </div>
          <p className="mt-2">{event.description}</p>
          <div className="flex min-h-6 justify-end gap-1.5 pt-3">
            {event.tags.map((tag, i) => (
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

      {/* Mobile Version */}
      <div
        className="monthly-event w-full cursor-pointer px-4 md:hidden py-5 rounded-md"
        onClick={() => setExpandMobileEvent((prev) => !prev)}
      >
        <div className="flex items-center justify-between gap-6">
          <div className="flex cursor-pointer flex-col items-center">
            <p>{dayOfWeek} </p>
            <p>{dayOfMonth}</p>
          </div>
          <p className="">{event.title}</p>
        </div>

        <AnimatePresence>
          {expandMobileEvent && (
            <motion.div
              className="text-sm overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-wrap gap-5 pt-4">
                <p>Location: {event.location}</p>
                <p>Time: {time}</p>
              </div>
              <p className="pt-2">{event.description}</p>
              <div className="flex gap-2 pt-4 h-10">
                {event.tags.map((tag, i) => (
                  <div
                    className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs text-accent-dark ${i % 2 === 0 ? "bg-light-blue" : "bg-light-orange"}`}
                    key={tag}
                  >
                    <span className="inline-block h-2 w-2 rounded-full border border-accent-dark bg-white" />
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MonthlyEvent;
