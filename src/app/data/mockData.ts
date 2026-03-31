export interface Sensor {
  id: string;
  name: string;
  cropType: string;
  moisture: number; // %
  temperature: number; // °C
  conductivity: number; // µS/cm
  phLevel: number; // 0-14 (Kislotalilik)
  npk: { n: number; p: number; k: number }; // mg/kg (Azot, Fosfor, Kaliy)
  battery: number; // %
  status: 'good' | 'warning' | 'danger';
  lastUpdated: string;
}

export interface AIRecommendation {
  sensorId: string;
  issue: string;
  urgency: 'high' | 'medium' | 'low';
  diagnosis: string;
  cropSuggestion: string;
  actionSteps: string[];
  expectedYieldImpact: string;
}

// ==========================================
// 1. PRO DATCHIKLAR VA MAYDON MA'LUMOTLARI
// ==========================================
export const sensors: Sensor[] = [
  {
    id: '24e124126f356220',
    name: 'SMTC-1 (Shimoliy blok)',
    cropType: "Intensiv Bug'doy",
    temperature: 16.2,
    moisture: 24.68,
    conductivity: 1057,
    phLevel: 6.8, // Ideal
    npk: { n: 45, p: 30, k: 120 },
    battery: 88,
    status: 'good',
    lastUpdated: 'Bugun, 14:15',
  },
  {
    id: '24e124126f350492',
    name: 'SMTC-3 (Sho\'rxok hudud)',
    cropType: "Makkajo'xori",
    temperature: 15.7,
    moisture: 34.37,
    conductivity: 2991, // Juda yuqori
    phLevel: 8.2, // Ishqoriy
    npk: { n: 15, p: 10, k: 40 }, // Ozuqa yetishmaydi
    battery: 42,
    status: 'danger',
    lastUpdated: 'Bugun, 14:14',
  },
];

// ==========================================
// 2. AI AGRONOM XULOSALARI
// ==========================================
export const aiRecommendations: AIRecommendation[] = [
  {
    sensorId: 'SMTC-3 (Sho\'rxok hudud)',
    issue: "Tuz ionlarining kritik konsentratsiyasi (2991 µS/cm) va Azot (N) tanqisligi",
    urgency: 'high',
    diagnosis: "Tuproqda natriy tuzlarining to'planishi va pH (8.2) darajasining yuqoriligi o'simlikning ozuqa moddalarni o'zlashtirishini to'sib qo'ymoqda. Azot miqdori normadan 60% ga past.",
    cropSuggestion: "Hozirgi sharoitda faqat sho'rga chidamli beda yoki oq jo'xori ekish mumkin.",
    actionSteps: [
      "1. Yerni zudlik bilan chuchuk suv yordamida chuqur yuvish (gektariga 3000 m³).",
      "2. Tuproq ph darajasini tushirish uchun gips (kalsiy sulfat) solish.",
      "3. Yuvishdan so'ng gektariga 150 kg ammiakli selitra (Azot) o'g'itini kiritish."
    ],
    expectedYieldImpact: "Hosildorlikni +40% gacha saqlab qolish imkonini beradi.",
  }
];

// ==========================================
// 3. B2B SAVDO (PRO MARKETPLACE)
// ==========================================
export const marketListings = [
  {
    id: '1',
    crop: "Bug'doy (Grom navi, 3-sinf)",
    quality: "Oqsil: 14% | Kleykovina: 26% | Namlik: 12%", // Pro xaridorlar shunga qaraydi
    location: "Samarqand vil., Jomboy tumani",
    status: 'active',
    quantity: 150, // 150 tonna
    price: 3200000, // 1 tonnasi 3.2 mln
  }
];

export const buyers = [
  {
    id: 'b1',
    name: "AgroZamin B2B Eksport",
    distance: 12.5,
    phone: "+998 90 123 45 67",
    rating: 4.9,
    type: 'collection_point',
    requirements: "Faqat 1 va 2-sinf, kleykovina >28%",
  }
];
