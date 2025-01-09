import formatTimestampToDateTime from "@/lib/utils/timestampToDateTime";
import { FirebaseEvent } from "@/types/events";
import { Trash2 } from "lucide-react";
import React from "react";

type EventProps = {
  event: FirebaseEvent;
  onDeleteClick: (event: FirebaseEvent) => void;
  onEditClick: (event: FirebaseEvent, date: string, time: string) => void;
};

const Event: React.FC<EventProps> = ({ event, onDeleteClick, onEditClick }) => {
  const { date, time } = formatTimestampToDateTime(event.time);

  return (
    <div className="flex items-center justify-between rounded-md border p-4 bg-white gap-4">
      <div className="flex items-end gap-4">
        <p className="font-bold text-sm sm:text-base">{event.title}</p>
        <p className="text-sm hidden md:inline-block">{date}</p>
        <p className="text-sm hidden md:inline-block">{time}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 text-sm sm:text-base"
          onClick={() => onEditClick(event, date, time)}
        >
          Edit
        </button>
        <button
          className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600 text-sm sm:text-base"
          onClick={() => onDeleteClick(event)}
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  );
};
export default Event;
