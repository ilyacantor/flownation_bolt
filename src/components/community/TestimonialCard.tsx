interface TestimonialCardProps {
  name: string;
  discipline: string;
  quote: string;
  tag: string;
  tagColor?: 'blue' | 'orange' | 'cyan' | 'purple';
  image: string;
}

export default function TestimonialCard({ name, discipline, quote, tag, tagColor = 'blue', image }: TestimonialCardProps) {
  const tagColors = {
    blue: { bg: 'rgba(59, 130, 246, 0.2)', text: '#3b82f6' },
    orange: { bg: 'rgba(255, 111, 0, 0.2)', text: '#ff6f00' },
    cyan: { bg: 'rgba(6, 182, 212, 0.2)', text: '#06b6d4' },
    purple: { bg: 'rgba(139, 92, 246, 0.2)', text: '#8b5cf6' }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-400/30 transition-all h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30"
        />
        <div>
          <h3 className="text-white text-lg font-bold" >
            {name}
          </h3>
          <p className="text-gray-400 text-sm" >
            {discipline}
          </p>
        </div>
      </div>

      <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow italic" >
        "{quote}"
      </p>

      <div>
        <span
          className="inline-block px-4 py-2 rounded-full text-sm font-medium"
          style={{
            backgroundColor: tagColors[tagColor].bg,
            color: tagColors[tagColor].text
          }}
        >
          {tag}
        </span>
      </div>
    </div>
  );
}
