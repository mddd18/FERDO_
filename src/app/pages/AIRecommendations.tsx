import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Bot, Sparkles, Loader2, Target } from 'lucide-react';
import { sensors } from '../data/mockData';
// Gemini AI to'g'ridan-to'g'ri shu yerga chaqiriladi
import { GoogleGenerativeAI } from "@google/generative-ai";

export function AIRecommendations() {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAI = async () => {
    setIsLoading(true);
    
    try {
      // 1. API kalit to'g'ridan-to'g'ri kiritildi
      const API_KEY = "AIzaSyD179160qwFGYHOTADERw9gP02MqjmFTBk";

      // 2. Gemini AI ni ishga tushiramiz
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Sen 'FERDO' Agri 4.0 startapining Bosh AI Agronomisan. Sening vazifang - fermerning barcha 4 ta maydonidagi datchik ma'lumotlarini birdaniga tahlil qilib, umumiy va aniq hisobot berish.
        Qoidalarga qat'iy rioya qil:
        1. Har bir maydon (kontur) uchun qisqacha holatini aytib o't (Namlik, Harorat, EC, pH qanaqa).
        2. Yaxshi holatdagi maydonlarni (SMTC-1, SMTC-4) ham maqtab, ishni shunday davom ettirishni ayt.
        3. Agar EC (sho'rlanish) 2000 dan yuqori va pH 8.0 atrofida bo'lsa (Masalan SMTC-3 va SMTC-2 da), zudlik bilan yerni yuvish va gips solishni buyur. NPK dagi Azot (N) past bo'lsa, o'g'it berishni ayt.
        
        Javob tuzilishi:
        - 📝 Umumiy xulosa (Fermaning joriy holati).
        - 📊 Har bir maydon bo'yicha tahlil.
        - 🚨 Zudlik bilan ko'rilishi kerak bo'lgan choralar (faqat muammoli hududlar uchun).
        Javobni o'zbek tilida, professional lekin tushunarli qilib yoz.`
      });

      // 3. Datchik ma'lumotlarini AI ga matn ko'rinishida tayyorlaymiz
      const sensorsText = sensors.map(s => 
        `- ${s.name} (${s.cropType}): Holati - ${s.status}, Harorat: ${s.temperature}°C, Namlik: ${s.moisture}%, EC (Tuz): ${s.conductivity} µS/cm, pH: ${s.phLevel}, NPK (N:${s.npk.n}, P:${s.npk.p}, K:${s.npk.k})`
      ).join('\n');

      const prompt = `Fermerdan quyidagi 4 ta maydon bo'yicha bugungi datchik ma'lumotlari keldi:\n\n${sensorsText}\n\nIltimos, ushbu 4 ta maydonni to'liq tahlil qilib, kompleks AI diagnozni yozib ber.`;

      // 4. Javobni olamiz
      const result = await model.generateContent(prompt);
      setAiResponse(result.response.text());

    } catch (error) {
      console.error("AI bilan ishlashda xato:", error);
      setAiResponse("AI serverlari bilan bog'lanishda xatolik yuz berdi. Iltimos, internetingizni tekshiring.");
    } finally {
      setIsLoading(false);
    }
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
            <p className="text-blue-100 font-medium text-sm mt-1">Kompleks dala tahlili</p>
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

          {/* Dinamik Datchiklar Grid (4 ta maydon qisqacha ko'rinishi) */}
          <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
            {sensors.map((sensor) => (
              <div key={sensor.id} className={`p-3 rounded-2xl border ${sensor.status === 'danger' ? 'bg-rose-50 border-rose-100' : sensor.status === 'warning' ? 'bg-amber-50 border-amber-100' : 'bg-emerald-50 border-emerald-100'}`}>
                 <h4 className="text-[11px] font-extrabold text-gray-800">{sensor.name}</h4>
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
              <><Loader2 size={20} className="animate-spin" /> Barcha maydonlar tahlil qilinmoqda...</>
            ) : (
              <><Sparkles size={20} /> AI Kompleks Tahlilni Boshlash</>
            )}
          </button>
        </div>

        {/* AI JAVOBI */}
        {aiResponse && (
          <div className="bg-white rounded-[28px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-indigo-50 relative">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-50 pb-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                <Bot size={20} className="text-indigo-600" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900">FERDO AI Umumiy Xulosasi</h3>
            </div>
            
            <div className="prose prose-sm prose-indigo max-w-none font-medium text-gray-700 leading-relaxed whitespace-pre-wrap">
              {aiResponse}
            </div>
          </div>
        )}

      </main>

      <Navigation />
    </div>
  );
}
