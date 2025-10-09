import { Newspaper, ExternalLink } from 'lucide-react';
import { mockNewsItems } from '../../mock/flowhub_news';

export default function TailoredNewsfeed() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <Newspaper className="text-cyan-400" size={24} />
        <h2 className="text-white text-2xl font-bold">Tailored Newsfeed</h2>
      </div>

      <div className="space-y-4 mb-4">
        {mockNewsItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                {item.snippet && (
                  <p className="text-gray-400 text-sm mb-3">{item.snippet}</p>
                )}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{item.source}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <a
                href={item.url}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-500 italic text-center pt-2 border-t border-gray-800">
        Syndicated items from trusted publications (mocked)
      </div>
    </div>
  );
}
