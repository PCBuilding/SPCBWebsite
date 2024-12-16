import { db } from "@/lib/firebase/firebase";
import { FirebaseEvent, FormattedEvent } from "@/types/events";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, orderBy, where, Timestamp } from "firebase/firestore";

export function useCachedEvents(month?: Date) {
  return useQuery({
    queryKey: ["events", month],
    queryFn: async (): Promise<FirebaseEvent[]> => {
      const now = month || new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const eventsQuery = query(
        collection(db, "events"),
        where("time", ">=", Timestamp.fromDate(startOfMonth)),
        where("time", "<=", Timestamp.fromDate(endOfMonth)),
        orderBy("time", "asc")
      );

      const snapshot = await getDocs(eventsQuery);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as FormattedEvent),
      }));
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}
