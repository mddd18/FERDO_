import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { marketListings, buyers } from '../data/mockData';
import { Plus, Store, MapPin, Phone, ShieldCheck, Scale, Award, Send } from 'lucide-react';

export function Marketplace() {
  const [activeTab, setActiveTab] = useState<'listings' | 'buyers'>('listings');
  const [showForm, setShowForm] = useState(false); // Forma ochilishi uchun state

  const handleCall = (phone: string) => {
    alert(`Raqam terilmoqda: ${phone} 📞\n(Bu yerda telefon ilovasi ochiladi)`);
  };

  const handleOffer = (name: string) => {
    alert(`"${name}" korxonasiga hosilingiz bo'yicha taklif yuborildi! ✅`);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Yangi e'lon muvaffaqiyatli saqlandi va moderatsiyaga yuborildi! 🎉");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24 flex flex-col">
      {/* Header */}
      <div className="bg-white pt-6 pb-2 px-6 rounded-b-3xl shadow-sm border-b border-gray-100 mb-5 z-10 sticky top-0">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Savdo markazi</h1>
        
        <div className="flex w-full bg-gray-50 p-1 rounded-xl mb-4">
          <button onClick={() => setActiveTab('listings')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'listings' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            Mening E'lonlarim
          </button>
          <button onClick={() => setActiveTab('buyers')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'buyers' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            B2B Xaridorlar
          </button>
        </div>
      </div>
      
      <main className="px-4 flex-1">
        {activeTab === 'listings' ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            
            {/* Yangi E'lon Tugmasi */}
            {!showForm ? (
              <button onClick={() => setShowForm(true)} className="w-full bg-[#0B7A3F] active:scale-95 text-white font-medium text-base py-3.5 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 mb-6">
                <Plus size={20} /> Yangi hosilni sotuvga qo'yish
              </button>
            ) : (
              /* Yangi E'lon Formasi */
              <form onSubmit={submitForm} className="bg-white rounded-3xl shadow-md border border-gray-100 p-5 mb-6 animate-in fade-in zoom-in-95">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Yangi e'lon</h2>
                  <button type="button" onClick={() => setShowForm(false)} className="text-gray-400 font-bold bg-gray-50 px-3 py-1 rounded-lg">Bekor qilish</button>
                </div>
                <div className="space-y-3 mb-5">
                  <input required type="text" placeholder="Ekin nomi (Masalan: Lazer Sholi)" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-green-500" />
                  <div className="flex gap-3">
                    <input required type="number" placeholder="Hajmi (tonna)" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-green-500" />
                    <input required type="number" placeholder="1t narxi (so'm)" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-green-500" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-gray-900 active:bg-black text-white font-bold py-3.5 rounded-xl transition-colors">
                  E'lonni joylash
                </button>
              </form>
            )}

            {marketListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-50 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{listing.crop}</h3>
                    <p className="flex items-center gap-1 text-sm font-medium text-gray-500">
                      <MapPin size={14} className="text-red-500" /> {listing.location}
                    </p>
                  </div>
                  <span className="bg-green-50 text-[#0B7A3F] px-3 py-1 rounded-full text-xs font-bold border border-green-100">Faol</span>
                </div>
                
                <div className="bg-gray-50/50 p-4 border-b border-gray-50">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Award size={16} className="text-[#0B7A3F]" />
                    <span className="text-xs font-bold text-gray-700 uppercase">Sifat ko'rsatkichlari</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 bg-white p-2 rounded-lg border border-gray-100">{listing.quality}</p>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Sotiladigan miqdor</p>
                    <p className="text-base font-bold text-gray-900 flex items-center gap-1.5">
                      <Scale size={16} className="text-green-600" /> {listing.quantity} tonna
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
                      <ShieldCheck size={16} className="text-green-500" />
                    </div>
                    <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <MapPin size={12} /> Sizdan {buyer.distance} km uzoqlikda
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 mb-4 border border-gray-100">
                  <p className="text-xs font-bold text-gray-600 mb-1 uppercase">Xaridor Talablari:</p>
                  <p className="text-sm font-medium text-gray-800">{buyer.requirements}</p>
                </div>
                
                <div className="flex gap-3">
                  <button onClick={() => handleCall(buyer.phone)} className="flex-1 bg-white text-gray-900 font-bold py-3 rounded-xl active:bg-gray-50 transition-colors flex items-center justify-center gap-2 border-2 border-gray-100 shadow-sm active:scale-95">
                    <Phone size={18} className="text-blue-600" /> Qo'ng'iroq
                  </button>
                  <button onClick={() => handleOffer(buyer.name)} className="flex-1 bg-[#0B7A3F] text-white font-bold py-3 rounded-xl active:bg-green-800 transition-colors shadow-sm flex items-center justify-center gap-2 active:scale-95">
                    <Send size={18} /> Taklif berish
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
