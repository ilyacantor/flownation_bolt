import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface TeaserCardProps {
  icon: ReactNode;
  title: string;
  highlightText: string;
  description: string;
  linkTo: string;
}

export default function TeaserCard({ icon, title, highlightText, description, linkTo }: TeaserCardProps) {
  return (
    <Link
      to={linkTo}
      className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-400/50 transition-all group"
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="text-cyan-400 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-white text-base md:text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-xl md:text-2xl font-bold text-orange-400 mb-2">
            {highlightText}
          </p>
          <p className="text-gray-300 text-xs md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
