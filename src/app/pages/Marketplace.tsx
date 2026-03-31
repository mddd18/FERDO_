import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { marketListings, buyers } from '../data/mockData';
import { Plus, Store, MapPin, Phone, ShieldCheck, Scale, Award } from 'lucide-react';

export function Marketplace() {
  const [activeTab, setActiveTab] = useState<'listings' | 'buyers'>('listings');

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24 flex flex-col">
      {/* Header */}
      <div className="bg-white pt-6 pb-2 px-6 rounded-b-3xl shadow-sm border-b border-gray-100 mb-5 z-10 sticky top-0">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Savdo markazi</h1>
        
        {/* Custom Tabs */}
        <div className="flex w-full bg-gray-50 p-1 rounded-xl mb-4">
          <button 
            onClick={() => setActiveTab('listings')}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'listings' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Mening E'lonlarim
          </button>
          <button 
            onClick={() => setActiveTab('buyers')}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'buyers' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            B2B Xaridorlar
          </button>
        </div>
      </div>
      
      <main className="px-4 flex-1">
        {activeTab === 'listings' ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <button className="w-full bg-[#0B7A3F] active:bg-green-800 text-white font-medium text-base py-3.5 rounded-2xl transition-colors shadow-sm flex items-center justify-center gap-2 mb-6">
              <Plus size={20} /> Yangi hosilni sotuvga qo'yish
            </button>

            {marketListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-50 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{listing.crop}</h3>
                    <p className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={14} /> {listing.location}
                    </p>
                  </div>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Faol</span>
                </div>
                
                {/* Sifat Ko'rsatkichlari */}
                <div className="bg-gray-50/50 p-4 border-b border-gray-50">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Award size={16} className="text-[#0B7A3F]" />
                    <span className="text-xs font-bold text-gray-700 uppercase">Sifat ko'rsatkichlari (Laboratoriya tahlili)</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">{listing.quality}</p>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Sotiladigan miqdor</p>
                    <p className="text-base font-bold text-gray-900 flex items-center gap-1.5">
                      <Scale size={16} className="text-gray-400" /> {listing.quantity} tonna
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5">1 tonna narxi</p>
                    <p className="text-lg font-bold text-[#0B7A3F]">
                      {(listing.price / 1000000).toFixed(1)} mln
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            {buyers.map((buyer) => (
              <div key={buyer.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Store className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-gray-900">{buyer.name}</h3>
                      <ShieldCheck size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <MapPin size={12} /> Sizdan {buyer.distance} km uzoqlikda
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 mb-4 border border-gray-100">
                  <p className="text-xs font-bold text-gray-600 mb-1 uppercase">Xaridor Talablari:</p>
                  <p className="text-sm text-gray-800">{buyer.requirements}</p>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-50 text-gray-900 font-bold py-3 rounded-xl active:bg-gray-100 transition-colors flex items-center justify-center gap-2 border border-gray-200">
                    <Phone size={18} /> Qo'ng'iroq
                  </button>
                  <button className="flex-1 bg-[#0B7A3F] text-white font-bold py-3 rounded-xl active:bg-green-800 transition-colors">
                    Taklif yuborish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
}
