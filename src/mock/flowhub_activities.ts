export interface Activity {
  id: string;
  athlete: string;
  location: string;
  timestamp: string;
  title: string;
  subtitle?: string;
  mapThumbnail: string;
  stats: {
    distance: string;
    time: string;
    elevation: string;
    power?: string;
  };
  achievements?: string[];
  likes: number;
  comments: number;
}

export const mockActivities: Activity[] = [
  {
    id: 'act-1',
    athlete: 'FlowNation Athlete',
    location: 'Los Gatos, CA',
    timestamp: 'Oct 7 2025 6:07 PM',
    title: 'Evening Ride',
    subtitle: 'Beautiful sunset over the hills',
    mapThumbnail: '/assets/flowhub/thumbnail.svg',
    stats: {
      distance: '42.3 km',
      time: '1h 38m',
      elevation: '623 m',
      power: '242 W',
    },
    achievements: ['PR on Old La Honda', 'Top 10 segment'],
    likes: 12,
    comments: 3,
  },
  {
    id: 'act-2',
    athlete: 'FlowNation Athlete',
    location: 'Los Gatos, CA',
    timestamp: 'Oct 5 2025 8:15 AM',
    title: 'Morning Coffee Ride',
    mapThumbnail: '/assets/flowhub/thumbnail.svg',
    stats: {
      distance: '28.7 km',
      time: '1h 12m',
      elevation: '412 m',
    },
    achievements: ['Century Club'],
    likes: 8,
    comments: 1,
  },
  {
    id: 'act-3',
    athlete: 'FlowNation Athlete',
    location: 'Los Gatos, CA',
    timestamp: 'Oct 3 2025 6:30 AM',
    title: 'Long Weekend Ride',
    subtitle: 'Exploring new routes in the Santa Cruz Mountains',
    mapThumbnail: '/assets/flowhub/thumbnail.svg',
    stats: {
      distance: '86.2 km',
      time: '3h 45m',
      elevation: '1,284 m',
      power: '218 W',
    },
    achievements: ['New distance PR', 'Gran Fondo badge'],
    likes: 24,
    comments: 7,
  },
];
