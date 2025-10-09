export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  snippet?: string;
}

export const mockNewsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'New Training Protocols for Endurance Athletes',
    source: 'Cycling Weekly',
    date: 'Oct 8, 2025',
    url: 'https://example.com/news/training-protocols',
    snippet: 'Latest research on polarized training shows significant improvements in VO2 max...',
  },
  {
    id: 'news-2',
    title: 'How to Choose the Right Bike Fit',
    source: 'BikeRadar',
    date: 'Oct 6, 2025',
    url: 'https://example.com/news/bike-fit',
    snippet: 'Professional fitters share their top tips for achieving optimal position...',
  },
  {
    id: 'news-3',
    title: 'Nutrition Strategies for Long Rides',
    source: 'VeloNews',
    date: 'Oct 4, 2025',
    url: 'https://example.com/news/nutrition',
    snippet: 'Sports nutritionists reveal the best fueling approach for rides over 3 hours...',
  },
  {
    id: 'news-4',
    title: 'Race Calendar 2026: Top Events Announced',
    source: 'CyclingTips',
    date: 'Oct 2, 2025',
    url: 'https://example.com/news/race-calendar',
    snippet: 'Mark your calendars for these must-do Gran Fondos and stage races...',
  },
];
