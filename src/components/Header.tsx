import React from 'react';
import { Search, Plus, User, LogOut, Briefcase } from 'lucide-react';
import openaiLogo from '../assets/openai.png';

interface HeaderProps {
  user?: any;
  onSignOut?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onSignOut }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Nishu */}
        <div className="flex items-center space-x-2">
          <img src={openaiLogo} alt="Logo" className="w-8 h-8 rounded-lg object-contain bg-white" />
          <h1 className="text-xl font-semibold text-gray-900">Nishu</h1>
        </div>
        {/* Center: Premium Jobs tagline */}
        <div className="flex-1 flex justify-center">
          <span className="block text-2xl text-black text-center">Premium Jobs. Top 1% Compensation. Powered by AI.</span>
        </div>
        {/* Right: Search, buttons, user */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-3 py-1.5 w-48 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
            />
          </div>
          <button className="border border-purple-600 text-purple-700 hover:bg-purple-50 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors font-medium">
            <Briefcase className="w-4 h-4" />
            <span>Company Login</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Refer & earn</span>
          </button>
          {/* User avatar at far right */}
          <div className="ml-2">
            {user?.picture ? (
              <img src={user.picture} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
            ) : (
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;