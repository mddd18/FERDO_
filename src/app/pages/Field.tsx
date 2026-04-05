import { Search, Plus, Maximize, Droplets, Wheat, Leaf } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet marker ikonkasini to'g'irlash (Vite'da kerak)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// YAngi koordinatalar (Qoraqalpog'iston, Nukus hududi: 42°42'38.5"N 59°25'16.1"E)
const MAP_CENTER: [number, number] = [42.710694, 59.421139];

// Dala poligonlari (Markaz atrofida yasalgan konturlar)
const fieldAPolygon: [number, number][] = [
  [42.710, 59.418], [42.714, 59.418], [42.714, 59.423], [42.710, 59.423]
];
const fieldBPolygon: [number, number][] = [
  [42.706, 59.424], [42.710, 59.424], [42.710, 59.430], [42.706, 59.430]
];

export function Field() {
  const fields = [
    { id: 1, name: "A-Blok (Shimoliy)", crop: "Oq jo'xori", area: 45.5, status: 'Yaxshi', color: 'bg-green-500', icon: Wheat },
    { id: 2, name: "B-Blok (Sho'rxok)", crop: "Beda", area: 12.0, status: 'Kritik', color: 'bg-red-500', icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      <div className="bg-white pt-6 pb-4 px-6 rounded-b-3xl shadow-sm border-b border-gray-100 flex items-center justify-between mb-4 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Maydon xaritasi</h1>
          <p className="text-sm font-medium text-gray-500">Orolbo'yi hududi: 57.5 ga</p>
        </div>
        <button className="bg-[#0B7A3F] text-white p-2.5 rounded-xl shadow-md active:scale-95 transition-transform">
          <Plus size={24} />
        </button>
      </div>

      <main className="px-4 space-y-6">
        {/* HAQIQIY INTERAKTIV XARITA */}
        <div className="w-full h-72 rounded-3xl overflow-hidden shadow-md border border-gray-200 z-0 relative">
          <MapContainer 
            center={MAP_CENTER}
            zoom={14} 
            zoomControl={false}
            className="w-full h-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" // Sun'iy yo'ldosh ko'rinishi
            />
            {/* A-Blok */}
            <Polygon positions={fieldAPolygon} pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.4 }}>
              <Popup>A-Blok: Oq jo'xori (Holati yaxshi)</Popup>
            </Polygon>
            {/* B-Blok */}
            <Polygon positions={fieldBPolygon} pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.4 }}>
              <Popup>B-Blok: Sho'rlangan (Zudlik bilan choralar kerak)</Popup>
            </Polygon>
            {/* Datchik markeri */}
            <Marker position={[42.708, 59.427]}>
              <Popup>
                <div className="text-center">
                  <span className="font-bold">SMTC-3 Datchigi</span><br/>
                  <span className="text-red-500 text-xs">Sho'rlanish yuqori!</span>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
          
          {/* Lokatsiya ko'rsatkichi (floating tag) */}
          <div className="absolute bottom-3 left-3 z-[400] bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-gray-800">42°42'38.5"N 59°25'16.1"E</span>
          </div>
        </div>

        {/* Tezkor harakatlar */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-50 border border-blue-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 active:bg-blue-100 transition-colors">
            <Droplets size={24} className="text-blue-500" />
            <span className="text-sm font-bold text-blue-700">Sug'orishni yoqish</span>
          </button>
          <button className="bg-purple-50 border border-purple-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 active:bg-purple-100 transition-colors">
            <Maximize size={24} className="text-purple-500" />
            <span className="text-sm font-bold text-purple-700">Dron Analizi</span>
          </button>
        </div>

        {/* Ro'yxat */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 px-2 mb-3">Maydonlar tafsiloti</h2>
          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-inner ${field.color}`}>
                    <field.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{field.name}</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">{field.area} ga</span>
                      <span className="text-xs font-bold text-gray-700">{field.crop}</span>
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
