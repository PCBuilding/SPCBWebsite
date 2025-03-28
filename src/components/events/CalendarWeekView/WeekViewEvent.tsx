"use client";
import { FirebaseEvent } from "@/types/events";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import EventModal from "../EventModal";

type WeekViewEventProps = {
  _event: FirebaseEvent;
};

const WeekViewEvent: React.FC<WeekViewEventProps> = ({ _event }) => {
  const [showEventModal, setShowEventModal] = useState<boolean>(false);

  const handleEventClick = () => {
    setShowEventModal((prev) => !prev);
    document.body.style.overflowY =
      document.body.style.overflowY === "hidden" ? "auto" : "hidden";
  };

  useEffect(() => {
    return () => {
      if (document.body.style.overflowY === "hidden") {
        document.body.style.overflowY = "auto";
      }
    };
  }, []);

  return (
    <>
        <div
          className="hover:bg-gray-800 transition-all my-4 mb-1 rounded border-l-4 border-orange px-2 py-1 cursor-pointer"
          onClick={handleEventClick}
        >
          <div className="font-medium">{_event.title}</div>
          <div className="text-xs text-gray-400">
            {format(_event.time.toDate(), "h:mm a")}
          </div>
          {_event.description && (
            <div className="text-xs text-gray-400">{_event.description}</div>
          )}
        </div>

        {showEventModal && (
          <EventModal
            key={`weekview-modal-${_event.id}`}
            _event={_event}
            onClose={handleEventClick}
          />
        )}
    </>
  );
};

export default WeekViewEvent;
