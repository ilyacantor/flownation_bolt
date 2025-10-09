interface ContentCardProps {
  image: string;
  tag?: string;
  title: string;
  description: string;
  buttonText: string;
  size?: 'large' | 'medium';
}

export default function ContentCard({ image, tag, title, description, buttonText, size = 'medium' }: ContentCardProps) {
  return (
    <div className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all ${size === 'large' ? 'col-span-1 md:col-span-2' : ''}`}>
      <div className={`${size === 'large' ? 'h-48' : 'h-40'} overflow-hidden`}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        {tag && (
          <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold mb-3" >
            {tag}
          </span>
        )}
        <h3 className="text-white text-lg font-bold mb-2" >
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed font-light">
          {description}
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
