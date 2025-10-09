interface EventCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  tags: string[];
}

export default function EventCard({ image, title, location, date, tags }: EventCardProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg font-bold mb-3" >
          {title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm" >
            <span>📍</span>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm" >
            <span>📅</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: 'rgba(0, 188, 212, 0.15)',
                color: '#06b6d4'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition-colors" >
            View Details
          </button>
          <button className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-white py-2 rounded-lg text-sm font-bold transition-colors" >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
