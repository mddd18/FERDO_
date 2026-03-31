import { Search, Plus, Map, Maximize, Droplets, Wheat, Leaf, MapPin } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function Field() {
  const fields = [
    { id: 1, name: "A-Blok (Shimoliy)", crop: "Intensiv Bug'doy", area: 45.5, plantedDate: '15-Oktabr', status: 'Yaxshi', color: 'bg-green-500', icon: Wheat },
    { id: 2, name: "B-Blok (Sho'rxok)", crop: "Makkajo'xori", area: 12.0, plantedDate: '10-Aprel', status: 'Kritik', color: 'bg-red-500', icon: Leaf },
    { id: 3, name: "C-Blok (Janubiy)", crop: "Beda", area: 20.8, plantedDate: '01-Mart', status: "O'rtacha", color: 'bg-yellow-500', icon: Droplets },
  ];

  const handleAddField = () => {
    alert("Yangi maydon qo'shish oynasi ochildi! (Kordinatalarni kiriting)");
  };

  const handleAction = (actionName: string) => {
    alert(`${actionName} tizimi ishga tushirildi! 🌱`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="bg-white pt-6 pb-4 px-6 rounded-b-3xl shadow-sm border-b border-gray-100 flex items-center justify-between mb-4 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Maydon xaritasi</h1>
          <p className="text-sm font-medium text-gray-500">Jami: 78.3 gektar yer</p>
        </div>
        <button onClick={handleAddField} className="bg-[#0B7A3F] text-white p-2.5 rounded-xl shadow-md active:bg-green-800 transition-transform active:scale-95">
          <Plus size={24} />
        </button>
      </div>

      <main className="px-4 space-y-6">
        {/* Interaktiv Xarita (Zonalari bilan) */}
        <div className="relative w-full h-56 bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3af9e116120?q=80&w=800&auto=format&fit=crop" 
            alt="Field Map" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* A-Blok hududi (Bug'doy) */}
          <div className="absolute top-4 left-4 w-32 h-24 border-2 border-green-500 bg-green-500/20 rounded-xl flex items-center justify-center cursor-pointer active:bg-green-500/40 transition-colors" onClick={() => alert("A-Blok: 45.5 gektar Bug'doy")}>
            <span className="text-white font-bold drop-shadow-md flex items-center gap-1"><Wheat size={16}/> A-Blok</span>
          </div>

          {/* B-Blok hududi (Makkajo'xori - Kritik) */}
          <div className="absolute bottom-4 right-4 w-24 h-20 border-2 border-red-500 bg-red-500/30 rounded-xl flex items-center justify-center cursor-pointer animate-pulse" onClick={() => alert("B-Blok: 12 gektar Makkajo'xori (Suv yetishmayapti!)")}>
            <span className="text-white font-bold drop-shadow-md flex items-center gap-1"><Leaf size={16}/> B-Blok</span>
          </div>

          <button className="absolute bottom-3 left-3 bg-white/95 backdrop-blur text-gray-900 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-transform">
            <Map size={16} className="text-[#0B7A3F]" /> 3D Formatda ochish
          </button>
        </div>

        {/* Tezkor harakatlar tugmalari */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => handleAction("Avtomatik sug'orish")} className="bg-blue-50 border border-blue-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 active:bg-blue-100 transition-colors">
            <Droplets size={24} className="text-blue-500" />
            <span className="text-sm font-bold text-blue-700">Sug'orishni yoqish</span>
          </button>
          <button onClick={() => handleAction("Dron orqali analiz")} className="bg-purple-50 border border-purple-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 active:bg-purple-100 transition-colors">
            <Maximize size={24} className="text-purple-500" />
            <span className="text-sm font-bold text-purple-700">Dron Analizi</span>
          </button>
        </div>

        {/* Maydonlar tafsiloti ro'yxati */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 px-2 mb-3">Maydonlar tafsiloti</h2>
          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.id} onClick={() => alert(`${field.name} to'liq ma'lumoti ochildi.`)} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-inner ${field.color}`}>
                    <field.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{field.name}</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
                        {field.area} ga
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-700">
                        {field.crop}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 mb-1">Ekilgan sana</p>
                  <p className="text-xs font-bold text-gray-800">{field.plantedDate}</p>
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
