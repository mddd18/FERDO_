import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { Field } from './pages/Field';
import { AgroApteka } from './pages/AgroApteka';
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
    path: '/agro-apteka',
    Component: AgroApteka, 
  },
  {
    path: '/ai-yordamchi', // Shu yer o'zgardi
    Component: AIRecommendations, 
  },
  {
    path: '/boshqa',
    Component: Profile, 
  },
]);
