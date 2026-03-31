import { Pill, FlaskConical } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function AgroApteka() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center">Agroapteka</h1>
      </div>

      <main className="px-4 space-y-4">
        {/* Preparatlar kartasi */}
        <button className="w-full bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 shadow-sm border border-gray-50 active:bg-gray-50 transition-colors">
          <div className="w-14 h-14 bg-[#0B7A3F] rounded-full flex items-center justify-center text-white shadow-md">
            <Pill size={28} strokeWidth={2} />
          </div>
          <span className="text-lg font-bold text-gray-900">Preparatlar</span>
        </button>

        {/* O'g'itlar kartasi */}
        <button className="w-full bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 shadow-sm border border-gray-50 active:bg-gray-50 transition-colors">
          <div className="w-14 h-14 bg-[#0B7A3F] rounded-full flex items-center justify-center text-white shadow-md">
            <FlaskConical size={28} strokeWidth={2} />
          </div>
          <span className="text-lg font-bold text-gray-900">O'g'itlar</span>
        </button>
      </main>

      <Navigation />
    </div>
  );
}
