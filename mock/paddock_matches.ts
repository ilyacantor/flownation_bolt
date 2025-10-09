export interface PotentialMatch {
  id: string;
  name: string;
  city: string;
  team: string;
  distance: string;
  tags: string[];
  optIn: boolean;
  avatar?: string;
}

export const potentialMatches: PotentialMatch[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    city: 'Boulder',
    team: 'Rapha Racing',
    distance: '3.2 mi',
    tags: ['Gravel', 'Endurance', 'Coffee rides'],
    optIn: true,
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    city: 'Denver',
    team: 'Independent',
    distance: '5.8 mi',
    tags: ['Road', 'Criterium', 'Fast Group'],
    optIn: true,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    name: 'Emma Williams',
    city: 'Boulder',
    team: 'Trek Racing',
    distance: '2.1 mi',
    tags: ['Mountain', 'Technical', 'Weekends'],
    optIn: false
  },
  {
    id: '4',
    name: 'Jason Park',
    city: 'Louisville',
    team: 'Specialized Shredders',
    distance: '8.5 mi',
    tags: ['Gravel', 'Bikepacking', 'Adventure'],
    optIn: true
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    city: 'Boulder',
    team: 'Canyon Collective',
    distance: '4.0 mi',
    tags: ['Road', 'Social', 'Morning rides'],
    optIn: true
  }
];
