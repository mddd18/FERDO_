import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { AIRecommendations } from './pages/AIRecommendations';
import { Marketplace } from './pages/Marketplace';
import { Analytics } from './pages/Analytics';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard,
  },
  {
    path: '/ai-tavsiyalar',
    Component: AIRecommendations,
  },
  {
    path: '/bozor',
    Component: Marketplace,
  },
  {
    path: '/analitika',
    Component: Analytics,
  },
]);
