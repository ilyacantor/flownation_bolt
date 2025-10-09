export interface LocalEvent {
  title: string;
  date: string;
  link: string;
}

export interface NationalBuzz {
  headline: string;
  summary: string;
  link: string;
}

export interface CommunityChatter {
  author: string;
  message: string;
  avatar?: string;
}

export const localEvents: LocalEvent[] = [
  {
    title: 'Boulder Bike Fest',
    date: 'May 20-22',
    link: '/events/boulder-bike-fest'
  },
  {
    title: 'Group Ride: Flagstaff Summit',
    date: 'Every Saturday 8 AM',
    link: '/rides/flagstaff-summit'
  },
  {
    title: 'Bike Maintenance Workshop',
    date: 'May 28, 6 PM',
    link: '/events/maintenance-workshop'
  }
];

export const nationalBuzz: NationalBuzz[] = [
  {
    headline: 'Tour de France Route Announced',
    summary: 'New mountain stages promise epic racing',
    link: '/news/tour-route-2025'
  },
  {
    headline: 'Pogačar Signs Extension',
    summary: 'UAE Team Emirates locks in star rider through 2028',
    link: '/news/pogacar-extension'
  },
  {
    headline: 'Gravel World Championships',
    summary: 'UCI announces new gravel racing circuit',
    link: '/news/gravel-worlds'
  }
];

export const communityChatter: CommunityChatter[] = [
  {
    author: 'Alex_Rides',
    message: 'Epic ride up Lookout Mountain today! Who else was out there?',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    author: 'Jenny_Cyclist',
    message: 'Looking for recommendations on tubeless tire sealant...',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    author: 'Mike_Gravel',
    message: 'Anyone interested in a bikepacking trip to Moab next month?',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];
