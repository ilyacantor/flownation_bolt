import { ReactNode } from 'react';

interface PadCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function PadCard({ title, children, className = '' }: PadCardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${className}`}
      style={{ background: '#20242A' }}
    >
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}
