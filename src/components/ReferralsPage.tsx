import React, { useState } from 'react';
import { Search, Briefcase } from 'lucide-react';

const ReferralsPage = () => {
  const [activeFilter, setActiveFilter] = useState('newest');

  const stats = [
    {
      label: 'Total referrals',
      value: '0',
    },
    {
      label: 'Total earning potential',
      value: '$0',
    },
    {
      label: 'Total earned',
      value: '$0',
    },
    {
      label: 'Next payment: N/A',
      value: '$0',
    },
  ];

  const filters = [
    { id: 'newest', label: 'Newest', icon: '🕐' },
    { id: 'most-pay', label: 'Most pay', icon: '💰' },
    { id: 'oldest', label: 'Oldest', icon: '🕒' },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">My referrals</h1>
          <p className="text-gray-600">Track your referral earnings and progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-purple-50 border-purple-200 text-purple-700'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm">{filter.icon}</span>
                <span className="font-medium">{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-lg border border-gray-200 p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              You don't have any applications yet
            </h3>
            <p className="text-gray-600">
              All your applications will be visible here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsPage;