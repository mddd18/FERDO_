import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { Field } from './pages/Field';
import { Marketplace } from './pages/Marketplace'; // <-- Savdo sahifasi chaqirildi
import { AIRecommendations } from './pages/AIRecommendations';
import { Profile } from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard, 
  },
  {
    path: '/maydon',
    Component: Field, 
  },
  {
    path: '/savdo', // <-- Yo'nalish o'zgardi
    Component: Marketplace, 
  },
  {
    path: '/ai-yordamchi',
    Component: AIRecommendations, 
  },
  {
    path: '/boshqa',
    Component: Profile, 
  },
]);
