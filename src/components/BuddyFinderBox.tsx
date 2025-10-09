import { useState, useEffect } from "react";

interface Buddy {
  name: string;
  location: string;
  type: string;
  pace: string;
  distance: string;
}

export default function BuddyFinderBox() {
  const [filters, setFilters] = useState({ location: "", type: "", pace: "", distance: "" });
  const [buddies, setBuddies] = useState<Buddy[]>([]);
  const [results, setResults] = useState<Buddy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/buddies.json")
      .then(r => r.json())
      .then(data => {
        setBuddies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = buddies.filter(b =>
      (!filters.location || b.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.type || b.type === filters.type) &&
      (!filters.pace || b.pace === filters.pace) &&
      (!filters.distance || b.distance === filters.distance)
    );
    const randomized = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    setResults(randomized);
  };

  if (loading) return <p className="text-center text-gray-500">Loading buddies...</p>;

  return (
    <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200 mx-auto">
      <h3 className="text-xl font-semibold text-cyan-700 mb-4">Find a Buddy</h3>

      <form onSubmit={handleSearch} className="flex flex-col space-y-3">
        <input
          placeholder="Location (e.g., San Francisco, Los Gatos)"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Any Ride Type</option>
          <option value="gravel">Gravel</option>
          <option value="road">Road</option>
          <option value="mountain">Mountain</option>
        </select>
        <select
          value={filters.pace}
          onChange={(e) => setFilters({ ...filters, pace: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Any Pace</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="fast">Fast</option>
        </select>
        <select
          value={filters.distance}
          onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Any Distance</option>
          <option value="short">Short (&lt;30 mi)</option>
          <option value="medium">Medium (30-70 mi)</option>
          <option value="long">Long (70+ mi)</option>
        </select>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-lg py-2 font-semibold hover:bg-orange-600 transition-colors mt-2"
        >
          Search
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-6 space-y-2">
          <h4 className="font-semibold text-gray-700 text-sm mb-3">Top Matches:</h4>
          {results.map((b, i) => (
            <div key={i} className="p-3 border border-cyan-200 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition-colors">
              <div className="font-semibold text-gray-900">{b.name}</div>
              <div className="text-sm text-gray-600 mt-1">
                {b.location} • {b.type} • {b.pace} pace • {b.distance} distance
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && filters.location === "" && filters.type === "" && filters.pace === "" && filters.distance === "" && (
        <p className="text-sm text-gray-500 mt-4 text-center">Set your filters and click Search to find buddies.</p>
      )}

      {results.length === 0 && (filters.location !== "" || filters.type !== "" || filters.pace !== "" || filters.distance !== "") && (
        <p className="text-sm text-gray-500 mt-4 text-center">No matches found. Try different filters.</p>
      )}
    </div>
  );
}
