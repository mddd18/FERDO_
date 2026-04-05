import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { marketListings, buyers } from '../data/mockData';
import { 
  ShoppingBag, Building2, MapPin, Phone, 
  Star, TrendingUp, Plus, CheckCircle2, ChevronRight 
} from 'lucide-react';

export function Marketplace() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'listings'>('buyers');

  return (
    <div className="min-h-screen bg-[#F4F7F6] pb-28 font-sans">
      
      {/* 1. PREMIUM HEADER */}
      <div className="bg-white pt-8 pb-6 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-b-[40px] relative z-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Agro Bozor</h1>
            <p className="text-sm font-medium text-gray-500 mt-1">Vositachilarsiz to'g'ridan-to'g'ri savdo</p>
          </div>
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-inner text-emerald-600">
            <ShoppingBag size={26} strokeWidth={1.5} />
          </div>
        </div>

        {/* 2. ZAMONAVIY TAB (Segmented Control) */}
        <div className="bg-gray-100/80 p-1.5 rounded-2xl flex relative">
          <button 
            onClick={() => setActiveTab('buyers')}
            className={`flex-1 py-2.5 text-sm font-extrabold rounded-xl transition-all duration-300 z-10 ${
              activeTab === 'buyers' ? 'text-gray-900 shadow-sm bg-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Faol xaridorlar
          </button>
          <button 
            onClick={() => setActiveTab('listings')}
            className={`flex-1 py-2.5 text-sm font-extrabold rounded-xl transition-all duration-300 z-10 ${
              activeTab === 'listings' ? 'text-gray-900 shadow-sm bg-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mening e'lonlarim
          </button>
        </div>
      </div>

      <main className="px-5 mt-6 space-y-5">
        
        {/* =========================================
            XARIDORLAR (ZAVOD VA EKSPORTYORLAR) QISMI
            ========================================= */}
        {activeTab === 'buyers' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center px-1 mb-2">
              <h2 className="text-sm font-extrabold text-gray-500 uppercase tracking-wider">Top xaridorlar (Nukus)</h2>
            </div>
            
            {buyers.map((buyer) => (
              <div key={buyer.id} className="bg-white rounded-[28px] p-5 border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                
                {/* Sarlavha qismi */}
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 rounded-[18px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Building2 size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-extrabold text-gray-900 leading-tight">{buyer.name}</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-500">
                        <MapPin size={12} className="text-gray-400" /> {buyer.distance} km
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star size={12} fill="currentColor" /> {buyer.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Talab qismi (Glassmorphism effect) */}
                <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-gray-50 mb-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">Sotib oladi:</span>
                  <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                    {buyer.requirements}
                  </p>
                </div>

                {/* Harakat tugmasi */}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 transition-all active:scale-[0.98]">
                  <Phone size={18} /> Telefon orqali bog'lanish
                </button>
              </div>
            ))}
          </div>
        )}


        {/* =========================================
            MENING E'LONLARIM (SOTISH) QISMI
            ========================================= */}
        {activeTab === 'listings' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center px-1 mb-2">
              <h2 className="text-sm font-extrabold text-gray-500 uppercase tracking-wider">Sotuvdagi hosilim</h2>
            </div>

            {marketListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-[28px] p-5 border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1">
                      <CheckCircle2 size={12} /> Faol
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-900 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>

                <h3 className="text-lg font-extrabold text-gray-900 mb-4">{listing.crop}</h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-gray-50">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Hajmi</span>
                    <span className="text-base font-black text-gray-900">{listing.quantity} <span className="text-sm text-gray-500 font-bold">tonna</span></span>
                  </div>
                  <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-gray-50">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Narxi (1 kg)</span>
                    <span className="text-base font-black text-green-600">{(listing.price / 1000).toLocaleString()} <span className="text-sm text-gray-500 font-bold">so'm</span></span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <TrendingUp size={14} className="text-blue-500" />
                  {listing.quality}
                </div>
              </div>
            ))}

            {/* Yangi E'lon qo'shish tugmasi */}
            <button className="w-full mt-4 bg-white border-2 border-dashed border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-600 hover:text-green-700 font-extrabold py-5 rounded-[28px] flex flex-col items-center justify-center gap-2 transition-all">
              <div className="bg-gray-100 p-2 rounded-full">
                <Plus size={24} />
              </div>
              Yangi hosilni bozorga chiqarish
            </button>
          </div>
        )}

      </main>
      
      <Navigation />
    </div>
  );
}
