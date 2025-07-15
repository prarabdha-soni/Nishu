import React, { useState } from 'react';
import { Upload, X, Info } from 'lucide-react';

const PreferencesPage = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [formData, setFormData] = useState({
    firstName: 'Prarabdha',
    lastName: 'Soni',
    email: 'prarabdha21@gmail.com',
    phone: '+91 81188-98113',
    city: '',
    country: 'Select option',
    summary: '',
    school: 'IIT Guwahati',
    degree: 'Bachelor of Technology',
    startYear: '',
    endYear: ''
  });

  const tabs = [
    { id: 'preferences', label: 'Preferences' },
    { id: 'personal', label: 'Personal information' },
    { id: 'resume', label: 'Resume' },
    { id: 'account', label: 'Account' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resume Tab Content */}
        {activeTab === 'resume' && (
          <div className="space-y-8">
            {/* Resume Upload Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Resume</h2>
                  <p className="text-gray-600 mb-6">
                    This will be shown to companies to find you opportunities
                  </p>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload resume</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Personal Information Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center space-x-1 text-sm font-medium text-gray-700 mb-2">
                    <span>Email</span>
                    <Info className="w-4 h-4 text-gray-400" />
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                      <span className="text-lg">🇮🇳</span>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="Select option">Select option</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Summary
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                  placeholder="Profile Summary"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>

              {/* Education Entry */}
              <div className="border border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Bachelor of Technology from IIT Guwahati
                  </h4>
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                    <span className="text-sm">Remove</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* School */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School
                    </label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => handleInputChange('school', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Degree */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={formData.degree}
                      onChange={(e) => handleInputChange('degree', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Start Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start year
                    </label>
                    <input
                      type="text"
                      value={formData.startYear}
                      onChange={(e) => handleInputChange('startYear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* End Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End year
                    </label>
                    <input
                      type="text"
                      value={formData.endYear}
                      onChange={(e) => handleInputChange('endYear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Tab Placeholders */}
        {activeTab !== 'resume' && (
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h3>
              <p className="text-gray-600">
                This section is coming soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreferencesPage;