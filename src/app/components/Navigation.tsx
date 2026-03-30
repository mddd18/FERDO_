import { NavLink } from 'react-router';
import { Home, Brain, ShoppingCart, BarChart3 } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Dalarim' },
    { to: '/ai-tavsiyalar', icon: Brain, label: 'AI Tavsiya' },
    { to: '/bozor', icon: ShoppingCart, label: 'Savdo' },
    { to: '/analitika', icon: BarChart3, label: 'Statistika' },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">F</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Ferdo</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-inset-bottom">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-lg transition-colors min-w-[70px] ${
                  isActive
                    ? 'text-green-600'
                    : 'text-gray-600'
                }`
              }
            >
              <item.icon size={24} strokeWidth={2.5} />
              <span className="text-xs font-medium">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}