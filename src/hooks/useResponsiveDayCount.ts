import { useState, useEffect } from 'react';

export function useResponsiveDayCount() {
  const getInitialDayCount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) return 5;
      if (width >= 768) return 4;
      if (width >= 640) return 3;
      return 1;
    }
    return 5;
  };

  const [dayCount, setDayCount] = useState(getInitialDayCount);

  useEffect(() => {
    const updateDayCount = () => {
      setDayCount(getInitialDayCount());
    };

    window.addEventListener('resize', updateDayCount);
    return () => window.removeEventListener('resize', updateDayCount);
  }, []);

  return dayCount;
}
