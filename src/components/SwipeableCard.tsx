import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import { X, Heart, MapPin, User } from 'lucide-react';

interface Rider {
  id: string;
  name: string;
  city: string;
  rideType: string;
  expLevel: string;
  matchScore: number;
  avatar?: string;
}

interface SwipeableCardProps {
  riders: Rider[];
  onSwipe: (direction: string, rider: Rider) => void;
}

export default function SwipeableCard({ riders, onSwipe }: SwipeableCardProps) {
  const [currentIndex, setCurrentIndex] = useState(riders.length - 1);

  const handleSwipe = (direction: string, rider: Rider) => {
    onSwipe(direction, rider);
  };

  const handleCardLeftScreen = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const canSwipe = currentIndex >= 0;

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ height: '600px' }}>
      <div className="absolute inset-0">
        {riders.map((rider, index) => (
          <TinderCard
            key={rider.id}
            onSwipe={(dir) => handleSwipe(dir, rider)}
            onCardLeftScreen={handleCardLeftScreen}
            preventSwipe={['up', 'down']}
            className="absolute inset-0"
          >
            <div
              className="bg-gray-900/90 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden shadow-2xl w-full h-full"
              style={{
                backgroundImage: rider.avatar ? `url(${rider.avatar})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{rider.name}</h2>
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <MapPin size={18} />
                      <span>{rider.city}</span>
                    </div>
                  </div>
                  <div className="bg-cyan-500 text-white px-4 py-2 rounded-full font-bold text-xl">
                    {rider.matchScore}%
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-400/30">
                    {rider.rideType}
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30">
                    {rider.expLevel}
                  </span>
                </div>

                <p className="text-gray-300 text-sm">
                  Looking for ride buddies who share similar pace and goals.
                </p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      {!canSwipe && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800">
          <div className="text-center">
            <User className="text-gray-400 mx-auto mb-4" size={64} />
            <h3 className="text-white text-2xl font-bold mb-2">No more riders</h3>
            <p className="text-gray-400">Check back later for new matches!</p>
          </div>
        </div>
      )}

      <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-6">
        <button
          disabled={!canSwipe}
          className="bg-red-500/20 hover:bg-red-500/30 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-red-400 disabled:text-gray-600 rounded-full p-6 transition-all border-2 border-red-400/30 disabled:border-gray-700"
        >
          <X size={32} strokeWidth={2.5} />
        </button>
        <button
          disabled={!canSwipe}
          className="bg-green-500/20 hover:bg-green-500/30 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-green-400 disabled:text-gray-600 rounded-full p-6 transition-all border-2 border-green-400/30 disabled:border-gray-700"
        >
          <Heart size={32} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
