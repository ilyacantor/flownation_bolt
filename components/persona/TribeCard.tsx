interface TribeCardProps {
  name: string;
  location: string;
  discipline: string;
  matchScore: number;
  badges?: string[];
}

export default function TribeCard({ name, location, discipline, matchScore, badges = [] }: TribeCardProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-5 flex items-center justify-between hover:border-cyan-400/50 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg" >
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-white font-bold mb-1" >
            {name}
          </h3>
          <p className="text-gray-400 text-sm mb-1" >
            {location}
          </p>
          <div className="flex gap-2">
            <span
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: 'rgba(0, 188, 212, 0.15)',
                color: '#06b6d4'
              }}
            >
              {discipline}
            </span>
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded text-xs font-medium"
                style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  color: '#8b5cf6'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors" >
        Connect
      </button>
    </div>
  );
}
