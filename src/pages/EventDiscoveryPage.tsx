import { Search, Filter, MapPin, Calendar, Mountain, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import RegisteredNavigation from '../components/RegisteredNavigation';
import InteractiveMap from '../components/InteractiveMap';
import Footer from '../components/Footer';

const SPORT_TYPES = ['All', 'Road Cycling', 'Gravel', 'MTB', 'Triathlon', 'Running'];

export default function EventDiscoveryPage() {
  const [selectedSports, setSelectedSports] = useState<string[]>(['All']);
  const [maxDistance, setMaxDistance] = useState('100');

  const toggleSportType = (sport: string) => {
    if (sport === 'All') {
      setSelectedSports(['All']);
    } else {
      setSelectedSports(prev => {
        const filtered = prev.filter(s => s !== 'All');
        if (filtered.includes(sport)) {
          const updated = filtered.filter(s => s !== sport);
          return updated.length === 0 ? ['All'] : updated;
        } else {
          return [...filtered, sport];
        }
      });
    }
  };

  const events = [
    {
      id: 1,
      name: 'Coastal Endurance Challenge',
      date: 'Sat, Jun 22, 2024',
      distance: '100 km',
      elevation: '1200 m',
      location: { lat: 34.5, lng: -120.3 }
    },
    {
      id: 2,
      name: 'Desert Iron Man',
      date: 'Sun, Jul 14, 2024',
      distance: '226 km',
      elevation: '800 m',
      location: { lat: 34.8, lng: -119.9 }
    },
    {
      id: 3,
      name: 'Mountain Trail Marathon',
      date: 'Sat, Aug 3, 2024',
      distance: '42 km',
      elevation: '2500 m',
      location: { lat: 34.3, lng: -120.1 }
    },
    {
      id: 4,
      name: 'Urban Cycling Criterium',
      date: 'Sat, Sep 7, 2024',
      distance: '50 km',
      elevation: '300 m',
      location: { lat: 34.6, lng: -120.2 }
    },
    {
      id: 5,
      name: 'Forest Gravel Race',
      date: 'Sun, Oct 20, 2024',
      distance: '80 km',
      elevation: '1500 m',
      location: { lat: 34.4, lng: -120.4 }
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <RegisteredNavigation />

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800" style={{ height: '420px', position: 'relative' }}>
          <InteractiveMap events={events} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 sticky top-8">
              <h2 className="text-cyan-400 text-xl font-bold mb-6" >
                Filter Events
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-white text-sm font-semibold mb-3 block" >
                    Sport Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SPORT_TYPES.map((sport) => (
                      <button
                        key={sport}
                        onClick={() => toggleSportType(sport)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedSports.includes(sport)
                            ? 'bg-cyan-500 hover:bg-cyan-400 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}

                      >
                        {sport}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-semibold mb-3 block" >
                    Max Distance (km)
                  </label>
                  <input
                    type="number"
                    value={maxDistance}
                    onChange={(e) => setMaxDistance(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-semibold mb-3 block" >
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Anywhere"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      
                    />
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>

                <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 py-3 rounded-lg font-semibold transition-colors" >
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-6" >
              Upcoming Events
            </h2>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2" >
                        {event.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2" >
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-4 text-sm" >
                    <div className="flex items-center gap-2 text-cyan-400">
                      <TrendingUp size={16} />
                      <span>{event.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Mountain size={16} />
                      <span>{event.elevation}</span>
                    </div>
                  </div>

                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors" >
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
