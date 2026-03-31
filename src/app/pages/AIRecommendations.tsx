import { Navigation } from '../components/Navigation';
import { Sparkles, AlertTriangle, Sprout, ShieldAlert } from 'lucide-react';
import { aiRecommendations } from '../data/mockData';

export function AIRecommendations() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="bg-[#0B7A3F] pt-8 pb-6 px-6 rounded-b-3xl shadow-md text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">rAls Ko'makchi</h1>
        </div>
        <p className="text-green-50 text-sm">
          Maydoningizdagi jonli datchiklar tahlili va hosildorlikni oshirish bo'yicha aqlli maslahatlar.
        </p>
      </div>

      <main className="px-4 mt-6 space-y-5">
        <h2 className="text-lg font-bold text-gray-900 px-2">Kritik hududlar tahlili</h2>

        {aiRecommendations.map((rec, index) => (
          <div key={index} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50">
            {/* Muammo qismi */}
            <div className="flex items-start gap-3 mb-4 border-b border-gray-100 pb-4">
              <div className="bg-red-50 p-3 rounded-2xl flex-shrink-0">
                <ShieldAlert className="text-red-500" size={24} />
              </div>
              <div>
                <div className="inline-block px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 mb-1">
                  {rec.sensorId} hududi
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                  {rec.issue}
                </h3>
              </div>
            </div>

            {/* AI yechimi va maslahati */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-900">AI Xulosasi: </span>
                  {rec.recommendation}
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sprout size={18} className="text-[#0B7A3F]" />
                  <p className="text-sm font-bold text-[#0B7A3F]">Tavsiya etiladigan ekinlar:</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{rec.cropSuggestion}</p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={18} className="text-yellow-600" />
                  <p className="text-sm font-bold text-yellow-700">Zudlik bilan bajarilishi kerak:</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{rec.action}</p>
              </div>
            </div>

            {/* Harakat tugmasi */}
            <button className="w-full mt-5 bg-[#0B7A3F] active:bg-green-800 text-white font-medium py-3.5 rounded-xl transition-colors">
              Batafsil ko'rsatmalar olish
            </button>
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
}
