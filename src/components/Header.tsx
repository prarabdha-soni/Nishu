import React from 'react';
import { Search, Plus, User, LogOut, Briefcase } from 'lucide-react';
import openaiLogo from '../assets/openai.png';

interface HeaderProps {
  user?: any;
  onSignOut?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onSignOut }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-2 sm:px-6 py-3 sm:py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Left: Logo and Nishu */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <img src={openaiLogo} alt="Logo" className="w-8 h-8 rounded-lg object-contain bg-white" />
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Nishu</h1>
        </div>
        {/* Center: Premium Jobs tagline */}
        <div className="flex-1 flex justify-center mb-2 sm:mb-0">
          <span className="block text-base sm:text-2xl text-black text-center">Premium Jobs. Top 1% Compensation. Powered by AI.</span>
        </div>
        {/* Right: Search, buttons, user */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-8 pr-2 py-1 w-28 sm:pl-10 sm:pr-3 sm:py-1.5 sm:w-48 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-xs sm:text-sm"
            />
          </div>
          <button className="border border-purple-600 text-purple-700 hover:bg-purple-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 transition-colors font-medium text-xs sm:text-base">
            <Briefcase className="w-4 h-4" />
            <span>Company Login</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 transition-colors text-xs sm:text-base">
            <Plus className="w-4 h-4" />
            <span>Refer & earn</span>
          </button>
          {/* User avatar at far right */}
          <div className="ml-1 sm:ml-2">
            {user?.picture ? (
              <img src={user.picture} alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow" />
            ) : (
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;