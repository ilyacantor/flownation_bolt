interface RideBuddyCardProps {
  name: string;
  location?: string;
  city?: string;
  interests?: string;
  rideType?: string;
  expLevel?: string;
  matchScore: number;
  avatar?: string;
}

export default function RideBuddyCard({ name, location, city, interests, rideType, expLevel, matchScore, avatar }: RideBuddyCardProps) {
  const displayLocation = city || location || "Bay Area";
  const displayInterests = interests || `${rideType || "Cycling"}${expLevel ? `, ${expLevel}` : ""}`;
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-bold" >
              {name.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="text-white text-lg font-bold mb-1" >
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-2" >
          {displayLocation}
        </p>
        <p className="text-gray-500 text-xs mb-4" >
          {displayInterests}
        </p>
        <div className="mb-4">
          <span className="text-cyan-400 text-sm font-semibold" >
            {matchScore}% Match
          </span>
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" >
          Connect
        </button>
      </div>
    </div>
  );
}
