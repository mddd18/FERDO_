import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { marketListings, buyers } from '../data/mockData';
import { Plus, Store, MapPin, Phone, Star, Package } from 'lucide-react';

export function Marketplace() {
  const [showNewListing, setShowNewListing] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="bg-white pt-6 pb-4 px-6 rounded-b-3xl shadow-sm mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Savdo platformasi</h1>
        <p className="text-sm text-gray-500">Hosilingizni to'g'ridan-to'g'ri onlayn soting</p>
      </div>
      
      <main className="px-4 space-y-6">
        {/* Yangi E'lon Tugmasi */}
        <button
          onClick={() => setShowNewListing(!showNewListing)}
          className="w-full bg-[#0B7A3F] active:bg-green-800 text-white font-medium text-lg py-4 rounded-2xl transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <Plus size={24} />
          Yangi e'lon qo'shish
        </button>

        {/* Yangi E'lon Formasi */}
        {showNewListing && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-50 p-5 space-y-4 animate-in fade-in slide-in-from-top-4">
            <h2 className="text-lg font-bold text-gray-900">Yangi e'lon ma'lumotlari</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Ekin turi</label>
                <input
                  type="text"
                  placeholder="Masalan: Bug'doy"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Miqdori (tonna)</label>
                  <input
                    type="number"
                    placeholder="15"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Narx (1 tonna)</label>
                  <input
                    type="number"
                    placeholder="2 500 000"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Joylashuv</label>
                <input
                  type="text"
                  placeholder="Masalan: Samarqand, 1-sektor"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>
            <button className="w-full mt-2 bg-gray-900 active:bg-gray-800 text-white font-medium py-3.5 rounded-xl transition-colors">
              E'lonni Saqlash
            </button>
          </div>
        )}

        {/* Mening E'lonlarim */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-900 px-2">Mening E'lonlarim</h2>
          <div className="space-y-3">
            {marketListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl shadow-sm border border-gray-50 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-50 p-3 rounded-2xl">
                      <Package className="text-[#0B7A3F]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{listing.crop}</h3>
                      <p className="text-xs text-gray-500">{listing.location}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    listing.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {listing.status === 'active' ? 'Faol' : 'Kutilmoqda'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Miqdor:</span> {listing.quantity} tonna
                  </p>
                  <p className="text-base font-bold text-[#0B7A3F]">
                    {(listing.price / 1000000).toFixed(1)} mln so'm
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Xaridorlar va Do'konlar */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-900 px-2">Faol Xaridorlar</h2>
          <div className="space-y-3">
            {buyers.map((buyer) => (
              <div key={buyer.id} className="bg-white rounded-2xl shadow-sm border border-gray-50 p-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-blue-50 p-3 rounded-2xl flex-shrink-0">
                    <Store className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{buyer.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin size={14} />
                        <span>{buyer.distance} km</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Phone size={14} />
                        <span>{buyer.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400" size={14} />
                        <span className="text-xs font-bold text-gray-900">{buyer.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    buyer.type === 'collection_point' ? 'bg-purple-50 text-purple-700' : 
                    buyer.type === 'store' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                  }`}>
                    {buyer.type === 'collection_point' ? 'Tayyorlov Punkti' : 
                     buyer.type === 'store' ? "Do'kon" : "To'g'ridan-to'g'ri"}
                  </span>
                  
                  <button className="text-sm font-semibold text-[#0B7A3F] bg-green-50 px-4 py-2 rounded-xl active:bg-green-100 transition-colors">
                    Taklif Yuborish
                  </button>
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
