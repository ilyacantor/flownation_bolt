import { useState } from 'react';
import RegisteredNavigation from '../components/RegisteredNavigation';
import Footer from '../components/Footer';
import YourNextRide from '../components/paddock/YourNextRide';
import MatchesCarousel from '../components/paddock/MatchesCarousel';
import ActiveMatches from '../components/paddock/ActiveMatches';
import FlowBuzz from '../components/paddock/FlowBuzz';
import { MapPin, Clock, ExternalLink, Search, X, Calendar } from 'lucide-react';
import { bikeShops, commonSearchTerms, BikeShop } from '../data/bikeShops';
import { groupRides } from '../mock/paddock_rides';
import { headlineEvents } from '../mock/paddock_events';

export default function PaddockPage() {
  const [showLBS, setShowLBS] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [radius, setRadius] = useState('10');
  const [filteredShops, setFilteredShops] = useState<BikeShop[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);

    let results = bikeShops;

    if (searchItem.trim()) {
      results = results.filter(shop =>
        shop.inventory.some(item =>
          item.toLowerCase().includes(searchItem.toLowerCase())
        )
      );
    }

    if (searchCity.trim()) {
      results = results.filter(shop =>
        shop.city.toLowerCase().includes(searchCity.toLowerCase()) ||
        shop.zipCode.includes(searchCity)
      );
    }

    setFilteredShops(results);
  };

  const handleQuickSearch = (term: string) => {
    setSearchItem(term);
    setHasSearched(true);

    let results = bikeShops.filter(shop =>
      shop.inventory.some(item =>
        item.toLowerCase().includes(term.toLowerCase())
      )
    );

    if (searchCity.trim()) {
      results = results.filter(shop =>
        shop.city.toLowerCase().includes(searchCity.toLowerCase()) ||
        shop.zipCode.includes(searchCity)
      );
    }

    setFilteredShops(results);
  };

  const getGoogleMapsUrl = (shop: BikeShop) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${shop.name}, ${shop.address}, ${shop.city}, ${shop.zipCode}`
    )}`;
  };

  return (
    <div className="min-h-screen" style={{ background: '#0B0D10' }}>
      <RegisteredNavigation />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">The Paddock</h1>
          <p className="text-gray-400 text-base md:text-lg">What's happening in my community right now?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Your Next Ride</h2>
            <div className="space-y-4">
              {groupRides.map((ride) => (
                <div key={ride.id} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">{ride.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      ride.tier === 'A' ? 'bg-red-500/20 text-red-400' :
                      ride.tier === 'B' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>{ride.tier}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{ride.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{ride.time}</span>
                    <span>{ride.distance}</span>
                    <span>{ride.participants} riders</span>
                  </div>
                  <button className="mt-3 w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-cyan-400/30">
                    Join Ride
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">The Local Scene</h2>
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Active Matches</h3>
              <ActiveMatches />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Community Buzz</h3>
              <FlowBuzz />
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Your Race Calendar</h2>
            <div className="space-y-4">
              {headlineEvents.map((event) => (
                <div key={event.id} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-orange-400/50 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-500/20 rounded-lg p-2">
                      <Calendar className="text-orange-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{event.name}</h3>
                      <p className="text-gray-400 text-sm">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs">Race Day</p>
                      <p className="text-white text-sm font-medium">{event.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-400 text-lg font-bold">{event.countdown}</p>
                      <p className="text-gray-400 text-xs">to go</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-orange-400/30">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2">Support Your Local Bike Shop</h2>
              <p className="text-gray-300 text-sm md:text-base">Find gear and connect with shops in your community</p>
            </div>
            <button
              onClick={() => setShowLBS(!showLBS)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors font-medium whitespace-nowrap w-full md:w-auto"
            >
              {showLBS ? 'Close' : 'Search Shops'}
            </button>
          </div>
        </div>

        {showLBS && (
          <div className="mb-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-800">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h2 className="text-white text-xl md:text-2xl font-bold">Find Gear at Local Shops</h2>
                <button
                  onClick={() => setShowLBS(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    What are you looking for?
                  </label>
                  <input
                    type="text"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    placeholder="e.g., bike, shoes, helmet, gloves..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder="City or ZIP code"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Distance
                  </label>
                  <select
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="5">5 miles</option>
                    <option value="10">10 miles</option>
                    <option value="25">25 miles</option>
                    <option value="50">50 miles</option>
                    <option value="100">100 miles</option>
                  </select>
                </div>

                <div className="md:col-span-3 flex items-end">
                  <button
                    onClick={handleSearch}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Search size={20} />
                    Search Inventory
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-3">Quick search:</p>
                <div className="flex flex-wrap gap-2">
                  {commonSearchTerms.slice(0, 10).map((term) => (
                    <button
                      key={term}
                      onClick={() => handleQuickSearch(term)}
                      className="px-4 py-2 bg-gray-800/70 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 rounded-lg text-sm transition-colors border border-gray-700 hover:border-cyan-400"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {hasSearched && (
                <div className="mt-6">
                  <div className="mb-6">
                    <h3 className="text-white text-xl font-bold">
                      Search Results
                      {filteredShops.length > 0 && (
                        <span className="text-cyan-400 ml-2">
                          ({filteredShops.length} shop{filteredShops.length !== 1 ? 's' : ''} found)
                        </span>
                      )}
                    </h3>
                    {searchItem && (
                      <p className="text-gray-400 mt-2">
                        Showing shops with "{searchItem}" in stock
                        {searchCity && ` in ${searchCity}`}
                      </p>
                    )}
                  </div>

                  {filteredShops.length === 0 ? (
                    <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 text-center">
                      <p className="text-gray-400 text-lg">
                        No shops found matching your search criteria. Try adjusting your search terms or location.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredShops.map((shop) => (
                        <div
                          key={shop.id}
                          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-white text-lg font-bold mb-1">
                                {shop.name}
                              </h4>
                              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                <MapPin size={16} />
                                <span>{shop.address}, {shop.city}, {shop.zipCode}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                <Clock size={16} />
                                <span>{shop.hours}</span>
                              </div>
                              <p className="text-gray-400 text-sm">{shop.phone}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-gray-400 text-sm mb-2">In Stock:</p>
                            <div className="flex flex-wrap gap-2">
                              {shop.inventory.map((item) => (
                                <span
                                  key={item}
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    searchItem && item.toLowerCase().includes(searchItem.toLowerCase())
                                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
                                      : 'bg-gray-800 text-gray-400 border border-gray-700'
                                  }`}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <a
                              href={getGoogleMapsUrl(shop)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium border border-cyan-400/30"
                            >
                              <MapPin size={16} />
                              Get Directions
                            </a>
                            <button className="flex-1 bg-gray-800/70 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium border border-gray-700">
                              <ExternalLink size={16} />
                              View Inventory
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}
