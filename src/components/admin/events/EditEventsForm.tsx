import { Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Event from "./Event";
import { useCachedEvents } from "@/hooks/useCachedEvents";
import { EventFormData, FirebaseEvent } from "@/types/events";
import { deleteDoc, doc } from "firebase/firestore";
import { queryClient } from "@/lib/react-query/queryClient";
import { db } from "@/lib/firebase/firebase";
import toast from "react-hot-toast";
import { LuLoader2, LuX } from "react-icons/lu";
import EventForm from "./EventForm";

type EditEventFormProps = {
  month: Date;
};

export default function EditEventsForm({ month }: EditEventFormProps) {
  const { data: events, isLoading, isError, error } = useCachedEvents(month);
  const [selectedEvent, setSelectedEvent] = useState<FirebaseEvent | null>(
    null,
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<EventFormData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEvents = events?.filter((events) => {
    return events.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDeleteClick = (event: FirebaseEvent) => {
    setShowDeleteConfirm(true);
    setSelectedEvent(event);
  };

  const handleEditClick = (
    event: FirebaseEvent,
    date: string,
    time: string,
  ) => {
    setShowEditForm(true);
    setSelectedEvent(event);
    populateForm(event, date, time);
  };

  async function deleteEvent(eventId: string): Promise<void> {
    try {
      const eventRef = doc(db, "events", eventId);
      await deleteDoc(eventRef);
    } catch (error) {
      throw error;
    }
  }

  const handleDelete = async () => {
    if (!selectedEvent) return;
    setIsDeleting(true);
    try {
      await deleteEvent(selectedEvent.id);
      queryClient.invalidateQueries({ queryKey: ["events"] });
    } catch (error) {
      toast.error("Unable to delete event");
    } finally {
      setShowDeleteConfirm(false);
      setIsDeleting(false);
    }
  };

  const populateForm = (event: FirebaseEvent, date: string, time: string) => {
    const initialData: EventFormData = {
      title: event.title,
      location: event.location,
      description: event.description,
      date: date,
      time: time,
      tags: event.tags,
    };
    setEditFormData(initialData);
  };

  if (isError) {
    return <span>Error Fetching Data</span>;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-20">
        <span className="animate-spin text-5xl text-gray-800">
          <LuLoader2 />
        </span>
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative my-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search events..."
          className="w-full rounded border p-2 pl-10"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="grid gap-2">
        {filteredEvents?.map((event_) => (
          <Event
            event={event_}
            key={event_.title}
            onDeleteClick={handleDeleteClick}
            onEditClick={handleEditClick}
          />
        ))}
      </ul>
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-xl font-bold">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete "{selectedEvent?.title}"? This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  "Deleting..."
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete Project
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      {showEditForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3 backdrop-blur-sm">
          <div className="max-h-[80vh] w-full max-w-2xl overflow-auto rounded-lg bg-white px-5 py-6">
            <div className="flex justify-between">
              <p className="text-2xl font-medium">Edit Event</p>
              <span
                className="cursor-pointer text-3xl"
                onClick={() => setShowEditForm(false)}
              >
                <LuX />
              </span>
            </div>
            <EventForm
              initialData={editFormData}
              mode="edit"
              id={selectedEvent?.id}
            />
          </div>
        </div>
      )}
    </div>
  );
}
