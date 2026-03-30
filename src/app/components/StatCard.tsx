import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  status: 'good' | 'warning' | 'danger';
}

export function StatCard({ title, value, unit, icon: Icon, status }: StatCardProps) {
  const statusColors = {
    good: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
  };

  const iconColors = {
    good: 'text-green-600 bg-green-100',
    warning: 'text-yellow-600 bg-yellow-100',
    danger: 'text-red-600 bg-red-100',
  };

  const textColors = {
    good: 'text-green-900',
    warning: 'text-yellow-900',
    danger: 'text-red-900',
  };

  return (
    <div className={`rounded-2xl border-2 p-4 ${statusColors[status]}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2.5 rounded-xl ${iconColors[status]}`}>
          <Icon size={28} strokeWidth={2.5} />
        </div>
        <p className={`text-base font-semibold ${textColors[status]}`}>{title}</p>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`text-4xl font-bold ${textColors[status]}`}>{value}</span>
        <span className={`text-xl font-semibold ${textColors[status]}`}>{unit}</span>
      </div>
    </div>
  );
}