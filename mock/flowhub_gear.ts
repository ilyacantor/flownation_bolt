export interface GearItem {
  id: string;
  type: 'bike' | 'component';
  name: string;
  brand: string;
  model: string;
  distance: string;
  status: 'active' | 'retired';
  notes?: string;
}

export const mockGear: GearItem[] = [
  {
    id: 'bike-1',
    type: 'bike',
    name: 'Race Bike',
    brand: 'Specialized',
    model: 'Tarmac SL7',
    distance: '3,245 km',
    status: 'active',
    notes: 'Primary race bike',
  },
  {
    id: 'bike-2',
    type: 'bike',
    name: 'Training Bike',
    brand: 'Canyon',
    model: 'Endurace CF',
    distance: '8,921 km',
    status: 'active',
    notes: 'Daily trainer',
  },
  {
    id: 'comp-1',
    type: 'component',
    name: 'Chain',
    brand: 'Shimano',
    model: 'Ultegra CN-HG701',
    distance: '2,156 km',
    status: 'active',
    notes: 'Replace at 3,000 km',
  },
  {
    id: 'comp-2',
    type: 'component',
    name: 'Front Tire',
    brand: 'Continental',
    model: 'GP5000',
    distance: '1,789 km',
    status: 'active',
  },
];
