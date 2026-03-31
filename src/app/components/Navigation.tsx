import { NavLink } from 'react-router';
import { Home, Map, BriefcaseMedical, Headset, LayoutGrid } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Asosiy' },
    { to: '/maydon', icon: Map, label: 'Maydon' },
    { to: '/agro-apteka', icon: BriefcaseMedical, label: 'Agro apteka' },
    { to: '/ai-yordamchi', icon: Headset, label: 'AI yordamchi' }, // Shu yer o'zgardi
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
                `flex items-center justify-center gap-2 py-2 px-3.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-green-50' 
                    : 'hover:bg-gray-50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon 
                    size={24} 
                    strokeWidth={isActive ? 2.5 : 2} 
                    className={isActive ? "text-[#0B7A3F]" : "text-gray-800"} 
                  />
                  {isActive && (
                    <span className="text-sm font-semibold text-[#0B7A3F] whitespace-nowrap">
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
