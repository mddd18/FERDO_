import { Navigation } from '../components/Navigation';
import { 
  Sparkles, AlertTriangle, Activity, TrendingUp, 
  CheckCircle2, BrainCircuit, Droplets, MessageSquare, ChevronRight
} from 'lucide-react';
import { aiRecommendations } from '../data/mockData';

export function AIRecommendations() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] pb-28 font-sans">
      
      {/* 1. AI PREMIUM HEADER (Neyrotarmoq uslubi) */}
      <div className="bg-gradient-to-br from-gray-900 via-emerald-950 to-green-900 pt-10 pb-8 px-6 shadow-2xl rounded-b-[40px] relative overflow-hidden">
        
        {/* Glowing / Pulse effektlari (AI ishlayotganini bildiradi) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400 opacity-10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/20 p-2.5 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
              <BrainCircuit size={28} className="text-emerald-400" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">AI Agronom</h1>
              <p className="text-emerald-200/80 text-sm font-medium mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Tizim faol
              </p>
            </div>
          </div>
        </div>

        {/* AI qisqacha xulosasi */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 mt-4 text-emerald-50">
          <p className="text-sm font-medium leading-relaxed">
            "Oxirgi 24 soat ichida dalangizdagi 3 ta datchik ma'lumotlari tahlil qilindi. 1 ta kritik muammo aniqlandi."
          </p>
        </div>
      </div>

      <main className="px-5 mt-6 space-y-6">
        
        <div className="flex justify-between items-center px-1">
          <h2 className="text-sm font-extrabold text-gray-500 uppercase tracking-wider">Tezkor diagnozlar</h2>
        </div>

        {/* 2. DIAGNOSTIK KARTOCHKALAR (Premium Report) */}
        {aiRecommendations.map((rec, index) => (
          <div key={index} className="relative rounded-[32px] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group">
            
            {/* Xavf darajasiga qarab yon tomondagi rangli chiziq */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${rec.urgency === 'high' ? 'bg-rose-500' : 'bg-amber-500'}`}></div>

            {/* Sarlavha: Muammo */}
            <div className="flex items-start gap-3 mb-5 pl-2">
              <div className={`p-3 rounded-2xl shrink-0 shadow-lg ${rec.urgency === 'high' ? 'bg-rose-50 text-rose-600 shadow-rose-500/20 border border-rose-100' : 'bg-amber-50 text-amber-600 shadow-amber-500/20 border border-amber-100'}`}>
                <AlertTriangle size={24} strokeWidth={2} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                  {rec.sensorId}
                </span>
                <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                  {rec.issue}
                </h3>
              </div>
            </div>

            {/* AI Xulosasi (Glass effect ichida) */}
            <div className="bg-[#F8FAFC] rounded-[24px] p-4 border border-gray-100/50 mb-5 pl-2">
              <div className="flex items-center gap-2 mb-2">
                <Activity size={16} className="text-emerald-600" />
                <h4 className="font-bold text-sm text-gray-800">Tahlil xulosasi</h4>
              </div>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                {rec.diagnosis}
              </p>
              
              {/* Tavsiya qilingan ekin */}
              <div className="mt-4 bg-emerald-50 border border-emerald-100 p-3 rounded-xl flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-emerald-800">
                  {rec.cropSuggestion}
                </p>
              </div>
            </div>

            {/* Qadam-ba-qadam choralar */}
            <div className="mb-5 pl-2">
              <div className="flex items-center gap-2 mb-3">
                <Droplets size={16} className="text-blue-500" />
                <h4 className="font-bold text-sm text-gray-800">Qilinishi kerak bo'lgan ishlar:</h4>
              </div>
              <div className="space-y-2.5">
                {rec.actionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-2 rounded-xl">
                    <div className="mt-0.5 bg-green-100 rounded-full p-0.5">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kutilayotgan Natija (Highlight) */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-[20px] p-4 flex items-center gap-4 text-white shadow-lg shadow-green-500/20">
              <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest mb-0.5">Natija</p>
                <p className="text-sm font-black tracking-wide">{rec.expectedYieldImpact}</p>
              </div>
            </div>

          </div>
        ))}

        {/* 3. AI BILAN CHAT (Yangi UX ishora) */}
        <button className="w-full mt-2 bg-white border border-gray-200 hover:border-emerald-500 p-4 rounded-[28px] shadow-sm flex items-center justify-between group transition-all active:scale-[0.98]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-50 group-hover:bg-emerald-50 rounded-2xl flex items-center justify-center transition-colors">
              <MessageSquare size={22} className="text-gray-400 group-hover:text-emerald-600" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-extrabold text-gray-900">AI ga savol berish</h4>
              <p className="text-xs font-medium text-gray-500 mt-0.5">Ovozli yoki matnli xabar</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-300 group-hover:text-emerald-500 transition-colors" />
        </button>

      </main>

      <Navigation />
    </div>
  );
}
