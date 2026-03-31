import { Search, Plus, Trees } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function Field() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24 flex flex-col">
      {/* Header */}
      <div className="pt-6 pb-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Maydon</h1>
        <button className="p-2 text-gray-900 active:bg-gray-100 rounded-full transition-colors">
          <Plus size={28} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Qidiruv"
            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-4 pr-10 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-100 shadow-sm"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Empty State Content */}
      <main className="px-4 flex-1 flex flex-col items-center justify-center mt-20">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <Trees size={40} className="text-[#0B7A3F]" strokeWidth={1.5} />
        </div>
        
        <p className="text-gray-500 text-center text-sm mb-8 px-4 leading-relaxed">
          Hozircha maydonlar yo'q, birinchisini qo'shing
        </p>

        <button className="w-full bg-[#0B7A3F] active:bg-green-800 text-white font-medium text-lg py-4 rounded-2xl transition-colors shadow-sm">
          Qo'shish
        </button>
      </main>

      <Navigation />
    </div>
  );
}
