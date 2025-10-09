export interface GroupRide {
  id: string;
  name: string;
  description: string;
  tier: 'A' | 'B' | 'C';
  time: string;
  city: string;
  participants: number;
  distance: string;
  mapThumbnail?: string;
}

export const groupRides: GroupRide[] = [
  {
    id: '1',
    name: 'Saturday Morning Hammerfest',
    description: 'Fast-paced group ride with competitive climbs',
    tier: 'A',
    time: 'Sat 7:00 AM',
    city: 'Boulder, CO',
    participants: 28,
    distance: '65 mi',
    mapThumbnail: 'https://images.pexels.com/photos/3856433/pexels-photo-3856433.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Social Sunday Roll',
    description: 'Relaxed pace, coffee stop included',
    tier: 'C',
    time: 'Sun 9:00 AM',
    city: 'Boulder, CO',
    participants: 42,
    distance: '30 mi'
  },
  {
    id: '3',
    name: 'Tuesday Night Worlds',
    description: 'High-intensity group ride',
    tier: 'B',
    time: 'Tue 6:00 PM',
    city: 'Denver, CO',
    participants: 35,
    distance: '40 mi',
    mapThumbnail: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];
