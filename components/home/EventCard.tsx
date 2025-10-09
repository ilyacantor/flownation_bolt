import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  image: string;
  tag: string;
  title: string;
  date: string;
  location: string;
}

export default function EventCard({ image, tag, title, date, location }: EventCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-cyan-500 text-white px-3 py-1 rounded-lg text-xs font-semibold" >
          {tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-white text-base font-bold mb-3" >
          {title}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={16} className="text-cyan-400" />
            <span >{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin size={16} className="text-cyan-400" />
            <span >{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
