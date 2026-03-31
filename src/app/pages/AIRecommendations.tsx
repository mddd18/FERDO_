import { Navigation } from '../components/Navigation';
import { Sparkles, AlertTriangle, Stethoscope, Activity, TrendingUp, CheckCircle2 } from 'lucide-react';
import { aiRecommendations } from '../data/mockData';

export function AIRecommendations() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header - rAls so'zi butunlay olib tashlandi */}
      <div className="bg-[#0B7A3F] pt-8 pb-6 px-6 rounded-b-3xl shadow-md text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">AI Yordamchi</h1>
        </div>
        <p className="text-green-50 text-sm opacity-90 leading-relaxed">
          Maydoningizdagi muammolarni aniqlovchi va hosildorlikni saqlab qolish uchun professional agronomik yechimlar.
        </p>
      </div>

      <main className="px-4 mt-6 space-y-6">
        <h2 className="text-lg font-bold text-gray-900 px-2">Tezkor tahlil xulosalari</h2>

        {aiRecommendations.map((rec, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {/* Muammo Sarlavhasi */}
            <div className={`p-5 border-b ${rec.urgency === 'high' ? 'bg-red-50 border-red-100' : 'bg-yellow-50 border-yellow-100'}`}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl mt-1 ${rec.urgency === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-gray-600 bg-white/60 px-2 py-1 rounded-lg">
                      {rec.sensorId}
                    </span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-lg ${rec.urgency === 'high' ? 'bg-red-600 text-white' : 'bg-yellow-500 text-white'}`}>
                      Kritik holat
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {rec.issue}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* Diagnoz */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-gray-900">
                  <Stethoscope size={18} className="text-[#0B7A3F]" />
                  <h4 className="font-bold">AI Diagnozi:</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                  {rec.diagnosis}
                </p>
              </div>

              {/* Yechim qadamlari */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-900">
                  <Activity size={18} className="text-blue-600" />
                  <h4 className="font-bold">Zudlik bilan bajariladigan ishlar:</h4>
                </div>
                <div className="space-y-2.5">
                  {rec.actionSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#0B7A3F] mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-gray-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hosildorlik prognozi */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-full text-green-700">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-0.5">Kutilayotgan natija</p>
                  <p className="text-sm font-bold text-gray-900">{rec.expectedYieldImpact}</p>
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
