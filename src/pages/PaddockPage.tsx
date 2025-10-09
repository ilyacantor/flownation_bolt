import { useState } from 'react';
import RegisteredNavigation from '../components/RegisteredNavigation';
import Footer from '../components/Footer';
import YourNextRide from '../components/paddock/YourNextRide';
import MatchesCarousel from '../components/paddock/MatchesCarousel';
import ActiveMatches from '../components/paddock/ActiveMatches';
import EventFlow from '../components/paddock/EventFlow';
import FlowBuzz from '../components/paddock/FlowBuzz';
import { MapPin, Clock, ExternalLink, Search, X } from 'lucide-react';
import { bikeShops, commonSearchTerms, BikeShop } from '../data/bikeShops';

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

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">The Paddock</h1>
          <p className="text-gray-400 text-lg">What's happening in my community right now?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-3">
            <YourNextRide />
          </div>

          <div className="lg:col-span-3">
            <ActiveMatches />
          </div>

          <div className="lg:col-span-3">
            <MatchesCarousel />
          </div>

          <div className="lg:col-span-3">
            <EventFlow />
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setShowLBS(!showLBS)}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 rounded-lg transition-colors font-medium text-lg"
          >
            {showLBS ? 'Hide' : 'Support Your Local Bike Shop'}
          </button>
        </div>

        {showLBS && (
          <div className="mb-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-2xl font-bold">Find Gear at Local Shops</h2>
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

        <div className="w-full">
          <FlowBuzz />
        </div>
      </div>

      <Footer />
    </div>
  );
}
