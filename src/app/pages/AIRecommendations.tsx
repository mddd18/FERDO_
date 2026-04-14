import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Bot, Sparkles, Loader2, Target, CheckCircle2 } from 'lucide-react';
import { sensors } from '../data/mockData';

export function AIRecommendations() {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // PRO DARAJADAGI LOKAL AI MANTIQ 
  const generateLocalAIResponse = () => {
    // Joriy sanani chiroyli formatda olish
    const date = new Date();
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`;

    return `**FERDO INTELLIGENCE: DALA AUDITI VA AGRO-TAVSIYA**
⏱ Tahlil vaqti: ${formattedDate}
📍 Obyekt: 4 ta hudud datchiklari tizimi
🛡 Status kodi: #ERR-7059 (Kritik sho'rlanish)

---

### 📊 1. UMUMIY MANZARA VA MOLIYAVIY XAVF PROGNOZI
Hozirgi vaqtda 4 ta maydonning ikkitasida (Intensiv Bug'doy va Beda) vegetatsiya jarayoni **100% barqaror**. 
Biroq, **3-Kontur (Makkajo'xori)** va **2-Kontur (Paxta)** maydonlarida tuproqning keskin degradatsiyasi kuzatilmoqda. 

⚠️ **Moliyaviy Xavf Analizi:** Makkajo'xori maydonida tuz ionlarining (EC) **7059 µS/cm** ga yetishi va pH darajasining ishqoriy (**8.2**) ekanligi sababli, agar keyingi 48 soat ichida chora ko'rilmasa, **hosilning 45-50% qismi (qariyb 35-40 mln so'mlik daromat) to'liq boy beriladi**. Yuqori tuz konsentratsiyasi o'simlik ildizini "qulflab", azot o'zlashtirilishini (N:15 gacha) tushirib yuborgan.

---

### 🛠 2. SHOSHILINCH AGROTEXNIK PROTOKOL
Hosilni saqlab qolish va tuproqni reabilitatsiya qilish uchun quyidagi 3 bosqichli "Qutqaruv amaliyoti"ni zudlik bilan boshlang:

**1-QADAM: Gidromelioratsiya (Zudlik bilan)**
* **Harakat:** 2 va 3-konturlarda kapital yuvish sug'orishini amalga oshirish.
* **Norma:** Gektariga 2500 - 3000 m³ hajmda toza, chuchuk suv berish.
* **Maqsad:** Zaharli natriy va xlor ionlarini ildiz qatlamidan pastki gorizontlarga haydash.

**2-QADAM: Kimyoviy melioratsiya (Yuvishdan keyin)**
* **Harakat:** Tuproqqa sof kalsiy sulfat (Gips) kiritish.
* **Norma:** Dastlabki bosqichda gektariga 500-700 kg.
* **Maqsad:** pH darajasini 8.2 dan 7.0 (Neytral) holatga qaytarish va ishqoriylikni sindirish.

**3-QADAM: Kompensatsion oziqlantirish (2-3 kundan so'ng)**
* **Harakat:** Ildiz orqali azotli o'g'it berish.
* **Norma:** Gektariga 150 kg ammiakli selitra kiritish.
* **Maqsad:** Stressga tushgan makkajo'xori va paxta nihollarining yashil massasini tezkor tiklash (Reanimatsiya).

*FERDO AI tizimi ushbu jarayonlarni 24/7 monitoring qilib boradi. Navbatdagi analiz yuvish jarayoni tugagach (tuproq namligi barqarorlashganda) taqdim etiladi.*`;
  };

  const handleAskAI = () => {
    setIsLoading(true);
    // Sun'iy taymerni 2 soniya qilamiz (xuddi katta ma'lumotlarni o'qiyotgandek)
    setTimeout(() => {
      const result = generateLocalAIResponse();
      setAiResponse(result);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] pb-28 font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 pt-10 pb-8 px-6 rounded-b-[40px] shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/30">
            <Bot size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">AI Agronom</h1>
            <p className="text-blue-100 font-medium text-sm mt-1">Kompleks dala tahlili (Pro)</p>
          </div>
        </div>
      </div>

      <main className="px-5 mt-6 space-y-6">
        
        {/* BARCHA MAYDONLAR TAHILILI KARTOCHKASI */}
        <div className="bg-white rounded-[28px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-indigo-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0"></div>
          
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Target size={20} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-gray-900">Umumiy Tahlil</h3>
              <p className="text-xs font-bold text-gray-500">Jami 4 ta hudud datchiklari tekshiruvda</p>
            </div>
          </div>

          {/* Dinamik Datchiklar Grid */}
          <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
            {sensors.map((sensor) => (
              <div key={sensor.id} className={`p-3 rounded-2xl border ${sensor.status === 'danger' ? 'bg-rose-50 border-rose-100' : sensor.status === 'warning' ? 'bg-amber-50 border-amber-100' : 'bg-emerald-50 border-emerald-100'}`}>
                 <div className="flex items-center justify-between mb-1">
                   <h4 className="text-[11px] font-extrabold text-gray-800">{sensor.name}</h4>
                   {sensor.status === 'good' && <CheckCircle2 size={12} className="text-emerald-500" />}
                 </div>
                 <p className="text-[9px] font-bold text-gray-500 mb-1">{sensor.cropType}</p>
                 <div className={`text-[10px] font-bold ${sensor.status === 'danger' ? 'text-rose-600' : sensor.status === 'warning' ? 'text-amber-600' : 'text-emerald-600'}`}>
                   EC: {sensor.conductivity} | pH: {sensor.phLevel}
                 </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleAskAI}
            disabled={isLoading}
            className="w-full relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {isLoading ? (
              <><Loader2 size={20} className="animate-spin" /> Neyrotarmoq tahlil qilmoqda...</>
            ) : (
              <><Sparkles size={20} /> AI Pro Tahlilni Boshlash</>
            )}
          </button>
        </div>

        {/* AI JAVOBI */}
        {aiResponse && (
          <div className="bg-white rounded-[28px] p-6 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-indigo-100 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-gray-900">FERDO Intelligence</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Premium hisobot</p>
              </div>
            </div>
            
            <div className="prose prose-sm prose-indigo max-w-none font-medium text-gray-700 leading-relaxed whitespace-pre-wrap marker:text-indigo-500 prose-hr:border-gray-100">
              {aiResponse}
            </div>
          </div>
        )}

      </main>

      <Navigation />
    </div>
  );
}
