// Mock data for Ferdo agricultural platform

export interface Sensor {
  id: string;
  name: string;
  moisture: number; // %
  temperature: number; // °C
  conductivity: number; // µS/cm
  status: 'good' | 'warning' | 'danger';
  x: number; // position on map
  y: number; // position on map
  battery: number; // %
}

export interface WeatherData {
  temperature: number;
  precipitation: number;
  condition: string;
  icon: string;
}

export interface AIRecommendation {
  sensorId: string;
  sensorName: string;
  issue: string;
  recommendation: string;
  expectedYield: number;
  cropSuggestion: string;
}

export interface Alert {
  id: string;
  type: 'danger' | 'warning';
  message: string;
  sensorId: string;
  timestamp: Date;
}

export interface MarketListing {
  id: string;
  crop: string;
  quantity: number; // tons
  price: number; // per ton
  location: string;
  status: 'pending' | 'active' | 'sold';
}

export interface Buyer {
  id: string;
  name: string;
  type: 'store' | 'collection_point' | 'direct';
  distance: number; // km
  rating: number;
  phone: string;
}

export const sensors: Sensor[] = [
  {
    id: 'SMTC-1',
    name: '1-Sektor',
    moisture: 42,
    temperature: 24,
    conductivity: 312,
    status: 'good',
    x: 25,
    y: 30,
    battery: 85,
  },
  {
    id: 'SMTC-2',
    name: '2-Sektor',
    moisture: 38,
    temperature: 26,
    conductivity: 597,
    status: 'warning',
    x: 60,
    y: 35,
    battery: 72,
  },
  {
    id: 'SMTC-3',
    name: '3-Sektor',
    moisture: 8,
    temperature: 28,
    conductivity: 445,
    status: 'danger',
    x: 40,
    y: 65,
    battery: 91,
  },
  {
    id: 'SMTC-4',
    name: '4-Sektor',
    moisture: 45,
    temperature: 23,
    conductivity: 278,
    status: 'good',
    x: 75,
    y: 60,
    battery: 68,
  },
];

export const weather: WeatherData = {
  temperature: 25,
  precipitation: 15,
  condition: 'Qisman bulutli',
  icon: 'cloud-sun',
};

export const aiRecommendations: AIRecommendation[] = [
  {
    sensorId: 'SMTC-2',
    sensorName: '2-Sektor',
    issue: "Sho'rlanish darajasi yuqori (597 µS/cm)",
    recommendation: 'Sizning SMTC-2 datchigingiz joylashgan hududda sho\'rlanish darajasi yuqori (597 µS/cm). Bu yerga paxta o\'rniga Oq jo\'xori yoki Beda ekish orqali hosildorlikni 25% gacha saqlab qolishingiz mumkin.',
    expectedYield: 3.2,
    cropSuggestion: "Oq jo'xori yoki Beda",
  },
  {
    sensorId: 'SMTC-3',
    sensorName: '3-Sektor',
    issue: 'Namlik haddan tashqari past (8%)',
    recommendation: '3-sektorda tuproq namligi kritik darajada past. Darhol sug\'orish boshlang. Namlikni 35-40% gacha ko\'tarish tavsiya etiladi.',
    expectedYield: 1.8,
    cropSuggestion: "Sug'orishdan keyin Bug'doy",
  },
];

export const alerts: Alert[] = [
  {
    id: '1',
    type: 'danger',
    message: "Diqqat! 3-sektorda namlik 8% gacha tushib ketdi. Zudlik bilan sug'orishni boshlang.",
    sensorId: 'SMTC-3',
    timestamp: new Date(2026, 2, 23, 8, 30),
  },
  {
    id: '2',
    type: 'warning',
    message: "2-sektorda sho'rlanish yuqori. Tuz chidamli ekinlarni tanlash tavsiya etiladi.",
    sensorId: 'SMTC-2',
    timestamp: new Date(2026, 2, 23, 7, 15),
  },
  {
    id: '3',
    type: 'warning',
    message: 'SMTC-4 datchigining batareyasi 70% dan past tushdi. Almashtirishni rejalashtiring.',
    sensorId: 'SMTC-4',
    timestamp: new Date(2026, 2, 22, 14, 45),
  },
];

export const marketListings: MarketListing[] = [
  {
    id: '1',
    crop: 'Bug\'doy',
    quantity: 15,
    price: 2500000,
    location: "1-Sektor",
    status: 'active',
  },
  {
    id: '2',
    crop: 'Paxta',
    quantity: 8,
    price: 3200000,
    location: "4-Sektor",
    status: 'pending',
  },
];

export const buyers: Buyer[] = [
  {
    id: '1',
    name: 'Farg\'ona Don Mahsulotlari',
    type: 'collection_point',
    distance: 12,
    rating: 4.8,
    phone: '+998 91 234 56 78',
  },
  {
    id: '2',
    name: 'Mega Planet Supermarket',
    type: 'store',
    distance: 25,
    rating: 4.5,
    phone: '+998 93 765 43 21',
  },
  {
    id: '3',
    name: 'Hamkorbank Agro',
    type: 'direct',
    distance: 8,
    rating: 4.9,
    phone: '+998 95 123 45 67',
  },
  {
    id: '4',
    name: 'Karvon Bozor',
    type: 'store',
    distance: 18,
    rating: 4.3,
    phone: '+998 97 888 99 00',
  },
];

// Historical data for charts (last 7 days)
export const historicalData = [
  { day: 'Dush', moisture: 42, temperature: 22, conductivity: 310 },
  { day: 'Sesh', moisture: 40, temperature: 23, conductivity: 315 },
  { day: 'Chor', moisture: 38, temperature: 24, conductivity: 320 },
  { day: 'Pay', moisture: 35, temperature: 25, conductivity: 325 },
  { day: 'Juma', moisture: 32, temperature: 26, conductivity: 330 },
  { day: 'Shan', moisture: 28, temperature: 27, conductivity: 340 },
  { day: 'Yak', moisture: 25, temperature: 25, conductivity: 335 },
];
