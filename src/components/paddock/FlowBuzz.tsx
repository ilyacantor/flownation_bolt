import { TrendingUp, MessageSquare, MapPin, Calendar } from 'lucide-react';
import PadCard from './PadCard';
import { localEvents, nationalBuzz, communityChatter } from '../../mock/paddock_buzz';

export default function FlowBuzz() {
  return (
    <PadCard title="FlowBuzz" className="w-full">
      <div className="flex overflow-x-auto gap-6 pb-4 -mx-2 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="flex-shrink-0 w-80 snap-start">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar size={18} style={{ color: '#ff7a1a' }} />
            Local Events
          </h3>
          <div className="space-y-3">
            {localEvents.map((event, i) => (
              <div key={i} className="border-l-2 pl-3" style={{ borderColor: '#ff7a1a' }}>
                <h4 className="text-white font-medium text-sm">{event.title}</h4>
                <p className="text-gray-400 text-xs">{event.date}</p>
                <a
                  href={event.link}
                  className="text-xs hover:underline"
                  style={{ color: '#ff7a1a' }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 w-80 snap-start">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp size={18} style={{ color: '#ff7a1a' }} />
            National Buzz
          </h3>
          <div className="space-y-3">
            {nationalBuzz.map((item, i) => (
              <div key={i} className="pb-3 border-b border-gray-700 last:border-0">
                <h4 className="text-white font-medium text-sm mb-1">{item.headline}</h4>
                <p className="text-gray-400 text-xs mb-2">{item.summary}</p>
                <a
                  href={item.link}
                  className="text-xs hover:underline"
                  style={{ color: '#ff7a1a' }}
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 w-80 snap-start">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MessageSquare size={18} style={{ color: '#ff7a1a' }} />
            Community Chatter
          </h3>
          <div className="space-y-3">
            {communityChatter.map((item, i) => (
              <div key={i} className="pb-3 border-b border-gray-700 last:border-0">
                <div className="flex items-start gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0" style={{ background: '#ff7a1a' }}>
                    <img
                      src={item.avatar || 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100'}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{item.author}</p>
                    <p className="text-gray-400 text-xs">{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 w-80 snap-start">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MapPin size={18} style={{ color: '#ff7a1a' }} />
            Trending Routes
          </h3>
          <p className="text-gray-500 text-sm italic">Coming soon - discover the hottest routes in your area</p>
        </div>
      </div>
    </PadCard>
  );
}
