import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  unit: string;
  sublabel: string;
  accentColor?: string;
}

export default function MetricCard({ icon: Icon, label, value, unit, sublabel, accentColor = '#06b6d4' }: MetricCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${accentColor}20` }}>
          <Icon size={24} style={{ color: accentColor }} />
        </div>
        <span className="text-gray-400 text-sm" >
          {label}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-4xl font-bold text-white" >
          {value}
        </span>
        <span className="text-2xl text-gray-400 ml-1" >
          {unit}
        </span>
      </div>
      <p className="text-gray-500 text-xs" >
        {sublabel}
      </p>
    </div>
  );
}
