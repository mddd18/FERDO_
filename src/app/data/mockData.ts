export interface Sensor {
  id: string;
  name: string;
  cropType: string;
  moisture: number;
  temperature: number;
  conductivity: number;
  phLevel: number;
  npk: { n: number; p: number; k: number };
  battery: number;
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

export const sensors: Sensor[] = [
  {
    id: '24e124126f356220',
    name: 'SMTC-1 (Shimoliy blok)',
    cropType: "Intensiv Bug'doy",
    temperature: 16.2,
    moisture: 24.68,
    conductivity: 1057,
    phLevel: 6.8,
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
    conductivity: 2991,
    phLevel: 8.2,
    npk: { n: 15, p: 10, k: 40 },
    battery: 42,
    status: 'danger',
    lastUpdated: 'Bugun, 14:14',
  },
];

export const aiRecommendations: AIRecommendation[] = [
  {
    sensorId: 'SMTC-3 (Sho\'rxok hudud)',
    issue: "Tuz ionlarining kritik konsentratsiyasi (2991 µS/cm) va Azot (N) tanqisligi",
    urgency: 'high',
    diagnosis: "Tuproqda natriy tuzlarining to'planishi va pH (8.2) darajasining yuqoriligi o'simlikning ozuqa moddalarni o'zlashtirishini to'sib qo'ymoqda.",
    cropSuggestion: "Hozirgi sharoitda faqat sho'rga chidamli beda yoki oq jo'xori ekish mumkin.",
    actionSteps: [
      "1. Yerni zudlik bilan chuchuk suv yordamida chuqur yuvish (gektariga 3000 m³).",
      "2. Tuproq ph darajasini tushirish uchun gips (kalsiy sulfat) solish.",
      "3. Yuvishdan so'ng gektariga 150 kg ammiakli selitra (Azot) o'g'itini kiritish."
    ],
    expectedYieldImpact: "Hosildorlikni +40% gacha saqlab qolish imkonini beradi.",
  }
];

// Savdo bozori ma'lumotlari
export const marketListings = [
  {
    id: '1',
    crop: "Bug'doy (Grom navi, 3-sinf)",
    quality: "Oqsil: 14% | Kleykovina: 26% | Namlik: 12%",
    location: "Samarqand vil., Jomboy tumani",
    status: 'active',
    quantity: 150,
    price: 3200000, 
  },
  {
    id: '2',
    crop: "Sholi (Nukus-2 navi)", // Nukus qo'shildi
    quality: "Oliy nav | Namlik: 13.5%",
    location: "Qoraqalpog'iston Resp., Nukus shahri",
    status: 'active',
    quantity: 500, // 500 tonna
    price: 6500000, // 6.5 mln so'm
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
  },
  {
    id: 'b2',
    name: "Orol Bo'yi Don Mahsulotlari", // Nukus xaridori
    distance: 450,
    phone: "+998 93 111 22 33",
    rating: 4.8,
    type: 'store',
    requirements: "Nukus-2, Alanga va Lazer navli sholilar kerak. Eng kam hajm: 50 tonna.",
  }
];
