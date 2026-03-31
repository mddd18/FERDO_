import { Search, Plus, Map, Maximize, Droplets, Wheat } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function Field() {
  const fields = [
    { id: 1, name: "Shimoliy blok 1", crop: "Intensiv Bug'doy", area: 45.5, status: 'Yaxshi', color: 'bg-green-500' },
    { id: 2, name: "Sho'rxok hudud (K-2)", crop: "Makkajo'xori", area: 12.0, status: 'Kritik', color: 'bg-red-500' },
    { id: 3, name: "Yangi o'zlashtirilgan", crop: "Beda", area: 20.8, status: "O'rtacha", color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="bg-white pt-6 pb-4 px-6 rounded-b-3xl shadow-sm border-b border-gray-100 flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Maydon xaritasi</h1>
          <p className="text-sm font-medium text-gray-500">Jami: 78.3 gektar</p>
        </div>
        <button className="bg-green-50 text-[#0B7A3F] p-2.5 rounded-xl active:bg-green-100 transition-colors">
          <Plus size={24} />
        </button>
      </div>

      <main className="px-4 space-y-6">
        {/* Karta (Map) Placeholder */}
        <div className="relative w-full h-48 bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3af9e116120?q=80&w=800&auto=format&fit=crop" 
            alt="Field Map" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          
          {/* Obyekt markerlari */}
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-lg"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 border-2 border-white rounded-full shadow-lg animate-pulse"></div>

          <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-gray-900 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Map size={14} /> To'liq ochish
          </button>
        </div>

        {/* Maydonlar ro'yxati */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 px-2 mb-3">Mening maydonlarim</h2>
          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between active:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-12 rounded-full ${field.color}`}></div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{field.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                        <Maximize size={12} /> {field.area} ga
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                        <Wheat size={12} className="text-[#0B7A3F]" /> {field.crop}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
