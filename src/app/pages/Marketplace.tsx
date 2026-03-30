import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { marketListings, buyers } from '../data/mockData';
import { Plus, Store, MapPin, Phone, Star, Package } from 'lucide-react';

export function Marketplace() {
  const [showNewListing, setShowNewListing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navigation />
      
      <main className="px-4 py-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Savdo va Bozor</h1>
          <p className="text-sm text-gray-600">Hosilingizni to'g'ridan-to'g'ri soting</p>
        </div>

        {/* New Listing Button */}
        <button
          onClick={() => setShowNewListing(!showNewListing)}
          className="w-full bg-green-600 active:bg-green-700 text-white text-lg font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={24} />
          Yangi E'lon Joylashtirish
        </button>

        {/* New Listing Form */}
        {showNewListing && (
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 space-y-3">
            <h2 className="text-lg font-bold text-gray-900">Yangi E'lon</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  Ekin turi
                </label>
                <input
                  type="text"
                  placeholder="Masalan: Bug'doy"
                  className="w-full text-base p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  Miqdori (tonna)
                </label>
                <input
                  type="number"
                  placeholder="15"
                  className="w-full text-base p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  Narx (tonna uchun)
                </label>
                <input
                  type="number"
                  placeholder="2500000"
                  className="w-full text-base p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                  Joylashuv
                </label>
                <input
                  type="text"
                  placeholder="1-Sektor"
                  className="w-full text-base p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <button className="w-full bg-green-600 active:bg-green-700 text-white text-base font-bold py-3 px-4 rounded-xl transition-colors">
              E'lonni Saqlash
            </button>
          </div>
        )}

        {/* My Listings */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-900">Mening E'lonlarim</h2>
          <div className="space-y-3">
            {marketListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl border-2 border-gray-200 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2.5 rounded-xl">
                      <Package className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{listing.crop}</h3>
                      <p className="text-xs text-gray-600">{listing.location}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      listing.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {listing.status === 'active' ? 'Faol' : 'Kutilmoqda'}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Miqdor:</span> {listing.quantity} tonna
                  </p>
                  <p className="text-base font-bold text-green-600">
                    {(listing.price / 1000000).toFixed(1)} mln so'm/tonna
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buyers and Stores */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-900">Xaridorlar va Do'konlar</h2>
          <div className="space-y-3">
            {buyers.map((buyer) => (
              <div
                key={buyer.id}
                className="bg-white rounded-2xl border-2 border-gray-200 p-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-100 p-2.5 rounded-xl flex-shrink-0">
                    <Store className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{buyer.name}</h3>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin size={14} />
                        <span>{buyer.distance} km masofada</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone size={14} />
                        <span>{buyer.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-500 fill-yellow-500" size={14} />
                        <span className="text-xs font-semibold text-gray-900">
                          {buyer.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                    buyer.type === 'collection_point'
                      ? 'bg-purple-100 text-purple-700'
                      : buyer.type === 'store'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {buyer.type === 'collection_point'
                    ? 'Tayyorlov Punkti'
                    : buyer.type === 'store'
                    ? "Do'kon"
                    : "To'g'ridan-to'g'ri"}
                </span>
                <button className="w-full bg-green-600 active:bg-green-700 text-white text-base font-bold py-3 px-4 rounded-xl transition-colors">
                  Taklif Yuborish
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}