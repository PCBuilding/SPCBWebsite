"use client";
import React from "react";
import { FirebaseEvent } from "@/types/events";
import { FaXmark } from "react-icons/fa6";

interface EventModalProps {
  _event: FirebaseEvent;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ _event, onClose }) => {
  if (!_event) return null;

  const time = _event.time.toDate().toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formatDateToMMDDYY = (date: Date): string => {
    const padZero = (num: number): string => num.toString().padStart(2, "0");
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  };

  const date = formatDateToMMDDYY(_event.time.toDate());

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 px-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[400px] rounded-md border border-gray-700 bg-gray-900 px-6 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-2xl">
          <FaXmark />
        </button>
        <p className="text-xl font-medium">{_event.title}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-3">
          <p>Location: {_event.location}</p>
          <p>Time: {time}</p>
          <p>Date: {date}</p>
        </div>
        <p className="pt-3">{_event.description}</p>
        <div className="flex gap-1.5 pt-4">
          {_event.tags.map((tag, i) => (
            <div
              key={`${tag}-${i}`}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-sm text-accent-dark ${
                i % 2 === 0 ? "bg-light-blue" : "bg-light-orange"
              }`}
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

export default EventModal;
