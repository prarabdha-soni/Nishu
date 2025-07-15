import React from 'react';
import { ArrowLeft, Upload, Info } from 'lucide-react';

interface JobDetailsPageProps {
  onBack: () => void;
}

const JobDetailsPage: React.FC<JobDetailsPageProps> = ({ onBack }) => {
  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to jobs</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Software Engineer, Full Stack
              </h1>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                $255,000 - $405,000 per year
              </div>
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <span>Full-time position</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <span>Remote</span>
                  <Info className="w-4 h-4" />
                </div>
              </div>

              {/* Company Info */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Posted by Mercor</div>
                  <div className="text-gray-600">mercor.com</div>
                </div>
              </div>

              {/* About the Applied AI Team */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  About the Applied AI Team
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    We bring OpenAI's technology to the world through products like ChatGPT and the OpenAI API.
                  </p>
                  <p>
                    We seek to learn from deployment and distribute the benefits of AI, while ensuring that this powerful 
                    tool is used responsibly and safely. Safety is more important to us than unfettered growth.
                  </p>
                </div>
              </div>

              {/* About the Role */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  About the Role
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    We are looking for a self-starter engineer who loves building new products in an iterative and fast-
                    moving environment. In this role, you will ...
                  </p>
                </div>
              </div>

              {/* Learn More Link */}
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
              <button className="w-full bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 mb-4">
                <Upload className="w-4 h-4" />
                <span>Upload resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-center space-x-4">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Upload resume
            </button>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Complete application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;