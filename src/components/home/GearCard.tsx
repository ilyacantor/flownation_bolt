import { Star } from 'lucide-react';

interface GearCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
}

export default function GearCard({ image, title, description, rating, reviewCount }: GearCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
      <div className="h-48 overflow-hidden bg-gray-800">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-white text-base font-bold mb-2" >
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed font-light">
          {description}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}
              />
            ))}
          </div>
          <span className="text-gray-400 text-xs" >
            {rating} ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}
