import { Navigation } from '../components/Navigation';
import { Thermometer, Droplets, Zap, MapPin } from 'lucide-react';
import { sensors } from '../data/mockData';
import { LineChart, Line, ResponsiveContainer } from 'recharts'; // Recharts qo'shildi

// Grafik uchun vaqtinchalik jonli ma'lumot (mock)
const sparklineData = [
  { val: 20 }, { val: 25 }, { val: 22 }, { val: 30 }, { val: 28 }, { val: 35 }, { val: 32 }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      <div className="bg-white pt-6 pb-4 px-6 rounded-b-3xl shadow-sm mb-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Mening maydonim</h1>
        <p className="text-sm text-gray-500">Datchiklardan olingan jonli holat dinamikasi</p>
      </div>
      
      <main className="px-4 space-y-5">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-5 border-b border-gray-50 pb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{sensor.name}</h2>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
                  <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${sensor.status === 'danger' ? 'bg-red-500 shadow-red-500/50 animate-pulse' : sensor.status === 'warning' ? 'bg-yellow-500 shadow-yellow-500/50' : 'bg-green-500 shadow-green-500/50'}`}></div>
                  ID: {sensor.id}
                </div>
              </div>
              <div className="text-xs text-gray-400 text-right bg-gray-50 px-3 py-1.5 rounded-lg">
                <p>Yangilandi:</p>
                <p className="font-bold text-gray-700">{sensor.lastUpdated}</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Har bir ko'rsatkich yoniga dinamik grafik qo'shildi */}
              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    <Thermometer size={16} className="text-red-500" /> Harorat
                  </span>
                  <span className="text-2xl font-black text-gray-900">{sensor.temperature}<span className="text-sm text-gray-400 font-medium"> °C</span></span>
                </div>
                <div className="w-1/2 h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <Line type="monotone" dataKey="val" stroke="#ef4444" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    <Droplets size={16} className="text-blue-500" /> Namlik
                  </span>
                  <span className="text-2xl font-black text-gray-900">{sensor.moisture}<span className="text-sm text-gray-400 font-medium"> %</span></span>
                </div>
                <div className="w-1/2 h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <Line type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex items-center justify-between bg-yellow-50/50 p-3 rounded-2xl border border-yellow-100/50">
                <div className="w-1/2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                    <Zap size={16} className="text-yellow-600" /> Sho'rlanish
                  </span>
                  <span className={`text-2xl font-black ${sensor.conductivity > 1500 ? 'text-red-600' : 'text-gray-900'}`}>{sensor.conductivity}<span className="text-xs text-gray-500 font-medium"> µS/cm</span></span>
                </div>
                <div className="w-1/2 h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <Line type="monotone" dataKey="val" stroke={sensor.conductivity > 1500 ? '#dc2626' : '#eab308'} strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <button className="mt-5 w-full bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-[#0B7A3F] flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl transition-colors border border-gray-100">
              <MapPin size={16} /> Xaritada joylashuvni ko'rish
            </button>
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
}
