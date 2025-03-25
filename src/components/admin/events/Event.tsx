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
    <div className="flex items-center justify-between gap-4 rounded-md border bg-white p-4">
      <div className="flex items-end gap-4">
        <p className="text-sm font-bold sm:text-base">{event.title}</p>
        <p className="hidden text-sm md:inline-block">{date}</p>
        <p className="hidden text-sm md:inline-block">{time}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 text-sm transition-colors sm:text-base"
          onClick={() => onEditClick(event, date, time)}
        >
          Edit
        </button>
        <button
          className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-600 sm:text-base"
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
