import React from 'react';
import { ArrowLeft, Upload, Info } from 'lucide-react';

interface JobDetailsPageProps {
  job: any;
  onBack: () => void;
  onApply: () => void;
}

const JobDetailsPage: React.FC<JobDetailsPageProps> = ({ job, onBack, onApply }) => {
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
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {job?.title}
          </h1>
          <div className="text-xl font-semibold text-gray-900 mb-2">
            {job?.salaryRange}
          </div>
          <div className="flex items-center space-x-4 text-gray-600 mb-6">
            <span>{job?.jobType}</span>
            <span>•</span>
            <span>{job?.company}</span>
          </div>
          {/* About the Role */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About the Role
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                {/* Placeholder description */}
                This is a sample job description for {job?.title} at {job?.company}. Add your own details here.
              </p>
            </div>
          </div>
          <button
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
            onClick={onApply}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;