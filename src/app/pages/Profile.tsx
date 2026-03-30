import { Navigation } from '../components/Navigation';
import { ChevronRight, User, ShoppingCart, Sparkles, Sprout, Bug, Heart } from 'lucide-react';

export function Profile() {
  const menuItems = [
    { icon: User, label: "Shaxsiy ma'lumotlar" },
    { icon: ShoppingCart, label: "Mening buyurtmalarim" },
    { icon: Sparkles, label: "Premium" },
    { icon: Sprout, label: "O'simliklar" },
    { icon: Bug, label: "Kasalliklar" },
    { icon: Heart, label: "Foydali" },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Header */}
      <div className="pt-6 pb-4 px-6">
        <h1 className="text-xl font-bold text-gray-900">Boshqa</h1>
      </div>

      <main className="px-4 space-y-6">
        {/* User Info */}
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl font-bold text-gray-700">
            MA
          </div>
          <h2 className="text-lg font-bold text-gray-900">Madaminov Ulug'bek Baxadirovich</h2>
        </div>

        {/* Menu List */}
        <div className="space-y-3 mt-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 bg-white rounded-2xl active:bg-gray-50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-4">
                <item.icon size={22} className="text-gray-800" strokeWidth={1.5} />
                <span className="text-base font-medium text-gray-900">{item.label}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
