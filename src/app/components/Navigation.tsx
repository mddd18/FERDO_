import { NavLink } from 'react-router';
import { Home, Map, ShoppingBag, Sparkles, User } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Asosiy' },
    { to: '/maydon', icon: Map, label: 'Maydon' },
    { to: '/savdo', icon: ShoppingBag, label: 'Savdo' },
    { to: '/ai-yordamchi', icon: Sparkles, label: 'AI' }, // AI uchun maxsus icon
    { to: '/boshqa', icon: User, label: 'Profil' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[999] px-4">
      {/* Floating Glassmorphism Container */}
      <nav className="mx-auto max-w-md bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-2 py-2 flex justify-between items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ease-out ${
                isActive 
                  ? 'bg-gradient-to-tr from-green-500 to-emerald-400 shadow-md shadow-green-500/30 scale-105' 
                  : 'hover:bg-gray-100/50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon 
                  size={22} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  className={`transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`} 
                />
                <span className={`text-[10px] mt-1 font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`}>
                  {item.label}
                </span>
                
                {/* Active holati uchun kichik indikator (nuqta) */}
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-green-500"></span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
