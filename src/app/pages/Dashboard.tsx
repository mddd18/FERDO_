import { Navigation } from '../components/Navigation';
import { 
  Thermometer, Droplets, Zap, Wind, CloudRain, 
  Sun, ChevronRight, AlertCircle, Leaf, Cloud
} from 'lucide-react';
import { sensors } from '../data/mockData';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] pb-28 font-sans">
      
      {/* 1. AGRO OB-HAVO (Premium Header) */}
      <div className="bg-white rounded-b-[40px] pt-8 pb-8 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Xush kelibsiz!</h1>
            {/* O'ZGARISH: Lokatsiya "Sizning yeringiz" qilib qo'yildi */}
            <p className="text-sm font-medium text-gray-500 mt-1">Sizning yeringiz</p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
            <UserAvatarPlaceholder />
          </div>
        </div>

        {/* Ob-havo Kartochkasi (YANGILANDI) */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[28px] p-5 text-white shadow-lg shadow-blue-500/30 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-300 opacity-20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Cloud size={48} className="text-white drop-shadow-md" strokeWidth={1.5} />
              <div>
                <span className="text-4xl font-black tracking-tighter">22°</span>
                <p className="text-blue-100 font-medium text-sm mt-1">Yengil bulutli, 0% yog'in</p>
              </div>
            </div>
            <div className="space-y-2 text-right">
              <div className="flex items-center justify-end gap-1.5 text-blue-50 text-sm font-medium">
                <Wind size={16} /> 15 km/s
              </div>
              <div className="flex items-center justify-end gap-1.5 text-blue-50 text-sm font-medium">
                <CloudRain size={16} /> Namlik: 55%
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="px-5 mt-6 space-y-6">
        
        {/* 2. TEZKOR XABARNOMA (Smart Alert) */}
        <div className="bg-rose-50 border border-rose-100/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
          <div className="bg-white p-2 rounded-full shadow-sm text-rose-500 shrink-0">
            <AlertCircle size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-rose-800">Sho'rlanish xavfi (3-Kontur)</h4>
            <p className="text-xs text-rose-600 mt-1 font-medium leading-relaxed">
              Tuz darajasi 7059 µS/cm ga yetdi. Makkajo'xori hosiliga jiddiy xavf bor. AI tavsiyasini ko'ring.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">Maydonlar holati</h2>
          <button className="text-green-600 text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
            Barchasi <ChevronRight size={16} />
          </button>
        </div>

        {/* 3. DATCHIK KARTOCHKALARI */}
        <div className="space-y-4">
          {sensors.map((sensor) => (
            <div key={sensor.id} className="bg-white rounded-[28px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${sensor.status === 'danger' ? 'bg-rose-500 animate-pulse shadow-lg shadow-rose-500/50' : sensor.status === 'warning' ? 'bg-amber-400' : 'bg-emerald-500'}`}></span>
                    <h3 className="text-base font-extrabold text-gray-900">{sensor.name}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg w-fit">
                    <Leaf size={12} className="text-green-600" />
                    <span className="text-xs font-bold text-gray-600">{sensor.cropType}</span>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded-md">
                  {sensor.lastUpdated}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-gray-50">
                  <div className="flex items-center gap-1.5 text-blue-500 mb-2">
                    <Droplets size={16} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Namlik</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-gray-900">{sensor.moisture}</span>
                    <span className="text-xs font-bold text-gray-400">%</span>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-gray-50">
                  <div className="flex items-center gap-1.5 text-orange-500 mb-2">
                    <Thermometer size={16} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Harorat</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-gray-900">{sensor.temperature}</span>
                    <span className="text-xs font-bold text-gray-400">°C</span>
                  </div>
                </div>

                <div className={`rounded-2xl p-3 border ${sensor.conductivity > 1500 ? 'bg-rose-50 border-rose-100' : 'bg-[#F8FAFC] border-gray-50'}`}>
                  <div className={`flex items-center gap-1.5 mb-2 ${sensor.conductivity > 1500 ? 'text-rose-600' : 'text-amber-500'}`}>
                    <Zap size={16} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Tuz</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xl font-black ${sensor.conductivity > 1500 ? 'text-rose-700' : 'text-gray-900'}`}>{sensor.conductivity}</span>
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 mt-0.5">µS/cm</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}

function UserAvatarPlaceholder() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
