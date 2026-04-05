import { Navigation } from '../components/Navigation';
import { 
  ChevronRight, User, ShoppingCart, Sparkles, 
  Sprout, Bug, Heart, LogOut, ShieldCheck
} from 'lucide-react';

export function Profile() {
  const accountItems = [
    { icon: User, label: "Shaxsiy ma'lumotlar", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: ShoppingCart, label: "Mening buyurtmalarim", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: Sparkles, label: "Premium ta'rif", color: "text-purple-600", bg: "bg-purple-50" },
  ];

  const agroItems = [
    { icon: Sprout, label: "O'simliklar bazasi", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Bug, label: "Kasalliklar va choralar", color: "text-rose-600", bg: "bg-rose-50" },
    { icon: Heart, label: "Foydali maslahatlar", color: "text-pink-600", bg: "bg-pink-50" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F6] pb-28 font-sans">
      
      {/* 1. PREMIUM HEADER VA AVATAR */}
      <div className="bg-gradient-to-br from-emerald-600 via-[#0B7A3F] to-green-900 pt-10 pb-24 px-6 rounded-b-[40px] shadow-lg relative">
        {/* Dekorativ orqa fon nurlari */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-10 left-0 w-32 h-32 bg-emerald-400 opacity-20 rounded-full blur-2xl"></div>
        
        <h1 className="text-2xl font-black text-white tracking-tight relative z-10 text-center">Profil</h1>
      </div>

      <main className="px-5 space-y-6">
        
        {/* Floating User Info Card */}
        <div className="mx-auto -mt-16 bg-white rounded-[32px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative z-20 border border-gray-100 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gradient-to-tr from-emerald-100 to-green-50 rounded-[28px] shadow-inner flex items-center justify-center mb-4 border-2 border-white ring-4 ring-gray-50 rotate-3 transition-transform hover:rotate-0">
            <span className="text-3xl font-black text-emerald-700">MA</span>
          </div>
          
          <h2 className="text-lg font-extrabold text-gray-900 leading-tight">
            Madaminov Ulug'bek <br /> Baxadirovich
          </h2>
          
          <div className="flex items-center gap-1.5 mt-2 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-100">
            <ShieldCheck size={16} /> Tasdiqlangan fermer
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-gray-100">
            <div>
              <p className="text-2xl font-black text-gray-900">3</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Maydonlar</p>
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">Pro</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Joriy ta'rif</p>
            </div>
          </div>
        </div>

        {/* 2. MENYU RO'YXATI (Gruppalangan) */}
        <div className="space-y-6 mt-4">
          
          {/* Birinchi guruh: Hisob sozlamalari */}
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3 px-2">Hisob va xaridlar</h3>
            <div className="bg-white rounded-[28px] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100">
              {accountItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl active:bg-gray-50 transition-colors group ${index !== accountItems.length - 1 ? 'border-b border-gray-50/80 mb-1' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${item.bg}`}>
                      <item.icon size={22} className={item.color} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-extrabold text-gray-800">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-300 group-hover:text-emerald-500 transition-colors mr-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Ikkinchi guruh: Agro Baza */}
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3 px-2">Agro Baza</h3>
            <div className="bg-white rounded-[28px] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100">
              {agroItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl active:bg-gray-50 transition-colors group ${index !== agroItems.length - 1 ? 'border-b border-gray-50/80 mb-1' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${item.bg}`}>
                      <item.icon size={22} className={item.color} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-extrabold text-gray-800">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-300 group-hover:text-emerald-500 transition-colors mr-1" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 3. TIZIMDAN CHIQISH */}
        <button className="w-full mt-6 flex items-center justify-center gap-2 py-4 bg-white rounded-[24px] text-rose-500 font-extrabold shadow-sm border border-rose-100 hover:bg-rose-50 transition-colors active:scale-[0.98]">
          <LogOut size={20} />
          Tizimdan chiqish
        </button>

      </main>

      <Navigation />
    </div>
  );
}
