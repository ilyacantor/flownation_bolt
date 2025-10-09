export interface CalendarEvent {
  id: string;
  date: Date;
  type: 'training' | 'race' | 'group' | 'buddy' | 'off';
  title: string;
  duration?: string;
  distance?: string;
  description?: string;
}

export const generateCalendarEvents = (startDate: Date): CalendarEvent[] => {
  const events: CalendarEvent[] = [];
  const current = new Date(startDate);

  for (let day = 0; day < 28; day++) {
    const dayOfWeek = current.getDay();
    const weekNumber = Math.floor(day / 7);

    if (dayOfWeek === 1 || dayOfWeek === 5) {
      events.push({
        id: `off-${day}`,
        date: new Date(current),
        type: 'off',
        title: 'Rest Day',
      });
    } else if (dayOfWeek === 6) {
      events.push({
        id: `long-${day}`,
        date: new Date(current),
        type: 'training',
        title: 'Long Ride',
        duration: '6h',
        distance: '160 km',
        description: 'Endurance base building',
      });
    } else if (dayOfWeek === 0) {
      const isRaceWeekend = weekNumber === 1 || weekNumber === 3;
      if (isRaceWeekend) {
        events.push({
          id: `race-${day}`,
          date: new Date(current),
          type: 'race',
          title: weekNumber === 1 ? 'Central Coast Classic' : 'Mountain Challenge',
          duration: '3h',
          distance: '100 km',
          description: 'Race day',
        });
      } else {
        events.push({
          id: `tempo-${day}`,
          date: new Date(current),
          type: 'training',
          title: 'Tempo Ride',
          duration: '3h',
          distance: '80 km',
          description: 'Zone 3 intervals',
        });
      }
    } else {
      const isBuddyRide = (day % 7 === 2 && weekNumber % 2 === 0);
      const isWednesday = (dayOfWeek === 3);

      if (isBuddyRide) {
        events.push({
          id: `buddy-${day}`,
          date: new Date(current),
          type: 'buddy',
          title: 'Buddy Ride with Sarah',
          duration: '2h',
          distance: '50 km',
          description: 'Social pace',
        });
      } else if (isWednesday) {
        events.push({
          id: `group-${day}`,
          date: new Date(current),
          type: 'group',
          title: 'Wednesday Night Worlds',
          duration: '2.5h',
          distance: '60 km',
          description: 'Group training',
        });
      } else {
        events.push({
          id: `training-${day}`,
          date: new Date(current),
          type: 'training',
          title: 'Base Training',
          duration: '1.5h',
          distance: '40 km',
          description: 'Easy endurance',
        });
      }
    }

    current.setDate(current.getDate() + 1);
  }

  return events;
};
