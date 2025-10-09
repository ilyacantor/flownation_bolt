interface NewsFeedCardProps {
  image: string;
  headline: string;
  time: string;
}

export default function NewsFeedCard({ image, headline, time }: NewsFeedCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all cursor-pointer group">
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-white text-sm font-semibold leading-snug mb-2 group-hover:text-cyan-400 transition-colors" >
          {headline}
        </p>
        <span className="text-gray-500 text-xs" >
          {time}
        </span>
      </div>
    </div>
  );
}
