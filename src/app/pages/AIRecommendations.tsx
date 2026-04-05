import { Navigation } from '../components/Navigation';
import { Sparkles, AlertTriangle, Stethoscope, Activity, TrendingUp, CheckCircle2 } from 'lucide-react';
import { aiRecommendations } from '../data/mockData';

export function AIRecommendations() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      <div className="bg-[#0B7A3F] pt-8 pb-6 px-6 rounded-b-3xl shadow-md text-white relative overflow-hidden">
        {/* Orqa fondagi effekt */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="flex items-center gap-3 mb-2 relative z-10">
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">AI Yordamchi</h1>
        </div>
        <p className="text-green-50 text-sm opacity-90 leading-relaxed relative z-10">
          Maydoningizdagi muammolarni aniqlovchi va hosildorlikni saqlab qolish uchun professional agronomik yechimlar.
        </p>
      </div>

      <main className="px-4 mt-8 space-y-6">
        <h2 className="text-lg font-bold text-gray-900 px-2">Tezkor tahlil xulosalari</h2>

        {aiRecommendations.map((rec, index) => (
          // ✨ PREMIUM GLASSMORPHISM KARTOCHKASI ✨
          <div key={index} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-900/20 p-1 backdrop-blur-xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] group hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] transition-all duration-300">
            {/* Glow effekti */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            <div className="bg-white/80 backdrop-blur-md rounded-[22px] p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-3 rounded-2xl ${rec.urgency === 'high' ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30'}`}>
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-gray-800 bg-white shadow-sm px-2.5 py-1 rounded-lg">
                      {rec.sensorId}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {rec.issue}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-xl border border-white/50 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-gray-900">
                    <Stethoscope size={18} className="text-[#0B7A3F]" />
                    <h4 className="font-bold text-sm">AI Diagnozi:</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {rec.diagnosis}
                  </p>
                  <div className="mt-3 inline-block bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-sm font-bold border border-green-200">
                    💡 Tavsiya: {rec.cropSuggestion}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-gray-900">
                    <Activity size={18} className="text-blue-600" />
                    <h4 className="font-bold text-sm">Zudlik bilan bajariladigan ishlar:</h4>
                  </div>
                  <div className="space-y-2">
                    {rec.actionSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-white/50 p-2 rounded-lg border border-white">
                        <CheckCircle2 size={18} className="text-[#0B7A3F] mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-semibold text-gray-800">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0B7A3F] to-emerald-600 rounded-xl p-4 flex items-center gap-3 text-white shadow-md">
                  <div className="bg-white/20 p-2 rounded-full">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-green-100 uppercase tracking-wide mb-0.5">Kutilayotgan natija</p>
                    <p className="text-sm font-bold">{rec.expectedYieldImpact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
}
