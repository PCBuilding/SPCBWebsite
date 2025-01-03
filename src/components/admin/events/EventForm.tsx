"use client";
import { db } from "@/lib/firebase/firebase";
import { queryClient } from "@/lib/react-query/queryClient";
import { EventFormData, FirebaseEvent, FormattedEvent } from "@/types/events";
import {
  addDoc,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsX } from "react-icons/bs";

const emptyFormState: EventFormData = {
  title: "",
  location: "",
  description: "",
  date: "",
  time: "",
  tags: [],
};

interface EventFormProps {
  initialData?: EventFormData | null;
  mode: "edit" | "create";
  id?: string;
}

export default function EventForm({
  initialData,
  mode,
  id,
}: EventFormProps) {
  const [formData, setFormData] = useState<EventFormData>(
    initialData || emptyFormState,
  );
  const [tagsInputValue, setTagsInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.showPicker) {
      e.target.showPicker();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!tagsInputValue) {
      return toast.error("Field is empty");
    }

    if (formData.tags.includes(tagsInputValue)) {
      return toast.error("Tag already exists");
    }

    setFormData((prev) => ({ ...prev, tags: [...prev.tags, tagsInputValue] }));
    setTagsInputValue("");
  };

  const removeTag = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== name),
    }));
  };

  const createEventTimestamp = (date: string, time: string): Timestamp => {
    const dateTimeString = `${date}T${time}`;
    const dateObject = new Date(dateTimeString);
    return Timestamp.fromDate(dateObject);
  };

  const convertToFirebaseEvent = (formData: EventFormData): FormattedEvent => {
    return {
      title: formData.title.trim(),
      description: formData.description.trim(),
      tags: formData.tags,
      location: formData.location,
      time: createEventTimestamp(formData.date, formData.time),
    };
  };

  const updateEventInFirebase = async (
    formData: EventFormData,
  ): Promise<string | void> => {
    if (!id) return;
    const loadingToast = toast.loading("Updating event...");

    try {
      if (!formData.title) {
        toast.dismiss(loadingToast);
        return toast.error("Please enter an event title");
      }

      if (!formData.date || !formData.time) {
        toast.dismiss(loadingToast);

        return toast.error("Please select both date and time");
      }

      const eventData: any = convertToFirebaseEvent(formData);

      const eventRef = doc(db, "events", id);
      await updateDoc(eventRef, eventData);

      toast.dismiss(loadingToast);
     
      toast.success("Event updated successfully!", {
        duration: 3000,
        icon: "🎉",
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      if (error instanceof Error) {
        toast.error("Failed to update event. Please contact web dev team.", {
          duration: 4000,
        });
      }
    }
  };

  const submitEventToFirebase = async (
    formData: EventFormData,
  ): Promise<string | void> => {
    const loadingToast = toast.loading("Creating event...");

    try {
      if (!formData.title) {
        toast.dismiss(loadingToast);
        return toast.error("Please enter an event title");
      }

      if (!formData.date || !formData.time) {
        toast.dismiss(loadingToast);
        return toast.error("Please select both date and time");
      }

      const eventData = convertToFirebaseEvent(formData);

      const docRef = await addDoc(collection(db, "events"), eventData);

      toast.dismiss(loadingToast);
      toast.success("Event created successfully!", {
        duration: 3000,
        icon: "🎉",
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      if (error instanceof Error) {
        toast.error("Failed to create event. Please contact web dev team.", {
          duration: 4000,
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      if (mode === "create") {
        await submitEventToFirebase(formData);
        setFormData(emptyFormState);
        setTagsInputValue("");
      } else {
        await updateEventInFirebase(formData);
      }
    } catch (error) {
      toast.error("Failed to create event. Please contact web dev team.", {
        duration: 4000,
      });
    } finally {
      setLoading(false);
      queryClient.invalidateQueries({ queryKey: ["events"] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 flex w-full flex-col gap-4">
      <div>
        <label htmlFor="" className="text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="mt-2 block w-full rounded-md border p-2"
          onChange={handleChange}
          value={formData.title}
        />
      </div>
      <div>
        <label htmlFor="" className="text-sm font-medium">
          Location
        </label>
        <input
          type="text"
          name="location"
          className="mt-2 block w-full rounded-md border p-2"
          onChange={handleChange}
          value={formData.location}
        />
      </div>
      <div>
        <label htmlFor="" className="text-sm font-medium">
          Description
        </label>
        <textarea
          name="description"
          id=""
          rows={3}
          className="mt-2 block w-full rounded-md border p-2"
          onChange={handleChange}
          value={formData.description}
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="" className="text-sm">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="mt-2 block w-full cursor-pointer rounded-md border p-2 min-h-11"
            onFocus={handleFocus}
            onChange={handleChange}
            value={formData.date}
          />
        </div>
        <div>
          <label htmlFor="" className="text-sm">
            Time
          </label>
          <input
            type="time"
            name="time"
            className="mt-2 block w-full cursor-pointer rounded-md border p-2 "
            onFocus={handleFocus}
            onChange={handleChange}
            value={formData.time}
          />
        </div>
      </div>
      <div>
        <label htmlFor="" className="text-sm">
          Tags
        </label>
        <div className="mt-2 flex gap-4">
          <input
            type="text"
            name="tags"
            value={tagsInputValue}
            onChange={(e) => setTagsInputValue(e.target.value)}
            className="block w-full rounded-md border p-1.5 sm:p-2"
          />
          <button
            className="whitespace-nowrap rounded-md bg-green-500 px-4 text-sm text-white"
            onClick={(e) => addTag(e)}
          >
            Add Tag
          </button>
        </div>
        {formData.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-3">
            {formData.tags.map((tag) => (
              <Tag name={tag} key={tag} handleRemove={removeTag} />
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="mt-2 rounded-md bg-blue-500 p-2 text-white"
      >
        {mode === "create" ? "Create" : "Edit"} Event
      </button>
    </form>
  );
}

interface TagProps {
  name: string;
  handleRemove: (name: string) => void;
}

const Tag: React.FC<TagProps> = ({ name, handleRemove }) => {
  return (
    <div className="flex items-center rounded-full bg-purple-300 px-3 py-1 text-sm">
      <span>{name}</span>
      <span
        className="cursor-pointer pl-1 text-xl"
        onClick={() => handleRemove(name)}
      >
        <BsX />
      </span>
    </div>
  );
};
