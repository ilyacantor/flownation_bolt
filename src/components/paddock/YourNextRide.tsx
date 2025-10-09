import { Calendar, MapPin, Users, Bike } from 'lucide-react';
import PadCard from './PadCard';
import { groupRides } from '../../mock/paddock_rides';

export default function YourNextRide() {
  return (
    <PadCard title="Your Next Ride">
      <div className="space-y-4">
        {groupRides.map((ride) => (
          <div
            key={ride.id}
            className="border border-gray-700 rounded-lg p-4 hover:border-orange-500 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-bold"
                    style={{
                      background: ride.tier === 'A' ? '#ff7a1a' : ride.tier === 'B' ? '#3b82f6' : '#10b981',
                      color: 'white'
                    }}
                  >
                    {ride.tier}
                  </span>
                  <h3 className="text-white font-semibold">{ride.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{ride.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>{ride.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>{ride.city}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users size={16} />
                <span>{ride.participants} riders</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Bike size={16} />
                <span>{ride.distance}</span>
              </div>
            </div>

            <button
              className="mt-4 w-full py-2 rounded font-semibold transition-colors"
              style={{ background: '#ff7a1a', color: 'white' }}
            >
              Join Ride
            </button>
          </div>
        ))}
      </div>
    </PadCard>
  );
}
