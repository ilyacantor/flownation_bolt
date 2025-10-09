import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-400/30 transition-all">
      <div className="flex justify-center mb-4 text-orange-500">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold mb-2" style={{
          background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {value}
        </div>
        <div className="text-gray-400 text-sm" >
          {label}
        </div>
      </div>
    </div>
  );
}
