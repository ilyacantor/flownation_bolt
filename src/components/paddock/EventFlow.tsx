import { Calendar, ArrowRight } from 'lucide-react';
import PadCard from './PadCard';
import { headlineEvents } from '../../mock/paddock_events';

export default function EventFlow() {
  return (
    <PadCard title="EventFlow">
      <div className="space-y-4">
        {headlineEvents.map((event) => (
          <div
            key={event.id}
            className="border border-gray-700 rounded-lg p-4"
          >
            <h3 className="text-white font-semibold mb-2">{event.name}</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>

            <div className="text-2xl font-bold mb-1" style={{ color: '#ff7a1a' }}>
              {event.countdown}
            </div>
            <p className="text-gray-500 text-xs mb-3">{event.location}</p>

            <a
              href={event.link}
              className="flex items-center gap-2 text-sm font-semibold hover:underline transition-colors"
              style={{ color: '#ff7a1a' }}
            >
              <span>Enter the Race Room</span>
              <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </PadCard>
  );
}
