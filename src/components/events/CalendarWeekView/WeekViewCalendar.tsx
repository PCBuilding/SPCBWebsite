import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendarEvents } from '@/hooks/useCalendarEvents';
import WeekViewDay from './WeekViewDay';
import { useResponsiveDayCount } from '@/hooks/useResponsiveDayCount';

const FiveDayCalendar: React.FC = () => {
  // Get the responsive day count.
  const dayCount = useResponsiveDayCount();
  const {
    currentStartDate,
    dayRange,
    isLoading,
    error,
    navigateDays,
    getEventsForDay,
  } = useCalendarEvents(dayCount);

  // Determine the grid columns based on dayCount.
  let gridColsClass = 'grid-cols-1';
  if (dayCount === 5) gridColsClass = 'grid-cols-5';
  else if (dayCount === 4) gridColsClass = 'grid-cols-4';
  else if (dayCount === 3) gridColsClass = 'grid-cols-3';
  else if (dayCount === 2) gridColsClass = 'grid-cols-2';
  else if (dayCount === 1) gridColsClass = 'grid-cols-1';

  return (
    <div className="px-4 pt-16">
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => navigateDays('backward')}
          className="p-1.5 hover:bg-gray-700 rounded-full"
        >
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-bold">
          {format(currentStartDate, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => navigateDays('forward')}
          className="p-1.5 hover:bg-gray-700 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      <div className={`grid ${gridColsClass} gap-6`}>
        {dayRange.map((day) => (
          <WeekViewDay
            key={day.toISOString()}
            day={day}
            isLoading={isLoading}
            error={error}
            getEventsForDay={getEventsForDay}
          />
        ))}
      </div>
    </div>
  );
};

export default FiveDayCalendar;
