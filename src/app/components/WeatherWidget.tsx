import { CloudSun, Droplets } from 'lucide-react';
import { weather } from '../data/mockData';

export function WeatherWidget() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CloudSun size={48} strokeWidth={2} />
          <div>
            <p className="text-3xl font-bold">{weather.temperature}°</p>
            <p className="text-sm opacity-90">{weather.condition}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <Droplets size={24} />
            <span className="text-2xl font-bold">{weather.precipitation}%</span>
          </div>
          <p className="text-xs opacity-90 mt-1">Yomg'ir</p>
        </div>
      </div>
    </div>
  );
}