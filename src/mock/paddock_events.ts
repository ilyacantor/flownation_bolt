export interface HeadlineEvent {
  id: string;
  name: string;
  date: string;
  countdown: string;
  location: string;
  link: string;
}

export const headlineEvents: HeadlineEvent[] = [
  {
    id: '1',
    name: 'Leadville 100 MTB',
    date: 'Aug 12, 2025',
    countdown: '45 days',
    location: 'Leadville, CO',
    link: '/events/leadville-100'
  },
  {
    id: '2',
    name: 'Dirty Kanza 200',
    date: 'Jun 3, 2025',
    countdown: '15 days',
    location: 'Emporia, KS',
    link: '/events/dirty-kanza'
  }
];
