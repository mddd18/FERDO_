import { Navigation } from '../components/Navigation';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { 
  Maximize, Droplets, Wheat, Leaf, Navigation2, 
  Map as MapIcon, ChevronRight, AlertTriangle
} from 'lucide-react';

// Leaflet marker ikonkasini to'g'irlash (Vite'da kerak)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Qoraqalpog'iston koordinatalari (Nukus)
const MAP_CENTER: [number, number] = [42.710694, 59.421139];

const fieldAPolygon: [number, number][] = [
  [42.710, 59.418], [42.714, 59.418], [42.714, 59.423], [42.710, 59.423]
];
const fieldBPolygon: [number, number][] = [
  [42.706, 59.424], [42.710, 59.424], [42.710, 59.430], [42.706, 59.430]
];

export function Field() {
  const fields = [
    { 
      id: 1, 
      name: "1-Kontur (Shimoliy)", 
      crop: "Lazer Sholi", 
      area: 45.5, 
      status: 'Ajoyib', 
      color: 'from-emerald-400 to-green-600', 
      icon: Wheat,
      moisture: "82%"
    },
    { 
      id: 2, 
      name: "2-Kontur (Sho'rxok)", 
      crop: "Paxta", 
      area: 12.0, 
      status: 'Kritik holat', 
      color: 'from-rose-400 to-red-600', 
      icon: Leaf,
      moisture: "18%"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F6] pb-28 font-sans">
      
      {/* 1. PREMIUM HEADER */}
      <div className="bg-white pt-8 pb-6 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-b-[40px] relative z-20">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Maydon xaritasi</h1>
            <div className="flex items-center gap-1.5 mt-2 text-sm font-bold text-emerald-700 bg-emerald-50 w-fit px-3 py-1.5 rounded-xl border border-emerald-100">
              <Navigation2 size={16} /> 57.5 gektar (Orolbo'yi)
            </div>
          </div>
          <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner text-gray-400">
            <MapIcon size={26} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <main className="px-5 mt-[-20px] relative z-10 space-y-6">
        
        {/* 2. INTERAKTIV XARITA (Floating uslubda) */}
        <div className="w-full h-[340px] rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white relative mt-10">
          <MapContainer 
            center={MAP_CENTER}
            zoom={14} 
            zoomControl={false}
            className="w-full h-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            {/* A-Blok */}
            <Polygon positions={fieldAPolygon} pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.4 }}>
              <Popup><b className="font-sans">1-Kontur:</b> Lazer sholi</Popup>
            </Polygon>
            {/* B-Blok */}
            <Polygon positions={fieldBPolygon} pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.5 }}>
              <Popup><b className="font-sans text-red-600">2-Kontur: Sho'rlanish!</b></Popup>
            </Polygon>
            {/* Datchik markeri */}
            <Marker position={[42.708, 59.427]}>
              <Popup>
                <div className="text-center font-sans">
                  <span className="font-extrabold text-gray-900">SMTC-9042</span><br/>
                  <span className="text-rose-500 font-bold text-xs mt-1 block">Tuz darajasi baland</span>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
          
          {/* Xarita ustidagi Glassmorphism ma'lumot qutisi */}
          <div className="absolute top-4 right-4 z-[400] bg-white/80 backdrop-blur-md px-3 py-2 rounded-2xl shadow-lg border border-white flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
            <span className="text-xs font-extrabold text-gray-800">1 ta xavf</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-[400] bg-white/90 backdrop-blur-xl px-4 py-3 rounded-3xl shadow-xl border border-white/60 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Lokatsiya</span>
              <span className="text-sm font-extrabold text-gray-900">42°42'38"N 59°25'16"E</span>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
              <Maximize size={18} />
            </button>
          </div>
        </div>

        {/* 3. TEZKOR HARAKATLAR */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button className="bg-white hover:bg-blue-50 border border-transparent hover:border-blue-100 p-5 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center gap-3 transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Droplets size={24} className="text-blue-500" />
            </div>
            <span className="text-sm font-extrabold text-gray-800">Sug'orish</span>
          </button>
          <button className="bg-white hover:bg-purple-50 border border-transparent hover:border-purple-100 p-5 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center gap-3 transition-all group">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Maximize size={24} className="text-purple-500" />
            </div>
            <span className="text-sm font-extrabold text-gray-800">Dron Analizi</span>
          </button>
        </div>

        {/* 4. MAYDONLAR TAFSILOTI (Clean UI Cards) */}
        <div>
          <div className="flex items-center justify-between px-1 mb-4 mt-2">
            <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">Maydonlar tafsiloti</h2>
            <button className="text-green-600 text-sm font-bold flex items-center gap-1 hover:opacity-80">
              Barchasi <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="bg-white p-5 rounded-[28px] border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${field.color}`}>
                      <field.icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">{field.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{field.crop}</span>
                        <span className="text-xs font-bold text-gray-400">• {field.area} ga</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#F8FAFC] p-3 rounded-2xl border border-gray-50">
                  <div className="flex items-center gap-2">
                    {field.id === 2 ? (
                      <AlertTriangle size={16} className="text-rose-500" />
                    ) : (
                      <Droplets size={16} className="text-blue-500" />
                    )}
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Holati:</span>
                    <span className={`text-xs font-extrabold ${field.id === 2 ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {field.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-400 mr-1">Namlik:</span>
                    <span className="text-sm font-black text-gray-900">{field.moisture}</span>
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
