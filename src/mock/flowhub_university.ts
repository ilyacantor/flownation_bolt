export interface CourseItem {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  url: string;
}

export const flowUniversityCourses: CourseItem[] = [
  {
    id: 'course-1',
    number: 1,
    title: 'Triathlon 101',
    description: 'Essential fundamentals for first-time triathletes',
    duration: '45 min',
    url: 'https://example.com/university/triathlon-101',
  },
  {
    id: 'course-2',
    number: 2,
    title: 'Which White Cycling Shoes',
    description: 'A comprehensive guide to selecting the perfect white kicks',
    duration: '30 min',
    url: 'https://example.com/university/white-cycling-shoes',
  },
  {
    id: 'course-3',
    number: 3,
    title: 'What Does CdA Mean for You?',
    description: 'Understanding aerodynamics and coefficient of drag',
    duration: '50 min',
    url: 'https://example.com/university/cda-explained',
  },
  {
    id: 'course-4',
    number: 4,
    title: 'Are Aero Socks Really Worth It?',
    description: 'The science behind marginal gains in cycling apparel',
    duration: '25 min',
    url: 'https://example.com/university/aero-socks',
  },
  {
    id: 'course-5',
    number: 5,
    title: 'Who Invented the Cycling Sock Length Rule?',
    description: 'A deep dive into cycling fashion history',
    duration: '35 min',
    url: 'https://example.com/university/sock-length-rule',
  },
  {
    id: 'course-6',
    number: 6,
    title: 'Are You a Dirt Merchant?',
    description: 'Finding your identity in gravel and MTB culture',
    duration: '40 min',
    url: 'https://example.com/university/dirt-merchant',
  },
  {
    id: 'course-7',
    number: 7,
    title: 'How to Manual Automatically',
    description: 'Master bike handling skills without overthinking',
    duration: '55 min',
    url: 'https://example.com/university/manual-automatically',
  },
];
