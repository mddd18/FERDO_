import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard'; // Asosiy sahifa (1-rasmdagi bosh sahifa yoki Datchiklar)
import { Field } from './pages/Field';         // Yangi yaratilgan Maydon sahifasi
import { AgroApteka } from './pages/AgroApteka'; // Yangi yaratilgan Do'kon sahifasi
import { AIRecommendations } from './pages/AIRecommendations'; // rAls sahifasi
import { Profile } from './pages/Profile';     // Boshqa sahifasi

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard, 
  },
  {
    path: '/maydon',
    Component: Field, // Maydon bo'limiga yangi sahifa ulandi
  },
  {
    path: '/agro-apteka',
    Component: AgroApteka, // Apteka bo'limiga yangi sahifa ulandi
  },
  {
    path: '/rals',
    Component: AIRecommendations,
  },
  {
    path: '/boshqa',
    Component: Profile,
  },
]);
