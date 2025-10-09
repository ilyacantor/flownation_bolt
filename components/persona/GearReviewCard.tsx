interface GearReviewCardProps {
  image: string;
  title: string;
  description: string;
}

export default function GearReviewCard({ image, title, description }: GearReviewCardProps) {
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
        <h3 className="text-white text-lg font-bold mb-2" >
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed" >
          {description}
        </p>
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-2 transition-colors" >
          Read Review
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
