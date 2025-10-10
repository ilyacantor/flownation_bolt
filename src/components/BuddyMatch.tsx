import { useState } from "react";
import { mockRiders, demoUser } from "../data/mockRiders";
import { getActiveMatches, getPassiveMatches } from "../utils/BuddyMatchEngine";
import RideBuddyCard from "./home/RideBuddyCard";
import { Search, MapPin, Mountain, Target, Grid, MessageCircle } from "lucide-react";

interface BuddyMatchProps {
  userId?: string;
}

export default function BuddyMatch({ userId }: BuddyMatchProps) {
  const user = userId ? mockRiders.find(r => r.id === userId) || demoUser : demoUser;
  const [tab, setTab] = useState("active");
  const [viewMode, setViewMode] = useState<"cards" | "grid">("cards");
  const [visibleCount, setVisibleCount] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [rideTypeFilter, setRideTypeFilter] = useState("");
  const [paceZoneFilter, setPaceZoneFilter] = useState("");
  const matches = tab === "active" ? getActiveMatches(user) : getPassiveMatches(user);

  const filteredMatches = matches.filter(match => {
    const matchesSearch = !searchQuery || match.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || match.city.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesRideType = !rideTypeFilter || match.rideType === rideTypeFilter;
    const matchesPaceZone = !paceZoneFilter || match.paceZone.toString() === paceZoneFilter;
    return matchesSearch && matchesLocation && matchesRideType && matchesPaceZone;
  });

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    setVisibleCount(50);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 50);
  };

  const handleSendDM = (rider: any) => {
    console.log(`Sending DM to ${rider.name}`);
  };

  return (
    <section className="mb-12">
      <div className="mb-8 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Filter by location..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div className="relative">
            <Mountain className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={rideTypeFilter}
              onChange={(e) => setRideTypeFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
            >
              <option value="">All Ride Types</option>
              <option value="Road">Road</option>
              <option value="Mountain">Mountain</option>
              <option value="Gravel">Gravel</option>
            </select>
          </div>
          <div className="relative">
            <Target className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={paceZoneFilter}
              onChange={(e) => setPaceZoneFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
            >
              <option value="">All Pace Zones</option>
              <option value="1">Zone 1</option>
              <option value="2">Zone 2</option>
              <option value="3">Zone 3</option>
              <option value="4">Zone 4</option>
              <option value="5">Zone 5</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <button
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === "active"
                ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
            onClick={() => handleTabChange("active")}
          >
            Active Search ({getActiveMatches(user).length})
          </button>
          <button
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === "passive"
                ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
            onClick={() => handleTabChange("passive")}
          >
            All Matches ({getPassiveMatches(user).length})
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              viewMode === "cards"
                ? "bg-orange-600 hover:bg-orange-500 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
            onClick={() => setViewMode("cards")}
          >
            <MessageCircle size={18} />
            Cards
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              viewMode === "grid"
                ? "bg-orange-600 hover:bg-orange-500 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
            onClick={() => setViewMode("grid")}
          >
            <Grid size={18} />
            Grid View
          </button>
        </div>
      </div>

      {filteredMatches.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No matches found. Try adjusting your preferences or check back later!
          </p>
        </div>
      ) : viewMode === "cards" ? (
        <>
          <div className="mb-6">
            <p className="text-gray-400 text-sm">
              Showing {Math.min(visibleCount, filteredMatches.length)} of {filteredMatches.length} matches
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.slice(0, visibleCount).map((r) => (
              <div
                key={r.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-4 p-6">
                  <div className="relative">
                    <img
                      src={r.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=1e293b&color=fff&size=80`}
                      alt={r.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white truncate mb-1">{r.name}</h3>
                    <div className="text-sm text-gray-400 mb-2">
                      {r.city} • {r.team || r.rideType}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-400 mb-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Matched {Math.floor(Math.random() * 5) + 1} days ago
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleSendDM(r)}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle size={20} />
                  Send DM
                </button>
              </div>
            ))}
          </div>
          {visibleCount < filteredMatches.length && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all"
              >
                Load More ({Math.min(50, filteredMatches.length - visibleCount)} more)
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-400 text-sm">
              Showing {Math.min(visibleCount, filteredMatches.length)} of {filteredMatches.length} matches
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredMatches.slice(0, visibleCount).map((r) => (
              <div
                key={r.id}
                className={`relative ${
                  r.matchScore >= 90 ? "ring-2 ring-cyan-400 rounded-2xl" : ""
                }`}
              >
                {r.matchScore >= 90 && (
                  <div className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
                    Best Match
                  </div>
                )}
                <RideBuddyCard
                  name={r.name}
                  city={r.city}
                  rideType={r.rideType}
                  expLevel={r.expLevel}
                  matchScore={r.matchScore}
                  avatar={r.avatar}
                />
              </div>
            ))}
          </div>
          {visibleCount < filteredMatches.length && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all"
              >
                Load More ({Math.min(50, filteredMatches.length - visibleCount)} more)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
