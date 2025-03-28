import { useState, useMemo } from 'react';
import { addDays, startOfDay, endOfDay, isWithinInterval } from 'date-fns';
import { useCachedEvents } from './useCachedEvents';
import { FirebaseEvent } from '@/types/events';

export function useCalendarEvents(daysCount: number = 5) {
  const [currentStartDate, setCurrentStartDate] = useState(startOfDay(new Date()));

  // Generate a day range based on the provided daysCount.
  const dayRange = useMemo(
    () => Array.from({ length: daysCount }, (_, i) => addDays(currentStartDate, i)),
    [currentStartDate, daysCount]
  );

  const firstDay = dayRange[0];
  const lastDay = dayRange[dayRange.length - 1];

  // Always call useCachedEvents for both months, using the first day of each month.
  const queryFirst = useCachedEvents(new Date(firstDay.getFullYear(), firstDay.getMonth(), 1));
  const querySecond = useCachedEvents(new Date(lastDay.getFullYear(), lastDay.getMonth(), 1));

  // Combine events from both queries based on whether the range spans two months.
  const combinedEvents = useMemo(() => {
    if (firstDay.getMonth() === lastDay.getMonth()) {
      return queryFirst.data || [];
    } else {
      const events1 = queryFirst.data || [];
      const events2 = querySecond.data || [];
      return [...events1, ...events2];
    }
  }, [queryFirst.data, querySecond.data, firstDay, lastDay]);

  // Combine loading and error states.
  const isLoading =
    queryFirst.isLoading || (firstDay.getMonth() !== lastDay.getMonth() && querySecond.isLoading);
  const error =
    queryFirst.error || (firstDay.getMonth() !== lastDay.getMonth() && querySecond.error);

  const navigateDays = (direction: 'forward' | 'backward') => {
    const increment = direction === 'forward' ? daysCount : -daysCount;
    setCurrentStartDate(prevDate => addDays(prevDate, increment));
  };

  // Filter events for a given day.
  const getEventsForDay = (day: Date): FirebaseEvent[] => {
    return combinedEvents.filter(event => {
      const eventDate = event.time.toDate();
      return isWithinInterval(eventDate, {
        start: startOfDay(day),
        end: endOfDay(day)
      });
    });
  };

  return {
    currentStartDate,
    dayRange,
    events: combinedEvents,
    isLoading,
    error,
    navigateDays,
    getEventsForDay
  };
}
