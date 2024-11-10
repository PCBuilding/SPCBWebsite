import { Timestamp } from "firebase/firestore";

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  tags: string[];
}

export interface FormattedEvent {
  title: string;
  description: string;
  location: string;
  time: Timestamp;
  tags: string[];
}

export interface FirebaseEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  time: Timestamp;
  tags: string[];
}
