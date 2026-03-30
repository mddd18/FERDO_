import { NavLink } from 'react-router';
import { Home, Map as MapIcon, ShoppingBag, MessageCircle, LayoutGrid } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Asosiy' },
    { to: '/maydon', icon: MapIcon, label: 'Maydon' },
    { to: '/agro-apteka', icon: ShoppingBag, label: 'Agro apteka' },
    { to: '/rals', icon: MessageCircle, label: 'rAls' },
    { to: '/boshqa', icon: LayoutGrid, label: 'Boshqa' },
  ];

  return (
    <>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 pb-safe">
        <div className="flex justify-between items-center px-4 py-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-green-100/60 text-green-700' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon 
                    size={24} 
                    strokeWidth={isActive ? 2.5 : 2} 
                    className={isActive ? "text-green-700" : "text-gray-800"} 
                  />
                  {isActive && (
                    <span className="text-sm font-semibold text-green-700 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
