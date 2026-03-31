import { Navigation } from '../components/Navigation';
import { Thermometer, Droplets, Zap, MapPin } from 'lucide-react';
import { sensors } from '../data/mockData';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="bg-white pt-6 pb-4 px-6 rounded-b-3xl shadow-sm mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Mening maydonim</h1>
        <p className="text-sm text-gray-500">Datchiklardan olingan jonli holat</p>
      </div>
      
      <main className="px-4 space-y-4">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{sensor.name}</h2>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <div className={`w-2 h-2 rounded-full ${sensor.status === 'danger' ? 'bg-red-500' : sensor.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                  ID: {sensor.id}
                </div>
              </div>
              <div className="text-xs text-gray-400 text-right">
                <p>So'nggi yangilanish:</p>
                <p className="font-medium text-gray-600">{sensor.lastUpdated}</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Temperatura */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 uppercase">
                    <Thermometer size={14} className="text-red-500" /> Temperatura
                  </span>
                  <span className="font-bold text-gray-900">{sensor.temperature} °C</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(sensor.temperature / 40) * 100}%` }}></div>
                </div>
              </div>

              {/* Namlik */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 uppercase">
                    <Droplets size={14} className="text-blue-500" /> Namlik
                  </span>
                  <span className="font-bold text-gray-900">{sensor.moisture} %</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${sensor.moisture}%` }}></div>
                </div>
              </div>

              {/* O'tkazuvchanlik */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 uppercase">
                    <Zap size={14} className="text-yellow-500" /> O'tkazuvchanlik
                  </span>
                  <span className="font-bold text-gray-900">{sensor.conductivity} µS/cm</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: `${Math.min((sensor.conductivity / 3000) * 100, 100)}%` }}></div>
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#0B7A3F] hover:underline">
              <MapPin size={16} /> Joylashuvni ko'rish
            </button>
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
}
