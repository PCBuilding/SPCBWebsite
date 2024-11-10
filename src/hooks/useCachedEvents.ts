import { db } from "@/lib/firebase/firebase";
import { FirebaseEvent, FormattedEvent } from "@/types/events";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export function useCachedEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async (): Promise<FirebaseEvent[]> => {
      const eventsQuery = query(
        collection(db, "events"),
        orderBy("time", "desc"),
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
