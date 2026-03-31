export interface Sensor {
  id: string;
  name: string;
  moisture: number; // %
  temperature: number; // °C
  conductivity: number; // µS/cm
  status: 'good' | 'warning' | 'danger';
  lastUpdated: string;
}

export interface AIRecommendation {
  sensorId: string;
  issue: string;
  recommendation: string;
  cropSuggestion: string;
  action: string;
}

// Rasmdagi haqiqiy datchik ma'lumotlari
export const sensors: Sensor[] = [
  {
    id: '24e124126f356220',
    name: 'SMTC-1',
    temperature: 16.2,
    moisture: 24.68,
    conductivity: 1057,
    status: 'good',
    lastUpdated: '14:14:35',
  },
  {
    id: '24e124126f356667',
    name: 'SMTC-2',
    temperature: 15.8,
    moisture: 18.77,
    conductivity: 1470,
    status: 'warning',
    lastUpdated: '14:14:28',
  },
  {
    id: '24e124126f350492',
    name: 'SMTC-3',
    temperature: 15.7,
    moisture: 34.37,
    conductivity: 2991,
    status: 'danger',
    lastUpdated: '14:14:25',
  },
  {
    id: '24e124126f350564',
    name: 'SMTC-4',
    temperature: 16.2,
    moisture: 1.79,
    conductivity: 16,
    status: 'danger',
    lastUpdated: '20:51:12',
  },
];

// Datchiklardan olingan ma'lumotlarga asoslangan AI maslahatlari
export const aiRecommendations: AIRecommendation[] = [
  {
    sensorId: 'SMTC-3',
    issue: "Tuproq sho'rlanishi o'ta yuqori (2991 µS/cm)",
    recommendation: "Bu hududda bug'doy yoki g'o'za ekish hosildorlikni keskin tushirib yuboradi. Tuproqni yuvish yoki sho'rga chidamli ekinlar ekish zarur.",
    cropSuggestion: "Beda, Oq jo'xori yoki sho'rga chidamli arpa navlari",
    action: "Yerni chuchuk suv bilan yuvish",
  },
  {
    sensorId: 'SMTC-4',
    issue: "Tuproq namligi kritik darajada past (1.79%)",
    recommendation: "Ekinlarning ildiz tizimi qurib qolish xavfi ostida. Zudlik bilan chuqur sug'orish ishlarini olib borish kerak.",
    cropSuggestion: "Sug'orishdan so'ng ertapishar sabzavotlar",
    action: "Zudlik bilan sug'orish",
  },
];
