import React from 'react';
import { Search, Home, Users, CreditCard, Settings } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user?: { email?: string; picture?: string };
  onSignOut?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, user, onSignOut }) => {
  const menuItems = [
    { icon: Search, label: 'Explore', id: 'explore' },
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Users, label: 'Referrals', id: 'referrals' },
    { icon: CreditCard, label: 'Payments', id: 'payments' },
    { icon: Settings, label: 'Preferences', id: 'preferences' },
  ];
  const [profileOpen, setProfileOpen] = React.useState(false);
  return (
    <aside className="w-full sm:w-64 bg-white border-r border-gray-200 h-auto sm:h-screen flex flex-col justify-between overflow-hidden">
      <nav className="p-2 sm:p-4 flex-1 min-h-0 overflow-auto">
        <ul className="space-y-1 sm:space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* User Profile at bottom */}
      <div className="relative p-2 sm:p-4 pb-2 flex flex-col items-center hidden sm:flex">
        <button
          className="w-14 h-14 rounded-full overflow-hidden focus:outline-none"
          onClick={() => setProfileOpen((v) => !v)}
        >
          {user?.picture ? (
            <img src={user.picture} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full object-cover" />
          )}
        </button>
        {profileOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-16 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
            <div className="px-4 py-2 text-xs text-gray-500">Signed in as</div>
            <div className="px-4 py-1 font-semibold text-black text-sm truncate">{user?.email || 'user@email.com'}</div>
            <hr className="my-1" />
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Settings</button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Contact support</button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-red-600" onClick={onSignOut}>Sign out</button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;