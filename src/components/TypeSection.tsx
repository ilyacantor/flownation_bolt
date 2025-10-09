import { Bike, Mountain, Waves, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';

const GravelerIcon = ({ className, size, strokeWidth }: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="5.5" cy="10" r="2.5" />
    <circle cx="17.5" cy="10" r="2.5" />
    <rect x="9" y="8" width="5" height="1.5" />
    <path d="M9 8.5L5.5 7" />
    <path d="M14 8.5L17.5 7" />
    <path d="M2 15L3 13.5L4.5 15L6 13.5L7.5 15L9 13.5L10.5 15L12 13.5L13.5 15L15 13.5L16.5 15L18 13.5L19.5 15L21 13.5L22 15" />
    <path d="M2 18L3.5 16.5L5 18L6.5 16.5L8 18L9.5 16.5L11 18L12.5 16.5L14 18L15.5 16.5L17 18L18.5 16.5L20 18L21.5 16.5L22 18" />
  </svg>
);

const types = [
  { label: 'Roadie', icon: Bike, path: '/persona-roadie' },
  { label: 'MTBear', icon: Mountain, path: '/mtbear' },
  { label: 'Graveler', icon: GravelerIcon, path: '/graveler' },
  { label: 'Triathlete', icon: Waves, path: '/triathlete' },
  { label: 'Runner', icon: Footprints, path: '/runner' },
];

export default function TypeSection() {
  return (
    <section className="type-section-container">
      <h2 className="type-section-title">What's Your Type?</h2>
      <div className="type-boxes-grid">
        {types.map((type) => {
          const Icon = type.icon;
          return (
            <Link key={type.label} to={type.path} className="type-box">
              <Icon className="type-box-icon" size={48} strokeWidth={1.5} />
              <span className="type-box-label">{type.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
