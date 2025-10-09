export interface Team {
  id: string;
  name: string;
  purpose: string;
  contact: string;
  location: string;
  size: number;
  type: string;
  description: string;
}

export const mockTeams: Team[] = [
  {
    id: 'team-1',
    name: 'Bay Area Road Warriors',
    purpose: 'Competitive road racing and training',
    contact: 'captain@bayarearoadwarriors.com',
    location: 'San Francisco',
    size: 24,
    type: 'Road',
    description: 'We focus on competitive road racing with structured training plans. Weekly group rides and race support.'
  },
  {
    id: 'team-2',
    name: 'Marin Mountain Shredders',
    purpose: 'Mountain biking trails and adventures',
    contact: 'info@marinshredders.com',
    location: 'Marin',
    size: 18,
    type: 'MTB',
    description: 'Technical trail riding in Marin County. All skill levels welcome for weekend adventures.'
  },
  {
    id: 'team-3',
    name: 'Peninsula Tri Club',
    purpose: 'Triathlon training and racing',
    contact: 'coach@peninsulatri.com',
    location: 'Palo Alto',
    size: 32,
    type: 'Triathlon',
    description: 'Multi-sport training with coaching support. Swim, bike, run sessions throughout the week.'
  },
  {
    id: 'team-4',
    name: 'East Bay Gravel Grinders',
    purpose: 'Gravel riding and bikepacking',
    contact: 'rides@eastbaygravel.com',
    location: 'Oakland',
    size: 15,
    type: 'Gravel',
    description: 'Exploring backroads and gravel routes. Monthly bikepacking trips and social rides.'
  },
  {
    id: 'team-5',
    name: 'South Bay Cycling Club',
    purpose: 'Social and recreational cycling',
    contact: 'hello@southbaycycling.com',
    location: 'San Jose',
    size: 45,
    type: 'Road',
    description: 'Friendly social rides for all abilities. Coffee stops and community focused.'
  },
  {
    id: 'team-6',
    name: 'Santa Cruz MTB Collective',
    purpose: 'Mountain bike trail maintenance and riding',
    contact: 'trails@scmtbcollective.org',
    location: 'Santa Cruz',
    size: 28,
    type: 'MTB',
    description: 'Trail building, maintenance, and riding. Give back to the trails we love.'
  },
  {
    id: 'team-7',
    name: 'Berkeley Endurance Team',
    purpose: 'Long-distance cycling and ultra events',
    contact: 'endurance@berkeleyteam.com',
    location: 'Berkeley',
    size: 12,
    type: 'Road',
    description: 'Training for centuries, double centuries, and ultra-endurance events.'
  },
  {
    id: 'team-8',
    name: 'Golden Gate Triathletes',
    purpose: 'Triathlon racing and training',
    contact: 'swim@ggtri.com',
    location: 'San Francisco',
    size: 38,
    type: 'Triathlon',
    description: 'Structured triathlon training with certified coaches. Race together, train together.'
  },
  {
    id: 'team-9',
    name: 'Redwood City Road Club',
    purpose: 'Competitive and recreational road cycling',
    contact: 'info@rwcroadclub.com',
    location: 'Redwood City',
    size: 22,
    type: 'Road',
    description: 'Mix of competitive racers and recreational riders. Multiple pace groups.'
  },
  {
    id: 'team-10',
    name: 'Los Gatos Gravel Crew',
    purpose: 'Gravel exploration and adventure',
    contact: 'adventure@lggravel.com',
    location: 'Los Gatos',
    size: 16,
    type: 'Gravel',
    description: 'Weekend gravel adventures through the Santa Cruz mountains and beyond.'
  }
];
