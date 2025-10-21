import { useState, useMemo } from "react";
import { mockRiders, demoUser } from "../data/mockRiders";
import { getActiveMatches, getPassiveMatches } from "../utils/BuddyMatchEngine";

interface BuddyMatchFilters {
  searchQuery: string;
  locationFilter: string;
  rideTypeFilter: string;
  paceZoneFilter: string;
}

export function useBuddyMatch(userId?: string) {
  const user = userId ? mockRiders.find(r => r.id === userId) || demoUser : demoUser;
  const [tab, setTab] = useState("active");
  const [viewMode, setViewMode] = useState<"cards" | "grid">("cards");
  const [visibleCount, setVisibleCount] = useState(50);
  const [filters, setFilters] = useState<BuddyMatchFilters>({
    searchQuery: "",
    locationFilter: "",
    rideTypeFilter: "",
    paceZoneFilter: "",
  });

  const matches = useMemo(() => {
    return tab === "active" ? getActiveMatches(user) : getPassiveMatches(user);
  }, [tab, user]);

  const filteredMatches = useMemo(() => {
    return matches.filter(match => {
      const matchesSearch = !filters.searchQuery || match.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesLocation = !filters.locationFilter || match.city.toLowerCase().includes(filters.locationFilter.toLowerCase());
      const matchesRideType = !filters.rideTypeFilter || match.rideType === filters.rideTypeFilter;
      const matchesPaceZone = !filters.paceZoneFilter || match.paceZone.toString() === filters.paceZoneFilter;
      return matchesSearch && matchesLocation && matchesRideType && matchesPaceZone;
    });
  }, [matches, filters]);

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    setVisibleCount(50);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 50);
  };

  const updateFilter = (key: keyof BuddyMatchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return {
    user,
    tab,
    viewMode,
    visibleCount,
    filters,
    matches,
    filteredMatches,
    setViewMode,
    handleTabChange,
    loadMore,
    updateFilter,
    activeMatchCount: getActiveMatches(user).length,
    passiveMatchCount: getPassiveMatches(user).length,
  };
}
