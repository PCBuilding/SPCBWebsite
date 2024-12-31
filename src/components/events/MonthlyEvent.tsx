import { FirebaseEvent } from "@/types/events";

type MonthlyEventProps = {
  event: FirebaseEvent;
};

const MonthlyEvent: React.FC<MonthlyEventProps> = ({ event }) => {
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
    <div className="grid grid-cols-10">
      <div className="col-span-2 flex flex-col justify-center gap-2 font-Michroma text-4xl">
        <p>{dayOfWeek}</p>
        <p>{dayOfMonth}</p>
      </div>
      <div className="monthly-event col-span-8 w-full rounded-md p-5 px-7">
        <p className="text-xl font-semibold">{event.title}</p>
        <div className="flex gap-3 pt-2">
          <p>
            Location:{" "}
            <span className=" font-semibold">{event.location}</span>
          </p>
          <p>
            Time: <span className="font-semibold">{time}</span>
          </p>
        </div>
        <p className="mt-2">{event.description}</p>
        <div className="flex justify-end gap-1.5 pt-1">
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
  );
};

export default MonthlyEvent;
