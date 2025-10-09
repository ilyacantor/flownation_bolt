import { useEffect, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import PadCard from './PadCard';
import mockRiders from '../../data/mockRiders.json';

interface Rider {
  id: string;
  name: string;
  team: string;
  city: string;
  rideType: string;
  distancePref: number[];
  paceZone: number;
  socialPref: string;
  activeSearch: boolean;
  lastActive: string;
  gender: string;
  avatar: string;
}

interface Match {
  id: string;
  name: string;
  city: string;
  team: string;
  distance: string;
  tags: string[];
  avatar: string;
  matchedDate: string;
}

function convertRiderToMatch(rider: Rider): Match {
  const tags: string[] = [];

  if (rider.rideType) {
    const types = rider.rideType.split(' / ');
    tags.push(...types.slice(0, 2));
  }

  if (rider.socialPref) {
    tags.push(rider.socialPref);
  }

  const distance = `${(Math.random() * 8 + 1).toFixed(1)} mi`;

  const daysAgo = Math.floor(Math.random() * 14) + 1;
  const matchedDate = daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`;

  return {
    id: rider.id,
    name: rider.name,
    city: rider.city,
    team: rider.team,
    distance,
    tags,
    avatar: rider.avatar,
    matchedDate
  };
}

export default function ActiveMatches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [dmOpen, setDmOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activeRiders = (mockRiders as Rider[])
      .filter(rider => rider.activeSearch)
      .slice(30, 35);

    const convertedMatches = activeRiders.map(convertRiderToMatch);
    setMatches(convertedMatches);
  }, []);

  const handleDmClick = (match: Match, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedMatch(match);
    setMessage('hey, you wanna go for a ride??');
    setDmOpen(true);
  };

  const handleSendMessage = () => {
    setDmOpen(false);
    setSelectedMatch(null);
    setMessage('');
  };

  return (
    <PadCard title="Active Buddy Matches">
      {dmOpen && selectedMatch ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                <img
                  src={selectedMatch.avatar}
                  alt={selectedMatch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold">{selectedMatch.name}</h3>
                <p className="text-sm text-gray-400">{selectedMatch.city}</p>
              </div>
            </div>
            <button
              onClick={() => setDmOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none focus:outline-none focus:border-orange-500"
              placeholder="Type your message..."
            />

            <button
              onClick={handleSendMessage}
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors hover:opacity-90"
              style={{ background: '#ff7a1a', color: 'white' }}
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="overflow-y-auto"
          style={{ height: '480px' }}
        >
          <div className="space-y-3">
            {matches.map((match) => (
              <div
                key={match.id}
                className="border border-gray-700 rounded-lg p-4 bg-gray-800"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 flex-shrink-0">
                    <img
                      src={match.avatar}
                      alt={match.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">{match.name}</h3>
                    <p className="text-sm text-gray-400">{match.city} • {match.team}</p>
                    <p className="text-xs text-gray-500 mt-1">{match.distance} away</p>
                    <p className="text-xs text-green-500 mt-1">Matched {match.matchedDate}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {match.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ background: '#3b3f47', color: '#9ca3af' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => handleDmClick(match, e)}
                  className="w-full py-2 rounded font-semibold flex items-center justify-center gap-2 transition-colors hover:opacity-90 text-sm"
                  style={{ background: '#ff7a1a', color: 'white' }}
                >
                  <MessageCircle size={16} />
                  <span>Send DM</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </PadCard>
  );
}
