import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard'; // Asosiy
// Boshqa sahifalarni ham shunday import qilasiz (ularni yaratib chiqish kerak)
import { Profile } from './pages/Profile'; // Boshqa
import { AIRecommendations } from './pages/AIRecommendations'; // rAls

export const router = createBrowserRouter([
  { path: '/', Component: Dashboard },
  { path: '/maydon', Component: Dashboard }, // Hozircha vaqtincha
  { path: '/agro-apteka', Component: Dashboard }, // Hozircha vaqtincha
  { path: '/rals', Component: AIRecommendations },
  { path: '/boshqa', Component: Profile },
]);
