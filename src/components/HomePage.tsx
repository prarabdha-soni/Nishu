import React from 'react';
import { Monitor, Briefcase, HelpCircle, Settings } from 'lucide-react';

interface HomePageProps {
  user?: any;
}

const HomePage: React.FC<HomePageProps> = ({ user }) => {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome back, {user?.name || 'Prarabdha'}
          </h1>
          <p className="text-gray-600">Important tasks</p>
        </div>

        {/* Practice Interviews Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8 max-w-md">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice interviews</h3>
              <p className="text-gray-600 text-sm">
                Prepare for your next opportunity with 150+ live interviews ready to take
              </p>
            </div>
            <Monitor className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
            Start now
          </button>
        </div>

        {/* Tabs Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <button className="text-gray-600 hover:text-gray-900 pb-2 border-b-2 border-transparent">
                <span className="flex items-center space-x-2">
                  <span>Contracts</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">0</span>
                </span>
              </button>
              <button className="text-purple-600 pb-2 border-b-2 border-purple-600">
                <span className="flex items-center space-x-2">
                  <span>Applications</span>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">1</span>
                </span>
              </button>
              <button className="text-gray-600 hover:text-gray-900 pb-2 border-b-2 border-transparent">
                <span className="flex items-center space-x-2">
                  <span>Interviews</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">0</span>
                </span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <HelpCircle className="w-4 h-4" />
                <span>Support</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </div>
          </div>
          <div className="border-b border-gray-200 mt-2"></div>
        </div>

        {/* Application Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Software Engineer, Full Stack</h3>
                <div className="text-sm text-gray-600">
                  $255,000 - $405,000/year • Full time • Mercor
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Submitted 29 minutes ago</div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Submitted
              </span>
            </div>
          </div>
        </div>

        {/* Past Applications Section */}
        <div className="mt-8">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <span className="text-sm">▼</span>
            <span>Past applications (0)</span>
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;